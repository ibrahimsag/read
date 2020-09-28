import rough from 'roughjs';
import hsluv from 'hsluv';

import vec2 from './vec2.js';

let colors = {
  bright: hsluv.hsluvToHex([0, 0, 90]),
  sentence: hsluv.hsluvToHex([0, 0, 50]),
  dim: hsluv.hsluvToHex([0, 0, 30]),
  link: hsluv.hpluvToHex([140, 100, 30]),
  hover: hsluv.hpluvToHex([330, 100, 50]),
  hover_bright: hsluv.hpluvToHex([330, 100, 80]),
  make: hsluv.hpluvToHex,
};
const SVG_NS = 'http://www.w3.org/2000/svg';
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
    let s = 20;
    if(alpha < Math.PI/4)
      s = 30;

    let samples = [0, 0.25, 0.5, 0.75, 1];
    if(alpha > Math.PI / 2)
      samples = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
    let ps = samples.map(a => vec2.add(o, vec2.scale(vec2.rot(d1, alpha*a), s)));
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
      let c = arg1;
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
      let c = arg1;
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
      let c = arg1;
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
      let ns = name;
      if (name.length == 2)
      {
        ns = p.polygonl[name];
        if(!ns)
        {
          console.error('unknown polygon name', name);
        }
      }
      let points = ns.split('').map(l => p.points[l]);
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
    else if(layer === 'hover_bright')
    {
      shapes.forEach(s =>
        {
          s.options["stroke"] = colors.hover_bright;
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
      let dir = vec2.add(p1, vec2.scale(vec2.sub(p2, p1), r));

      let m = {width: 14.45, height: 23};
      if(shouldBeSmall)
        m = {width: 9.64, height: 14};
      figure.letterOffsets[i] = [dir[0] * m.width, dir[1] * m.height];
    }
  }

  function prepareFigure(figure, smallLetters)
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

    figure.prepared = true;
  }

  function prepareShapes(figure, highlights, nearHighlights, hoverHighlights, highlightFigure, smallLetters)
  {
    let shapes = figure.shapes.map(rg.draw);

    if(highlightFigure)
    {
      nearHighlights.forEach(h =>
        {
          shapes.push(...rg.makeHighlight(figure, 'sentence', ...h).map(rg.draw));
        });

      if(highlights.length)
      {
        highlights.forEach(h =>
          {
            shapes.push(...rg.makeHighlight(figure, 'bright', ...h).map(rg.draw));
          });
      }
      if(hoverHighlights.length)
      {
        hoverHighlights.forEach(h =>
          {
            shapes.push(...rg.makeHighlight(figure, 'hover_bright', ...h).map(rg.draw));
          });
      }
    }

    let nearHighlightNames = nearHighlights.map(m => m[0]).join('');
    let highlightName = highlights.map(h => h[0]).join('');

    for(var i in figure.letters)
    {
      let letter = figure.letters[i];
      let shouldBeSmall = smallLetters || (figure.smallletters && figure.smallletters.indexOf(i) > -1);
      var el = document.createElementNS(SVG_NS, 'text');
      el.setAttribute('font-family', 'Nale');
      el.setAttribute('font-size', shouldBeSmall ? 16 : 24);
      let fillcolor = colors.dim;
      if(highlightFigure && highlightName && highlightName.indexOf(i) > -1)
      {
        fillcolor = colors.bright;
      }
      else if(highlightFigure && nearHighlightNames.indexOf(i) > -1)
      {
        fillcolor = colors.sentence;
      }
      el.setAttribute('fill', fillcolor);
      el.textContent = i;

      let pos = vec2.add(figure.points[i], figure.letterOffsets[i]);
      el.setAttribute('x', pos[0]);
      el.setAttribute('y', pos[1]);
      shapes.push(el);
    }

    return shapes;
  }

  function prepareProse(p)
  {
    p.refcount = 0;
    p.refp = [];
    p.paragraphs = p.prose.split('\n\n').map(paragraphProse =>
      {
        return paragraphProse.split('\n').map(sentenceProse =>
          {
            p.refp.push(p.refcount);
            let refRE = /(\{[^\}]*\})/g;
            let sentenceParts = sentenceProse.split(refRE);
            let seenRef = false;
            let parts = sentenceParts.map(part =>
              {
                let markRE = /\{([A-Z]+)\}/;
                let m = part.match(markRE);
                let overlayRE = /\{([A-Z]+) ([a-z]+)( [A-Z])?\}/;
                let om = part.match(overlayRE);
                let r = part;
                if(m)
                {
                  seenRef = true;
                  p.refcount++;
                  r = [m[1]];
                }
                else if(om)
                {
                  seenRef = true;
                  p.refcount++;
                  if(om[3])
                    r = [om[1], om[2], om[3].trim()];
                  else
                    r = [om[1], om[2]];
                }

                return r;
              });
            if(!seenRef)
              p.refcount++;
            return parts;
          });
      });
    p.refp.push(p.refcount);
  }

  function scrollToSentenceIfNecessary(el)
  {
    setTimeout(() => {
      function tb (e)
      {
        let t = e.offsetTop, b = t + e.offsetHeight;
        return { t, b };
      }

      let pt = window.scrollY, ph = window.innerHeight - 50;
      let p = { t: pt, b: pt + ph}
      let c = tb(el);
      let o = (p.b - p.t) * 0.68;
      if(p.t > (c.t - 10))
        window.scrollTo(0, c.t - p.t - o);
      else if(p.b < (c.b + 10))
        window.scrollTo(0, c.b - ph + o);
    })
  }

  function present(o, p, hover_o, no_scroll)
  {
    if(!p.paragraphs)
    {
      prepareProse(p);
    }

    if(!p.prepared)
    {
      if(p.figures)
      {
        p.figures.forEach(figure => {
          prepareFigure(figure, true);
        });
      }
      else
      {
        prepareFigure(p, false);
      }
    }

    if(o < 0)
    {
      return present(p.refcount-2, p);
    }
    else if (o >= p.refcount-1 && p.refcount > 0)
    {
      return present(0, p);
    }

    let titleEl = document.querySelector('#proseTitle');
    titleEl.innerText = p.title;

    let proseEl = document.querySelector('#proseContent');
    while(proseEl.firstChild)
      proseEl.removeChild(proseEl.firstChild);

    let imgData;
    if(p.img && localStorage[p.img])
    {
      let placeholder = document.createElementNS(SVG_NS, 'svg');
      proseEl.appendChild(placeholder);
      imgData = JSON.parse(localStorage[p.img]);
      placeholder.outerHTML = imgData.svgStr;
    }

    let nearHighlights = [];
    let hoverHighlights = [];
    let highlights = [];
    let figureIndex = 0;
    let lastSeenFigureIndex = 0;
    let nextLabel;

    let i_ref = 0, i_sentence = 0;
    p.paragraphs.forEach(sentences =>
    {
      let paragraphEl = document.createElement('p');
      sentences.forEach(sentenceParts =>
      {
        let check_range = i => (p.refp[i_sentence] <= i) && (i < p.refp[i_sentence+1]);
        let isFocusSentence = check_range(o);
        let isHoverSentence = !isFocusSentence && hover_o && check_range(hover_o);
        if(isFocusSentence)
        {
          if (o+1 < p.refp[i_sentence+1])
            nextLabel = "next link";
          else
            nextLabel = "next sentence";
        }

        let sentenceWithoutRef = true;
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

        let seenMarks = {};
        function processPart(part)
        {
          if(typeof(part) === 'string')
          {
            let figureRE = /\{figure ([0-9])\}/g;
            let sp = part.replace(figureRE, selectFigure);
            let propRE = /\[Props?. ([0-9]+.[0-9]+)[^\]]*\]/g;
            return sp.replace(propRE, placePref);
          }
          else if(part.length > 0)
          {
            if(isFocusSentence)
            {
              let hash = part.toString();
              if(!seenMarks[hash])
              {
                nearHighlights.push(part);
                seenMarks[hash] = true;
              }
            }

            let refEl = document.createElement('span');
            refEl.dataset.ref = i_ref;
            refEl.innerText = part[0];
            refEl.className = 'ref';

            let color;
            if(i_ref == o)
              color = colors.bright;
            else if(isHoverSentence && i_ref == hover_o)
              color = colors.hover_bright;
            else if (isFocusSentence)
              color = colors.sentence;
            else if (isHoverSentence)
              color = colors.hover;
            else
              color = colors.dim;
            refEl.style['color'] = color;

            if(i_ref == o)
            {
              highlights.push(part);
              figureIndex = lastSeenFigureIndex;
            }
            else if(isHoverSentence && i_ref == hover_o)
            {
              hoverHighlights.push(part);
              figureIndex = lastSeenFigureIndex;
            }
            i_ref++;

            sentenceWithoutRef = false;
            return refEl.outerHTML;
          }
        }

        let el = document.createElement('span');
        el.className = 'sentence';
        el.dataset.ref = i_ref;

        el.innerHTML = sentenceParts.map(processPart).join('') + ' ';
        paragraphEl.appendChild(el);

        if(isFocusSentence)
        {
          el.style['color'] = colors.sentence;
          if(!no_scroll)
          {
            scrollToSentenceIfNecessary(el);
          }
        }
        else if(isHoverSentence)
        {
          el.style['color'] = colors.hover;
        }
        else
        {
          el.style['color'] = colors.dim;
        }

        if(sentenceWithoutRef)
        {
          i_ref++;
        }
        i_sentence++;
      });
      proseEl.appendChild(paragraphEl);
    })
    document.querySelector('#move-on').innerText = nextLabel;

    while(svg.firstChild)
      svg.removeChild(svg.firstChild);

    let hs = highlights.filter(h=>h.length>1);
    let nhs = nearHighlights.filter(h=>h.length>1);
    let hhs = hoverHighlights.filter(h=>h.length>1);
    if(!p.figures)
    {
      let els = prepareShapes(p, hs, nhs, hhs, true, false);
      els.map(el => svg.appendChild(el));
    }
    else
    {
      for(var i = 0; i < p.figures.length; i++)
      {
        let els = prepareShapes(p.figures[i], hs, nhs, hhs, figureIndex == 0 || figureIndex == i+1, true);
        els.map(el => svg.appendChild(el));
      }
    }

    if(imgData)
    {
      let nearHighlightNames = nearHighlights.map(m => m[0]).join('');
      let highlightName = highlights.map(h => h[0]).join('');

      let imgEl = proseEl.querySelector('svg');
      for(var l in imgData.letters)
      {
        if(l.length> 1)
        {
          let d = imgData.letters[l]
          delete imgData.letters[l];
          l.split(/\s*/).forEach(l =>
            {
              let o = Object.assign({}, d);
              imgData.letters[l] = o;
              d.x += 30;
            });
        }
      }

      for(var l in imgData.letters) {
        let d = imgData.letters[l];
        var el = document.createElementNS(SVG_NS, 'text');
        el.textContent = l;
        el.setAttribute('font-family', 'serif');
        el.setAttribute('font-size', d.s);
        if(highlightName.indexOf(l) > -1)
        {
          el.setAttribute('fill', '#e2e2e2');
        }
        else if(nearHighlightNames.indexOf(l) > -1)
        {
          el.setAttribute('fill', '#777777');
        }
        else
        {
          el.setAttribute('fill', '#474747');
        }
        el.setAttribute('x', d.x);
        el.setAttribute('y', d.y);
        imgEl.appendChild(el);
      }

      let b = imgEl.viewBox.baseVal;
      let s = rg.draw(rg.line([b.x+100, b.y+1], [b.x+200,b.y+1], { stroke: hsluv.hpluvToHex([-30, 100, 50]) }));
      imgEl.appendChild(s);
    }

    proxy.moveon = () => { present(o + 1, p); };
    proxy.moveback = () => { present(o - 1, p); };

    proseEl.onmouseout = (e) =>
    {
      if(proxy.hoverTimeoutHandle)
      {
        clearTimeout(proxy.hoverTimeoutHandle);
        proxy.hoverTimeoutHandle = null;
      }

      if(hover_o)
      {
        proxy.hoverTimeoutHandle = setTimeout(() => {
            present(o, p, undefined, true);
        }, 100);
      }
    }

    proseEl.onmousemove = (e) =>
    {
      if(proxy.hoverTimeoutHandle)
      {
        clearTimeout(proxy.hoverTimeoutHandle);
        proxy.hoverTimeoutHandle = null;
      }

      let ref = parseInt(e.srcElement.dataset.ref);
      if(!isNaN(ref))
      {
        proxy.hoverTimeoutHandle = setTimeout(() => {
          present(o, p, ref, true);
        }, 100);
      }
    }

    proseEl.onclick = (e) =>
    {
      if(proxy.hoverTimeoutHandle)
      {
        clearTimeout(proxy.hoverTimeoutHandle);
        proxy.hoverTimeoutHandle = null;
      }

      let ref = parseInt(e.srcElement.dataset.ref);
      if(!isNaN(ref))
      {
        present(ref, p);
      }
    }
  }

  return {present, proxy};
}

function presentProp(i_book, i_prop) {
  let ps = books[i_book];

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
    else if(e.key == "h")
    {
      let s = document.querySelector('#prose svg');
      if(s && s.style.display != "none")
        s.style.display = "none";
      else
        s.style.display = null;
    }
  }

  document.onkeydown = keyHandler;

  document.querySelector('#move-on').ontouchend = (e) =>
  {
    e.preventDefault();
    ground.proxy.moveon();
  }

  document.querySelector('#move-on').onmousedown = (e) =>
  {
    ground.proxy.moveon();
  }

  document.querySelector('#move-back').ontouchend = (e) =>
  {
    e.preventDefault();
    ground.proxy.moveback();
  }

  document.querySelector('#move-back').onmousedown = (e) =>
  {
    ground.proxy.moveback();
  }

  document.querySelector('#prev-prop').ontouchend = (e) =>
  {
    e.preventDefault();
    i_p = (i_p-1+ps.length) % ps.length;
    openProposition(i_book, i_p);
  }

  document.querySelector('#next-prop').ontouchend = (e) =>
  {
    e.preventDefault();
    i_p = (i_p+1) % ps.length;
    openProposition(i_book, i_p);
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
window.rg = makeRG(svg);

let ground = makeGround(rg, svg);

let styleText = ["#coverPage #help-title { color:", colors.make([320, 100, 40]), "; } "].join('');

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

window.onresize = () => {
  let h = Math.min(512, window.innerHeight - 45);
  if(h < 512)
  {
    let el = document.querySelector('#figure');
    el.style['width'] = h;
    el.style['height'] = h;
  }
}
