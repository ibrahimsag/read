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
import prop11 from './prose/book3/11';
import prop12 from './prose/book3/12';
import prop13 from './prose/book3/13';
import prop14 from './prose/book3/14';
import prop15 from './prose/book3/15';
import prop16 from './prose/book3/16';
import prop17 from './prose/book3/17';
import prop18 from './prose/book3/18';
import prop19 from './prose/book3/19';
import prop20 from './prose/book3/20';

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

function()
{
  const r = 200;
  const E = [250, 250];
  const ea = [-r, 0];
  const A = vec2.add(E, ea);
  const B = vec2.add(E, vec2.rot(ea, Math.PI/5));
  const C = vec2.add(E, vec2.rot(ea, Math.PI*2/5));
  const D = vec2.sub(E, ea);
  const F = vec2.sub(E, vec2.scale(ea, 0.4));
  const G = vec2.add(E, vec2.rot(ea, Math.PI*2/3));
  const H = vec2.add(E, vec2.rot(ea, -Math.PI*2/3));
  const K = vec2.add(E, vec2.rot(ea, -Math.PI*3/5));

  return {
    prose: prop7,
    points: { A, B, C, D, E, F, G, H, K },
    shapes: [
      rg.circle(E, 2 * r),
      rg.line(A, D),
      rg.line(B, E),
      rg.line(B, F),
      rg.line(C, E),
      rg.line(C, F),
      rg.line(G, E),
      rg.line(G, F),
      rg.line(H, E),
      rg.line(H, F),
      rg.line(K, E, {strokeLineDash: [5, 4]}),
      rg.line(K, F),
    ],
    letters: {
      A: [3],
      B: [2],
      C: [1.5],
      D: [-1],
      E: [4.2, 1.3],
      F: [0.2, 1.2],
      G: [0],
      H: [5.5],
      K: [5.5]
    }
  }
},

function()
{
  const r = 150;
  const M = [200, 300];
  const D = [400, 50];
  const dm = vec2.sub(M, D);
  const ma = vec2.scale(dm, r/vec2.len(dm));
  const A = vec2.add(M, ma);
  const G = vec2.sub(M, ma);
  let anglebetween = (o, a, b) => {
    let [d1, d2] = [a, b].map(v => vec2.sub(v, o)).map(d => vec2.scale(d, 1/vec2.len(d)));
    return Math.acos(vec2.dot(d1, d2));
  }
  let [[C, H, a1], [E, K, a2], [F, L, a3]] = [Math.PI/2, Math.PI/6, Math.PI/3].map(theta =>
  {
    const r1 = vec2.rot(ma, theta);
    const P1 = vec2.add(M, r1);
    const a = theta + Math.PI - 2 * anglebetween(P1, M, D);
    const r2 = vec2.rot(ma, a);
    const P2 = vec2.add(M, r2);
    return [P1, P2, a];
  });
  const B = vec2.add(M, vec2.rot(ma, -a2));
  const N = vec2.add(M, vec2.rot(ma, Math.PI*9/8));

  return {
    prose: prop8,
    points: { A, B, C, D, E, F, G, H, K, L, M, N },
    shapes: [
      rg.circle(M, 2 * r),
      rg.line(A, D),
      rg.line(M, B),
      rg.line(M, C),
      rg.line(C, D),
      rg.line(B, D),
      rg.line(M, E),
      rg.line(M, F),
      rg.line(D, E),
      rg.line(D, F),
      rg.line(M, H),
      rg.line(M, L),
      rg.line(M, K),
      rg.line(N, D),
      rg.line(M, N, {strokeLineDash: [5,4]}),
    ],
    letters: {
      A: [4],
      B: [0],
      C: [2.5],
      D: [-1],
      E: [3.5],
      F: [3],
      G: [0.5],
      H: [1],
      K: [0.6],
      L: [1.2],
      M: [6],
      N: [-0.5]
    }
  }
},

function()
{
  const r = 150;
  const D = [250, 250];
  const db = vec2.rot([r, 0], -Math.PI*4/5);
  const theta1 = -Math.PI/2;
  const theta2 = Math.PI*3/5;
  const B = vec2.add(D, db);
  const A = vec2.add(D, vec2.rot(db, theta1));
  const C = vec2.add(D, vec2.rot(db, theta2));
  const dk = vec2.rot(db, theta1/2);
  const K = vec2.add(D, dk);
  const G = vec2.sub(D, dk);
  const dl = vec2.rot(db, theta2/2);
  const L = vec2.add(D, dl);
  const H = vec2.sub(D, dl);
  const E = vec2.scale(vec2.add(A, B), 0.5);
  const F = vec2.scale(vec2.add(B, C), 0.5);

  return {
    prose: prop9,
    points: { A, B, C, D, E, F, G, H, K, L },
    shapes: [
      rg.circle(D, 2 * r),
      rg.line(A, B),
      rg.line(A, D),
      rg.line(B, D),
      rg.line(C, D),
      rg.line(C, B),
      rg.line(K, G),
      rg.line(H, L),
    ],
    letters: {
      A: [4.5],
      B: [2],
      C: [0],
      D: [-2.3,1.2],
      E: [0.5],
      F: [0.4],
      G: [-1],
      H: [5],
      K: [3],
      L: [1],
    }
  }
},

function()
{
  const r = 150;
  const P = [250, 250];
  const d = 0.25;
  const [[A, pa], [B, pb], [O, po], [G, pg], [C, pc], [F, pf], [N, pn], [H, ph]] = [0, 1+d, 2, 3-d, 4, 5+d, 6, 7-d].map(s =>
    {
      const theta = Math.PI * (s / 4 - 5/9);
      const pp = vec2.rot([r, 0], theta);
      return [vec2.add(P, pp), pp];
    })
  const K = vec2.scale(vec2.add(H, B), 0.5);
  const L = vec2.scale(vec2.add(G, B), 0.5);
  const M = vec2.add(P, vec2.scale(pn, 1.3))
  const E = vec2.add(P, vec2.scale(po, 1.3))
  const D = vec2.add(P, vec2.scale(pa, 0.7))
  const ells = [];
  for(var i = 0; i < 20; i++)
  {
    let theta = Math.PI * (2 * (i-5) / 19);
    let pp = [Math.cos(theta) * r * 1.3, Math.sin(theta) * r * 0.725];
    ells.push(vec2.add(P, vec2.rot(pp, -Math.PI * 1/18)));
  }

  return {
    prose: prop10,
    points: { A, B, C, D, E, F, G, H, K, L, M, N, O, P },
    shapes: [
      rg.circle(P, 2 * r),
      rg.curve(ells),
      rg.line(H, B),
      rg.line(B, G),
      rg.line(A, C),
      rg.line(M, E),
    ],
    given: {
      DEF: () => [rg.curve(ells)],
    },
    letters: {
      A: [1],
      B: [0.5],
      C: [5.5],
      D: [0.4, 1.1],
      E: [-1],
      F: [4, 1.2],
      G: [-2],
      H: [2],
      K: [4.5, 1.2],
      L: [2.3, 1.3],
      M: [3],
      N: [0.2],
      O: [0.3],
      P: [-2],
    }
  }
},

function()
{
  const r1 = 150;
  const r2 = 100;
  const d = r1 - r2;
  const F = [250, 250];
  const ufa = vec2.rot([1, 0], -Math.PI*3/4);
  const fa = vec2.scale(ufa, r1);
  const A = vec2.add(F, fa);
  const B = vec2.add(F, [r1, 0]);
  const C = vec2.add(F, vec2.rot(fa, -Math.PI*2/3));
  const center = vec2.add(F, vec2.scale(ufa, d));
  const D = vec2.add(center, vec2.scale(vec2.rot(ufa, Math.PI/3), r2));
  const E = vec2.add(center, vec2.scale(vec2.rot(ufa, -Math.PI*4/5), r2));
  const fd = vec2.sub(D, F);
  const G = vec2.add(F, vec2.scale(fd, 0.5));
  const H = vec2.add(F, vec2.scale(fd, r1/vec2.len(fd)));

  return {
    prose: prop11,
    points: { A, B, C, D, E, F, G, H },
    shapes: [
      rg.circle(F, 2 * r1),
      rg.circle(center, 2 * r2),
      rg.line(F, H),
      rg.line(F, A),
      rg.line(G, A),
    ],
    letters: {
      A: [2],
      B: [-1],
      C: [4],
      D: [4],
      E: [5],
      F: [-2],
      G: [-1],
      H: [1],
    }
  }
},

function()
{
  const r1 = 140;
  const r2 = 70;
  const center1 = [300, 250];
  const cc = vec2.rot([1, 0], -Math.PI*4/5);
  const center2 = vec2.add(center1, vec2.scale(cc, r1 + r2));
  const A = vec2.add(center1, vec2.scale(cc, r1));
  const B = vec2.add(center2, vec2.scale(vec2.rot(cc, Math.PI/4), r2));
  const E = vec2.add(center1, vec2.scale(vec2.rot(cc, -Math.PI*2/4), r1));
  const C = vec2.add(center2, vec2.scale(vec2.rot(cc, Math.PI/6), -r2));
  const D = vec2.add(center1, vec2.scale(vec2.rot(cc, -Math.PI/12), r1));
  const cd = vec2.sub(D, C);
  const F = vec2.add(C, vec2.scale(cd, -r2/vec2.len(cd)));
  const G = vec2.add(D, vec2.scale(cd, r1/vec2.len(cd)));

  return {
    prose: prop12,
    points: { A, B, C, D, E, F, G },
    shapes: [
      rg.circle(center1, 2 * r1),
      rg.circle(center2, 2 * r2),
      rg.polygon([A, F, G]),
      rg.line(C, D),
    ],
    letters: {
      A: [1.5],
      B: [1],
      C: [3.5],
      D: [5.2, 1.3],
      E: [4, 1.3],
      F: [3],
      G: [-2]
    }
  }
},

]
}

export default book3;
