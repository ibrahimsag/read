import vec2 from './vec2.js';

import prop1 from './prose/book3/1';
import prop2 from './prose/book3/2';
import prop3 from './prose/book3/3';
import prop4 from './prose/book3/4';
import prop5 from './prose/book3/5';
import prop6 from './prose/book3/6';
import prop7 from './prose/book3/7';
import prop8 from './prose/book3/8';
import prop9 from './prose/book3/9';
import prop10 from './prose/book3/10';

function book3(rg)
{
  return [
function()
{
  const r = 150;
  const F = [256, 206];
  const fe = [0, r];
  const E = vec2.add(F, fe);
  const C = vec2.sub(F, fe);
  const theta = Math.PI/3;
  const A = vec2.add(F, vec2.rot(fe, theta));
  const B = vec2.add(F, vec2.rot(fe, -theta));
  const D = vec2.add(F, vec2.scale(fe, Math.cos(theta)));
  const G = vec2.add(F, [50, 0]);

  return {
    prose: prop1,
    points: { A, B, C, D, E, F, G },
    shapes: [
      rg.circle(F, 2 * r),
      rg.circle(F, 5, {strokeWidth: 2}),
      rg.line(C, E),
      rg.line(A, B),
      rg.line(G, A),
      rg.line(G, B),
      rg.line(G, D),
    ],
    letters: {
      A: [3.5],
      B: [-1.5],
      C: [1],
      D: [4.2],
      E: [5],
      F: [3, 1.3],
      G: [1]
    }
  }
},

function()
{
  const r = 150;
  const D = [256, 206];
  const da = vec2.rot([-r, 0], -Math.PI/25);
  const A = vec2.add(D, da);
  const B = vec2.add(D, vec2.rot(da, -Math.PI/2));
  const C = vec2.add(D, vec2.rot(da, -Math.PI*5/4));
  const df = vec2.rot(da, -Math.PI*1/4);
  const F = vec2.add(D, df);
  const cent = vec2.add(D, vec2.scale(df, 0.3));
  const r2 = vec2.dist(cent, A)
  const E = vec2.add(cent, vec2.scale(df, r2/vec2.len(df)));

  return {
    prose: prop2,
    points: { A, B, C, D, E, F },
    shapes: [
      rg.circle(D, 2 * r),
      rg.line(D, E),
      rg.line(D, A),
      rg.line(D, B),
      rg.arc(cent, B, A),
    ],
    given: {
      AEB: () => [rg.arc(cent, B, A)],
    },
    letters: {
      A: [3],
      B: [5.5],
      C: [0],
      D: [1],
      E: [4, 1.2],
      F: [1, 1.2]
    }
  }
},

function()
{
  const r = 150;
  const E = [256, 206];
  const ed = [0, r];
  const D = vec2.add(E, ed);
  const C = vec2.sub(E, ed);
  const theta = Math.PI*3/8;
  const A = vec2.add(E, vec2.rot(ed, theta));
  const B = vec2.add(E, vec2.rot(ed, -theta));
  const F = vec2.add(E, vec2.scale(ed, Math.cos(theta)));

  return {
    prose: prop3,
    points: { A, B, C, D, E, F },
    shapes: [
      rg.circle(E, 2 * r),
      rg.line(C, D),
      rg.line(A, B),
      rg.line(E, A),
      rg.line(E, B)
    ],
    letters: {
      A: [3.5],
      B: [-1.5],
      C: [1],
      D: [5],
      E: [0],
      F: [-2.3]
    }
  }
},

function()
{
  const r = 150;
  const F = [256, 206];
  const fe = [15, 80];
  const len_fe = vec2.len(fe);
  const ufe = vec2.scale(fe, 1/len_fe);
  const E = vec2.add(F, fe);

  const [A, C, B, D] = [Math.PI/5, -Math.PI/6].flatMap((theta) => {
    const ufm = vec2.rot(ufe, theta);
    const len_fm = len_fe * Math.cos(theta);
    const fm = vec2.scale(ufm, len_fm);
    const l = Math.sqrt(r*r - len_fm * len_fm);
    const t = vec2.scale(vec2.rot(ufm, Math.PI/2), l);
    return [vec2.add(fm, t), vec2.sub(fm, t)]
  }).map(v => vec2.add(F, v));

  return {
    prose: prop4,
    points: { A, B, C, D, E, F },
    shapes: [
      rg.circle(F, 2 * r),
      rg.line(F, E),
      rg.line(A, C),
      rg.line(B, D),
    ],
    letters: {
      A: [3],
      B: [4],
      C: [-2],
      D: [-1],
      E: [5, 1.2],
      F: [1.4],
    }
  }
},

function()
{
  const r1 = 150;
  const r2 = 120;
  const d = 90;
  const center1 = [250, 250];
  const cc = vec2.rot([1, 0], -Math.PI * 3/4);
  const cc_i = vec2.rot(cc, -Math.PI /2);
  const center2 = vec2.add(center1, vec2.scale(cc, d));
  const A = vec2.add(center2, vec2.scale(cc, r2));
  const B = vec2.add(center2, vec2.scale(cc_i, r2));
  const C = vec2.sub(center2, vec2.scale(cc_i, r2));
  const D = vec2.add(center1, vec2.scale(cc, r1));
  const E = vec2.add(center1, vec2.scale(cc, d/2));
  const F = vec2.sub(center2, vec2.scale(cc, r2));
  const G = vec2.sub(center1, vec2.scale(cc, r1));

  return {
    prose: prop5,
    points: { A, B, C, D, E, F, G },
    shapes: [
      rg.circle(center1, 2 * r1),
      rg.circle(center2, 2 * r2),
      rg.line(E, C),
      rg.line(E, G),
    ],
    letters: {
      A: [2],
      B: [4],
      C: [0.5],
      D: [-2],
      E: [3],
      F: [-1, 1.2],
      G: [-2]
    }
  }
},

function()
{
  const r1 = 150;
  const r2 = 110;
  const d = r1 - r2;
  const center1 = [250, 200];
  const alpha = -Math.PI * 2/3;
  const cc = vec2.rot([1, 0], alpha);
  const oc = vec2.scale(cc, r1);
  const C = vec2.add(center1, oc);
  const A = vec2.add(center1, vec2.rot(oc, alpha));
  const B = vec2.add(center1, vec2.rot(oc, 2 * alpha));
  const F = vec2.add(center1, vec2.scale(cc, d));
  const D = vec2.add(F, vec2.scale(vec2.rot(cc, alpha*1.12), r2));
  const fb = vec2.sub(B, F);
  const E = vec2.add(F, vec2.scale(fb, r2/vec2.len(fb)));

  return {
    prose: prop6,
    points: { A, B, C, D, E, F },
    shapes: [
      rg.circle(center1, 2 * r1),
      rg.circle(F, 2 * r2),
      rg.line(F, C),
      rg.line(F, B),
    ],
    letters: {
      A: [5],
      B: [-1.2, 0.8],
      C: [1.5],
      D: [4.5],
      E: [-2.6, 1.2],
      F: [4, 1.2]
    }
  }
},

]
}

export default book3;
