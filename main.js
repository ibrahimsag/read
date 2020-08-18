import rough from 'roughjs';
import hsluv from 'hsluv';

let colors = {
  bright: hsluv.hsluvToHex([0, 0, 90]),
  sentence: hsluv.hsluvToHex([0, 0, 50]),
  dim: hsluv.hsluvToHex([0, 0, 30])
};

function vec2sub(a, b)
{
  return [a[0] - b[0], a[1] - b[1]];
}

function vec2add(a, b)
{
  return [a[0] + b[0], a[1] + b[1]];
}

function vec2rot(v, a)
{
  return [Math.cos(a) * v[0] - Math.sin(a) * v[1], Math.sin(a) * v[0] + Math.cos(a) * v[1]];
}

function vec2scale(v, s)
{
  return [s * v[0], s * v[1]];
}

function vec2len(v)
{
  return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
}

function vec2dist(a, b)
{
  return vec2len(vec2sub(b, a));
}

const svg = document.getElementById('figure');

const rsvg = rough.svg(svg);

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

function makeHighlight(p, name, typ, arg1) {
  if(typ === 'point')
  {
    return circle(p.points[name], 5)
  }
  else if(typ == 'line')
  {
    return line(p.points[name[0]], p.points[name[1]])
  }
  else if(typ == 'circle')
  {
    let c = arg1.trim();
    if(/[A-Z]/.test(c))
    {
      let center = p.points[c];
      let a = p.points[name[0]];
      return circle(center, 2 * vec2dist(center, a));
    }
    else
    {
      return undefined;
    }
  }
  else if(typ == 'polygon')
  {
    return polygon(name.split('').map(l => p.points[l]));
  }
  else if(typ == 'angle')
  {
    let [a, o, b] = name.split('').map(l => p.points[l]);
    let [d1, d2] = [a, b].map(x => vec2sub(x, o));
    let dir = vec2sub(d2, d1);
    let d = [0.25, 0.5, 0.75].map(l => vec2add(d1, vec2scale(dir, l)));
    let ps = [d1, ...d, d2].map(d => vec2add(o, vec2scale(d, 20/vec2len(d))));
    return curve(ps, {strokeWidth: 4});
  }
  else
  {
    return p.highlights[typ + ' ' + name];
  }
}

function processProse(t)
{
  return t.split('\n\n').map(p => p.split('\n'));
}

import prose from './prose.js'

let proposition1 = (function()
{
  const distanceAB = 160;
  const A = [170, 200];
  const B = [A[0] + distanceAB, 200];
  const C = [A[0] + distanceAB/2, A[1] - (distanceAB/2) * Math.sqrt(3)];
  const D = [A[0] - distanceAB, A[1]];
  const E = [B[0] + distanceAB, B[1]];
  return {
    title: 'Proposition 1',
    prose: processProse(prose.proposition1),
    points: { A, B, C, D, E },
    shapes: [
      line(A, B),
      line(B, C),
      line(C, A),
      circle(A, distanceAB * 2),
      circle(B, distanceAB * 2),
    ],
    letters: {
      A: [2.5],
      B: [-0.5],
      C: [0.9, 1.2],
      D: [-0.5],
      E: [2.5]
    }
  }
})();

let proposition2 = (function()
{
  const A = [200, 270];
  const B = [250, 230];
  const C = [250, 120];
  const D = vec2add(A, vec2rot(vec2sub(B, A), -Math.PI / 3));
  const E = vec2add(D, vec2scale(vec2sub(A, D), 4));
  const F = vec2add(D, vec2scale(vec2sub(B, D), 4.5));
  const bf = vec2sub(B, F);
  const radius1 = vec2dist(B, C);
  const G = vec2add(B, vec2scale(bf, -radius1/ vec2len(bf)));
  const H = vec2add(B, vec2scale(bf, radius1/ vec2len(bf)));
  const de = vec2sub(E, D);
  const radius2 = vec2dist(D, G);
  const L = vec2sub(D, vec2scale(de, -radius2/ vec2len(de)));
  const K = vec2sub(D, vec2scale(de, radius2/ vec2len(de)));
  return {
    title: 'Proposition 2',
    prose: processProse(prose.proposition2),
    points: { A, B, C, D, E, F, G, H, K, L },
    shapes: [
      line(B, C),
      line(B, A),
      line(D, E),
      line(D, F),
      circle(B, 2 * radius1),
      circle(D, 2 * radius2)
    ],
    letters: {
      A: [3, 0.7],
      B: [0, 1.3],
      C: [0.6, 1.2],
      D: [1.5],
      E: [5, 0.8],
      F: [7],
      G: [7.7, 1.5],
      H: [1.2, 1.5],
      K: [1],
      L: [4],
    }
  }
})();

let proposition3 = (function()
{
  const A = [200, 250];
  const B = [450, 250];
  const C = [180, 50];
  const G = [330, 50];
  const cg = vec2sub(G, C);
  const ae = vec2rot(cg, -Math.PI * 3/4)
  const r = vec2len(ae);
  const D = vec2add(A, ae);
  const E = vec2add(A, cg);
  const F = vec2add(A, vec2rot(cg, Math.PI * 1/3));
  return {
    title: "Proposition 3",
    prose: processProse(prose.proposition3),
    points: {A, B, C, D, E, F, G},
    shapes: [
      line(A, B),
      line(C, G),
      line(A, D),
      circle(A, 2 * r)
    ],
    letters: {
      A: [3.5, 0.7],
      B: [-0.5, 1.3],
      C: [0, 1.3],
      D: [1.7, 1],
      E: [0.1, 1.5],
      F: [6, 1],
      G: [0, 1.3],
    }
  };
})();

let proposition4 = (function()
{
  const A = [170, 50];
  const B = [50, 200];
  const C = [220, 200];
  const D = vec2add(A, [230, 0]);
  const E = vec2add(B, [230, 0]);
  const F = vec2add(C, [230, 0]);
  const ef = vec2sub(F, E);
  let ps = [E];
  for(var i = 0; i < 6; i++)
  {
    ps.push(vec2add(vec2add(E, vec2scale(ef, i/6)), [0, 20*Math.sin(Math.PI * (i/6))]));
  }
  ps.push(F)

  return {
    title: "Proposition 4",
    prose: processProse(prose.proposition4),
    points: {A, B, C, D, E, F},
    shapes: [
      polygon([A, B, C]),
      polygon([D, E, F]),
      curve(ps)
    ],
    letters: {
      A: [.7, 1.2],
      B: [2.4, 1],
      C: [-0.5, 1.2],
      D: [.7, 1.2],
      E: [2.4, 1],
      F: [-0.5, 1.2]
    }
  }
})();

let propositionX = (function()
{
  const A = [100, 100]
  return {
    title: "Proposition X",
    prose: [
      ["{A point}"],
    ],
    points: {A},
    shapes: [
      circle(A, 100)
    ],
    letters: {
      A: [0, 1.5]
    }
  }
})();

let o = 0;

function draw(p)
{
  let nearHighlights = [];
  let highlight = [];

  let proseEl = document.querySelector('#prose');
  proseEl.innerHTML = '';

  let titleEl = document.createElement('h3');
  titleEl.innerHTML = p.title;
  titleEl.style['color'] = colors.sentence;
  proseEl.appendChild(titleEl);

  let refCount = 0;
  for(var i = 0; i < p.prose.length; i++)
  {
    let paragraphProse = p.prose[i];
    let paragraphEl = document.createElement('p');
    let content = '';
    for(var j = 0; j < paragraphProse.length; j++)
    {
      let sentenceProse = paragraphProse[j];
      let isFocusSentence = false;;
      let sentenceMarks = [];
      function highlightReference(m, name, typ, arg1)
      {
        sentenceMarks.push([name, typ, arg1]);

        let refEl = document.createElement('span');
        refEl.innerHTML = name;

        if(refCount == o)
        {
          isFocusSentence = true;
          refEl.style['color'] = colors.bright;

          highlight = [name, typ, arg1];
        }
        refCount++;

        return refEl.outerHTML;
      }

      let sentenceHTML = sentenceProse.replace(/\{([A-Z]+) ([a-z]+)( [A-Z])?\}/g, highlightReference);

      let el = document.createElement('span');
      el.innerHTML = sentenceHTML + ' ';
      if(isFocusSentence)
      {
        nearHighlights = [...sentenceMarks];
        el.style['color'] = colors.sentence;
      }

      paragraphEl.appendChild(el);
    }
    proseEl.appendChild(paragraphEl);
  }

  if(o < 0)
  {
    o = refCount - 1;
    return draw(p);
  }
  else if (o >= refCount)
  {
    o = 0;
    return draw(p);
  }

  svg.innerHTML = "";

  let shapes = [...p.shapes];

  for(var i = 0; i < nearHighlights.length; i++)
  {
    let h = makeHighlight(p, ...nearHighlights[i]);
    h.options["stroke"] = colors.sentence;
    shapes.push(h);
  }

  if(highlight.length)
  {
    let shape = makeHighlight(p, ...highlight);
    shape.options["stroke"] = colors.bright;
    shape.options["strokeWidth"] += 1;
    shapes.push(shape);
  }

  for(var i = 0; i < shapes.length; i++)
  {
    svg.appendChild(rsvg.draw(shapes[i]));
  }

  let nearHighlightNames = '';
  nearHighlights.forEach(m => nearHighlightNames += m[0]);

  for(var i in p.letters)
  {
    let letter = p.letters[i];
    let offset;
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    el.setAttribute('font-family', 'Futura');
    el.setAttribute('font-size', '24px');
    let fillColor = colors.dim;
    if(highlight.length && highlight[0].indexOf(i) > -1)
      fillColor = colors.bright;
    else if(nearHighlightNames.indexOf(i) > -1)
      fillColor = colors.sentence;
    el.setAttribute('fill', fillColor);
    el.textContent = i;
    svg.appendChild(el);

    if(letter[0] < 8)
    {
      let dir = vec2sub(vec2rot([letter[1] || 1, 0], -Math.PI * ((1 + letter[0]) / 4)), [1,-1]);
      let m = el.getBBox();
      offset = [dir[0] * m.width + 5, dir[1] * 20 - 4];
    }
    else
    {
      offset = [letter[1], letter[2]];
    }
    let pos = vec2add(p.points[i], offset);
    el.setAttribute('x', pos[0]);
    el.setAttribute('y', pos[1]);
  }

  document.onkeypress = pressHandler(p)
}

function pressHandler(p)
{
  return function(e)
  {
    if(e.key == "j")
    {
      o++;
      draw(p);
    }
    else if(e.key == "k")
    {
      o--;
      draw(p);
    }
  }
}

draw(proposition4);
