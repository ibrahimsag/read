import rough from 'roughjs';
import hsluv from 'hsluv';

import vec2 from './vec2.js';

let colors = {
  bright: hsluv.hsluvToHex([0, 0, 90]),
  sentence: hsluv.hsluvToHex([0, 0, 50]),
  dim: hsluv.hsluvToHex([0, 0, 30])
};

function makeRG (svgEl)
{
  const rsvg = rough.svg(svgEl);

  const roughopts = { roughness: 0.1, stroke: colors.dim, strokeWidth: 1 };

  function curve(vs, o)
  {
    return rsvg.generator.curve(vs, Object.assign(Object.assign({}, roughopts), o));
  }

  function polygon(vs, o)
  {
    return rsvg.generator.polygon(vs, Object.assign(Object.assign({}, roughopts), o));
  }

  function line(a, b, o)
  {
    return rsvg.generator.line(a[0], a[1], b[0], b[1], Object.assign(Object.assign({}, roughopts), o));
  }

  function circle(c, d, o)
  {
    return rsvg.generator.circle(c[0], c[1], d, Object.assign(Object.assign({}, roughopts), o));
  }

  function anglecurve(a, o, b)
  {
    let [d1, d2] = [a, b].map(x => vec2.sub(x, o)).map(d => vec2.scale(d, 20/vec2.len(d)));
    let dir = vec2.sub(d2, d1);
    let d = [0.3, 0.5, 0.7].map(l => vec2.add(d1, vec2.scale(dir, l)));
    let ps = [d1, ...d, d2].map(d => vec2.add(o, vec2.scale(d, 20/vec2.len(d))));
    return curve(ps, {strokeWidth: 10});
  }

  function angle(a, o, b)
  {
    return [anglecurve(a, o, b), line(o, a), line(o, b)];
  }

  function arc(c, a, b, o)
  {
    let ca = vec2.sub(a, c);
    let cb = vec2.sub(b, c);
    let d = vec2.len(ca);
    let uca = vec2.scale(ca, 1/d);
    let start = (Math.atan2(uca[1], uca[0]) + Math.PI*2) % (Math.PI * 2);
    let ucb = vec2.scale(cb, 1/d);
    let end = (Math.atan2(ucb[1], ucb[0]) + Math.PI*2) % (Math.PI*2);
    if(start > end)
      end += Math.PI * 2;
    return rsvg.generator.arc(c[0], c[1], d*2, d*2, start, end, false, Object.assign(Object.assign({}, roughopts), o));
  }

  function gnomon(c, d, e)
  {
    return arc(c, d, e, {strokeLineDash: [5, 4]});
  }

  function tick(pt)
  {
    let w = [0, 5];
    let a = vec2.sub(pt, w), b = vec2.add(pt, w);
    return line(a, b);
  }

  function makeHighlight(p, name, typ, arg1) {
    if(typ === 'point')
    {
      return [circle(p.points[name], 5, { strokeWidth: 2 })];
    }
    else if(typ == 'line')
    {
      return [line(p.points[name[0]], p.points[name[name.length-1]])];
    }
    else if(typ == 'arcc')
    {
      let c = arg1.trim();
      if(/[A-Z]/.test(c))
      {
        let center = p.points[c];
        return [arc(center, p.points[name[name.length-1]], p.points[name[0]])];
      }
      else
      {
        return undefined;
      }
    }
    else if(typ == 'arc')
    {
      let c = arg1.trim();
      if(/[A-Z]/.test(c))
      {
        let center = p.points[c];
        return [arc(center, p.points[name[0]], p.points[name[name.length-1]])];
      }
      else
      {
        return undefined;
      }
    }
    else if(typ == 'circle')
    {
      let c = arg1.trim();
      if(/[A-Z]/.test(c))
      {
        let center = p.points[c];
        let a = p.points[name[0]];
        return [circle(center, 2 * vec2.dist(center, a))];
      }
      else
      {
        return undefined;
      }
    }
    else if(typ == 'polygon')
    {
      let points = name.split('').map(l => p.points[l]);
      return [polygon(points)];
    }
    else if(typ == 'angle')
    {
      let [a, o, b] = name.split('').map(l => p.points[l]);
      return angle(a, o, b);
    }
    else if(typ == 'magnitude')
    {
      let i_begin, i_end;
      if(name.length == 1)
      {
        i_begin = p.indices[name[0]];
        i_end = p.indices[name[0] + 'e'];
      }
      else if(name.length > 1)
      {
        i_begin = p.indices[name[0]];
        i_end = p.indices[name[name.length-1]];
      }
      else
      {
        console.error('unknown magnitude');
      }

      if(i_begin > i_end)
        [i_begin, i_end] = [i_end, i_begin]

      let shapes = p.ticks.slice(i_begin, i_end+1).map(tick);
      shapes.push(line(p.ticks[i_begin], p.ticks[i_end]));

      return shapes;
    }
    else if(typ == 'given' && p.given && p.given[name])
    {
      return p.given[name]();
    }
    else
    {
      console.error('Unknown highlight: ', typ, name);
    }
  }
  return { tick, arc, gnomon, anglecurve, angle, curve, line, polygon, circle, makeHighlight, draw: rsvg.draw.bind(rsvg) }
}

function makeGround(rg, svg)
{
  let proxy = {};

  function draw(o, p)
  {

    let nearHighlights = [];
    let highlight = [];
    let figureIndex = 0;
    let lastSeenFigureIndex = 0;

    let proseEl = document.querySelector('#prose');
    proseEl.innerHTML = '';
    if(p.img)
    {
      let imgEl = document.createElement('img');
      imgEl.src = p.img;
      proseEl.appendChild(imgEl);
    }

    let titleEl = document.createElement('h3');
    titleEl.innerHTML = p.title;
    titleEl.style['color'] = colors.sentence;
    proseEl.appendChild(titleEl);

    let refCount = 0;
    p.prose.forEach(paragraphProse =>
    {
      let paragraphEl = document.createElement('p');
      let content = '';
      let isFocusParagraph = false;
      paragraphProse.forEach(sentenceProse =>
      {
        let isFocusSentence = false;;
        let sentenceMarks = [];
        let seenMarks = {};
        let sentenceWithoutRef = true;
        function highlightReference(m, name, typ, arg1)
        {

          let refEl = document.createElement('span');
          refEl.innerHTML = name;
          refEl.style['font-style'] = 'italic';
          refEl.dataset.ref = refCount;

          if(refCount == o)
          {
            isFocusSentence = true;
            refEl.style['color'] = colors.bright;
            figureIndex = lastSeenFigureIndex;

            highlight = [name, typ, arg1];
          }
          else
          {
            let mark = [name, typ, arg1];
            let hash = mark.toString();
            if(!seenMarks[hash])
            {
              sentenceMarks.push(mark);
              seenMarks[hash] = true;
            }
          }
          refCount++;

          sentenceWithoutRef = false;
          return refEl.outerHTML;
        }

        function selectFigure(m, ind)
        {
          lastSeenFigureIndex = parseInt(ind);
          if(isNaN(lastSeenFigureIndex))
          {
            console.error("figure index: ", ind);
            lastSeenFigureIndex = 0;
          }
          return '';
        }

        let figureRE = /\{figure ([0-9])\}/g;
        let sp = sentenceProse.replace(figureRE, selectFigure);
        let markRE = /\{([A-Z]+) ([a-z]+)( [A-Z])?\}/g;
        let sentenceHTML = sp.replace(markRE, highlightReference);

        let el = document.createElement('span');
        el.innerHTML = sentenceHTML + ' ';
        paragraphEl.appendChild(el);

        if(sentenceWithoutRef)
        {
          if(refCount == o)
            isFocusSentence = true;

          refCount++;
        }

        if(isFocusSentence)
        {
          nearHighlights = sentenceMarks;
          el.style['color'] = colors.sentence;

          isFocusParagraph = true;
        }
      });
      if(isFocusParagraph)
      {
        setTimeout(() => {
          let opts = {behavior: "smooth", block: "nearest", inline: "nearest"};
          paragraphEl.scrollIntoView(opts);
        })
      }
      proseEl.appendChild(paragraphEl);
    })

    if(o < 0)
    {
      return draw(refCount-2, p);
    }
    else if (o >= refCount-1 && refCount > 0)
    {
      return draw(0, p);
    }

    svg.innerHTML = "";

    function drawFigure(figure, highlightFigure, smallLetters)
    {
      let shapes = [...figure.shapes];

      if(highlightFigure)
      {
        nearHighlights.forEach(h =>
          {
            rg.makeHighlight(figure, ...h).forEach(s =>
              {
                if(!(h[1] === 'angle' && s.shape === 'curve'))
                {
                  s.options["stroke"] = colors.sentence;
                }
                shapes.push(s);
              });
          });

        if(highlight.length)
        {
          rg.makeHighlight(figure, ...highlight).forEach(s =>
            {
              s.options["stroke"] = colors.bright;
              s.options["strokeWidth"] += 1;
              shapes.push(s);
            });
        }
      }

      shapes.forEach(s =>
      {
        svg.appendChild(rg.draw(s));
      });

      let nearHighlightNames = nearHighlights.map(m => m[0]).join('');
      let highlightName = highlight.length && highlight[0];

      if(!figure.letteroffsets) figure.letteroffsets = {};

      for(var i in figure.letters)
      {
        let letter = figure.letters[i];
        let shouldBeSmall = smallLetters || (figure.smallletters && figure.smallletters.indexOf(i) > -1);
        let offset;
        var el = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        el.setAttribute('font-family', 'Futura');
        if(shouldBeSmall)
          el.setAttribute('font-size', '16px');
        else
          el.setAttribute('font-size', '24px');
        let fillColor = colors.dim;
        if(highlightFigure && highlightName && highlightName.indexOf(i) > -1)
        {
          fillColor = colors.bright;
        }
        else if(highlightFigure && nearHighlightNames.indexOf(i) > -1)
        {
          fillColor = colors.sentence;
        }
        el.setAttribute('fill', fillColor);
        el.textContent = i;
        svg.appendChild(el);

        if(figure.letteroffsets[i])
        {
          offset = figure.letteroffsets[i];
        }
        else if(letter[0] < 8)
        {
          let dir = vec2.sub(vec2.rot([letter[1] || 1, 0], -Math.PI * ((1 + letter[0]) / 4)), [1,-1]);
          let m = el.getBBox();
          offset = [dir[0] * m.width, dir[1] * m.height/2];
          if(shouldBeSmall)
            offset = vec2.add(offset, [5, -5]);
          else
            offset = vec2.add(offset, [9, -8]);
          figure.letteroffsets[i] = offset;
        }
        else
        {
          offset = [letter[1], letter[2]];
        }

        let pos = vec2.add(figure.points[i], offset);
        el.setAttribute('x', pos[0]);
        el.setAttribute('y', pos[1]);
      }
    }

    if(!p.figures)
    {
      drawFigure(p, true, false)
    }
    else
    {
      for(var i = 0; i < p.figures.length; i++)
      {
        drawFigure(p.figures[i], figureIndex == 0 || figureIndex == i+1, true);
      }
    }

    proxy.onkeydown = (e) =>
    {
      if(e.key == "j" || e.keyCode == 39)
      {
        draw(o + 1, p);
      }
      else if(e.key == "k" || e.keyCode == 37)
      {
        draw(o - 1, p);
      }
    }

    proseEl.onclick = (e) =>
    {
      let ref = parseInt(e.srcElement.dataset.ref);
      if(ref)
      {
        draw(ref, p);
      }
    }
  }

  return {draw, proxy};
}

const svg = document.getElementById('figure');
const rg = makeRG(svg);

function processProse(t)
{
  return t.split('\n\n').map(p => p.split('\n'));
}

function processMags(p)
{
  let mags = p.mags;
  let last_pos = [0, 0];
  let pos = [0, 0];
  p.ticks = [];
  p.indices = {};

  for(var i = 0; i < mags.length; i++)
  {
    let mag = mags[i];
    if(mag.p)
    {
      pos = mag.p;
      last_pos = pos;
    }
    else if(mag.v)
    {
      pos = vec2.add(last_pos, [0, mag.v]);
      last_pos = pos;
    }

    if(mag.p || mag.v)
    {
      p.shapes.push(rg.tick(pos));
      p.indices[mag.l] = p.ticks.length;
      p.ticks.push(pos);
      p.letters[mag.l] = [3];
    }
    else if(mag.m)
    {
      p.letters[mag.l] = [1];
      p.indices[mag.l] = p.ticks.length - 1;
    }
    else
    {
      p.letters[mag.l] = [1];
      p.indices[mag.l] = p.ticks.length - 1;
    }
    p.points[mag.l] = pos;

    if(mag.m)
    {
      let n = mag.n ? mag.n : 1;
      for(var k = 0; k < n; k++)
      {
        let prev_pos = pos;
        pos = vec2.add(prev_pos, [mag.m, 0]);
        p.shapes.push(rg.tick(pos));
        p.shapes.push(rg.line(prev_pos, pos));
        p.ticks.push(pos);
        p.indices[mag.l + 'e'] = p.ticks.length - 1;
      }
    }
  }

  return p;
}

let processProp = (i_book) => (f, ind) => {
  let p = f();
  p.prose = processProse(p.prose);

  if(ind === 0)
  {
    p.title = 'Definitions';
  }
  else
  {
    p.title = 'Proposition ' + (ind);
    if(i_book == 5)
    {
      p.img = 'img/' + (i_book + 1) + '/' + ind + '.png';
    }
  }

  function letterAllPoints(f)
  {
    for(var i in f.points)
    {
      let pt = f.points[i];
      f.letters[i] = [0];
      f.shapes.push(rg.circle(pt, 5, { strokeWidth: 2 }));
    }
  }
  if(p.figures)
  {
    for(var i = 0; i<p.figures.length; i++)
    {
      let figure = p.figures[i];
      if(!figure.points) figure.points = {};
      if(!figure.shapes) figure.shapes = [];
      if(!figure.letters) figure.letters = {};
      if(figure.mags)
      {
        processMags(figure);
      }
      if(figure.shapes.length == 0)
      {
        letterAllPoints(p.figures[i]);
      }
    }
  }
  else
  {
    if(!p.points) p.points = {};
    if(!p.shapes) p.shapes = [];
    if(!p.letters) p.letters = {};
    if(p.mags)
    {
      processMags(p);
    }
    if(p.shapes.length == 0)
    {
      letterAllPoints(p);
    }
  }
  return p;
}

import book1 from './figures/1.js';
import book2 from './figures/2.js';
import book3 from './figures/3.js';
import book4 from './figures/4.js';
import book5 from './figures/5.js';
import book6 from './figures/6.js';

let books = [book1, book2, book3, book4, book5, book6];

let ground = makeGround(rg, svg);

function openBook(i_book) {
  localStorage.last_i_book = i_book + 1;

  let el = document.querySelector('#bookNum');
  el.innerText = (i_book + 1);

  let ps = books[i_book](rg).map(processProp(i_book));

  let i_p = (Math.min(ps.length, parseInt(localStorage.last_i)) || ps.length) - 1;
  ground.draw(0, ps[i_p]);

  function keyHandler(e)
  {
    if(e.key == "o")
    {
      openBook((i_book - 1 + books.length) % books.length);
    }
    else if(e.key == "p")
    {
      openBook((i_book + 1) % books.length);
    }
    else if(e.key == "n")
    {
      i_p = (i_p-1 + ps.length) % ps.length;
      localStorage.last_i = i_p + 1;
      ground.draw(0, ps[i_p]);
    }
    else if(e.key == "m")
    {
      i_p = (i_p+1) % ps.length;
      localStorage.last_i = i_p + 1;
      ground.draw(0, ps[i_p]);
    }
    else
    {
      ground.proxy.onkeydown(e);
    }
  }

  document.onkeydown = keyHandler;
}

openBook((Math.min(books.length, parseInt(localStorage.last_i_book)) || books.length) - 1);
