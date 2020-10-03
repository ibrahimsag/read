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

  function makeHighlight(p, layer, h) {
    let shapes;
    if(h.typ === 'point')
    {
      shapes = [circle(p.points[h.name], 5, { strokeWidth: 2 })];
    }
    else if(h.typ == 'line')
    {
      let f = 0, l = h.name.length-1;
      shapes = [line(p.points[h.name[f]], p.points[h.name[l]])];
    }
    else if(h.typ == 'arcc')
    {
      let c = h.arg;
      if(/[A-Z]/.test(c))
      {
        let center = p.points[c];
        shapes = [arc(center, p.points[h.name[h.name.length-1]], p.points[h.name[0]])];
      }
      else
      {
        return undefined;
      }
    }
    else if(h.typ == 'arc')
    {
      let c = h.arg;
      if(/[A-Z]/.test(c))
      {
        let center = p.points[c];
        shapes = [arc(center, p.points[h.name[0]], p.points[h.name[h.name.length-1]])];
      }
      else
      {
        return undefined;
      }
    }
    else if(h.typ == 'circle')
    {
      let c = h.arg;
      if(/[A-Z]/.test(c))
      {
        let center = p.points[c];
        let a = p.points[h.name[0]];
        shapes = [circle(center, 2 * vec2.dist(center, a))];
      }
      else
      {
        return undefined;
      }
    }
    else if(h.typ == 'polygon')
    {
      let ns = h.name;
      if (h.name.length == 2)
      {
        ns = p.polygonl[h.name];
        if(!ns)
        {
          console.error('unknown polygon name', h.name);
        }
      }
      let points = ns.split('').map(l => p.points[l]);
      shapes = [polygon(points)];
    }
    else if(h.typ == 'angle')
    {
      let [a, o, b] = h.name.split('').map(l => p.points[l]);
      shapes = angle(a, o, b);
    }
    else if(h.typ == 'magnitude')
    {
      let i_begin, i_end;
      if(h.name.length == 1)
      {
        i_begin = p.indices[h.name[0]];
        i_end = p.indices[h.name[0] + 'e'];
      }
      else if(h.name.length > 1)
      {
        i_begin = p.indices[h.name[0]];
        i_end = p.indices[h.name[h.name.length-1]];
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
    else if(h.typ == 'given' && p.given && p.given[h.name])
    {
      shapes = p.given[h.name].map(s =>
        {
          let r = Object.assign({}, s);
          r.options = {};
          Object.assign(r.options, s.options);
          return r;
        });
    }
    else
    {
      console.error('Unknown highlight: ', h.typ, h.name);
      return undefined;
    }

    if(layer === 'sentence')
    {
      shapes.forEach(s =>
        {
          if(h.typ === 'angle' && (s.shape == 'arc' || s.shape === 'curve'))
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

  function prepareLetterOverlay(figure, highlights, nearHighlights, highlightFigure, smallLetters)
  {
    let nearHighlightNames = nearHighlights.map(h => h.name).join('');
    let highlightName = highlights.map(h => h.name).join('');

    let shapes = [];
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
    let lastSeenFigureIndex = 0;
    if(!p.id) p.id = Math.floor(Math.random() * 1024);
    p.refcount = 0;
    p.refp = [];
    p.paragraphs = p.prose.split('\n\n').map(paragraphProse =>
      {
        return paragraphProse.split('\n').map(sentenceProse =>
          {
            let k = p.refp.length;
            p.refp.push(p.refcount);
            let refRE = /(\{[^\}]*\}|\[[^\]]*\])/g;
            let sentenceParts = sentenceProse.split(refRE);
            let seenRef = false;
            let parts = sentenceParts.filter(x=>x).map(part =>
              {

                let markRE = /\{([A-Z]+)\}/;
                let m = part.match(markRE);
                let overlayRE = /\{([A-Z]+) ([a-z]+)( [A-Z])?\}/;
                let om = part.match(overlayRE);
                let figureRE = /\{figure ([0-9])\}/;
                let fm = part.match(figureRE);
                let propRE = /\[Props?. ([0-9]+.[0-9]+)[^\]]*\]/;
                let pm = part.match(propRE);
                let r;

                if(pm)
                {
                  r = { part: { prefName: pm[0], pref: pm[1] } };
                }
                else if(fm)
                {
                  let figureInd = parseInt(fm[1]);
                  if(isNaN(figureInd))
                  {
                    console.error("figure index: ", figureInd);
                  }
                  r = { part: { figureInd } };

                  lastSeenFigureIndex = figureInd;
                }
                else if(m)
                {
                  seenRef = true;
                  let name = m[1];
                  r = { part: { name } };
                }
                else if(om)
                {
                  seenRef = true;
                  r = { part: { name: om[1], typ: om[2] }};
                  if(om[3])
                    r.part.arg = om[3].trim();
                }
                else {
                  r = { part: { text: part } };
                }

                if(m || om)
                {
                  r.i = p.refcount;
                  r.k = k;
                  r.lastSeenFigureIndex = lastSeenFigureIndex;
                  p.refcount++;
                }

                return r;
              });
            if(!seenRef)
              p.refcount++;
            return {parts, k, seenRef};
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

  let us = [];
  let vs = [];
  let us_ = [];
  let vs_ = [];
  let last_p_id = -1;

  function prepareDOM(proseEl, p)
  {
    last_p_id = p.id;
    us = [];
    us_ = [];
    vs = [];
    vs_ = [];
    while(proseEl.firstChild)
      proseEl.removeChild(proseEl.firstChild);

    p.paragraphs.forEach(sentences =>
    {
      let paragraphEl = document.createElement('p');
      sentences.forEach(a =>
      {
        let {parts, k, seenRef} = a;

        let sentenceEl = document.createElement('span');
        sentenceEl.className = 'sentence';

        function prepPart(a)
        {
          let p_, r, { part, i, k, lastSeenFigureIndex } = a;
          if(part.text)
          {
            p_ = part.text;
            r = {part, el: p_};
          }
          else if(part.figureInd)
          {
            r = {part}
          }
          else if(part.pref)
          {
            p_ = document.createElement('a');
            p_.setAttribute('pref', part.pref);
            p_.innerText = part.prefName;
            r = {part, el: p_};
          }
          else if(part.name)
          {
            p_ = document.createElement('span');
            p_.innerText = part.name;
            p_.className = 'ref';
            p_.dataset.ref = i;
            r = {part, i, k, lastSeenFigureIndex, el: p_};
            us.push(r);
          }
          return p_;
        }
        let sp2 = parts.map(prepPart).filter(x=>x);

        sentenceEl.dataset.ref = p.refp[k+1] - 1
        sentenceEl.append(...sp2);
        if(!seenRef)
        {
          us.push(null);
        }

        vs.push({sentenceEl, k});
        paragraphEl.append(sentenceEl, ' ');
      });
      proseEl.appendChild(paragraphEl);
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

    let proseEl = document.querySelector('#proseContent');
    if(last_p_id != p.id)
    {
      let titleEl = document.querySelector('#proseTitle');
      titleEl.innerText = p.title;

      prepareDOM(proseEl, p);

      if(p.img)
      {
        let dPromise;
        if(p.imgData)
        {
          dPromise = Promise.resolve(true);
        }
        else
        {
          dPromise = fetch(p.img).then(resp => resp.json())
            .then(d => {
              p.imgData = d;
              return true;
            })
        }
        dPromise.then(d =>
        {
          let placeholder = document.createElementNS(SVG_NS, 'svg');
          proseEl.appendChild(placeholder);

          placeholder.outerHTML = p.imgData.svgStr;

          let imgEl = proseEl.querySelector('svg');

          let b = imgEl.viewBox.baseVal;
          let s = rg.draw(rg.line([b.x+100, b.y+1], [b.x+200,b.y+1], { stroke: hsluv.hpluvToHex([-30, 100, 50]) }));
          imgEl.appendChild(s);
      });
      }
    }

    function findMaxLTE(ps, i)
    {
      let lo = 0, hi = ps.length -1;
      let found = false;
      while(!found && lo + 1 < hi)
      {
        let k = Math.floor((lo+hi)/2);
        if(ps[k] == i)
        {
          found = true;
          lo = k;
        }
        else if(ps[k] < i)
          lo = k;
        else
          hi = k;
      }
      return lo;
    }

    let k_focus = findMaxLTE(p.refp, o);
    let k_hover = !isNaN(hover_o) ? findMaxLTE(p.refp, hover_o): null;;

    let letterColor = {};
    let nearHighlights = [];
    let hoverHighlights = [];
    let highlights = [];
    let figureIndex = 0;
    let hoverFigureIndex = 0;

    while(vs_.length > 0)
    {
      let v = vs_.pop();
      v.sentenceEl.style['color'] = colors.dim;
    }

    while(us_.length > 0)
    {
      let a = us_.pop();
      if(!a) continue;
      a.el.style['color'] = colors.dim;
    }

    if (k_hover!=null)
    {
      let hover = vs[k_hover];
      hover.sentenceEl.style['color'] = colors.hover;
      vs_.push(hover);

      us.slice(p.refp[k_hover], p.refp[k_hover+1]).forEach(u =>
      {
        if(!u) return;
        u.el.style['color'] = colors.hover;
        us_.push(u);
      });
    }

    let focus = vs[k_focus];
    focus.sentenceEl.style['color'] = colors.sentence;
    vs_.push(focus);
    if(!no_scroll)
    {
      scrollToSentenceIfNecessary(focus.sentenceEl);
    }

    let seenMarks = {};
    us.slice(p.refp[k_focus], p.refp[k_focus+1]).forEach(u =>
    {
      if(!u) return;
      u.el.style['color'] = colors.sentence;
      let part = u.part, hash = JSON.stringify(part);
      if(!seenMarks[hash])
      {
        nearHighlights.push(part);
        seenMarks[hash] = true;
      }
      us_.push(u);
    });

    if(!isNaN(hover_o) && hover_o != o && us[hover_o])
    {
      let hover = us[hover_o];
      hoverHighlights.push(hover.part);
      hoverFigureIndex = hover.lastSeenFigureIndex;
      hover.el.style['color'] = colors.hover_bright;
      us_.push(hover);
    }

    if(us[o])
    {
      let focus = us[o];
      highlights.push(focus.part);
      figureIndex = focus.lastSeenFigureIndex;
      focus.el.style['color'] = colors.bright;
      us_.push(focus);
    }

    let m_o = document.querySelector('#move-on');
    let m_b = document.querySelector('#move-back');
    let h_o = 35, h_b = 30;

    if (o === p.refp[k_focus+1] - 1)
    {
      h_o = 30;
      h_b = 35
      m_o.innerText = "next sentence";
    }
    else
    {
      m_o.innerText = "next name";
    }
    m_o.style['background-color'] = hsluv.hpluvToHex([0, 0, h_o]);
    m_b.style['background-color'] = hsluv.hpluvToHex([0, 0, h_b]);

    while(svg.firstChild)
      svg.removeChild(svg.firstChild);

    let f = l => h => {
      h.name.split('').forEach(c => letterColor[c] = l);
    }
    nearHighlights.forEach(f('sentence'));
    highlights.forEach(f('bright'));
    hoverHighlights.forEach(f('hover_bright'));

    let hs = highlights.filter(h=>h.typ);
    let nhs = nearHighlights.filter(h=>h.typ);
    let hhs = hoverHighlights.filter(h=>h.typ);
    if(!p.figures)
    {
      let figure = p;
      let shapes = figure.shapes.map(rg.draw);
      let f = l => h => shapes.push(...rg.makeHighlight(figure, l, h).map(rg.draw));

      nhs.forEach( f('sentence') );
      hs.forEach( f('bright') );

      hhs.forEach( f('hover_bright') );
      shapes.forEach(el => svg.appendChild(el));

      let els = prepareLetterOverlay(p, hs, nhs, true, false);
      els.map(el => svg.appendChild(el));
    }
    else
    {
      for(var i = 0; i < p.figures.length; i++)
      {
        let figure = p.figures[i];
        let highlightFigure = figureIndex == 0 || figureIndex == i+1;
        let hoverHighlightFigure = hoverFigureIndex == 0 || hoverFigureIndex == i+1;

        let shapes = figure.shapes.map(rg.draw);
        let f = l => h => shapes.push(...rg.makeHighlight(figure, l, h).map(rg.draw));
        if(highlightFigure)
        {
          nhs.forEach( f('sentence') );
          hs.forEach( f('bright') );
        }
        if(hoverHighlightFigure)
        {
          hhs.forEach( f('hover_bright') );
        }
        shapes.forEach(el => svg.appendChild(el));

        let els = prepareLetterOverlay(figure, hs, nhs, highlightFigure, true);
        els.forEach(el => svg.appendChild(el));
      }
    }

    if(p.img && p.imgData)
    {
      let imgEl = proseEl.querySelector('svg');

      imgEl.querySelectorAll('text').forEach(el => imgEl.removeChild(el));

      for(var l in p.imgData.letters)
      {
        if(l.length> 1)
        {
          let d = p.imgData.letters[l]
          delete p.imgData.letters[l];
          l.split(/\s*/).forEach(l =>
            {
              let o = Object.assign({}, d);
              p.imgData.letters[l] = o;
              d.x += 30;
            });
        }
      }

      for(var l in p.imgData.letters) {
        let d = p.imgData.letters[l];
        var el = document.createElementNS(SVG_NS, 'text');
        el.textContent = l;
        el.setAttribute('font-family', 'serif');
        el.setAttribute('font-size', d.s);
        if(letterColor[l] === 'bright')
        {
          el.setAttribute('fill', colors.bright);
        }
        else if(letterColor[l] === 'sentence')
        {
          el.setAttribute('fill', colors.sentence);
        }
        else if(letterColor[l] === 'hover_bright')
        {
          el.setAttribute('fill', colors.hover_bright);
        }
        else
        {
          el.setAttribute('fill', colors.dim);
        }
        el.setAttribute('x', d.x);
        el.setAttribute('y', d.y);
        imgEl.appendChild(el);
      }
    }

    proxy.moveon = () => { present(o + 1, p); };
    proxy.moveback = () => { present(o - 1, p); };

    let forClick = false, forCancel = null;
    proseEl.onmouseout = (e) =>
    {
      if(forClick)
        return;

      if(forCancel)
      {
        window.cancelAnimationFrame(forCancel);
        forCancel = null;
      }

      if(!isNaN(hover_o))
      {
        forCancel = window.requestAnimationFrame(() => {
          present(o, p, undefined, true);
        });
      }
    }

    proseEl.onmousemove = (e) =>
    {
      if(forClick)
        return;

      if(forCancel)
      {
        window.cancelAnimationFrame(forCancel);
        forCancel = null;
      }

      let ref = parseInt(e.srcElement.dataset.ref);
      if(!isNaN(ref))
      {
        forCancel = window.requestAnimationFrame(() => {
          present(o, p, ref, true);
        });
      }
    }

    proseEl.onclick = (e) =>
    {
      forClick = true;
      if(forCancel)
      {
        window.cancelAnimationFrame(forCancel);
        forCancel = null;
      }

      let ref = parseInt(e.srcElement.dataset.ref);
      if(!isNaN(ref))
      {
        window.requestAnimationFrame( () => {
          forClick = false;
          present(ref, p);
        });
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
    else if(e.key == "z")
    {
      i_p = (i_p-1 + ps.length) % ps.length;
      openProposition(i_book, i_p);
    }
    else if(e.key == "x")
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
  let el = document.querySelector('#figure');
  el.style['width'] = h;
  el.style['height'] = h;
}
