import rough from 'roughjs';
import hsluv from 'hsluv';
import {create} from 'jss';
import preset from 'jss-preset-default';

import vec2 from './vec2.js';

let colors = {
  bright: hsluv.hsluvToHex([0, 0, 90]),
  sentence: hsluv.hsluvToHex([0, 0, 50]),
  dim: hsluv.hsluvToHex([0, 0, 30]),
  link: hsluv.hpluvToHex([140, 100, 30]),
  link_hover: hsluv.hpluvToHex([140, 100, 40]),
  hover: hsluv.hpluvToHex([330, 100, 60]),
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

function makeGround(rg, svg, cs)
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

  function prepareLetterOverlay(figure, letterColor, highlightFigure, smallLetters)
  {
    let shapes = [];
    for(var i in figure.letters)
    {
      let letter = figure.letters[i];
      let shouldBeSmall = smallLetters || (figure.smallletters && figure.smallletters.indexOf(i) > -1);
      var el = document.createElementNS(SVG_NS, 'text');
      el.setAttribute('font-family', 'Nale');
      el.setAttribute('font-size', shouldBeSmall ? 16 : 24);
      let fillcolor = colors.dim;
      if(highlightFigure && letterColor[i])
      {
        fillcolor = letterColor[i];
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
    p.i_count = 0;
    p.i_p = [];
    p.paragraphs = p.prose.split('\n\n').map(paragraphProse =>
      {
        return paragraphProse.split('\n').map(sentenceProse =>
          {
            let k = p.i_p.length;
            p.i_p.push(p.i_count);
            let i_RE = /(\{[^\}]*\}|\[[^\]]*\])/g;
            let sentenceParts = sentenceProse.split(i_RE);
            let seenRef = false;
            let parts = sentenceParts.filter(x=>x).map(part =>
              {

                let markRE = /\{([A-Z]+)\}/;
                let m = part.match(markRE);
                let overlayRE = /\{([A-Z]+) ([a-z]+)( [A-Z])?\}/;
                let om = part.match(overlayRE);
                let figureRE = /\{figure ([0-9])\}/;
                let fm = part.match(figureRE);
                let propsRE = /\[Props. [^\]]*\]/;
                let psm = part.match(propsRE);
                let propRE = /\[Prop. ([0-9]+.[0-9]+)([^\]]*)\]/;
                let pm = part.match(propRE);
                let r;

                if(pm)
                {
                  let pref = pm[1], rest = pm[2].split(', ');
                  if(rest[0] == ' lem. II')
                    pref += '-lemII'
                  else if(rest[0] == ' lem. I')
                    pref += '-lemI'
                  else if(rest[0] == ' lem.')
                    pref += '-lem'
                  r = { part: { prefs: [{ prefName: pm[0], pref }]} };
                }
                else if(psm)
                {
                  let n = 0;
                  let ls = psm[0].split(', ').map(s => {
                    let re = /([0-9]+.[0-9]+)/;
                    let m = s.match(re);
                    let pref = m[1];
                    if(s.match(/lem. II/))
                      pref += '-lemII';
                    else if(s.match(/lem. I/))
                      pref += '-lemI';
                    else if(s.match(/lem./))
                      pref += '-lem'
                    n++;
                    if(m)
                    {
                      return {prefName: (n > 1 ? ', ' : '') + s, pref};
                    }
                    else
                    {
                      return {prefName: s + ' !!!!', pref: null};
                    }
                  });;
                  r = { part: { prefs: ls } };
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
                  r.i = p.i_count;
                  r.k = k;
                  r.lastSeenFigureIndex = lastSeenFigureIndex;
                  p.i_count++;
                }

                return r;
              });
            if(!seenRef)
              p.i_count++;
            return {parts, k, seenRef};
          });
      });
    p.i_p.push(p.i_count);
  }

  function scrollToSentenceIfNecessary(el)
  {
    setTimeout(() => {

      let pt = window.scrollY, ph = window.innerHeight - 50;
      let p = { t: pt, b: pt + ph}
      let c = { t: el.offsetTop, b: el.offsetTop + el.offsetHeight };
      if((p.t > (c.t - 10)) || (p.b < (c.b + 10)))
      {
        let t = Math.max(c.t - ph * 0.38, 96);
        window.scrollTo(0, t);
      }
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
        sentenceEl.className = cs.sentence;

        function prepPart(a)
        {
          let r, { part, i, k, lastSeenFigureIndex } = a;
          if(part.text)
          {
            sentenceEl.append(part.text);
          }
          else if(part.prefs)
          {
            let f = l => {
              let a = document.createElement('a');
              a.setAttribute('pref', l.pref);
              a.innerText = l.prefName;
              return a;
            }

            sentenceEl.append(...part.prefs.map(f))
          }
          else if(part.name)
          {
            let el = document.createElement('span');
            el.innerText = part.name;
            el.className = cs.name;
            el.dataset.i = i;
            sentenceEl.append(el);
            r = {part, i, k, lastSeenFigureIndex, el};
            us.push(r);
          }
        }
        parts.forEach(prepPart);

        sentenceEl.dataset.i = p.i_p[k+1] - 1
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

  function refreshImgLetters(imgEl, letters, letterColor)
  {
    imgEl.querySelectorAll('text').forEach(el => imgEl.removeChild(el));

    for(var l in letters) {
      let d = letters[l];
      var el = document.createElementNS(SVG_NS, 'text');
      el.textContent = l;
      el.setAttribute('font-family', 'Nale');
      el.setAttribute('font-size', d.s);
      el.setAttribute('fill', letterColor[l] || colors.dim);
      el.setAttribute('x', d.x);
      el.setAttribute('y', d.y);
      imgEl.appendChild(el);
    }
  }

  function present(o, p, hover_o, no_scroll)
  {
    if(o == null)
    {
      o = p.i || 0;
    }
    p.i = o;

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
      return present(p.i_count-2, p);
    }
    else if (o >= p.i_count-1 && p.i_count > 0)
    {
      return present(0, p);
    }

    let proseEl = document.querySelector('#proseContent');
    if(last_p_id != p.id)
    {
      let titleEl = document.querySelector('#proseTitle');
      titleEl.innerText = p.title;

      prepareDOM(proseEl, p);

      proseEl.querySelectorAll('svg').forEach(el => proseEl.removeChild(el));
      let installSVG = () => {
        let placeholder = document.createElementNS(SVG_NS, 'svg');
        proseEl.appendChild(placeholder);
        placeholder.outerHTML = p.imgData.svgStr;
        let imgEl = proseEl.querySelector('svg');

        let b = imgEl.viewBox.baseVal;
        let s = rg.draw(rg.line([b.x+100, b.y+1], [b.x+200,b.y+1], { stroke: hsluv.hpluvToHex([-30, 100, 50]) }));
        imgEl.appendChild(s);

        refreshImgLetters(imgEl, p.imgData.letters, {});
      }

      if(p.img && !p.imgData)
      {
        fetch(p.img).then(resp => resp.json()).then(d =>
        {
          if(last_p_id != p.id)
            return;

          for(var l in d.letters)
          {
            if(l.length> 1)
            {
              let t = d.letters[l]
              delete d.letters[l];
              l.split(/\s*/).forEach(l =>
                {
                  let o = Object.assign({}, t);
                  d.letters[l] = o;
                  t.x += 30;
                });
            }
          }
          p.imgData = d;

          installSVG()
        })
      }
      else if(p.imgData)
      {
        installSVG();
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

    let k_focus = findMaxLTE(p.i_p, o);
    let k_hover = !isNaN(hover_o) ? findMaxLTE(p.i_p, hover_o): null;;

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

      us.slice(p.i_p[k_hover], p.i_p[k_hover+1]).forEach(u =>
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
    us.slice(p.i_p[k_focus], p.i_p[k_focus+1]).forEach(u =>
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

    if (o === p.i_p[k_focus+1] - 1)
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

    let f = c => h => {
      h.name.split('').forEach(l => letterColor[l] = c);
    }
    nearHighlights.forEach(f(colors.sentence));
    highlights.forEach(f(colors.bright));
    hoverHighlights.forEach(f(colors.hover_bright));

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

      let els = prepareLetterOverlay(p, letterColor, true, false);
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

        let els = prepareLetterOverlay(figure, letterColor, highlightFigure, true);
        els.forEach(el => svg.appendChild(el));
      }
    }

    if(p.img && p.imgData)
    {
      let imgEl = proseEl.querySelector('svg');

      refreshImgLetters(imgEl, p.imgData.letters, letterColor);
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

      let i = parseInt(e.srcElement.dataset.i);
      if(isNaN(i) && e.srcElement.attributes.pref)
      {
        i = parseInt(e.srcElement.parentElement.dataset.i);
      }
      if(!isNaN(i))
      {
        forCancel = window.requestAnimationFrame(() => {
          present(o, p, i, true);
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

      let i = parseInt(e.srcElement.dataset.i);
      if(!isNaN(i))
      {
        window.requestAnimationFrame( () => {
          forClick = false;
          present(i, p);
        });
      }
    }
  }

  return {present, proxy};
}

let zimbirti = {};

function canPresentPage(i_book, id) {
  let ps = books[i_book];
  if(!ps) return false;

  if(!zimbirti[i_book])
  {
    let n = {}
    ps.forEach((p, i) => n[p.id] = i);
    zimbirti[i_book] = n;
  }

  let i_page = zimbirti[i_book][id];
  if(typeof i_page === 'undefined')
  {
    return false;
  }
  else
  {
    return true;
  }
}

function presentPage(i_book, id) {
  let ps = books[i_book];

  let i_page = zimbirti[i_book][id];

  document.querySelector('#coverPage').style['display'] = 'none';
  document.querySelector('#container').style['display'] = 'flex';

  let el = document.querySelector('#bookTitle');
  el.innerText = 'Elements Book ' + (i_book) + ' - ' + books.descs[i_book-1];

  let i_p = Math.min(ps.length-1, i_page);
  ground.present(null, ps[i_p]);

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
      openPage(i_book, ps[i_p].id);
    }
    else if(e.key == "x")
    {
      i_p = (i_p+1) % ps.length;
      openPage(i_book, ps[i_p].id);
    }
    else if(e.key == "h")
    {
      let s = document.querySelector('#proseContent svg');
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

  document.querySelector('#prev-page').ontouchend = (e) =>
  {
    e.preventDefault();
    i_p = (i_p-1+ps.length) % ps.length;
    openPage(i_book, ps[i_p].id);
  }

  document.querySelector('#next-page').ontouchend = (e) =>
  {
    e.preventDefault();
    i_p = (i_p+1) % ps.length;
    openPage(i_book, ps[i_p].id);
  }

  document.querySelector('#prev-page').onmousedown = (e) =>
  {
    i_p = (i_p-1+ps.length) % ps.length;
    openPage(i_book, ps[i_p].id);
  }

  document.querySelector('#next-page').onmousedown = (e) =>
  {
    i_p = (i_p+1) % ps.length;
    openPage(i_book, ps[i_p].id);
  }
}

function presentCover() {
  document.querySelector('#coverPage').style['display'] = 'flex';
  document.querySelector('#container').style['display'] = 'none';
  document.onkeydown = undefined;
}

function openPage(i_book, id) {
  if(canPresentPage(i_book, id))
  {
    history.pushState(null, '', id);
    presentPage(i_book, id);
  }
  else
  {
    presentCover();
  }
}

function openCover()
{
  history.pushState(null, '', '/elements/');
  presentCover();
}

document.onclick = (e) => {
  let pref = e.srcElement.attributes.pref;
  if(!pref && e.srcElement.parentElement)
  {
    pref = e.srcElement.parentElement.attributes.pref;
  }

  if(pref)
  {
    if(pref.value == 'cover')
    {
      openCover();
    }
    else
    {
      let [i_book, _] = pref.value.split('.');
      if(isNaN(i_book))
      {
        console.error("unknown pref: ", pref.value);
      }
      else
      {
        openPage(i_book, pref.value)
      }
    }
  }
}

let ground;

window.onload = () => {

  const jss = create().setup(preset());

  const style_link = {
      color: colors.link,
      userSelect: 'none',
      cursor: 'pointer',
      '&:hover': {
        color: colors.link_hover
      }
    };

  const style = {
    link: style_link,
    '@global': {
      body: {
        color: colors.dim,
      },
    },
    helpTitle: {
      color: colors.make([320, 100, 40])
    },
    cover: {
      textAlign: 'right',
      width: 512,
      boxSizing: 'border-box',
      paddingLeft: 24,
      '& p': { fontSize: '0.9em' }
    },
    coverPage: {
      marginLeft: 'auto',
      width: 1024,
      boxSizing: 'border-box',
      padding: 12,
      display: 'flex',
      'flex-flow': 'row nowrap',
      '& h4': {
        color: colors.sentence,
      },
      '& a': {
        'text-decoration': 'underline',
        color: colors.make([0, 0, 40]),
      }
    },
    bookList: {
      width: 512,
      '& a': style_link,
      '& p': {
        marginLeft: 20
      },
    },
    container: {
      marginLeft: 'auto',
      width: 1024,
      display: 'flex',
      flexFlow: [['column', 'nowrap']],
    },
    header: {
      height: 96,
      flex: [[0, 0, 'auto']],
    },
    page: {
      flex: [[1, 1, 'auto']],
      display: 'flex',
      alignItems: 'stretch',
      flexDirection: 'row-reverse',
    },

    logo: {
      padding: [[15, 25]],
      fontSize: 40,
      textAlign: 'right',
      '& a': {
        cursor: 'pointer',
        userSelect: 'none',
      }
    },
    bookTitle: {
      fontWeight: 'bold',
      fontSize: 20,
      marginRight: 25,
    },

    proseHeading: {
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '3em',
    },
    pageNav: {
      padding: [[3, 6]],
      cursor: 'pointer',
      userSelect: 'none',
      fontWeight: 'bold',
    },
    proseTitle: {
      marginRight: 'auto',
      fontWeight: 'bold',
      fontSize: '1.2em',
      color: colors.sentence,
    },

    prose: {
      boxSizing: 'border-box',
      width: 512,
      padding: [[12, 12, 62, 12]],
      '& a': {
        ...style_link,
        display: 'inline-block'
      },
      '& p': {
        lineHeight: '2em',
        marginBottom: '2em',
      },
      '& svg': {
        position: 'fixed',
        right: 562,
        top: 146,
      }
    },

    proseMovement: {
      position: 'fixed',
      bottom: 0,
      right: 0,
      flex: '0 0 auto',
      height: 50,
      width: 512,
      display: 'flex',
      alignItems: 'stretch',
      color: 'black',
      cursor: 'pointer',
      userSelect: 'none',
    },
    moveBack: {
      width: '33%',
      transition: 'color 0.3s ease',
    },
    moveOn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'right',
      height: 50,
      width: '67%',
      transition: 'color 0.3s ease',
    },

    figure: {
      width: 512,
      height: 512,
      position: 'fixed',
      right: 512,
      top: 96,
      transition: 'all 1s ease',
    },

    name: {
      fontFamily: 'Nale',
      transition: 'color 0.2s ease',
    },
    sentence: {
      transition: 'color 0.2s ease',
    }

  };
  const sheet = jss.createStyleSheet(style);
  sheet.attach();

  let cs = sheet.classes;
  let html_container = `
<div id="container" class="${cs.container}" style="display: none">
  <div class="${cs.header}">
    <div class="${cs.logo}"><span class="${cs.bookTitle}" id="bookTitle"></span><a pref="cover"><span style="color: ${colors.dim}">Euc</span><span style="color: ${colors.sentence}">li</span><span style="color: ${colors.bright}">d</span></a></div>
  </div>
  <div class="${cs.page}">
    <svg id="figure" class="${cs.figure}" viewbox="0 0 512 512"></svg>
    <div class="${cs.prose}">
      <div class="${cs.proseHeading}">
        <div id="proseTitle" class="${cs.proseTitle}"></div>
        <div class="${cs.pageNav} ${cs.link}" id="prev-page">before</div>
        <div class="${cs.pageNav} ${cs.link}" id="next-page">after</div>
      </div>
      <div id="proseContent"></div>
    </div>
  </div>
  <div class="${cs.proseMovement}">
    <a id="move-back" class="${cs.moveBack}"></a>
    <a id="move-on" class="${cs.moveOn}"></a>
  </div>
</div>`;

  let html_cover = `
<div id="coverPage" class="${cs.coverPage}" style="display: none">
  <div class="${cs.bookList}">
<h4>Book 1 - Fundamentals of Plane Geometry Involving Straight-Lines</h4>
<p>
Start with <a pref="1.d">Definitions</a> or <a pref="1.1">First proposition</a>.
<br>
Interesting proofs:
<a pref="1.43">Complements in parallelograms</a>,
<a pref="1.47">Pythagorean theorem</a>
</p>
<h4>Book 2 - Fundamentals of Geometric Algebra</h4>
<p>
Start with <a pref="2.d">Definitions</a> or <a pref="2.1">First proposition</a>.
<br>
Interesting construction:
<a pref="2.11">Golden section</a>
</p>
<h4>Book 3 - Fundamentals of Plane Geometry Involving Circles</h4>
<p>
Start with <a pref="3.d">Definitions</a> or <a pref="3.1">First proposition</a>.
<br>
Interesting propositions:
<a pref="3.20">Angles at center and circumference</a>,
<a pref="3.36">Relations of lines from outside a circle</a>
</p>
<h4>Book 4 - Construction of Rectilinear Figures In and Around Circles</h4>
<p>
Start with <a pref="4.d">Definitions</a> or <a pref="4.1">First proposition</a>.
<br>
Interesting construction: <a pref="4.11">Regular Pentagon</a>
</p>
<h4>Book 5 - Proportion</h4>
<p>
Start with <a pref="5.d">Definitions</a> or <a pref="5.1">First proposition</a>.
<br>
Interesting proof:
<a pref="5.23">Commutativity of multiplication</a>
</p>
<h4>Book 6 - Similar Figures</h4>
<p>
Start with <a pref="6.d">Definitions</a> or <a pref="6.1">First proposition</a>.
<br>
Interesting propositions:
<a pref="6.19">Ratios of similar areas</a>,
<a pref="6.30">Solution of a quadratic equation</a>
</p>
<h4>Book 7 - Elementary Number Theory</h4>
<p>
Start with <a pref="7.d">Definitions</a> or <a pref="7.1">First proposition</a>.
<br>
Interesting propositions: <a pref="7.2">Greatest common divisor algorithm</a>
</p>
<h4>Book 8 - Continued Proportion</h4>
<p>
Start with <a pref="8.1">First proposition</a>.
<br>
Interesting proof: <a pref="8.10">Prime factors in series</a>
</p>
<h4>Book 9 - Applications of Number Theory</h4>
<p>
Start with <a pref="9.1">First proposition</a>.
<br>
Interesting proof: <a pref="9.20">Infinity of primes</a>
</p>
<h4>Book 10 - Incommensurable Magnitudes</h4>
<p>
In progress...
</p>
<p>
Start with <a pref="10.d1">Definitions I</a>.
<br>
Interesting proof: <a pref="10.1">Method of exhaustion</a>
</p>
<br>
<h3 class="${cs.helpTitle}">On the next page:</h3>
<p>Read on a wide screen.</p>
<p><span style="display:inline-block;background:#474747;width:30px;height:.8em;margin-bottom:-0.2em;"></span><span style="display:inline-block;background:#777;width:60px;height:.8em;margin-bottom:-0.2em;"></span> moves highlight.</p>
<p>Alternatively, one can use right/left or j/k on keyboard.</p>
  </div>
  <div class="${cs.cover}">
    <h1>Euclid's Elements</h1>
    <h3>with <span style="color: #777777;">high</span><span style="color: #e2e2e2;">lights</span></h3>
    <h4 style="background-color:#1b1b1b;color:#000;margin-top:-1.5em">Ibrahim S.</h4>
    <svg style="margin-top:-50px;" width="400px" height="400px">${smpl}</svg>
    <br>
    <p>"As for ancient geometrical analysis and modern algebra, even apart from the fact that they deal only in highly abstract matters that seem to have no practical application, the former is so closely tied to the consideration of figures that it is unable to exercise the intellect without greatly tiring the imagination, while in the latter case one is so much a slave to certain rules and symbols that it has been turned into a confused and obscure art that bewilders the mind instead of being a form of knowledge that cultivates it."</p>
    <p>- R. Descartes, A Discourse on the Method, 1637</p>
    <br>
    <p>Based on <a target="new" href="http://farside.ph.utexas.edu/books/Euclid/Euclid.html">this translation.</a></p>
    <p><a href="https://ibrahim129.typeform.com/to/u0jOG4VD">Contact</a> for feedback.</p>
  </div>
</div>`;

  document.body.innerHTML = html_container + html_cover + document.body.innerHTML;

  const svg = document.getElementById('figure');
  window.rg = makeRG(svg);

  window.unfoldBooks();
  window.includeLatest();

  ground = makeGround(rg, svg, cs);

  presentForLocation();
}

window.onpopstate = (e) => {
  presentForLocation();
}

let presentForLocation = () => {
  let m, re = /elements\/([^\/]+)/;
  if(m = location.pathname.match(re))
  {
    let id = m[1];
    let [i_book, _] = id.split('.');
    if(!isNaN(Number(i_book)) && canPresentPage(i_book, id))
    {
      presentPage(i_book, id);
    }
    else
    {
      presentCover();
    }
  }
  else
  {
    presentCover();
  }
}

function alignFigure(scroll_position) {
  let t, d;
  if(scroll_position > 0)
  {
    if(scroll_position > 95)
      t = 0;
    else
      t = 96;
  }
  else
  {
    t = 96 - scroll_position;
  }
  let h = Math.min(512, window.innerHeight - Math.min(96, t));
  let el = document.querySelector('#figure');
  el.style['top'] = t;
  el.style['width'] = h;
  el.style['height'] = h;
}

let last_known_scroll_position = 0;
let ticking = false;

function queueAlign() {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      alignFigure(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
}
window.addEventListener('scroll', queueAlign);

window.onresize = queueAlign;


let smpl = '<g><path d="M247.8602940116439 49.010575663913016 C265.16064912485797 45.60855330157036, 285.0994368540079 51.46618771370961, 302.7290319444347 56.36127869019214 C320.35862703486157 61.256369666674665, 338.047403647997 68.81224609385303, 353.6378645542049 78.3811215228082 C369.2283254604128 87.94999695176337, 383.89141854525604 100.24234154940251, 396.27179738168206 113.77453126392317 C408.6521762181081 127.30672097844382, 419.6918322978713 143.1512785419148, 427.9201375727609 159.57425980993213 C436.1484428476505 175.99724107794947, 442.2290074207118 194.24785766843544, 445.6416290310195 212.3124188720271 C449.05425064132714 230.37698007561877, 450.02784219598414 249.6317883958336, 448.39586723460707 267.9616270314822 C446.76389227323 286.29146566713075, 442.413057929885 305.1105707935211, 435.84977926275707 322.29145068591856 C429.28650059562915 339.472330578316, 420.0419746969626 356.3299457856233, 409.01619523183945 371.0469063858669 C397.9904157667163 385.76386698611054, 384.30660600947806 399.5253538857431, 369.6951024720182 410.5932142873803 C355.0835989345584 421.66107468901754, 338.35945818038374 430.85094671781263, 321.3471740070805 437.4540687956904 C304.3348898337773 444.0571908735681, 285.7989265543097 448.5709861391105, 267.62139743219905 450.21194675464665 C249.44386831008842 451.8529073701828, 230.21522748595652 450.8097965170808, 212.28199927441676 447.2998324889071 C194.348771062877 443.7898684607334, 176.28775470932337 437.46265405358395, 160.02202816296048 429.1521625856043 C143.7563016165976 420.8416711176246, 128.06728795133455 409.94220510584034, 114.68763999623945 397.43688368102914 C101.30799204114437 384.93156225621794, 89.2096156078083 369.860662994703, 79.74414043239 354.12023403673726 C70.27866525697169 338.37980507877154, 62.71879845596283 320.74219945268084, 57.89478894372965 302.9943099332349 C53.07077943149647 285.24642041378894, 50.57516661976367 266.06002081994984, 50.80008335899089 247.63289692006157 C51.02500009821811 229.2057730201733, 53.997942112000764 210.07220784905098, 59.24428937909295 192.43156653390528 C64.49063664618514 174.79092521875958, 72.46781177480928 157.28928215307812, 82.278166961544 141.7890490291874 C92.08852214827873 126.28881590529667, 104.42434070883537 111.62050217225612, 118.10642049950133 99.43016779056097 C131.7885002901673 87.23983340886582, 147.8715398372966 76.55995540684633, 164.37064570553974 68.64704273901646 C180.86975157378288 60.734130071186584, 203.12518733506482 55.210463849837424, 217.1010557089601 51.95269178358174 C231.07692408285538 48.69491971732606, 242.99235029921763 48.899338595760575, 248.2258559489114 49.10041034148236 C253.45936159860517 49.30148208720414, 248.46741569454917 49.818078461503625, 248.50208960712277 53.15912225791243 M243.70499653958774 49.3134060057277 C260.9502300036084 45.54025681391996, 281.1444196501165 50.70958177064514, 298.8320327573031 55.20367855566579 C316.51964586448975 59.69777534068644, 334.0786748913824 67.01494755432456, 349.83067518270747 76.2779867158516 C365.58267547403256 85.54102587737863, 380.682871711469 97.51391741813117, 393.3440345052537 110.78191352482801 C406.00519729903846 124.04990963152486, 417.22963662706286 139.6465454908175, 425.7976519454159 155.88596335603268 C434.36566726376896 172.12538122124786, 440.92049949367413 190.23358390114055, 444.7521264153721 208.2184207161192 C448.5837533370701 226.20325753109785, 450.04729267729545 245.43167578954365, 448.7874134756038 263.7949842459045 C447.5275342739121 282.1582927022654, 443.3991216121082 301.0857548282861, 437.19285120522227 318.3982714542845 C430.9865807983363 335.7107880802829, 422.2176759477294 352.7272602311561, 411.5497910342881 367.670084001895 C400.8819061208468 382.61290777263395, 387.5673254144234 396.6608949633127, 373.1855417245743 408.05521407871794 C358.8037580347252 419.44953319412315, 342.1611515447 429.08913533268344, 325.2590888951936 436.0359986943263 C308.3570262456872 442.9828620559691, 289.9347778535442 447.75278299970347, 271.77316582753593 449.73639424857515 C253.6115538015277 451.72000549744683, 234.28618881159704 451.04354463402575, 216.28941673914406 447.93766618755626 C198.29264466669107 444.83178774108677, 180.20659526970292 439.0334361729704, 163.7925333928181 431.1011235697581 C147.37847151593326 423.1688109665458, 131.43573430145585 412.5912926286525, 117.80504547783508 400.3437905682824 C104.17435665421432 388.0962885079122, 91.7923864994789 373.16018483914485, 82.00840045109354 357.6161112075371 C72.22441440270818 342.0720375759293, 64.27725815209486 324.7031881515036, 59.10112918752296 307.0793487786358 C53.925000222951056 289.455509405768, 51.14820415357612 270.2991088470292, 50.951626663662125 251.8730749703305 C50.755049173748134 233.44704109363184, 53.081839150765354 214.28288812082826, 57.92166424803901 196.5231455184438 C62.76148934531266 178.76340291605936, 70.46458597661059 161.05446434352152, 79.99057724730406 145.3146193560237 C89.51656851799753 129.5747743685259, 101.6259666859622 114.56526669426788, 115.07761187219984 102.08407559345696 C128.52925705843748 89.60288449264604, 144.36619376264022 78.6524360356277, 160.70044836472988 70.4274727511582 C177.03470296681954 62.2025094666887, 199.2579792846362 56.29518261805165, 213.08313948473779 52.734295886639956 C226.90829968483936 49.17340915522826, 238.52714998825184 48.99077411053094, 243.65140956533935 49.06215236268807 C248.77566914242686 49.13353061484519, 243.71995681520949 49.80718510829836, 243.82869694726296 53.16256539958269" stroke="#474747" stroke-width="1" fill="none"></path></g><g><path d="M50.061002892434495 249.89811227873395 C199.28486456113578 249.88126834577076, 348.4547843492222 249.85626515234406, 449.91289701905026 249.94283866925264 M50.01611572879029 250.00664039206677 C159.32330457453068 250.113303790088, 268.66795479938077 250.08983008118744, 449.96287798409776 250.0030041214356" stroke="#474747" stroke-width="1" fill="none"></path></g><g><path d="M88.08175716938786 132.47704647446622 C131.18427931002415 163.59846690585633, 173.90454847869205 194.88116178089606, 249.93522578871693 250.11717478867763 M88.18519263888409 132.42912696127812 C122.30260194207155 157.0579059663709, 156.21219456439124 181.85245477306984, 250.00034380031036 250.05151574085644" stroke="#474747" stroke-width="1" fill="none"></path></g><g><path d="M88.18986613364507 132.4325836536538 C174.49182445759033 174.30737695446905, 260.7999638169962 216.23868527190763, 330.13312596525634 249.9003383275389 M88.16733175951225 132.44894468186507 C140.69743158887778 158.14311240473336, 192.90295763072643 183.45454891710318, 329.92407574896373 250.0391354208042" stroke="#474747" stroke-width="1" fill="none"></path></g><g><path d="M188.11807155938695 59.85196065764699 C208.22955512170626 121.22839154926703, 228.05871899787428 182.4386328230831, 250.08950795059135 250.15955131263644 M188.13960352195224 59.730900454146536 C204.22853765705068 109.0399573554351, 220.20644953056996 158.2695985961, 249.96592721291032 250.072436971378" stroke="#474747" stroke-width="1" fill="none"></path></g><g><path d="M188.35387023989622 59.7180289722298 C218.2123627929145 100.01577172396159, 248.41925961882856 140.51651144016844, 330.13407761684266 249.9909430986284 M188.26036063538714 59.72992437128267 C233.3969083750867 120.6890710611157, 278.87968550763674 181.55090366641224, 330.0462866125929 250.0303549379287" stroke="#474747" stroke-width="1" fill="none"></path></g><g><path d="M349.82633447220394 76.62910817413047 C313.5761791829147 139.98300270178407, 277.06732690459063 202.9145698828567, 249.95701011603342 249.87438462985733 M349.93293365519753 76.70555866859159 C326.5187713130952 117.52326509870828, 302.9511644981743 158.06023671266976, 250.00340007544185 249.97447811854994" stroke="#474747" stroke-width="1" fill="none"></path></g><g><path d="M349.8338001958348 76.75403721884638 C343.6191669159677 132.3173216270281, 337.4433396418096 188.01846622166175, 330.1492137607079 250.07035956437255 M349.91503797642224 76.79761257735305 C345.1132290906158 117.98899701125448, 340.46419395638935 159.04500048338213, 330.0164288386653 249.90065457309967" stroke="#474747" stroke-width="1" fill="none"></path></g><g><path d="M350.1034534137371 423.1624234951208 C322.16242726484586 375.3576644379955, 294.53539667616036 327.2181927921869, 249.91951016357677 249.99553353052272 M349.91301798139483 423.27720126258225 C314.51433715802443 361.6492508144532, 278.94577223525033 300.16576299800107, 250.03622866718553 249.92384869731782" stroke="#474747" stroke-width="1" fill="none"></path></g><g><path d="M349.9590380419947 423.0421390882468 C343.6491839129406 368.9713207176595, 337.4089375786066 315.1257559483497, 330.1279398316499 250.14078879264076 M350.02742741994274 423.16428212132263 C343.4788419671113 365.09851808885, 336.70566913495907 306.9244644097201, 330.0700987195451 249.90935678246035" stroke="#474747" stroke-width="1" fill="none"></path></g><g><path d="M311.9590786360639 440.16555645182257 C291.80559388138414 378.8953964202782, 272.08559567436697 317.3031764830231, 250.06533903922724 249.99465626583182 M311.80193622334355 440.18824283565726 C295.7679079579258 391.1404201089201, 279.97491355104387 342.0774777901684, 249.96470200881257 250.05255271464713" stroke="#474747" stroke-width="1" fill="none" stroke-dasharray="5 4"></path></g><g><path d="M311.9423495280135 440.02222145565753 C316.0549969162609 395.67412039300405, 320.21892002922726 351.4973868040722, 330.04961086013554 249.91121761743355 M311.7175894243593 440.2696000735023 C316.3034498546672 393.9865083240272, 320.67130820671815 347.59485346567664, 329.9836832936024 249.99795576162046" stroke="#474747" stroke-width="1" fill="none"></path></g><g><path d="M233.64538657067567 238.31577588385397 C234.65186829205956 236.37245609044885, 236.850973396084 234.832102686941, 238.75389929097676 233.54169181483505 C240.65682518586954 232.2512809427291, 242.86754406236824 231.13982515658876, 245.06294194003235 230.57331065121826 C247.25833981769645 230.00679614584777, 249.6601000997905 229.909411272974, 251.92628655696146 230.14260478261218 C254.19247301413242 230.37579829225035, 256.5916572563242 230.99829487549485, 258.660060683058 231.97247170904728 C260.72846410979184 232.94664854259972, 262.7584657305068 234.3489652128261, 264.3367071173645 235.98766578392684 C265.91494850422214 237.62636635502759, 267.19630573130667 239.7163361331415, 268.129509004204 241.80467513565168 C269.06271227710135 243.89301413816185, 269.62578613419066 247.1518123215965, 269.9359267547486 248.5176997989879 C270.24606737530655 249.8835872763793, 269.98128173208465 249.752949966498, 269.99035272755185 250 M233.89724773696707 238.33697460060142 C234.9228712945341 236.41033808604956, 236.94019087252752 234.72840555018104, 238.82018450427685 233.44174873853004 C240.70017813602618 232.15509192687904, 242.98398687225765 231.19489773453145, 245.17720952746308 230.6170337306955 C247.3704321826685 230.03916972685957, 249.70000071461902 229.7381445316628, 251.97952043550941 229.97456471551445 C254.2590401563998 230.21098489936608, 256.7746105946005 231.01355737342317, 258.85432785280534 232.03555483380526 C260.93404511101016 233.05755229418736, 262.90766198923785 234.46102472566855, 264.4578239847383 236.106549477807 C266.00798598023874 237.75207422994544, 267.2204248873515 239.83223713983747, 268.15529982580813 241.90870334663586 C269.09017476426476 243.98516955343425, 269.7612314651874 247.21679727637002, 270.067073615478 248.56534671859737 C270.37291576576865 249.91389616082472, 270.0031395422062 249.76089111976623, 269.99035272755185 250" stroke="#474747" stroke-width="10" fill="none"></path></g><g><path d="M249.9499401487103 249.92572498399616 C208.76517699158373 220.22338814014566, 167.88339087381746 190.56623784136787, 88.27561487174367 132.55944754826078 M249.9161624989452 250.0257094372099 C199.1992957531206 213.07258362052832, 148.3636467218681 176.23708554482727, 88.14395691478968 132.45680277030922" stroke="#777777" stroke-width="1" fill="none"></path></g><g><path d="M250.06780771121169 250.03136794318158 C275.63128771006257 250.1954529391522, 301.6574912791881 250.09447714910337, 329.92742958501924 250.18048258956313 M250.01217203271938 249.9615951034607 C274.322752063964 250.01909519038958, 298.3955395141406 250.09952126188176, 330.0797007192398 250.04495260526943" stroke="#777777" stroke-width="1" fill="none"></path></g><g><path d="M243.72515467287673 230.98815493126753 C245.66568170357436 230.03842293015074, 248.2693838990892 230.04743348373273, 250.5571808138073 230.1233548768004 C252.84497772852538 230.19927626986805, 255.30743950132853 230.59800576877063, 257.4519361611852 231.44368328967357 C259.59643282104184 232.2893608105765, 261.7273842358519 233.69156287369083, 263.4241607729473 235.19742000221808 C265.1209373100427 236.70327713074533, 266.58052198134686 238.48411296325855, 267.6325953837575 240.47882606083715 C268.6846687861682 242.47353915841575, 269.3413776657394 245.5788362644959, 269.73660118741117 247.1656985876897 C270.13182470908293 248.7525609108835, 269.9593806260586 249.52761643128161, 270.00393651378806 250 M243.78181325061357 230.9399335443159 C245.75934237613 229.95029648056376, 248.48542917790448 229.82117934087876, 250.7492866501936 229.9195069570667 C253.01314412248271 230.01783457325462, 255.26045931287354 230.6575613550848, 257.3649580843483 231.52989924144356 C259.46945685582307 232.40223712780232, 261.6540777238041 233.66211619646785, 263.37627927904214 235.15353427521922 C265.09848083428017 236.64495235397058, 266.61868650760766 238.4561516730338, 267.6981674157764 240.47840771395173 C268.7776483239452 242.50066375486966, 269.468869878386 245.70013847305205, 269.8531647280546 247.28707052072676 C270.2374595777232 248.87400256840147, 269.9788078828325 249.5478450867878, 270.00393651378806 250" stroke="#e2e2e2" stroke-width="11" fill="none"></path></g><g><path d="M250.1121985968174 250.10595280525447 C227.5043341457763 181.5046939851405, 205.55342509492897 112.93664108452714, 188.1911985773297 59.89193776757983 M250.0212574527726 249.91580659982628 C234.04321114501423 200.88058605481493, 218.04683863032858 151.6053459039292, 188.13042034270333 59.82689810103372" stroke="#e2e2e2" stroke-width="2" fill="none"></path></g><g><path d="M249.82528114601632 250.0982785884085 C281.0534040010727 250.02569889527288, 312.3659531865832 250.0592420541833, 330.1943868807654 250.16095976214277 M250.02192321005467 249.97437692512653 C270.6592257513396 250.01826828669562, 291.4574693522709 250.02408620985608, 330.0755530606434 249.92515801080916" stroke="#e2e2e2" stroke-width="2" fill="none"></path></g><text font-family="Nale" font-size="24px" fill="#474747" x="32.65625" y="261.5">A</text><text font-family="Nale" font-size="24px" fill="#777777" x="70.85285112501052" y="132.67294954150537">B</text><text font-family="Nale" font-size="24px" fill="#e2e2e2" x="175.91144487501052" y="55.1886967409693">C</text><text font-family="Nale" font-size="24px" fill="#474747" x="452.890625" y="261.5">D</text><text font-family="Nale" font-size="24px" fill="#e2e2e2" x="235.546875" y="273">E</text><text font-family="Nale" font-size="24px" fill="#e2e2e2" x="333.1796875" y="247.01">F</text><text font-family="Nale" font-size="24px" fill="#474747" x="351.44531249999994" y="74.49491924311225">G</text><text font-family="Nale" font-size="24px" fill="#474747" x="348.55468749999994" y="447.35508075688773">H</text><text font-family="Nale" font-size="24px" fill="#474747" x="310.35808637498945" y="464.3613032590307">K</text>';
