import rough from 'roughjs';
import hsluv from 'hsluv';
import {create} from 'jss';
import preset from 'jss-preset-default';

import v2 from '../vec2.js';

import style from './style.js';
import html from './html.js';

let colors_brand = {
  bright: hsl(0, 0, 100),
  step: hsl(0, 0, 50),
  dim: hsl(0, 0, 30),
  none: hsl(0, 0, 2),
};

let colors_dark = {
  id: 'dark',
        bright: hsl(0, 0, 100),
          step: hsl(0, 0, 50),
      occluded: hsl(0, 0, 75),
        anim_l: (l) => hsl(0, 0, 30+l*70),

          emph: hsl(0, 0, 80),
      sentence: hsl(0, 0, 70),

          full: hsl(0, 0, 100),
           dim: hsl(0, 0, 30),
           low: hsl(0, 0, 15),
         stand: hsl(0, 0, 8),
          none: hsl(0, 0, 2),

          link: hpl(140, 100, 50),
    link_hover: hpl(140, 100, 70),

         hover: hpl(325, 100, 50),
  hover_bright: hpl(325, 100, 80),

        player: hpl(140, 100, 50),
  player_l: (l) => hpl(140, 100, l*50),
};

let colors_light = {
  id: 'light',
        bright: hpl(0, 0, 0),
          step: hpl(0, 0, 60),
      occluded: hsl(0, 0, 25),
        anim_l: (l) => hsl(0, 0, 70-l*70),

          emph: hsl(0, 0, 25),
      sentence: hsl(0, 0, 35),

          full: hsl(0, 0, 0),
           dim: hsl(0, 0, 70),
           low: hsl(0, 0, 85),
         stand: hsl(0, 0, 93),
          none: hsl(0, 0, 97),

          link: hpl(140, 100, 60),
    link_hover: hpl(140, 100, 70),

         hover: hsl(350, 100, 45),
  hover_bright: hsl(350, 100, 70),

        player: hsl(140, 80, 65),
  player_l: (l) => hsl(140, 20+l*60, 97-l*32),
};

/*
SOLARIZED HEX                  Dark          Light        Fit
--------- -------              ------------  ----------   ---------
base03    #002b36 222, 100, 15  background                 none
base02    #073642 221, 94 , 20  bg hl                      stand
base01    #586e75 215, 35 , 45  secondary     emph         dim
base00    #657b83 218, 32 , 50                primary
base0     #839496 201, 20 , 60  primary                    sentence
base1     #93a1a1 192, 15 , 65  emph          secondary    emph
base2     #eee8d5 73 , 23 , 92                bg hl        occluded
base3     #fdf6e3 71 , 76 , 97                background   full
yellow    #b58900 59 , 100, 60
orange    #cb4b16 21 , 95 , 49
red       #dc322f 13 , 82 , 49
magenta   #d33682 348, 81 , 50
violet    #6c71c4 264, 57 , 51
blue      #268bd2 245, 93 , 56
cyan      #2aa198 182, 92 , 60
green     #859900 97 , 100, 60
*/

let sol = {
base03  : hsl(222, 100, 15),
base02  : hsl(221, 94 , 20),
base01  : hsl(215, 35 , 45),
base00  : hsl(218, 32 , 50),
base0   : hsl(201, 20 , 60),
base1   : hsl(192, 15 , 65),
base2   : hsl(73 , 23 , 92),
base3   : hsl(71 , 76 , 97),
yellow  : hsl(59 , 100, 60),
orange  : hsl(21 , 95 , 49),
red     : hsl(13 , 82 , 49),
magenta : hsl(348, 81 , 50),
violet  : hsl(264, 57 , 51),
blue    : hsl(245, 93 , 56),
cyan    : hsl(182, 92 , 60),
green   : hsl(97 , 100, 60),
}

let colors_lightsolarized = {
  id: 'solarized_light',
        bright: hsl(222, 100, 15),
          step: hsl(222, 23, 50),
      occluded: hsl(221, 94, 20),

          emph: hsl(215, 35, 30),
      sentence: hsl(218, 32, 40),

          full: hsl(222, 100, 15),
           dim: hsl(192, 5, 70),
           low: hsl(73, 13, 85),
         stand: hsl(73, 23, 92),
          none: hsl(71, 76, 97),

          link: hpl(140, 100, 60),
    link_hover: hpl(140, 100, 75),

         hover: hpl(325, 100, 50),
  hover_bright: hpl(325, 100, 80),

        player: hsl(140, 80, 65),
  player_l: (l) => hsl(140, 20+l*60, 97-l*32),
};

let colors_darksolarized = {
  id: 'solarized_dark',
        bright: hsl(71, 76, 97),
          step: hsl(73,  3, 70),
      occluded: hsl(73, 23, 70),

          emph: hsl(192, 15, 75),
      sentence: hsl(201, 20, 70),

          full: hsl(71, 76, 97),
           dim: hsl(215, 35, 45),
           low: hsl(221, 54, 25),
         stand: hsl(221, 94, 20),
          none: hsl(222, 100, 15),

          link: hpl(140, 100, 50),
    link_hover: hpl(140, 100, 70),

         hover: hpl(325, 100, 50),
  hover_bright: hpl(325, 100, 80),

        player: hpl(140, 100, 50),
  player_l: (l) => hpl(140, 100, l*35+15),
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

  const roughopts = { roughness: 0, disableMultiStroke: true, stroke: '#000', strokeWidth: 1 };

  function r_arc(c, a, b)
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
    return rsvg.generator.arc(c[0], c[1], d*2, d*2, start, end, false, roughopts);
  }

  function curve(vs, o)
  {
    return {typ: 'curve', vs, ...o};
  }

  function polygon(vs, o)
  {
    return {typ: 'polygon', vs, ...o};
  }

  function line(a, b, o)
  {
    return {typ: 'line', a, b, ...o}
  }

  function circle(c, d, o)
  {
    return {typ: 'circle', c, d, ...o}
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
    return {typ: 'arc', c, a, b, ...o};
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

  function draw(s) {
    let o;
    if(s.typ === 'curve')
      o = rsvg.generator.curve(s.vs, roughopts);
    else if(s.typ === 'polygon')
      o = rsvg.generator.polygon(s.vs, roughopts);
    else if(s.typ === 'line')
      o = rsvg.generator.line(s.a[0], s.a[1], s.b[0], s.b[1], roughopts);
    else if(s.typ === 'circle')
      o = rsvg.generator.circle(s.c[0], s.c[1], s.d, roughopts);
    else if(s.typ === 'arc')
      o = r_arc(s.c, s.a, s.b)

    let e = rsvg.draw(o).firstChild;

    if(s.dashed || s.strokeLineDash)
    {
      let a = s.strokeLineDash || [10, 10];
      e.setAttribute('stroke-dasharray', a.join(' '));
    }

    let w = s.strokeWidth || 1;
    if(s.layer && s.layer.endsWith('bright'))
      w+=1;
    e.setAttribute('stroke-width', w);

    let fc;
    if(s.layer === 'bright')
      fc = 'bright';
    else if(s.layer === 'occluded_bright')
      fc = 'occluded';
    else if(s.layer === 'hover_bright')
      fc = 'hover';
    else if(s.layer === 'low')
      fc = 'low';
    else
      fc = 'dim';
    e.setAttribute('class','fig-'+fc);
    return e;
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
      shapes = figure.given[h.name];
    }
    else
    {
      console.error('Unknown highlight: ', h.typ, h.name);
      return [];
    }

    return shapes.map(s => ({layer, ...s}));
  }

  return { tick, arc, gnomon, anglecurve, angle, curve, line, polygon, circle, makeHighlight, draw }
}

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

function makePR(rg, w)
{
  let proxy = {};

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
    if(figure.mags && !figure.ticks)
    {
      prepareMags(figure);
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

      let lc = 'dim';
      if(letterColor[i] === 'bright')
      {
        lc = 'bright';
      }
      else if(letterColor[i] === 'occluded_bright')
      {
        lc = 'occluded';
      }
      else if(letterColor[i] === 'hover_bright')
      {
        lc = 'hover';
      }
      let pos = v2.add(figure.points[i], figure.letterOffsets[i]);
      let attrs = {
        'font-family': 'Nale',
        'font-size': shouldBeSmall ? 16 : 24,
        'class': 'letter-'+lc,
        'textContent': i,
        'x': pos[0],
        'y': pos[1],
      };
      var el = se('text', attrs);
      var el_ = se('text', {...attrs, class: 'letter-none',
        'stroke-width':3, 'stroke-linecap': 'round',
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
    section.paragraphs = section.prose.split('\n\n').map(paragraphProse => {
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

      let pt = window.scrollY, ph = window.innerHeight - 70;
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
        sentenceEl.className = 'sentence';

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
              a.setAttribute('href', '/'+l.pref);
              a.onclick = w.hrefClick;
              a.innerText = l.prefName;
              return a;
            }

            sentenceEl.append(...part.prefs.map(f))
          }
          else if(part.name)
          {
            let el = de('span');
            el.innerText = part.name;
            el.className = 'name';
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

  let bookmarks = {};
  let handles;
  let tie = { s: [], r: [] };
  let last_present;
  let last_section_id = -1;
  let eventLock = false;
  function present(ri, section, ri_hover, no_scroll)
  {
    if(eventLock)
      return;
    if(last_section_id != section.id)
    {
      eventLock = true;
      setTimeout(() => {
        eventLock = false;
      }, 100);
    }
    last_present = {ri, section, ri_hover};
    if(ri == null)
    {
      ri = bookmarks[section.id] || 0;
    }
    bookmarks[section.id] = ri;

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
      v.sentenceEl.className = 'sentence';
    }

    while(tie.r.length > 0)
    {
      let a = tie.r.pop();
      if(!a) continue;
      a.el.className = 'name';
    }

    tie.s = []
    tie.r = [];
    tie.hover = [];
    tie.center = [];
    tie.fi = 0;
    tie.hfi = 0;

    let si = findMaxLTE(section.i_p, ri);
    let si_hover = !isNaN(ri_hover) ? findMaxLTE(section.i_p, ri_hover): null;;

    let sh = handles.s[si];
    sh.sentenceEl.className = 'sentence sentence-at';
    tie.s.push(sh);
    if(!no_scroll && !w.no_scroll)
    {
      scrollToSentenceIfNecessary(sh.sentenceEl);
    }

    if (si_hover!=null)
    {
      let sh_hover = handles.s[si_hover];
      sh_hover.sentenceEl.className = 'sentence sentence-hover';
      tie.s.push(sh_hover);
    }

    let rh = handles.r[ri];
    if(rh)
    {
      tie.center.push(rh.part);
      tie.fi = rh.lastSeenFigureIndex;
      rh.el.className = 'name name-at';
      tie.r.push(rh);
    }

    if(!isNaN(ri_hover) && ri_hover != ri && handles.r[ri_hover])
    {
      let rh_hover = handles.r[ri_hover];
      rh_hover.el.className = 'name name-hover';
      tie.hover.push(rh_hover.part);
      tie.hfi = rh_hover.lastSeenFigureIndex;
      tie.r.push(rh_hover);
    }

    if(w.mb && w.mo)
    {
      w.mb.innerHTML = "previous" + w.arrowu;
      if (ri === 0)
      {
        w.mb.innerText = "";
      }

      if (ri === section.i_count-2)
      {
        w.mo.innerText = "back to top";
      }
      else if (ri === section.i_p[si+1] - 1)
      {
        w.mo.innerHTML = w.arrowd + "next sentence";
      }
      else
      {
        w.mo.innerHTML = w.arrowd + " next highlight";
      }
    }

    while(w.svg.firstChild)
      w.svg.removeChild(w.svg.firstChild);


    let appendDraw = (figure, l, ds) => ds.forEach(h => w.svg.append(...rg.makeHighlight(figure, l, h).map(rg.draw)));
    let setLetterColor = (o, c, ds) => ds.forEach(h => { h.name.split('').forEach(l => o[l] = c); })

    tie.center = tie.center.filter(h=>h.typ);
    tie.hover = tie.hover.filter(h=>h.typ);
    let g = se('g');
    w.svg.append(g);
    if(!section.figures)
    {
      let figure = section;
      g.append(...figure.shapes.map(rg.draw));

      let o = {};
      if(!isNaN(ri_hover) && ri_hover !== ri)
      {
        appendDraw(figure, 'occluded_bright', tie.center);
        setLetterColor(o, 'occluded_bright', tie.center);
      }
      else
      {
        appendDraw(figure, 'bright', tie.center);
        setLetterColor(o, 'bright', tie.center);
      }
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
          if(!isNaN(ri_hover) && ri_hover != ri)
          {
            appendDraw(figure, 'occluded_bright', tie.center);
            setLetterColor(o, 'occluded_bright', tie.center);
          }
          else
          {
            appendDraw(figure, 'bright', tie.center);
            setLetterColor(o, 'bright', tie.center);
          }
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

    if(last_section_id != section.id && g.firstChild)
    {
      function setViewBox(attempt)
      {
        setTimeout( () =>
          {
            if(last_section_id != section.id)
              return;
            let r = g.getBBox();
            if((r.width < 10 || r.height < 10))
            {
              console.error(section.id, last_section_id, "viewbox not ready", attempt);
              if(attempt > 10)
                return;
              setViewBox(attempt+1);
              return;
            }
            w.svg.setAttribute('viewBox', [r.x - 50, r.y - 50, r.width+100, r.height+100].map(Math.round).join(' '));
            w.svg.setAttribute('width', Math.round(r.width) + 100);
            w.svg.setAttribute('height', Math.round(r.height) + 100);
          }, attempt*50);
      }
      setViewBox(1);
    }

    last_section_id = section.id;
    last_present.rh = rh;
    last_present.sh = sh;
  }

  proxy.section_progress = () =>
  {
    let {ri, section} = last_present;
    return ri / (section.i_count-2);
  }

  proxy.last_prose_element = () =>
  {
    let {rh, sh} = last_present;
    return sh.sentenceEl;
  }

  proxy.reached_end = () => {
    return (last_present.ri + 2 === last_present.section.i_count);
  }

  proxy.restart = () => { present(null, last_present.section); };
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
      if(isNaN(i) && e.srcElement.attributes.href)
      {
        i = parseInt(e.srcElement.parentElement.dataset.i);
      }
      if(!isNaN(i))
      {
        if(i === last_present.ri_hover)
          return;
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

const rg = makeRG();
function elements() {
  let baseTitle = document.title;

  function hrefClick(event) {
    let el = event.target;
    let hrefUrl = el.getAttribute('href');
    while(!hrefUrl && el.parentElement)
    {
      el = el.parentElement;
      hrefUrl = el.getAttribute('href');
    }
    if(hrefUrl.startsWith('/'))
    {
      event.preventDefault();
      window.history.pushState(null, '', hrefUrl);
      presentForLocation();
      window.scrollTo(0, 0);
      return true;
    }
  }

  function setupLinks() {
    document.querySelectorAll('a')
      .forEach(link => link.onclick = hrefClick);
  }

  let cheme_a = [colors_dark, colors_light];
  let chemes = {};
  cheme_a.forEach(c => {chemes[c.id] = c;});

  const jss = create().setup(preset());

  let hla = { }
    function setL(b)
    {
      hla.e.innerHTML = '';
      let clamp = s => Math.max(0, Math.min(1, s));
      for(let i =0; i < hla.t.length; i++)
      {
        let e = de('span', {textContent: hla.t[i]})
        let l = 0;
        let dist = Math.min(Math.abs(b[0] - i), Math.abs(i - b[1]));
        if(i >= b[0] && i <= b[1])
        {
          l = 1;
        }
        else if(dist < 5)
        {
          l = 1 - clamp(dist)*0.7;
        }
        else
        {
          l = 0.3 - clamp(dist)*0.3;
        }
        e.style.color = chemes[cheme_select].anim_l(l)
        hla.e.append(e);
      }
    }


  let sheet;
  let cheme_select;
  function switchCheme(cheme, notStorePref)
  {
    if(cheme === cheme_select || !chemes[cheme])
      return;

    cheme_select = cheme;
    if(!notStorePref)
      window.localStorage.cheme = cheme;

    if(sheet)
      sheet.detach();
    let l = (r) => r.key;
    sheet = jss.createStyleSheet(style(chemes[cheme], colors_brand), {generateId: l});
    sheet.attach();
    if(hla.e)
      setL(hla.region);
  }
  window.switchCheme = switchCheme;
  switchCheme('dark', true);

  function paletteClick() {
    let select_i;
    for(let i = 0; i<cheme_a.length; i++)
    {
      if(cheme_a[i].id == cheme_select)
      {
        select_i = i;
        break;
      }
    }
    let next_i = (select_i + 1) % cheme_a.length;
    switchCheme(cheme_a[next_i].id);
  }

  setTimeout( () => {
    let version = window.localStorage.version;
    if(!version || version !== '3.0')
    {
      window.localStorage.version = '3.0';
      window.localStorage.cheme = '';
    }
    let chemePref = window.localStorage.cheme;

    if(chemePref)
      switchCheme(chemePref);
  });

  const cs = sheet.classes;

  const made = html(cs, figureExtracts);

  let section_indices = {};
  let pr;

  let stopPreview = false;
  let previewCanceler;
  let previewEl;
  function showOverlay()
  {
    previewEl.querySelector('#previewOverlay').style.visibility = 'visible';
  }
  function hideOverlay()
  {
    previewEl.querySelector('#previewOverlay').style.visibility = 'hidden';
  }
  window.books = window.books_(rg);

  window.onload = () => {

    const el = document.body;
    el.innerHTML = made.cover + made.toc + made.section + made.landscapeDictate;

    pr = makePR(rg, {
      svg: document.querySelector('#section #figure'),
      prose: document.querySelector('#section #proseContent'),
      title: document.querySelector('#section #proseTitle'),
      mo: document.querySelector('#section #move-on'),
      mb: document.querySelector('#section #move-back'),
      arrowu: made.arrowu,
      arrowd: made.arrowd,
      hrefClick
    });
    pr.proxy.attachProseMouseEvents();

    previewEl = document.querySelector('#preview')
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
    document.title = `${id} - ${baseTitle}`;
    if(window.gtagconfig) window.gtagconfig();

    setupLinks();
    stopPreview = true;
    showOverlay();
    let sections = books[i_book];

    let i_section = section_indices[i_book][id];

    document.body.className = 'section';

    let el = document.querySelector('#bookTitle');
    el.innerText = 'Book ' + (i_book) + ' - ' + books.descs[i_book-1];
    el.setAttribute('href', '/toc/'+i_book)

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

    document.querySelector('#move-on').onclick = (e) =>
    {
      e.preventDefault();
      pr.proxy.moveon();
    }

    document.querySelector('#move-back').onclick = (e) =>
    {
      e.preventDefault();
      pr.proxy.moveback();
    }

    document.querySelector('#prev-section').onclick = (e) =>
    {
      e.preventDefault();
      if (i_section > 0) {
        openSection(i_book, sections[i_section-1].id);
      } else {
        if (i_book > 1) {
          let sections = books[i_book-1];
          openSection(i_book-1, sections[sections.length-1].id);
        }
      }
    }

    document.querySelector('#next-section').onclick = (e) =>
    {
      e.preventDefault();
      if (i_section < sections.length-1) {
        openSection(i_book, sections[i_section+1].id);
      } else {
        if (i_book < 13) {
          let sections = books[i_book+1];
          openSection(i_book+1, sections[0].id);
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

      let e = document.querySelector('#figColumn');
      e.style.top = t + 'px';
      e.style.height = h + 'px';
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
    window.onscroll = queueAlign;

    window.onresize = queueAlign;
  }

  function presentPg() {
    window.onscroll = undefined;
    window.onresize = undefined;
    document.onkeydown = undefined;
    document.body.className = 'pg';
    let paths = document.querySelectorAll('svg.large path');
    for(let i = 0; i < paths.length; i++)
    {
      let p = paths[i], sw = p.getAttribute('stroke-width');
      if(sw === '10' || sw === '11')
      {
      }
      else if(sw === '1')
      {
        p.setAttribute('stroke-width', '4');
      }
      else
      {
        p.setAttribute('stroke-width', '6');
      }
    }
    paths = document.querySelectorAll('.pgFiguresLeft svg path');
    for(let i = 0; i < paths.length; i++)
    {
      let p = paths[i], sw = p.getAttribute('stroke-width');
      if(sw === '10' || sw === '11')
      {
      }
      else if(sw === '1')
      {
        p.setAttribute('stroke-width', '6');
      }
      else
      {
        p.setAttribute('stroke-width', '10');
      }
    }
  }

  function presentCover() {
    document.title = baseTitle;
    if(window.gtagconfig) window.gtagconfig();
    window.onscroll = undefined;
    window.onresize = undefined;
    document.onkeydown = undefined;
    document.body.className = 'cover';
    setupLinks();

    // animating with highlights
    {
      hla.e = document.querySelector('#hla');
      hla.t = hla.e.textContent;
      hla.region = [9, 15];

      function moveL(b, d)
      {
        return [b[0] + d, b[1] + d];
      }
      function tickL()
      {
        let last_t;
        let s = 0;
        function frame() {
          window.requestAnimationFrame((timestamp) =>
            {
              if(last_t === undefined) {
                last_t = timestamp;
                frame();
                return;
              }
              let dt = (timestamp - last_t)/ 1000;
              s += dt;
              function easeInOutQuad(x) {
              return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
              }
              let ease = easeInOutQuad
              let t = 0;
              let ss = 64;
              if(s > ss*2)
                return;
              else if(s < ss)
                t = ease(s/ss);
              else
                t = ease(2-s/ss);
              let nb = moveL(hla.region, -1 * t * 15);
              setL(nb);
              frame();
            });
        }
        frame();
      }

      function occasional() {
        if(!document.body.classList.contains('cover'))
          return;
        tickL();
        setTimeout(() =>
          {
            occasional();
          }, 10000);
      };
      //setTimeout(occasional, 1000);
  }

    document.querySelector('#palette').onclick = paletteClick;
    {
      let preview = makePR(rg, {
        svg: document.querySelector('#previewFigure'),
        prose: document.querySelector('#preview .proseContent'),
        title: document.querySelector('#preview .proseTitle'),
        no_scroll: true,
        hrefClick
      });
      canPresentSection(1, '43')
      let sections = books[1];

      let i_section = section_indices[1]['1.43'];
      let prev_section = sections[i_section];
      preview.present(6, prev_section);
      let downArrowEl = document.querySelector('#downArrow svg');
      let proseCont = document.querySelector('#preview .prose-container');
      setTimeout(() =>
        {
          proseCont.scrollTo(0, 150);
        });
      function setProgress()
      {
        document.querySelector('#progress').style.width = Math.ceil(preview.proxy.section_progress()*100) + '%';
      }
      setProgress();
      let i = 0;
      function movePreview()
      {
        if(previewCanceler)
          clearTimeout(previewCanceler);

        function scrollPreview(sentence_el)
        {
          let a = sentence_el.offsetTop;
          let b = proseCont.offsetTop;
          let target_scroll = a - b -50;

          let i_seen = i;
          let last_t = performance.now();
          function frame(current_scroll)
          {
            if(stopPreview || i != i_seen) return;
            window.requestAnimationFrame( () =>
              {
                let scroll_speed = 300;
                let t = performance.now();
                let dt = t-last_t
                last_t = t;
                current_scroll += scroll_speed*dt/1000;
                proseCont.scrollTo(0, current_scroll)
                if( target_scroll < current_scroll)
                  return;
                frame(current_scroll);
              });
          }
          frame(proseCont.scrollTop);
        }

        function flashColor(el)
        {
          let target_l = 1;

          let i_seen = i;
          let last_t = performance.now();
          function frame(current_l)
          {
            if(stopPreview || i != i_seen) return;
            window.requestAnimationFrame( () =>
              {
                let speed = 3;
                let t = performance.now();
                let dt = t-last_t
                last_t = t;
                current_l += speed*dt/1000;
                el.style.borderColor = chemes[cheme_select].player_l(current_l)
                if( target_l < current_l)
                {
                  el.style.borderColor = "";
                  return;
                }
                frame(current_l);
              });
          }
          frame(0);
        }

        previewCanceler = setTimeout(() =>
          {
            if(preview.proxy.reached_end())
            {
              setTimeout( () =>
                {
                  stopPreview = true;
                  showOverlay();
                }, 1000);
            }
            if(stopPreview || preview.proxy.reached_end())
            {
              return;
            }
            preview.proxy.moveon();
            let sentence_el = preview.proxy.last_prose_element();
            i++;
            scrollPreview(sentence_el);
            flashColor(downArrowEl);
            setProgress()
            movePreview();
          }, 500);
      }

      stopPreview = true;
      showOverlay();
      previewEl.onclick = () =>
      {
        if(!stopPreview)
        {
          stopPreview = true;
          showOverlay();
        }
        else
        {
          stopPreview = false;
          hideOverlay();
          if(preview.proxy.reached_end())
          {
            proseCont.scrollTo(0, 0);
            preview.proxy.restart(true);
          }
          movePreview();
        }
      }
      document.querySelector('#readNow').onclick = () =>
      {
        stopPreview = true;
        showOverlay();
        document.querySelector('#coverStart').scrollIntoView();
      };
    }
  }

  function presentToc(id) {
    document.title = 'Contents - ' + baseTitle;
    if(window.gtagconfig) window.gtagconfig();
    window.onscroll = undefined;
    window.onresize = undefined;
    stopPreview = true;
    showOverlay();
    document.body.className = 'toc';
    document.onkeydown = undefined;
    setupLinks();
    let booksColumn = document.querySelector('#booksColumn');
    let sectionsColumn = document.querySelector('#sectionsColumn');
    let lastSelected = null;
    let handleBookSelect = (id) =>
    {
      let el = booksColumn.querySelectorAll('h4')[id-1];
      el.classList.toggle('selected');
      if(lastSelected)
        lastSelected.classList.toggle('selected');
      lastSelected = el;

      while(sectionsColumn.firstChild)
        sectionsColumn.removeChild(sectionsColumn.firstChild);

      {
        let e = de('h2', {textContent: el.textContent});
        sectionsColumn.append(e);
      }

      let sections = books[id];
      for(let i in sections)
      {
        let sle = document.createElement('div')
        let s = sections[i];
        {
          let e = document.createElement('h4')
          e.innerText = s.title;
          sle.appendChild(e);
        }

        let prepare = (f) =>
        {
          if(f.mags && !f.ticks)
          {
            if(!f.points) f.points = {};
            if(!f.shapes) f.shapes = [];
            if(!f.letters) f.letters = {};
            prepareMags(f);
          }
        }

        if(s.figures)
          s.figures.forEach(prepare);
        else
          prepare(s)

        if(s.figures || (s.shapes && s.shapes.length > 0))
        {
          let svg = se('svg');
          let g = se('g');

          if(!s.figures)
          {
            g.append(...s.shapes.map(rg.draw));
          }
          else
          {
            s.figures.forEach(figure => {
              g.append(...figure.shapes.map(rg.draw));
            });
          }

          setTimeout( () =>
            {
              let r = g.getBBox();
              svg.setAttribute('viewBox', [r.x - 50/2, r.y - 50/2, r.width+100/2, r.height+100/2].join(' '));
              svg.setAttribute('width', (r.width + 100)/2);
              svg.setAttribute('height', (r.height + 100)/2);
            });

          svg.append(g);
          sle.append(svg);
        }
        {
          let e = document.createElement('p');
          e.innerText = s.prose.split('\n')[0] + '.. ';
          let a = document.createElement('a');
          a.innerText = 'continue';
          a.setAttribute('href', '/'+s.id);
          a.onclick = hrefClick;
          e.append(a);
          sle.append(e);
        }
        sectionsColumn.appendChild(sle);

      }
    }

    let ss = document.querySelector('#booksColumn h4.selected');
    if(ss)
    {
      lastSelected = ss
    }

    handleBookSelect(id);
    let el = document.querySelector('#booksColumn');
    el.onclick = (e) =>
    {
      let el = e.srcElement
      if(el.nodeName !== 'H4' || lastSelected === el)
          return;
      let m = el.textContent.match(/Book (\d+).*/)
      let id = Number(m[1]);
      history.pushState(null, '', `/toc/${id}`);
      handleBookSelect(id);
    }
  }

  let presentForLocation = () => {
    let m, re = /\/([^\/]+)/;
    if(m = location.pathname.match(/\/pg/))
    {
      presentPg();
    }
    else if(m = location.pathname.match(/\/toc(\/\d+)?/))
    {
      let id = m[1] && Number(m[1].slice(1));
      if(!isNaN(id) && id > 0 && id < 14)
        presentToc(id);
      else
        presentToc(1)
    }
    else if(m = location.pathname.match(re))
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
      history.replaceState(null, '', '/');
      presentCover();
    }
  }

  window.onpopstate = (e) => {
    presentForLocation();
  }

  function openSection(i_book, id) {
    window.scrollTo(0, 0);
    if(canPresentSection(i_book, id))
    {
      history.pushState(null, '', '/'+id);
      presentSection(i_book, id);
    }
    else
    {
      presentCover();
    }
  }
};

elements();
