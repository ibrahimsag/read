import rough from 'roughjs';
import hsluv from 'hsluv';

import vec2 from './vec2.js';

let colors = {
  bright: hsluv.hsluvToHex([0, 0, 100]),
  step: hsluv.hsluvToHex([0, 0, 50]),

  emph: hsluv.hsluvToHex([0, 0, 80]),
  sentence: hsluv.hsluvToHex([0, 0, 70]),
  dim: hsluv.hsluvToHex([0, 0, 30]),
  none: hsluv.hsluvToHex([0, 0, 0]),
  trail: hsluv.hsluvToHex([0, 0, 30]),
  link_hover: hsluv.hpluvToHex([140, 100, 70]),
  link: hsluv.hpluvToHex([140, 100, 60]),
};

const svgEl_h = document.getElementById('figureH');
const svgEl_a = document.getElementById('figureA');
const rsvg = rough.svg(svgEl_h);
const roughopts = { roughness: 0.6, stroke: colors.dim, strokeWidth: 1 };

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

function angle(a, o, b)
{
  return [anglecurve(a, o, b), line(o, a), line(o, b)];
}

function anglecurve(a, o, b, opts)
{
  let [d1, d2] = [a, b].map(x => vec2.sub(x, o)).map(d => vec2.scale(d, 1/vec2.len(d)));

  let det = d1[0]*d2[1] - d1[1]*d2[0];
  if(det < 0)
  {
     [d2, d1] = [d1, d2];
  }

  let alpha = Math.acos(vec2.dot(d1, d2));
  let s = 14;

  let samples = [0, 0.25, 0.5, 0.75, 1];
  if(alpha > Math.PI / 2)
    samples = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
  let ps = samples.map(a => vec2.add(o, vec2.scale(vec2.rot(d1, alpha*a), s)));
  return curve(ps, Object.assign({strokeWidth: 10}, opts));
}

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

function main() {
  let style = `
body {
  color: ${colors.sentence};
}
h3 {
  color: ${colors.emph};
}
.item .author {
  color: ${colors.step};
}
a {
  color: ${colors.link};
}
a:hover {
  color: ${colors.link_hover};
}
.section blockquote {
  border-right-color: ${colors.dim};
}
em {
  color: ${colors.emph};
}
.c_dim {
  color: ${colors.dim};
}
.c_step {
  color: ${colors.step};
}
.c_bright {
  color: ${colors.bright};
}
`;
  document.head.append(de('style', {textContent: style}));

  let shapes_a = [
    circle([250, 60], 60, {stroke: colors.sentence}),
    polygon([[230, 30], [250, 80], [300, 80]], {stroke: colors.sentence}),
    line([140, 30], [200, 30], {stroke: colors.dim}),
    line([40, 50], [200, 50], {stroke: colors.dim}),
    line([50, 60], [200, 60], {stroke: colors.dim}),
    line([20, 70], [200, 70], {stroke: colors.dim}),
    line([150, 80], [200, 80], {stroke: colors.dim}),
    line([10, 100], [200, 100], {stroke: colors.sentence}),
    line([40, 110], [200, 110], {stroke: colors.sentence}),
    line([30, 120], [200, 120], {stroke: colors.sentence}),
    line([100, 130], [200, 130], {stroke: colors.sentence}),
    line([60, 130], [60, 170], {stroke: colors.dim, strokeWidth: 2}),
    line([90, 130], [90, 160], {stroke: colors.dim, strokeWidth: 2}),
    line([120, 140], [120, 180], {stroke: colors.dim, strokeWidth: 2}),
    line([150, 140], [150, 190], {stroke: colors.dim, strokeWidth: 2}),
    line([180, 140], [180, 180], {stroke: colors.dim, strokeWidth: 2}),
  ];
  let shapes_h = [
    circle([250, 60], 60, {stroke: colors.dim}),
    circle([260, 70], 60, {stroke: colors.dim}),
    line([230, 18], [230, 22], {stroke: colors.bright}),
    line([230, 30], [250, 80], {stroke: colors.bright}),
    line([240, 75], [240, 80], {stroke: colors.bright}),
    line([250, 80], [300, 80], {stroke: colors.bright}),
    line([305, 78], [305, 82], {stroke: colors.bright}),
    line([230, 30], [300, 80], {stroke: colors.dim}),
    anglecurve([230, 30], [250, 80], [300, 80], {stroke: colors.bright, strokeWidth: 6, roughness: 0.1}),
    line([150, 30], [200, 30], {stroke: colors.dim}),
    line([10, 50], [130, 50], {stroke: colors.dim}),
    line([130, 50], [200, 50], {stroke: colors.sentence}),
    line([40, 60], [200, 60], {stroke: colors.sentence}),
    line([120, 60], [140, 60], {stroke: colors.bright, strokeWidth: 4}),
    line([30, 70], [170, 70], {stroke: colors.sentence}),
    line([170, 70], [200, 70], {stroke: colors.dim}),
    line([100, 80], [200, 80], {stroke: colors.dim}),
    line([40, 100], [200, 100], {stroke: colors.dim}),
    line([50, 110], [200, 110], {stroke: colors.dim}),
    line([20, 120], [200, 120], {stroke: colors.dim}),
    line([140, 130], [200, 130], {stroke: colors.dim}),
  ];
  shapes_h.forEach(s =>
  {
    svgEl_h.appendChild(rsvg.draw(s));
  });
  shapes_a.forEach(s =>
  {
    svgEl_a.appendChild(rsvg.draw(s));
  });
}
window.onload = main;
