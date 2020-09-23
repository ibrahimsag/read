import rough from 'roughjs';
import hsluv from 'hsluv';

import vec2 from './vec2.js';

let colors = {
  bright: hsluv.hsluvToHex([0, 0, 100]),
  sentence: hsluv.hsluvToHex([0, 0, 50]),
  dim: hsluv.hsluvToHex([0, 0, 20]),
  trail: hsluv.hsluvToHex([0, 0, 20]),
  link: hsluv.hpluvToHex([140, 100, 30]),
  make: hsluv.hpluvToHex,
};

const svgEl1 = document.getElementById('figure1');
const svgEl2 = document.getElementById('figure2');
const rsvg = rough.svg(svgEl1);
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

window.onload = () => {
  let shapes1 = [
    polygon([[230, 30], [230, 70], [300, 70]], {stroke: colors.sentence}),
    circle([250, 60], 60, {stroke: colors.sentence}),
    line([140, 30], [200, 30], {stroke: colors.dim}),
    line([40, 50], [200, 50], {stroke: colors.dim}),
    line([50, 60], [200, 60], {stroke: colors.dim}),
    line([20, 70], [200, 70], {stroke: colors.dim}),
    line([150, 80], [200, 80], {stroke: colors.dim}),
    line([10, 100], [200, 100], {stroke: colors.sentence}),
    line([40, 110], [200, 110], {stroke: colors.sentence}),
    line([30, 120], [200, 120], {stroke: colors.sentence}),
    line([100, 130], [200, 130], {stroke: colors.sentence}),
    line([60, 140], [60, 170], {stroke: colors.dim, strokeWidth: 2}),
    line([90, 140], [90, 190], {stroke: colors.dim, strokeWidth: 2}),
    line([120, 140], [120, 180], {stroke: colors.dim, strokeWidth: 2}),
    line([150, 140], [150, 170], {stroke: colors.dim, strokeWidth: 2}),
    line([180, 140], [180, 180], {stroke: colors.dim, strokeWidth: 2}),
  ];
  let shapes2 = [
    circle([250, 60], 60, {stroke: colors.trail}),
    line([230, 30], [230, 70], {stroke: colors.sentence}),
    line([230, 70], [300, 70], {stroke: colors.sentence}),
    line([230, 30], [300, 70], {stroke: colors.bright, strokeWidth: 2}),
    line([150, 30], [200, 30], {stroke: colors.dim}),
    line([10, 50], [130, 50], {stroke: colors.dim}),
    line([130, 50], [200, 50], {stroke: colors.sentence}),
    line([40, 60], [200, 60], {stroke: colors.sentence}),
    line([30, 70], [170, 70], {stroke: colors.sentence}),
    line([60, 70], [100, 70], {stroke: colors.bright, strokeWidth: 2}),
    line([170, 70], [200, 70], {stroke: colors.dim}),
    line([100, 80], [200, 80], {stroke: colors.dim}),
    line([40, 100], [200, 100], {stroke: colors.dim}),
    line([50, 110], [200, 110], {stroke: colors.dim}),
    line([20, 120], [200, 120], {stroke: colors.dim}),
    line([140, 130], [200, 130], {stroke: colors.dim}),
  ];
  shapes1.forEach(s =>
  {
    svgEl1.appendChild(rsvg.draw(s));
  });
  shapes2.forEach(s =>
  {
    svgEl2.appendChild(rsvg.draw(s));
  });
}
