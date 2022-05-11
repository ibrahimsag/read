import rough from 'roughjs';
import hsluv from 'hsluv';
import {create} from 'jss';
import preset from 'jss-preset-default';

import v2 from '../vec2.js';

import style from './style.js';
import html from './html.js';

let colors = {
  bright: hsluv.hsluvToHex([0, 0, 90]),
  near: hsluv.hsluvToHex([0, 0, 50]),
  sentence: hsluv.hsluvToHex([0, 0, 60]),
  dim: hsluv.hsluvToHex([0, 0, 40]),
  link: hsluv.hpluvToHex([140, 100, 40]),
  link_hover: hsluv.hpluvToHex([140, 100, 60]),
  hover: hsluv.hpluvToHex([320, 100, 50]),
  hover_bright: hsluv.hpluvToHex([320, 100, 80]),
  make: hsluv.hpluvToHex,
};

const SVG_NS = 'http://www.w3.org/2000/svg';

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

/**
 * Create DOM node, set attributes.
 *
 * @param {String} name
 * @param {Object} [attrs]
 * @return Element
 */
function de(name, attrs)
{
  const element = document.createElement(name)

  if(attrs)
  {
    for (const attr in attrs)
    {
      if(attr == 'textContent')
        element.textContent = attrs[attr];
      else
        element.setAttribute(attr, attrs[attr])
    }
  }

  return element
}
function se(name, attrs)
{
  const element = document.createElementNS(SVG_NS, name)

  if(attrs)
  {
    for (const attr in attrs)
    {
      if(attr == 'textContent')
        element.textContent = attrs[attr];
      else
        element.setAttribute(attr, attrs[attr])
    }
  }

  return element
}

function hsl(...args)
{
  if(args.length === 1)
  {
    return hsluv.hsluvToHex([0, 0, args[0]]);
  }
  else if(args.length === 2)
  {
    return hsluv.hsluvToHex([args[0], 100, args[1]]);
  }
  else if(args.length === 3)
  {
    return hsluv.hsluvToHex(args);
  }
  else
  {
    console.error("# arguments for hsluv", args);
  }
}

function hpl(...args)
{
  if(args.length === 1)
  {
    return hsluv.hpluvToHex([0, 0, args[0]]);
  }
  else if(args.length === 2)
  {
    return hsluv.hpluvToHex([args[0], 100, args[1]]);
  }
  else if(args.length === 3)
  {
    return hsluv.hpluvToHex(args);
  }
  else
  {
    console.error("# arguments for hpl", args);
  }
}


function makeRG()
{
  const rsvg = rough.svg(de('svg'));

  const roughopts = { roughness: 0.1, stroke: colors.dim, strokeWidth: 1 };

  function curve(vs, o)
  {
    return rsvg.generator.curve(vs, {...roughopts, ...o});
  }

  function polygon(vs, o)
  {
    return rsvg.generator.polygon(vs, {...roughopts, ...o});
  }

  function line(a, b, o)
  {
    return rsvg.generator.line(a[0], a[1], b[0], b[1], {...roughopts, ...o});
  }

  function circle(c, d, o)
  {
    return rsvg.generator.circle(c[0], c[1], d, {...roughopts, ...o});
  }

  function anglecurve(a, o, b)
  {
    let [d1, d2] = [a, b].map(x => v2.sub(x, o)).map(d => v2.scale(d, 1/v2.len(d)));

    let det = d1[0]*d2[1] - d1[1]*d2[0];
    if(det < 0)
    {
       [d2, d1] = [d1, d2];
    }

    let alpha = Math.acos(v2.dot(d1, d2));
    let s = 20;
    if(alpha < Math.PI/4)
      s = 30;

    let samples = [0, 0.25, 0.5, 0.75, 1];
    if(alpha > Math.PI / 2)
      samples = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
    let ps = samples.map(a => v2.add(o, v2.scale(v2.rot(d1, alpha*a), s)));
    return curve(ps, {strokeWidth: 10});
  }

  function angle(a, o, b)
  {
    return [anglecurve(a, o, b), line(o, a), line(o, b)];
  }

  function arc(c, a, b, o)
  {
    let ca = v2.sub(a, c);
    let cb = v2.sub(b, c);
    let d = v2.len(ca);
    let uca = v2.scale(ca, 1/d);
    let start = (Math.atan2(uca[1], uca[0]) + Math.PI*2) % (Math.PI * 2);
    let ucb = v2.scale(cb, 1/d);
    let end = (Math.atan2(ucb[1], ucb[0]) + Math.PI*2) % (Math.PI*2);
    if(start > end)
      end += Math.PI * 2;
    return rsvg.generator.arc(c[0], c[1], d*2, d*2, start, end, false, {...roughopts, ...o});
  }

  function gnomon(c, d, e)
  {
    return arc(c, d, e, {strokeLineDash: [5, 4]});
  }

  function tick(pt)
  {
    let w = [0, 5];
    let a = v2.sub(pt, w), b = v2.add(pt, w);
    return line(a, b);
  }

  function makeHighlight(figure, layer, h) {
    let shapes;
    if(h.typ === 'point')
    {
      shapes = [circle(figure.points[h.name], 5, { strokeWidth: 2 })];
    }
    else if(h.typ == 'line')
    {
      let f = 0, l = h.name.length-1;
      shapes = [line(figure.points[h.name[f]], figure.points[h.name[l]])];
    }
    else if(h.typ == 'arcc')
    {
      let c = h.arg;
      if(/[a-zA-Z]/.test(c))
      {
        let center = figure.points[c];
        shapes = [arc(center, figure.points[h.name[h.name.length-1]], figure.points[h.name[0]])];
      }
      else
      {
        return undefined;
      }
    }
    else if(h.typ == 'arc')
    {
      let c = h.arg;
      if(/[a-zA-Z]/.test(c))
      {
        let center = figure.points[c];
        shapes = [arc(center, figure.points[h.name[0]], figure.points[h.name[h.name.length-1]])];
      }
      else
      {
        return undefined;
      }
    }
    else if(h.typ == 'circle')
    {
      let c = h.arg;
      if(/[a-zA-Z]/.test(c))
      {
        let center = figure.points[c];
        let a = figure.points[h.name[0]];
        shapes = [circle(center, 2 * v2.dist(center, a))];
      }
      else
      {
        return undefined;
      }
    }
    else if(h.typ == 'polygon')
    {
      let ns = h.name;
      let points;
      if (h.name.length == 2)
      {
        let ms = figure.polygonl[h.name];
        if(!ms)
        {
          console.log(ns, 'needs polygonl');
          return [];
        }

        if(typeof ms === "string")
          points = ms.split('').map(l => figure.points[l]);
        else if(ms && ms.join)
          points = ms;
        else
        {
          console.error('wtf', ns, ms);
        }
      }
      else
      {
        points = ns.split('').map(l => figure.points[l]);
      }
      shapes = [polygon(points)];
    }
    else if(h.typ == 'angle')
    {
      let [a, o, b] = h.name.split('').map(l => figure.points[l]);
      shapes = angle(a, o, b);
    }
    else if(h.typ == 'magnitude')
    {
      let i_begin, i_end;
      if(h.name.length == 1)
      {
        i_begin = figure.indices[h.name[0]];
        i_end = figure.indices[h.name[0] + 'e'];
      }
      else if(h.name.length > 1)
      {
        i_begin = figure.indices[h.name[0]];
        i_end = figure.indices[h.name[h.name.length-1]];
      }
      else
      {
        console.error('unknown magnitude');
      }

      if(i_begin > i_end)
        [i_begin, i_end] = [i_end, i_begin]

      shapes = figure.ticks.slice(i_begin, i_end+1).map(tick);
      shapes.push(line(figure.ticks[i_begin], figure.ticks[i_end]));
    }
    else if(h.typ == 'given' && figure.given && figure.given[h.name])
    {
      shapes = figure.given[h.name].map(s => ({ ...s, options: {...s.options} }));
    }
    else
    {
      console.error('Unknown highlight: ', h.typ, h.name);
      return [];
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
            s.options["stroke"] = colors.near;
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

function makePR(rg, w, cs)
{
  let proxy = {};

  function prepareMags(section)
  {
    let mags = section.mags;
    let last_pos = [0, 0];
    let pos = [0, 0];
    section.ticks = [];
    section.indices = {};

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
        pos = v2.add(last_pos, v2.s(v2.y, mag.v));
        last_pos = pos;
      }

      if(mag.p || mag.v)
      {
        section.shapes.push(rg.tick(pos));
        section.indices[mag.l] = section.ticks.length;
        section.ticks.push(pos);
        section.letters[mag.l] = [2.9, 2];
      }
      else if(mag.m)
      {
        section.letters[mag.l] = [1, 2];
        section.indices[mag.l] = section.ticks.length - 1;
      }
      else
      {
        section.letters[mag.l] = [1, 2];
        section.indices[mag.l] = section.ticks.length - 1;
      }
      section.points[mag.l] = pos;

      if(mag.m)
      {
        let n = mag.n ? mag.n : 1;
        for(var k = 0; k < n; k++)
        {
          let prev_pos = pos;
          pos = v2.add(prev_pos, v2.s(v2.x, mag.m));
          section.shapes.push(rg.tick(pos));
          section.shapes.push(rg.line(prev_pos, pos));
          section.ticks.push(pos);
          section.indices[mag.l + 'e'] = section.ticks.length - 1;
        }
      }
    }

    return section;
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
      let dir = v2.add(p1, v2.scale(v2.sub(p2, p1), r));

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

  function prepareLetterOverlay(figure, letterColor, smallLetters)
  {
    let shapes = [];
    for(var i in figure.letters)
    {
      if(!figure.points[i])
      {
        console.error(i, 'need point for letter');
        continue;
      }

      let letter = figure.letters[i];
      let shouldBeSmall = smallLetters || (figure.smallletters && figure.smallletters.indexOf(i) > -1);

      let fillcolor = colors.dim;
      if(letterColor[i] === 'bright')
      {
        fillcolor = colors.bright;
      }
      else if(letterColor[i] === 'sentence')
      {
        fillcolor = colors.sentence;
      }
      else if(letterColor[i] === 'hover_bright')
      {
        fillcolor = colors.hover_bright;
      }
      let pos = v2.add(figure.points[i], figure.letterOffsets[i]);
      let attrs = {
        'font-family': 'Nale',
        'font-size': shouldBeSmall ? 16 : 24,
        'fill': fillcolor,
        'textContent': i,
        'x': pos[0],
        'y': pos[1],
      };
      var el = se('text', attrs);
      var el_ = se('text', {...attrs, stroke: hsl(0),
        'stroke-width':5, 'stroke-linecap': 'round',
        'stroke-linejoin': 'round'});

      shapes.push(el_, el);
    }
    return shapes;
  }

  function prepareProse(section)
  {
    let lastSeenFigureIndex = 0;
    section.i_count = 0;
    section.i_p = [];
    section.paragraphs = section.prose.split('\n\n').map(paragraphProse =>
      {
        return paragraphProse.split('\n').map(sentenceProse =>
          {
            let k = section.i_p.length;
            section.i_p.push(section.i_count);
            let i_RE = /(\{[^\}]*\}|\[Prop[^\]]*\])/g;
            let sentenceParts = sentenceProse.split(i_RE);
            let seen = false;
            let parts = sentenceParts.filter(x=>x).map(part =>
              {

                let nameRE = /\{([a-zA-Z]+)\}/;
                let nm = part.match(nameRE);
                let overlayRE = /\{([a-zA-Z]+) ([a-z]+)( [a-zA-Z])?\}/;
                let om = part.match(overlayRE);
                let figureRE = /\{figure ([0-9])\}/;
                let fm = part.match(figureRE);
                let propsRE = /\[Props. [^\]]*\]/;
                let rsm = part.match(propsRE);
                let propRE = /\[Prop. ([0-9]+.[0-9]+)([^\]]*)\]/;
                let rm = part.match(propRE);
                let r;

                if(rm)
                {
                  let pref = rm[1], rest = rm[2].split(', ');
                  if(rest[0] == ' lem. II')
                    pref += '-lemII'
                  else if(rest[0] == ' lem. I')
                    pref += '-lemI'
                  else if(rest[0] == ' lem.')
                    pref += '-lem'
                  r = { part: { prefs: [{ prefName: rm[0], pref }]} };
                }
                else if(rsm)
                {
                  let n = 0;
                  let ls = rsm[0].split(', ').map(s => {
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
                else if(nm)
                {
                  seen = true;
                  let name = nm[1];
                  r = { part: { name } };
                }
                else if(om)
                {
                  seen = true;
                  r = { part: { name: om[1], typ: om[2] }};
                  if(om[3])
                    r.part.arg = om[3].trim();
                }
                else {
                  r = { part: { text: part } };
                }

                if(nm || om)
                {
                  r.i = section.i_count;
                  r.k = k;
                  r.lastSeenFigureIndex = lastSeenFigureIndex;
                  section.i_count++;
                }

                return r;
              });
            if(!seen)
              section.i_count++;
            return {parts, k, seen};
          });
      });
    section.i_p.push(section.i_count);
  }

  function scrollToSentenceIfNecessary(el)
  {
    setTimeout(() => {

      let pt = window.scrollY, ph = window.innerHeight - 50;
      let p = { t: pt, b: pt + ph}
      let c = { t: el.offsetTop, b: el.offsetTop + el.offsetHeight };
      if((p.t > (c.t - 10)) || (p.b < (c.b + 10)))
      {
        let t = Math.max(c.t - ph * 0.38, 76);
        window.scrollTo(0, t);
      }
    })
  }

  function prepareDOM(section)
  {
    let handles = { r: [], s: [] };
    while(w.prose.firstChild)
      w.prose.removeChild(w.prose.firstChild);

    section.paragraphs.forEach(sentences =>
    {
      let paragraphEl = de('p');
      sentences.forEach(a =>
      {
        let {parts, k, seen} = a;

        let sentenceEl = de('span');
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
              let a = de('a');
              a.setAttribute('pref', l.pref);
              a.innerText = l.prefName;
              return a;
            }

            sentenceEl.append(...part.prefs.map(f))
          }
          else if(part.name)
          {
            let el = de('span');
            el.innerText = part.name;
            el.className = cs.name;
            el.dataset.i = i;
            sentenceEl.append(el);
            r = {part, i, k, lastSeenFigureIndex, el};
            handles.r.push(r);
          }
        }
        parts.forEach(prepPart);

        sentenceEl.dataset.i = section.i_p[k+1] - 1
        if(!seen)
        {
          handles.r.push(null);
        }

        handles.s.push({sentenceEl, k});
        paragraphEl.append(sentenceEl, ' ');
      });
      w.prose.appendChild(paragraphEl);
    })
    return handles;
  }

  let handles;
  let tie = { s: [], r: [] };
  let last_present;
  let last_section_id = -1;
  function present(ri, section, ri_hover, no_scroll)
  {
    last_present = {ri, section, ri_hover};
    if(ri == null)
    {
      ri = section.i || 0;
    }
    section.i = ri;

    if(!section.paragraphs)
    {
      prepareProse(section);
    }

    if(!section.prepared)
    {
      if(section.figures)
      {
        section.figures.forEach(figure => {
          prepareFigure(figure, true);
        });
      }
      else
      {
        prepareFigure(section, false);
      }
    }

    if(ri < 0)
    {
      return present(section.i_count-2, section);
    }
    else if (ri >= section.i_count-1 && section.i_count > 0)
    {
      return present(0, section);
    }

    if(last_section_id != section.id)
    {
      if(w.title)
        w.title.innerText = section.title;

      handles = prepareDOM(section);
    }

    while(tie.s.length > 0)
    {
      let v = tie.s.pop();
      v.sentenceEl.style['color'] = colors.dim;
    }

    while(tie.r.length > 0)
    {
      let a = tie.r.pop();
      if(!a) continue;
      a.el.style['color'] = colors.dim;
    }

    tie.s = []
    tie.r = [];
    tie.near = [];
    tie.hover = [];
    tie.center = [];
    tie.fi = 0;
    tie.hfi = 0;

    let si = findMaxLTE(section.i_p, ri);

    let sh = handles.s[si];
    sh.sentenceEl.style['color'] = colors.sentence;
    tie.s.push(sh);
    if(!no_scroll)
    {
      scrollToSentenceIfNecessary(sh.sentenceEl);
    }

    let seenMarks = {};
    handles.r.slice(section.i_p[si], section.i_p[si+1]).forEach(rh =>
    {
      if(!rh) return;
      rh.el.style['color'] = colors.sentence;
      let part = rh.part, hash = JSON.stringify(part);
      if(!seenMarks[hash])
      {
        tie.near.push(part);
        seenMarks[hash] = true;
      }
      tie.r.push(rh);
    });

    if(handles.r[ri])
    {
      let rh = handles.r[ri];
      tie.center.push(rh.part);
      tie.fi = rh.lastSeenFigureIndex;
      rh.el.style['color'] = colors.bright;
      tie.r.push(rh);
    }

    let si_hover = !isNaN(ri_hover) ? findMaxLTE(section.i_p, ri_hover): null;;

    if (si_hover!=null)
    {
      let sh_hover = handles.s[si_hover];
      sh_hover.sentenceEl.style['color'] = colors.hover;
      tie.s.push(sh_hover);

      handles.r.slice(section.i_p[si_hover], section.i_p[si_hover+1]).forEach(rh =>
      {
        if(!rh) return;
        rh.el.style['color'] = colors.hover;
        tie.r.push(rh);
      });
    }

    if(!isNaN(ri_hover) && ri_hover != ri && handles.r[ri_hover])
    {
      let rh_hover = handles.r[ri_hover];
      tie.hover.push(rh_hover.part);
      tie.hfi = rh_hover.lastSeenFigureIndex;
      rh_hover.el.style['color'] = colors.hover_bright;
      tie.r.push(rh_hover);
    }

    if(w.mb && w.mo)
    {
      let h_o = colors.sentence, h_b = colors.dim;
      w.mb.innerText = "previous";
      if (ri === 0)
      {
        w.mb.innerText = "";
      }

      if (ri === section.i_count-2)
      {
        h_o = colors.dim;
        h_b = colors.dim;
        w.mo.innerText = "back to top";
      }
      else if (ri === section.i_p[si+1] - 1)
      {
        h_b = colors.dim;
        h_o = colors.sentence;
        w.mo.innerText = "next sentence";
      }
      else
      {
        w.mo.innerText = "next symbol";
      }
      w.mo.style['background-color'] = h_o;
      w.mb.style['background-color'] = h_b;
    }

    while(w.svg.firstChild)
      w.svg.removeChild(w.svg.firstChild);


    let appendDraw = (figure, l, ds) => ds.forEach(h => w.svg.append(...rg.makeHighlight(figure, l, h).map(rg.draw)));
    let setLetterColor = (o, c, ds) => ds.forEach(h => { h.name.split('').forEach(l => o[l] = c); })

    tie.center = tie.center.filter(h=>h.typ);
    tie.near = tie.near.filter(h=>h.typ);
    tie.hover = tie.hover.filter(h=>h.typ);
    let g = se('g');
    w.svg.append(g);
    if(!section.figures)
    {
      let figure = section;
      g.append(...figure.shapes.map(rg.draw));

      let o = {};
      appendDraw(figure, 'sentence', tie.near);
      // setLetterColor(o, 'sentence', tie.near);
      appendDraw(figure, 'bright', tie.center);
      setLetterColor(o, 'bright', tie.center);
      appendDraw(figure, 'hover_bright', tie.hover);
      setLetterColor(o, 'hover_bright', tie.hover);

      let els = prepareLetterOverlay(figure, o, false);
      w.svg.append(...els);
    }
    else
    {
      for(var i = 0; i < section.figures.length; i++)
      {
        let figure = section.figures[i];
        g.append(...figure.shapes.map(rg.draw));


        let o = {};
        let shouldHighlight = tie.fi == 0 || tie.fi == i+1;
        if(shouldHighlight)
        {
          // appendDraw(figure, 'sentence', tie.near);
          appendDraw(figure, 'bright', tie.center);
          // setLetterColor(o, 'sentence', tie.near);
          setLetterColor(o, 'bright', tie.center);
        }

        let shouldHighlightHover = tie.hfi == 0 || tie.hfi == i+1;
        if(shouldHighlightHover)
        {
          appendDraw(figure, 'hover_bright', tie.hover);
          setLetterColor(o, 'hover_bright', tie.hover);
        }

        let els = prepareLetterOverlay(figure, o, true);
        w.svg.append(...els);
      }
    }

    if(last_section_id != section.id)
    {
      let r = g.getBBox();
      w.svg.setAttribute('viewBox', [r.x - 50, r.y - 50, r.width+100, r.height+100].join(' '));
      w.svg.setAttribute('width', r.width + 100);
      w.svg.setAttribute('height', r.height + 100);
    }

    last_section_id = section.id;
  }

  proxy.moveon = () => { present(last_present.ri + 1, last_present.section); };
  proxy.moveback = () => { present(last_present.ri - 1, last_present.section); };

  proxy.attachProseMouseEvents = () =>
  {
    let forClick = false, forCancel = null;
    w.prose.onmouseout = (e) =>
    {
      if(forClick)
        return;

      if(forCancel)
      {
        window.cancelAnimationFrame(forCancel);
        forCancel = null;
      }

      if(!isNaN(last_present.ri_hover))
      {
        forCancel = window.requestAnimationFrame(() => {
          present(last_present.ri, last_present.section, undefined, true);
        });
      }
    }

    w.prose.onmousemove = (e) =>
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
          present(last_present.ri, last_present.section, i, true);
        });
      }
    }

    w.prose.onclick = (e) =>
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
          present(i, last_present.section);
        });
      }
    }
  }

  return {present, proxy};
}

function elements() {
  const jss = create().setup(preset());
  const sheet = jss.createStyleSheet(style(colors), {link: true});
  sheet.attach();

  const cs = sheet.classes;

  const made = html(colors, cs);

  let section_indices = {};
  let pr;

  const rg = makeRG();
  window.books = window.books_(rg);

  window.onload = () => {

    const el = document.querySelector('#container');
    el.className = cs.container;
    el.innerHTML = made.cover + made.section;

    pr = makePR(rg, {
      svg: document.querySelector('#figure'),
      prose: document.querySelector('#proseContent'),
      title: document.querySelector('#proseTitle'),
      mo: document.querySelector('#move-on'),
      mb: document.querySelector('#move-back'),
    }, cs);
    pr.proxy.attachProseMouseEvents();

    presentForLocation();
  }

  function canPresentSection(i_book, id) {
    let sections = books[i_book];
    if(!sections) return false;

    if(!section_indices[i_book])
    {
      let n = {}
      sections.forEach((s, i) => n[s.id] = i);
      section_indices[i_book] = n;
    }

    let i_section = section_indices[i_book][id];
    if(typeof i_section === 'undefined')
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  function presentSection(i_book, id) {
    let sections = books[i_book];

    let i_section = section_indices[i_book][id];

    document.querySelector('#container').className = 'section';

    let el = document.querySelector('#bookTitle');
    el.innerText = 'Book ' + (i_book) + ' - ' + books.descs[i_book-1];

    i_section = Math.min(sections.length-1, i_section);
    pr.present(null, sections[i_section]);

    function keyHandler(e)
    {
      if(e.key == "j" || e.keyCode == 40)
      {
        pr.proxy.moveon();
        e.preventDefault();
      }
      else if(e.key == "k" || e.keyCode == 38)
      {
        pr.proxy.moveback();
        e.preventDefault();
      }
      else if(e.key == "z" || e.keyCode == 37)
      {
        i_section = (i_section-1 + sections.length) % sections.length;
        openSection(i_book, sections[i_section].id);
      }
      else if(e.key == "x" || e.keyCode == 39)
      {
        i_section = (i_section+1) % sections.length;
        openSection(i_book, sections[i_section].id);
      }
    }

    document.onkeydown = keyHandler;

    document.querySelector('#move-on').ontouchend = (e) =>
    {
      e.preventDefault();
      pr.proxy.moveon();
    }

    document.querySelector('#move-on').onmousedown = (e) =>
    {
      pr.proxy.moveon();
    }

    document.querySelector('#move-back').ontouchend = (e) =>
    {
      e.preventDefault();
      pr.proxy.moveback();
    }

    document.querySelector('#move-back').onmousedown = (e) =>
    {
      pr.proxy.moveback();
    }

    document.querySelector('#prev-section').ontouchend = (e) =>
    {
      e.preventDefault();
      i_section = (i_section-1+sections.length) % sections.length;
      openSection(i_book, sections[i_section].id);
    }

    document.querySelector('#next-section').ontouchend = (e) =>
    {
      e.preventDefault();
      i_section = (i_section+1) % sections.length;
      openSection(i_book, sections[i_section].id);
    }

    document.querySelector('#prev-section').onmousedown = (e) =>
    {
      i_section = (i_section-1+sections.length) % sections.length;
      openSection(i_book, sections[i_section].id);
    }

    document.querySelector('#next-section').onmousedown = (e) =>
    {
      i_section = (i_section+1) % sections.length;
      openSection(i_book, sections[i_section].id);
    }
  }

  function presentCover() {
    document.querySelector('#container').className = 'cover';
    document.onkeydown = undefined;
  }

  let presentForLocation = () => {
    let m, re = /elements\/([^\/]+)/;
    if(m = location.pathname.match(re))
    {
      let id = m[1];
      let [i_book, _] = id.split('.');
      if(!isNaN(Number(i_book)) && canPresentSection(i_book, id))
      {
        presentSection(i_book, id);
      }
      else
      {
        presentCover();
      }
    }
    else
    {
      history.replaceState(null, '', '/elements/');
      presentCover();
    }
  }

  window.onpopstate = (e) => {
    presentForLocation();
  }

  function openSection(i_book, id) {
    if(canPresentSection(i_book, id))
    {
      history.pushState(null, '', id);
      presentSection(i_book, id);
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
          openSection(i_book, pref.value)
        }
      }
    }
  }

  function alignFigure(scroll_position) {
    let t, d;
    if(scroll_position > 0)
    {
      if(scroll_position > 75)
        t = 0;
      else
        t = 76;
    }
    else
    {
      t = 76 - scroll_position;
    }
    let h = Math.max(512, window.innerHeight - Math.min(76, t));

    let rule = sheet.getRule('figColumn');
    rule.prop('top', t);
    rule.prop('height', h);
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

};

function eh(a, b)
{
  let r = a > b ? [b, a] : [a, b];
  return JSON.stringify(r);
}

function inset(rose, h)
{
  let t = 5;
  let ps = [];
  let o = h.lefthand ? -1 : 1;
  let [p0, p1, p2] = h.is.map(i => rose.ps[i]);
  let es = [v2.sub(p1, p0), v2.sub(p2, p1), v2.sub(p0, p2)];
  let [e0, e1, e2] = es.map(e => v2.normalize(e));
  let [n0, n1, n2] = [e0, e1, e2].map(e => v2.rot(e, o*Math.PI/2));

  ps[1] = v2.add(p1, v2.add(v2.scale(e0, t/v2.dot(e0, n1)), v2.scale(e1, t/v2.dot(e1, n0))));
  ps[2] = v2.add(p2, v2.scale(e2, t/v2.dot(e2, n1)));
  ps[0] = v2.add(p0, v2.scale(e2, t/v2.dot(e2, n0)));
  if(h.alone)
  {
    ps[2] = v2.add(ps[2], v2.scale(e1, t/v2.dot(e1, n2)));
    ps[0] = v2.add(ps[0], v2.scale(e0, t/v2.dot(e0, n2)));
  }
  return ps;
}

function penrose(kites)
{
  function ec(rose, a, b, p)
  {
    let m = eh(a, b);
    let i;
    if((i = rose.es[m]) === undefined)
    {
      i = rose.ps.length;
      rose.ps.push(p)
      rose.es[m] = i;
    }
    return i;
  }

  function subdivide(rose, h)
  {
    let o = h.lefthand ? -1 : 1;
    let ps = h.is.map(i => rose.ps[i]);
    if(h.typ === 'kite')
    {
      let e1 = v2.sub(ps[2], ps[1]);
      let p0 = v2.add(ps[1], v2.rot(e1, o*Math.PI/5));
      let i0 = ec(rose, h.is[0], h.is[2], p0);

      let p1 = v2.add(ps[1], v2.rot(e1, o*Math.PI*2/5));
      let i1 = ec(rose, h.is[0], h.is[1], p1)

      let ts = [{typ:'dart', lefthand: h.lefthand, is: [i1, i0, h.is[0]]},
                {typ:'kite', lefthand: h.lefthand, is: [h.is[1], h.is[2], i0]},
                {typ:'kite', lefthand: !h.lefthand, is: [h.is[1], i1, i0]}];
      return ts;
    }
    else if(h.typ === 'dart')
    {
      let e1 = v2.sub(ps[0], ps[2]);
      let p0 = v2.add(ps[2], v2.rot(e1, o*Math.PI/5));
      let i0 = ec(rose, h.is[1], h.is[2], p0);

      let ts = [{typ:'dart', lefthand: h.lefthand, is: [i0, h.is[0], h.is[1]]},
                {typ:'kite', lefthand: !h.lefthand, is: [h.is[2], i0, h.is[0]]}];
      return ts;
    }
  }

  function rhombs(rose, h)
  {
    let o = h.lefthand ? -1 : 1;
    if(h.typ === 'kite')
    {
      let ps = h.is.map(i => rose.ps[i]);
      let e1 = v2.sub(ps[2], ps[1]);
      let p0 = v2.add(ps[1], v2.rot(e1, o*Math.PI/5));
      let i0 = ec(rose, h.is[0], h.is[2], p0);

      let ts = [{typ:'thin', lefthand: h.lefthand, is: [i0, h.is[1], h.is[2]]},
                {typ:'thick', lefthand: h.lefthand, is: [h.is[1], i0, h.is[0]]}];
      return ts;
    }
    else if(h.typ === 'dart')
    {
      let ts = [{typ:'thick', lefthand: h.lefthand, is: [h.is[2], h.is[0], h.is[1]]}];
      return ts;
    }
  }

  function makeArc(radius, sub)
  {
    let ps = [];
    ps[0] = [0, 0];
    ps[2] = v2.rot([radius, 0], Math.PI/10);
    ps[1] = v2.rot(v2.sub(ps[2], ps[0]), -Math.PI/5);

    let rose = {ps};
    let sun = [{typ:'kite', is:[0, 1, 2]}];
    for(let i = 0; i < 2; i++)
    {
      let l = sun[i];
      let lefthand = !l.lefthand;
      let is;
      let ps = l.is.map(i => rose.ps[i]);
      if(lefthand)
      {
        let i0;
        if(i === 8)
        {
          i0 = 1;
        }
        else
        {
          i0 = rose.ps.length;
          let p = v2.add(ps[0], v2.rot(v2.sub(ps[2], ps[0]), Math.PI/5));
          rose.ps.push(p);
        }
        is = [l.is[0], i0, l.is[2]];
      }
      else
      {
        let i0 = rose.ps.length;
        let p = v2.add(ps[0], v2.rot(v2.sub(ps[1], ps[0]), Math.PI/5));
        rose.ps.push(p)
        is = [l.is[0], l.is[1], i0];
      }

      sun.push({typ:'kite', lefthand, is});
    }

      rose.es = {};
    let hs = sun;
    for(let i = 0; i < sub; i++)
    {
      rose.es = {};
      hs = hs.map(h => subdivide(rose, h)).flat()
    }

    if(!kites)
      hs = hs.map(h => rhombs(rose, h)).flat();

    rose.es = {};
    for(let i = 0; i < hs.length; i++)
    {
      let is = hs[i].is;
      let m = eh(is[0], is[2]);
      if(rose.es[m] === undefined)
        rose.es[m] = i;
      else
        delete rose.es[m];
    }

    for(let k in rose.es)
    {
      let hi = rose.es[k];
      hs[hi].alone = true;
    }
    return {rose, hs};
  }
  return {makeArc};
}

function bgtiles()
{

  let w = {}, u = {}, v = {};
  w.e = se('svg');
  w.w = Math.max(window.innerWidth, window.innerHeight)*1.5;
  w.h = w.w;
  w.e.setAttribute('width', `${w.w}`);
  w.e.setAttribute('height', `${w.h}`);
  w.e.setAttribute('viewBox', `0 0 ${w.w} ${w.h}`);
  w.e.style.dominantBaseline = 'hanging';

  w.e.style.position = 'fixed';
  w.e.style.zIndex = '-1';
  w.e.style.top = 0;
  w.e.style.left = 0;

  document.body.append(w.e);

  let pattern = penrose();

  let pp = p => `${p[0]} ${p[1]}`;

  function draw(rose, h)
  {
    let es = [];
    let ps = inset(rose, h);

    {
      let d = `M ${pp(ps[0])} L ${pp(ps[1])} L ${ pp(ps[2]) }`;
      if(h.alone)
        d+= ` L ${pp(ps[0])}`;
      let c = hsl(320, 50, 10);
      let e = se('path', {fill: 'none', stroke: c, 'stroke-width': '1', d:d})

      es.push(e);
    }
    return es;
  }

  let piece = 50;
  let phi = (1+Math.sqrt(5))/2;
  let sub = Math.round(Math.log(w.w*1.5/piece)/Math.log(phi));
  let radius = piece*Math.pow(phi, sub);

  let {rose, hs} = pattern.makeArc(radius, sub);

  let es = hs.map(h => draw(rose, h)).flat();

  while(w.e.firstChild)
    w.e.removeChild(w.e.firstChild);
  w.e.append(...es);
}
// bgtiles();

elements();
