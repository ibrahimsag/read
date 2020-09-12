import rough from 'roughjs';
import hsluv from 'hsluv';

import vec2 from './vec2.js';

let colors = {
  bright: hsluv.hsluvToHex([0, 0, 90]),
  sentence: hsluv.hsluvToHex([0, 0, 50]),
  dim: hsluv.hsluvToHex([0, 0, 30]),
  link: hsluv.hpluvToHex([140, 100, 30]),
  make: hsluv.hpluvToHex,
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
    let [d1, d2] = [a, b].map(x => vec2.sub(x, o)).map(d => vec2.scale(d, 1/vec2.len(d)));

    let det = d1[0]*d2[1] - d1[1]*d2[0];
    if(det < 0)
    {
       [d2, d1] = [d1, d2];
    }

    let alpha = Math.acos(vec2.dot(d1, d2));
    if(alpha > Math.PI/2)
    {
      let [p1, p2] = [d1, d2].map(v => vec2.add(o, vec2.scale(v, 20)));
      return arc(o, p1, p2, {strokeWidth: 10})
    }
    else
    {
      let s = 20;
      if(alpha < Math.PI/4)
        s = 30;

      let samples = [0, 0.25, 0.5, 0.75, 1];
      let ps = samples.map(a => vec2.add(o, vec2.scale(vec2.rot(d1, alpha*a), s)));
      return curve(ps, {strokeWidth: 10});
    }
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

  function makeHighlight(p, layer, name, typ, arg1) {
    let shapes;
    if(typ === 'point')
    {
      shapes = [circle(p.points[name], 5, { strokeWidth: 2 })];
    }
    else if(typ == 'line')
    {
      shapes = [line(p.points[name[0]], p.points[name[name.length-1]])];
    }
    else if(typ == 'arcc')
    {
      let c = arg1.trim();
      if(/[A-Z]/.test(c))
      {
        let center = p.points[c];
        shapes = [arc(center, p.points[name[name.length-1]], p.points[name[0]])];
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
        shapes = [arc(center, p.points[name[0]], p.points[name[name.length-1]])];
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
        shapes = [circle(center, 2 * vec2.dist(center, a))];
      }
      else
      {
        return undefined;
      }
    }
    else if(typ == 'polygon')
    {
      let points = name.split('').map(l => p.points[l]);
      shapes = [polygon(points)];
    }
    else if(typ == 'angle')
    {
      let [a, o, b] = name.split('').map(l => p.points[l]);
      shapes = angle(a, o, b);
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

      shapes = p.ticks.slice(i_begin, i_end+1).map(tick);
      shapes.push(line(p.ticks[i_begin], p.ticks[i_end]));
    }
    else if(typ == 'given' && p.given && p.given[name])
    {
      shapes = p.given[name].map(s =>
        {
          let r = Object.assign({}, s);
          r.options = {};
          Object.assign(r.options, s.options);
          return r;
        });
    }
    else
    {
      console.error('Unknown highlight: ', typ, name);
      return undefined;
    }

    if(layer === 'sentence')
    {
      shapes.forEach(s =>
        {
          if(typ === 'angle' && (s.shape == 'arc' || s.shape === 'curve'))
          {
            s.options["stroke"] = colors.dim;
          }
          else
          {
            s.options["stroke"] = colors.sentence;
          }
        });
    }
    else if(layer === 'bright')
    {
      shapes.forEach(s =>
        {
          s.options["stroke"] = colors.bright;
          s.options["strokeWidth"] += 1;
        });
    }

    return shapes;
  }
  return { tick, arc, gnomon, anglecurve, angle, curve, line, polygon, circle, makeHighlight, draw: rsvg.draw.bind(rsvg) }
}

function makeGround(rg, svg)
{
  let proxy = {};

  function prepareMags(p)
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
        p.letters[mag.l] = [2.9, 2];
      }
      else if(mag.m)
      {
        p.letters[mag.l] = [1, 2];
        p.indices[mag.l] = p.ticks.length - 1;
      }
      else
      {
        p.letters[mag.l] = [1, 2];
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

  function prepareLetterOffsets(figure, smallLetters)
  {
    figure.letterOffsets = {};
    for(var i in figure.letters)
    {
      let letter = figure.letters[i];
      let shouldBeSmall = smallLetters || (figure.smallletters && figure.smallletters.indexOf(i) > -1);

      let proj = (s, l) => {
        switch(s)
        {
          case 0:
            return [0.1 * l, -0.1 * l];
            break;
          case 1:
            return [-0.5, -0.2 * l];
            break;
          case 2:
            return [-1 - 0.2*l, -0.2 * l];
            break;
          case 3:
            return [-1 - 0.2*l, 0.5];
            break;
          case 4:
            return [-1, 1];
            break;
          case 5:
            return [-0.5, 1 + 0.1*l];
            break;
          case 6:
            return [0.3*l, 0.9 + 0.1*l];
            break;
          case 7:
            return [0.2*l, 0.5];
            break;
          default:
            return [0.1*l, -0.1*l];
            break;
        }
      }
      let inj = (s) => (s+8)%8;
      let s = inj(letter[0]);
      let l = (letter[1] || 1) + (shouldBeSmall ? 1 : 0);
      let s1 = Math.floor(s), s2 = Math.ceil(s);
      let r = s - s1;
      let p1 = proj(s1, l), p2 = proj(s2, l);
      // let dir = vec2.sub(vec2.rot([letter[1] || 1, 0], -Math.PI * ((1 + letter[0]) / 4)), [1,-1]);
      let dir = vec2.add(p1, vec2.scale(vec2.sub(p2, p1), r));

      let m = {width: 14.45, height: 23};
      if(shouldBeSmall)
        m = {width: 9.64, height: 14};
      figure.letterOffsets[i] = [dir[0] * m.width, dir[1] * m.height];
    }
  }

  function prepareFigure(figure, highlight, nearHighlights, highlightFigure, smallLetters)
  {
    if(!figure.points) figure.points = {};
    if(!figure.shapes) figure.shapes = [];
    if(!figure.letters) figure.letters = {};
    if(figure.mags && !figure.magsProcessed)
    {
      prepareMags(figure);
      figure.magsProcessed = true;
    }

    if(!figure.letterOffsets)
    {
      prepareLetterOffsets(figure, smallLetters);
    }

    let shapes = figure.shapes.map(rg.draw);

    if(highlightFigure)
    {
      nearHighlights.forEach(h =>
        {
          shapes.push(...rg.makeHighlight(figure, 'sentence', ...h).map(rg.draw));
        });

      if(highlight.length)
      {
        shapes.push(...rg.makeHighlight(figure, 'bright', ...highlight).map(rg.draw));
      }
    }

    let nearHighlightNames = nearHighlights.map(m => m[0]).join('');
    let highlightName = highlight.length && highlight[0];

    for(var i in figure.letters)
    {
      let letter = figure.letters[i];
      let shouldBeSmall = smallLetters || (figure.smallletters && figure.smallletters.indexOf(i) > -1);
      var el = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      el.setAttribute('font-family', 'Nale');
      el.setAttribute('font-size', shouldBeSmall ? '16px' : '24px');
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

      let pos = vec2.add(figure.points[i], figure.letterOffsets[i]);
      el.setAttribute('x', pos[0]);
      el.setAttribute('y', pos[1]);
      shapes.push(el);
    }

    return shapes;
  }

  function present(o, p)
  {
    let nearHighlights = [];
    let highlight = [];
    let figureIndex = 0;
    let lastSeenFigureIndex = 0;

    let titleEl = document.querySelector('#proseTitle');
    titleEl.innerHTML = p.title;

    let proseEl = document.querySelector('#proseContent');
    proseEl.innerHTML = '';

    if(p.img)
    {
      let imgEl = document.createElement('img');
      imgEl.src = p.img;
      proseEl.appendChild(imgEl);
    }

    let refCount = 0;
    p.prose.split('\n\n').forEach(paragraphProse =>
    {
      let paragraphEl = document.createElement('p');
      let content = '';
      let isFocusParagraph = false;
      paragraphProse.split('\n').forEach(sentenceProse =>
      {
        let isFocusSentence = false;;
        let sentenceMarks = [];
        let seenMarks = {};
        let sentenceWithoutRef = true;
        function highlightReference(m, name, typ, arg1)
        {

          let refEl = document.createElement('span');
          refEl.innerHTML = name;
          refEl.className = 'ref';
          refEl.dataset.ref = refCount;

          if(refCount == o)
          {
            isFocusSentence = true;
            refEl.className += ' bright';
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

        function placePref(m, pref)
        {
          let el = document.createElement('a');
          el.setAttribute('pref', pref);
          el.innerText = m;
          return el.outerHTML;
        }

        let el = document.createElement('span');
        el.className = 'sentence';
        el.dataset.ref = refCount;

        let figureRE = /\{figure ([0-9])\}/g;
        let sp = sentenceProse.replace(figureRE, selectFigure);
        let propRE = /\[Props?. ([0-9]+.[0-9]+)[^\]]*\]/g;
        let sp2 = sp.replace(propRE, placePref);

        let markRE = /\{([A-Z]+) ([a-z]+)( [A-Z])?\}/g;
        let sentenceHTML = sp2.replace(markRE, highlightReference);

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
          el.className += ' bright';

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
      return present(refCount-2, p);
    }
    else if (o >= refCount-1 && refCount > 0)
    {
      return present(0, p);
    }

    svg.innerHTML = "";

    if(!p.figures)
    {
      let els = prepareFigure(p, highlight, nearHighlights, true, false);
      els.map(el => svg.appendChild(el));
    }
    else
    {
      for(var i = 0; i < p.figures.length; i++)
      {
        let els = prepareFigure(p.figures[i], highlight, nearHighlights, figureIndex == 0 || figureIndex == i+1, true);
        els.map(el => svg.appendChild(el));
      }
    }

    proxy.moveon = () => { present(o + 1, p); };
    proxy.moveback = () => { present(o - 1, p); };

    proseEl.onclick = (e) =>
    {
      let ref = parseInt(e.srcElement.dataset.ref);
      if(!isNaN(ref))
      {
        present(ref, p);
      }
    }
  }

  return {present, proxy};
}

function unfoldGraphics(p) {
  let callrg = a => rg[a[0]](...a.slice(1));
  if(p.shapes)
  {
    p.shapes = p.shapes.map(callrg);
  }
  if(p.given)
  {
    for(let k in p.given)
    {
      p.given[k] = p.given[k].map(callrg);
    }
  }
  if(p.figures)
    p.figures.forEach(unfoldGraphics);

  return p;
}

function presentProp(i_book, i_prop) {
  let ps = books[i_book];
  let bookPromise;
  if(ps)
  {
    bookPromise = Promise.resolve(ps);
  }
  else
  {
    bookPromise = fetch('build/'+i_book+'.json')
      .then(response => response.json())
      .then(book => book.map(unfoldGraphics))
      .then(book => { books[i_book] = book; return book; });
  }

  bookPromise.then(ps =>
  {
    document.querySelector('#coverPage').style['display'] = 'none';
    document.querySelector('#container').style['display'] = 'flex';

    let el = document.querySelector('#bookTitle');
    el.innerText = 'Elements Book ' + (i_book) + ' - ' + books.descs[i_book-1];

    let i_p = Math.min(ps.length-1, i_prop);
    ground.present(0, ps[i_p]);

    function keyHandler(e)
    {
      if(e.key == "j" || e.keyCode == 39)
      {
        ground.proxy.moveon();
      }
      else if(e.key == "k" || e.keyCode == 37)
      {
        ground.proxy.moveback();
      }
      else if(e.key == "b")
      {
        i_p = (i_p-1 + ps.length) % ps.length;
        openProposition(i_book, i_p);
      }
      else if(e.key == "a")
      {
        i_p = (i_p+1) % ps.length;
        openProposition(i_book, i_p);
      }
    }

    document.onkeydown = keyHandler;

    document.querySelector('#move-on').onmousedown = (e) =>
    {
      ground.proxy.moveon();
    }

    document.querySelector('#move-back').onmousedown = (e) =>
    {
      ground.proxy.moveback();
    }

    document.querySelector('#prev-prop').onmousedown = (e) =>
    {
      i_p = (i_p-1+ps.length) % ps.length;
      openProposition(i_book, i_p);
    }

    document.querySelector('#next-prop').onmousedown = (e) =>
    {
      i_p = (i_p+1) % ps.length;
      openProposition(i_book, i_p);
    }
  });
}

function presentCover() {
  document.querySelector('#coverPage').style['display'] = 'flex';
  document.querySelector('#container').style['display'] = 'none';
  document.onkeydown = undefined;
}

function openProposition(i_book, i_prop) {
  history.pushState({page:'prop', i_book, i_prop}, '');
  presentProp(i_book, i_prop);
}

function openCover()
{
  history.pushState({page:'cover'}, '');
  presentCover();
}

window.onpopstate = (e) => {
  if(!e.state || !e.state.page || e.state.page === 'cover')
  {
    presentCover();
  }
  else if(e.state.page === 'prop')
  {
    let is = e.state;
    presentProp(is.i_book, is.i_prop);
  }
}

document.onclick = (e) => {
  let pref = e.srcElement.attributes.pref || e.srcElement.parentElement.attributes.pref;
  if(pref)
  {
    if(pref.value == 'cover')
    {
      openCover();
    }
    else
    {
      let [i_book, i_prop] = pref.value.split('.').map(Number);
      if(isNaN(i_book) || isNaN(i_prop))
      {
        console.error("unknown pref: ", pref.value);
      }
      else
      {
        openProposition(i_book, i_prop)
      }
    }
  }
}

const svg = document.getElementById('figure');
const rg = makeRG(svg);

let ground = makeGround(rg, svg);

let styleText = ["#prose .sentence { color:", colors.dim, "; } #prose .sentence.bright { color:", colors.sentence, "; } #prose .sentence .ref { color:", colors.dim, "; } #prose .sentence.bright .ref { color:", colors.sentence, "; ; } #prose .sentence.bright .ref.bright { color:", colors.bright, "; }"].join('');

window.onload = () => {
  let styleEl = document.createElement('style');
  styleEl.innerText = styleText;
  document.querySelector('head').appendChild(styleEl);

  if(history.state && history.state.page === 'prop')
  {
    let is = history.state;
    presentProp(is.i_book, is.i_prop);
  }
  else
  {
    presentCover();
  }
}
