import vec2 from '../vec2.js';

import prop0 from '../prose/3/0';
import prop1 from '../prose/3/1';
import prop2 from '../prose/3/2';
import prop3 from '../prose/3/3';
import prop4 from '../prose/3/4';
import prop5 from '../prose/3/5';
import prop6 from '../prose/3/6';
import prop7 from '../prose/3/7';
import prop8 from '../prose/3/8';
import prop9 from '../prose/3/9';
import prop10 from '../prose/3/10';
import prop11 from '../prose/3/11';
import prop12 from '../prose/3/12';
import prop13 from '../prose/3/13';
import prop14 from '../prose/3/14';
import prop15 from '../prose/3/15';
import prop16 from '../prose/3/16';
import prop17 from '../prose/3/17';
import prop18 from '../prose/3/18';
import prop19 from '../prose/3/19';
import prop20 from '../prose/3/20';
import prop21 from '../prose/3/21';
import prop22 from '../prose/3/22';
import prop23 from '../prose/3/23';
import prop24 from '../prose/3/24';
import prop25 from '../prose/3/25';
import prop26 from '../prose/3/26';
import prop27 from '../prose/3/27';
import prop28 from '../prose/3/28';
import prop29 from '../prose/3/29';
import prop30 from '../prose/3/30';
import prop31 from '../prose/3/31';
import prop32 from '../prose/3/32';
import prop33 from '../prose/3/33';
import prop34 from '../prose/3/34';
import prop35 from '../prose/3/35';
import prop36 from '../prose/3/36';
import prop37 from '../prose/3/37';

function book3(rg)
{
  return [
function()
{
  return {
    prose: prop0,
    points: {},
    shapes: [],
    letters: {}
  };
},

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
      D: [3.9],
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
  const ae = vec2.rot(vec2.sub(E, A), Math.PI/8);
  const te = vec2.add(A, ae);
  const eb = vec2.rot(vec2.sub(B, E), Math.PI/8);
  const tb = vec2.add(E, eb);
  const be = vec2.rot(vec2.sub(E, B), -Math.PI/8);
  const te2 = vec2.add(B, be);

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
      AEB: [rg.arc(cent, B, A)],
      AED: [rg.line(A, D), rg.arc(cent, E, A), rg.line(E, D)],
      DAE: [rg.line(A, D), rg.arc(cent, E, A), rg.anglecurve(D, A, te)],
      DEB: [rg.line(E, D), rg.arc(cent, B, E), rg.anglecurve(D, E, tb)],
      DBE: [rg.line(B, D), rg.arc(cent, B, E), rg.anglecurve(D, B, te2)],
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
  const K = [250, 250];
  const cc = vec2.rot([1, 0], -Math.PI * 3/4);
  const cc_i = vec2.rot(cc, -Math.PI /2);
  const L = vec2.add(K, vec2.scale(cc, d));
  const A = vec2.add(L, vec2.scale(cc, r2));
  const B = vec2.add(L, vec2.scale(cc_i, r2));
  const C = vec2.sub(L, vec2.scale(cc_i, r2));
  const D = vec2.add(K, vec2.scale(cc, r1));
  const E = vec2.add(K, vec2.scale(cc, d/2));
  const F = vec2.sub(L, vec2.scale(cc, r2));
  const G = vec2.sub(K, vec2.scale(cc, r1));

  return {
    prose: prop5,
    points: { A, B, C, D, E, F, G, K, L },
    shapes: [
      rg.circle(K, 2 * r1),
      rg.circle(L, 2 * r2),
      rg.line(E, C),
      rg.line(E, G),
    ],
    letters: {
      A: [2],
      B: [4],
      C: [0.5],
      D: [-2],
      E: [3],
      F: [-3],
      G: [-2]
    }
  }
},

function()
{
  const r1 = 150;
  const r2 = 110;
  const d = r1 - r2;
  const G = [250, 200];
  const alpha = -Math.PI * 2/3;
  const cc = vec2.rot([1, 0], alpha);
  const oc = vec2.scale(cc, r1);
  const C = vec2.add(G, oc);
  const A = vec2.add(G, vec2.rot(oc, alpha));
  const B = vec2.add(G, vec2.rot(oc, 2 * alpha));
  const F = vec2.add(G, vec2.scale(cc, d));
  const D = vec2.add(F, vec2.scale(vec2.rot(cc, alpha*1.12), r2));
  const fb = vec2.sub(B, F);
  const E = vec2.add(F, vec2.scale(fb, r2/vec2.len(fb)));

  return {
    prose: prop6,
    points: { A, B, C, D, E, F, G },
    shapes: [
      rg.circle(G, 2 * r1),
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
      B: [2.3],
      C: [1.5],
      D: [-1],
      E: [4],
      F: [-0.1, 2],
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
      DEF: [rg.curve(ells)],
    },
    letters: {
      A: [1],
      B: [0.5],
      C: [5.5],
      D: [0.4, 2],
      E: [-1],
      F: [4, 1.2],
      G: [-2],
      H: [2],
      K: [4],
      L: [2.3, 1.3],
      M: [3],
      N: [0.2],
      O: [0.2],
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
  const K = vec2.add(F, vec2.scale(ufa, d));
  const D = vec2.add(K, vec2.scale(vec2.rot(ufa, Math.PI/3), r2));
  const E = vec2.add(K, vec2.scale(vec2.rot(ufa, -Math.PI*4/5), r2));
  const fd = vec2.sub(D, F);
  const G = vec2.add(F, vec2.scale(fd, 0.5));
  const H = vec2.add(F, vec2.scale(fd, r1/vec2.len(fd)));

  return {
    prose: prop11,
    points: { A, B, C, D, E, F, G, H, K },
    shapes: [
      rg.circle(F, 2 * r1),
      rg.circle(K, 2 * r2),
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
  const K = [300, 250];
  const cc = vec2.rot([1, 0], -Math.PI*4/5);
  const L = vec2.add(K, vec2.scale(cc, r1 + r2));
  const A = vec2.add(K, vec2.scale(cc, r1));
  const B = vec2.add(L, vec2.scale(vec2.rot(cc, Math.PI/4), r2));
  const E = vec2.add(K, vec2.scale(vec2.rot(cc, -Math.PI*2/4), r1));
  const C = vec2.add(L, vec2.scale(vec2.rot(cc, Math.PI/6), -r2));
  const D = vec2.add(K, vec2.scale(vec2.rot(cc, -Math.PI/12), r1));
  const cd = vec2.sub(D, C);
  const F = vec2.add(C, vec2.scale(cd, -r2/vec2.len(cd)));
  const G = vec2.add(D, vec2.scale(cd, r1/vec2.len(cd)));

  return {
    prose: prop12,
    points: { A, B, C, D, E, F, G, K, L },
    shapes: [
      rg.circle(K, 2 * r1),
      rg.circle(L, 2 * r2),
      rg.polygon([A, F, G]),
      rg.line(C, D),
    ],
    smallletters: 'CD',
    letters: {
      A: [1.5],
      B: [1],
      C: [1],
      D: [-0.8, 3],
      E: [4, 1.3],
      F: [3],
      G: [-2]
    }
  }
},

function()
{
  const r1 = 120;
  const r2 = 90;
  const d = 160;
  const O = [200, 250];
  const cc = vec2.rot([1, 0], -Math.PI*1/4);
  const P = vec2.add(O, vec2.scale(cc, d));
  const K = vec2.add(P, vec2.scale(cc, r2));
  const theta = Math.acos((d*d + r1*r1 - r2*r2)/(2 * d * r1))
  const A = vec2.add(O, vec2.scale(vec2.rot(cc, -theta), r1));
  const C = vec2.add(O, vec2.scale(vec2.rot(cc, theta), r1));
  const B = vec2.add(O, vec2.scale(vec2.rot([1,0], Math.PI*4/5), r1));
  const D = vec2.add(O, vec2.scale(vec2.rot([1,0], Math.PI/5), r1));
  const bd = vec2.sub(D, B)
  const E = vec2.add(O, [0, r1/10]);
  const F = vec2.add(O, [0, r1]);
  const G = vec2.add(B, vec2.scale(bd, 0.3));
  const H = vec2.add(B, vec2.scale(bd, 0.7));
  const ells = [];
  for(var i = 0; i <= 30; i++)
  {
    let theta = Math.PI * (2 * i / 30);
    let h = theta < Math.PI ? r1 * 0.45: r1*0.33;
    let pp = [Math.cos(theta) * r1*0.85, Math.sin(theta) * h];
    ells.push(vec2.add(O, vec2.add(pp, [0, r1*0.43])));
  }

  return {
    prose: prop13,
    points: { A, B, C, D, E, F, G, H, K, O, P },
    given: {
      EBFD: [rg.curve(ells)],
    },
    shapes: [
      rg.circle(O, 2 * r1),
      rg.circle(P, 2 * r2),
      rg.curve(ells),
      rg.circle(G, 5, {strokeWidth: 2}),
      rg.circle(H, 5, {strokeWidth: 2}),
      rg.line(A, C),
      rg.line(B, D),
    ],
    letters: {
      A: [1.7],
      B: [4],
      C: [-2],
      D: [-2],
      E: [1],
      F: [1, 4],
      G: [1],
      H: [1],
      K: [0]
    }
  }
},

function()
{
  const r = 150;
  const d = 80;
  const E = [256, 206];
  const uef = vec2.rot([1,0], Math.PI * 3/4);
  const ueg = vec2.rot([1,0], -Math.PI * 1/12);
  const F = vec2.add(E, vec2.scale(uef, d));
  const G = vec2.add(E, vec2.scale(ueg, d));
  const ufa = vec2.rot(uef, -Math.PI / 2);
  const l = r * Math.sin(Math.acos(d/r));
  const fa = vec2.scale(ufa, l);
  const A = vec2.add(F, fa);
  const B = vec2.sub(F, fa);
  const ugd = vec2.rot(ueg, -Math.PI/2);
  const gd = vec2.scale(ugd, l);
  const D = vec2.add(G, gd);
  const C = vec2.sub(G, gd);

  return {
    prose: prop14,
    points: { A, B, C, D, E, F, G},
    shapes: [
      rg.circle(E, 2 * r),
      rg.line(F, E),
      rg.line(G, E),
      rg.line(A, B),
      rg.line(C, D),
      rg.line(A, E),
      rg.line(C, E),
    ],
    letters: {
      A: [5],
      B: [2.5],
      C: [5.5],
      D: [0.5],
      E: [2],
      F: [4],
      G: [-1],
    }
  }
},

function()
{
  const r = 150;
  const d = 80;
  const E = [256, 206];
  const ea = [0, -r];
  const A = vec2.add(E, ea);
  const D = vec2.sub(E, ea);
  const iea = vec2.rot(ea, -Math.PI/2);
  const B = vec2.add(E, vec2.rot(ea, Math.PI*0.23));
  const C = vec2.add(E, vec2.rot(ea, Math.PI*0.87));
  const F = vec2.add(E, vec2.rot(iea, Math.PI/5));
  const G = vec2.add(E, vec2.rot(iea, -Math.PI/5));
  const M = vec2.add(E, vec2.rot(iea, Math.PI*0.32));
  const N = vec2.add(E, vec2.rot(iea, -Math.PI*0.32));
  const [H, K, L] = [[B, C], [F, G], [M, N]].map(([a, b]) => vec2.scale(vec2.add(a, b), 0.5));

  return {
    prose: prop15,
    points: { A, B, C, D, E, F, G, H, K, L, M, N },
    shapes: [
      rg.circle(E, 2 * r),
      rg.line(A, D),
      rg.line(B, C),
      rg.polygon([F, E, G]),
      rg.polygon([M, E, N]),
      rg.line(E, H),
      rg.line(E, K)
    ],
    letters: {
      A: [1],
      B: [1],
      C: [5],
      D: [5],
      E: [0],
      F: [2],
      G: [4.5],
      H: [-1],
      K: [3],
      L: [2.2,1.4],
      M: [1],
      N: [5]
    }
  }
},

function()
{
  const r = 150;
  const D = [256, 206];
  const da = [0, r];
  const A = vec2.add(D, da);
  const B = vec2.sub(D, da);
  const C = vec2.add(D, vec2.rot(da, Math.PI*0.56));

  const dh = vec2.rot(da, Math.PI*0.28);
  const H = vec2.add(D, dh);
  const G = vec2.add(D, vec2.scale(dh, 1.3));
  const ag = vec2.sub(G, A);
  const F = vec2.add(A, vec2.scale(ag, 1.5));
  const E = vec2.add(A, vec2.scale(vec2.rot(da, Math.PI/2), 1.5));

  return {
    prose: prop16,
    points: { A, B, C, D, E, F, G, H },
    shapes: [
      rg.circle(D, 2 * r),
      rg.line(A, B),
      rg.line(D, C),
      rg.line(A, C),
      rg.line(D, G),
      rg.line(A, F),
      rg.line(A, E),
    ],
    letters: {
      A: [5],
      B: [1],
      C: [3],
      D: [-1],
      E: [3],
      F: [3],
      G: [1.3],
      H: [1, 1.2]
    }
  }
},

function()
{
  const r = 150;
  const r2 = 90;
  const E = [256, 206];
  const uea = [0, -1];
  const theta = Math.acos(r2/r);
  const ueb = vec2.rot(uea, -theta);
  const uec = vec2.rot(uea, Math.PI/2);
  const A = vec2.add(E, vec2.scale(uea, r));
  const B = vec2.add(E, vec2.scale(ueb, r2));
  const D = vec2.add(E, vec2.scale(uea, r2));
  const F = vec2.add(E, vec2.scale(ueb, r));
  const C = vec2.add(E, vec2.scale(uec, r2));
  const G = vec2.add(E, vec2.scale(uec, r));

  return {
    prose: prop17,
    points: { A, B, C, D, E, F, G },
    shapes: [
      rg.circle(E, 2 * r),
      rg.circle(E, 2 * r2),
      rg.line(E, F),
      rg.line(E, A),
      rg.line(A, B),
      rg.line(F, D)
    ],
    letters: {
      A: [1],
      B: [3, 3],
      C: [-1, 0.8],
      D: [0.2],
      E: [-1],
      F: [2.5],
      G: [-1, 0.8]
    }
  }
},

function()
{
  const r = 150;
  const F = [206, 206];
  const fb = [r, 0];
  const fc = vec2.rot(fb, Math.PI/4);
  const cg = vec2.rot(fc, -Math.PI/2);
  const A = vec2.sub(F, fc);
  const B = vec2.add(F, fb);
  const C = vec2.add(F, fc);
  const G = vec2.add(C, cg);
  const D = vec2.add(C, vec2.scale(cg, 1.5));
  const E = vec2.sub(C, cg);

  return {
    prose: prop18,
    points: { A, B, C, D, E, F, G },
    shapes: [
      rg.circle(F, 2 * r),
      rg.line(E, D),
      rg.line(F, C),
      rg.line(F, G)
    ],
    letters: {
      A: [2],
      B: [2, 1.2],
      C: [-2],
      D: [-1.5],
      E: [-2],
      F: [3],
      G: [-1, 0.8]
    }
  }
},

function()
{
  const r = 150;
  const O = [206, 206];
  const tc = [0, r];
  const cd = vec2.rot(tc, Math.PI/2);
  const A = vec2.sub(O, tc);
  const B = vec2.add(O, vec2.rot(tc, Math.PI/2));
  const C = vec2.add(O, tc);
  const D = vec2.add(C, cd);
  const E = vec2.sub(C, cd);
  const F = vec2.add(O, [30, 10]);

  return {
    prose: prop19,
    points: { A, B, C, D, E, F, O },
    shapes: [
      rg.circle(O, 2 * r),
      rg.line(A, C),
      rg.line(F, C),
      rg.line(D, E),
    ],
    letters: {
      A: [1],
      B: [2, 1.2],
      C: [5],
      D: [3],
      E: [-1],
      F: [1],
    }
  }
},

function()
{
  const r = 150;
  const E = [206, 206];
  const ef = vec2.rot([r, 0], Math.PI/4);
  const ed = vec2.rot(ef, -Math.PI/2);
  const A = vec2.sub(E, ef);
  const F = vec2.add(E, ef);
  const D = vec2.add(E, ed);
  const G = vec2.sub(E, ed);
  const C = vec2.add(E, vec2.rot(ef, -Math.PI/5));
  const B = vec2.add(E, vec2.rot(ef, Math.PI/5));

  return {
    prose: prop20,
    points: { A, B, C, D, E, F, G },
    shapes: [
      rg.circle(E, 2 * r),
      rg.line(A, B),
      rg.line(A, C),
      rg.line(E, B),
      rg.line(E, C),
      rg.line(A, F),
      rg.line(D, B),
      rg.line(D, C),
      rg.line(D, G),
    ],
    letters: {
      A: [2],
      B: [5],
      C: [-1.5],
      D: [0.5],
      E: [1, 2],
      F: [-2],
      G: [4]
    }
  }
},

function()
{
  const r = 150;
  const F = [206, 206];
  const ft = [0, r];
  const A = vec2.add(F, vec2.rot(ft, Math.PI*0.8));
  const B = vec2.add(F, vec2.rot(ft, Math.PI*0.35));
  const C = vec2.add(F, vec2.rot(ft, -Math.PI*0.1));
  const D = vec2.add(F, vec2.rot(ft, -Math.PI*0.35));
  const E = vec2.add(F, vec2.rot(ft, -Math.PI*0.55));

  return {
    prose: prop21,
    points: { A, B, C, D, E, F },
    shapes: [
      rg.circle(F, 2 * r),
      rg.line(A, B),
      rg.line(A, D),
      rg.line(B, D),
      rg.line(F, B),
      rg.line(F, D),
      rg.line(E, B),
      rg.line(E, D),
    ],
    letters: {
      A: [1.5],
      B: [3.5],
      C: [-2.5],
      D: [-1.5],
      E: [-0.5],
      F: [1],
    }
  }
},

function()
{
  const r = 150;
  const E = [206, 206];
  const ft = [0, r];
  const A = vec2.add(E, vec2.rot(ft, Math.PI*0.6));
  const B = vec2.add(E, vec2.rot(ft, -Math.PI*0.9));
  const C = vec2.add(E, vec2.rot(ft, -Math.PI*0.4));
  const D = vec2.add(E, vec2.rot(ft, Math.PI*0.2));

  return {
    prose: prop22,
    points: { A, B, C, D, E },
    shapes: [
      rg.circle(E, 2 * r),
      rg.line(A, B),
      rg.line(A, C),
      rg.line(A, D),
      rg.line(B, C),
      rg.line(B, D),
      rg.line(C, D),
    ],
    letters: {
      A: [2.2],
      B: [0.5],
      C: [-1.5],
      D: [4.5],
    }
  }
},

function()
{
  const A = [50,  200];
  const B = [450, 200];
  const E = vec2.add(vec2.scale(vec2.add(A, B), 0.5), [0, 200]);
  const F = vec2.add(vec2.scale(vec2.add(A, B), 0.5), [0, 50]);
  const fa = vec2.sub(A, F);
  const ea = vec2.sub(A, E);
  const alpha = Math.PI * 7/11;
  const D = vec2.add(F, vec2.rot(fa, alpha));
  const r1 = vec2.len(ea);
  const r2 = vec2.len(fa);
  const d = r1 - r2;
  const rem = Math.acos(vec2.dot(vec2.scale(ea, 1/r1), vec2.scale(fa, 1/r2)));
  const theta = Math.PI - 2 * ((Math.PI - alpha)/2 + rem);
  const C = vec2.add(E, vec2.rot(ea, theta));

  return {
    prose: prop23,
    points: { A, B, C, D, E, F },
    shapes: [
      rg.arc(F, A, B),
      rg.arc(E, A, B),
      rg.polygon([A, D, B]),
      rg.line(C, B)
    ],
    letters: {
      A: [5],
      B: [5],
      C: [1],
      D: [0],
    }
  }
},

function()
{
  const A = [100,  200];
  const B = [350, 200];
  const C = [100,  400];
  const D = [350, 400];
  const K = vec2.add(vec2.scale(vec2.add(A, B), 0.5), [0, 20]);
  const P = vec2.scale(vec2.add(C, D), 0.5);
  const r = vec2.dist(P, C);
  const L = vec2.add(P, [0, 20]);
  const ka = vec2.sub(A, K);
  const lc = vec2.sub(C, L);
  const E = vec2.add(K, vec2.rot(ka, Math.PI*0.45));
  const F = vec2.add(L, vec2.rot(lc, Math.PI/3));
  const G = vec2.add(L, vec2.rot(lc, Math.PI*0.515));
  const ps = [];
  for(var i = 0; i < 15; i++)
  {
    let theta = -Math.PI * (i/14);
    let h = Math.sin(theta);
    let pp = [Math.cos(theta) * r - h * 50, h * r * 0.85];
    ps.push(vec2.add(P, pp));
  }

  return {
    prose: prop24,
    points: { A, B, C, D, E, F, G, K, L },
    given: {
      CGD: [rg.curve(ps)],
    },
    shapes: [
      rg.arc(K, A, B),
      rg.arc(L, C, D),
      rg.line(A, B),
      rg.line(C, D),
      rg.curve(ps),
    ],
    letters: {
      A: [5],
      B: [5],
      C: [5],
      D: [5],
      E: [1],
      F: [2],
      G: [1],
    }
  }
},

function()
{
  const makePoints = (r, center, alpha) =>
  {
    const tb = [-r, 0];
    const B = vec2.add(center, tb);
    const A = vec2.add(center, vec2.rot(tb, alpha));
    const C = vec2.add(center, vec2.rot(tb, -alpha));
    const D = vec2.scale(vec2.add(A, C), 0.5);
    return [A, B, C, D];
  }

  return {
    prose: prop25,
    figures: [
      (function()
      {
        const E = [130, 150];
        const [A, B, C, D] = makePoints(100, E, Math.PI*0.27);

        return{
          points: { A, B, C, D, E },
          shapes: [
            rg.arc(E, C, A),
            rg.line(A, C),
            rg.line(A, B),
            rg.line(B, E),
            rg.line(A, E),
            rg.line(C, E),
          ],
          smallletters: 'ABCDE',
          letters: {
            A: [1],
            B: [3],
            C: [5],
            D: [0],
            E: [-1],
          }
        }
      })(),
      (function()
      {
        const E = [280, 150];
        const [A, B, C, D] = makePoints(80, E, Math.PI*0.5);

        return{
          points: { A, B, C, D, E },
          shapes: [
            rg.arc(E, C, A),
            rg.line(A, C),
            rg.line(A, B),
            rg.line(B, E),
          ],
          smallletters: 'ABCD',
          letters: {
            A: [1],
            B: [3],
            C: [5],
            D: [-1],
          }
        }
      })(),
      (function()
      {
        const E = [430, 150];
        const [A, B, C, D] = makePoints(80, E, Math.PI*0.6);

        return{
          points: { A, B, C, D, E },
          shapes: [
            rg.arc(E, C, A),
            rg.line(A, C),
            rg.line(A, B),
            rg.line(B, D),
            rg.line(A, E),
          ],
          smallletters: 'ABCDE',
          letters: {
            A: [0.5],
            B: [3],
            C: [5.5],
            D: [-1],
            E: [5]
          }
        }
      })(),
    ]
  }
},

function()
{
  const r = 100;

  const G = [130, 150];
  const H = [370, 150];
  const w = [0, r];
  const A = vec2.add(G, vec2.rot(w, Math.PI*0.85));
  const B = vec2.add(G, vec2.rot(w, Math.PI*0.35));
  const C = vec2.add(G, vec2.rot(w, -Math.PI*0.35));
  const K = vec2.add(G, w);

  const D = vec2.add(H, vec2.rot(w, -Math.PI*0.6));
  const E = vec2.add(H, vec2.rot(w, Math.PI*0.35));
  const F = vec2.add(H, vec2.rot(w, -Math.PI*0.35));
  const L = vec2.add(H, w);

  return {
    prose: prop26,
    points: { A, B, C, D, E, F, G, H, K, L },
    shapes: [
      rg.circle(G, 2*r),
      rg.circle(H, 2*r),
      rg.polygon([A, B, C]),
      rg.line(G, B),
      rg.line(G, C),
      rg.polygon([D, E, F]),
      rg.line(H, E),
      rg.line(H, F)
    ],
    letters: {
      A: [2],
      B: [3.6],
      C: [-1.6],
      D: [0],
      E: [3.6],
      F: [-1.6],
      G: [1],
      H: [1],
      K: [5],
      L: [5]
    }
  }
},

function()
{
  const r = 100;

  const G = [130, 150];
  const H = [370, 150];
  const w = [0, r];
  const A = vec2.add(G, vec2.rot(w, Math.PI*0.85));
  const B = vec2.add(G, vec2.rot(w, Math.PI*0.35));
  const C = vec2.add(G, vec2.rot(w, -Math.PI*0.35));
  const K = vec2.add(G, vec2.rot(w, -Math.PI*0.25));

  const D = vec2.add(H, vec2.rot(w, Math.PI*0.85));
  const E = vec2.add(H, vec2.rot(w, Math.PI*0.35));
  const F = vec2.add(H, vec2.rot(w, -Math.PI*0.35));

  return {
    prose: prop27,
    points: { A, B, C, D, E, F, G, H, K },
    shapes: [
      rg.circle(G, 2*r),
      rg.circle(H, 2*r),
      rg.line(A, B),
      rg.line(A, C),
      rg.line(G, B),
      rg.line(G, C),
      rg.line(G, K),
      rg.line(D, E),
      rg.line(D, F),
      rg.line(H, E),
      rg.line(H, F)
    ],
    letters: {
      A: [1.5],
      B: [3.5],
      C: [-1.6],
      D: [1.5],
      E: [3.5],
      F: [-1.6],
      G: [1],
      H: [1],
      K: [-2.5],
    }
  }
},

function()
{
  const r = 100;

  const K = [130, 150];
  const L = [370, 150];
  const w = [0, r];
  const A = vec2.add(K, vec2.rot(w, Math.PI*0.35));
  const B = vec2.add(K, vec2.rot(w, -Math.PI*0.35));
  const C = vec2.sub(K, w);
  const G = vec2.add(K, w);

  const D = vec2.add(L, vec2.rot(w, Math.PI*0.35));
  const E = vec2.add(L, vec2.rot(w, -Math.PI*0.35));
  const F = vec2.sub(L, w);
  const H = vec2.add(L, w);

  return {
    prose: prop28,
    points: { A, B, C, D, E, F, G, H, K, L },
    shapes: [
      rg.circle(K, 2*r),
      rg.circle(L, 2*r),
      rg.polygon([A, B, K]),
      rg.polygon([D, E, L]),
    ],
    letters: {
      A: [3.5],
      B: [-1.5],
      C: [1],
      D: [3.5],
      E: [-1.5],
      F: [1],
      G: [5],
      H: [5],
      K: [1],
      L: [1],
    }
  }
},

function()
{
  const r = 100;

  const K = [130, 150];
  const L = [370, 150];
  const w = [0, r];
  const B = vec2.add(K, vec2.rot(w, Math.PI*0.35));
  const C = vec2.add(K, vec2.rot(w, -Math.PI*0.35));
  const A = vec2.sub(K, w);
  const G = vec2.add(K, w);

  const E = vec2.add(L, vec2.rot(w, Math.PI*0.35));
  const F = vec2.add(L, vec2.rot(w, -Math.PI*0.35));
  const D = vec2.sub(L, w);
  const H = vec2.add(L, w);

  return {
    prose: prop29,
    points: { A, B, C, D, E, F, G, H, K, L },
    shapes: [
      rg.circle(K, 2*r),
      rg.circle(L, 2*r),
      rg.polygon([K, B, C]),
      rg.polygon([L, E, F]),
    ],
    letters: {
      A: [1],
      B: [3.5],
      C: [-1.5],
      D: [1],
      E: [3.5],
      F: [-1.5],
      G: [5],
      H: [5],
      K: [1],
      L: [1],
    }
  }
},

function()
{
  const r = 150;

  const w = [0, -r];
  const C = [250, 200];
  const D = vec2.add(C, w);
  const A = vec2.add(C, vec2.rot(w, -Math.PI/2));
  const B = vec2.add(C, vec2.rot(w, Math.PI/2));

  return {
    prose: prop30,
    points: { A, B, C, D },
    shapes: [
      rg.arc(C, A, B),
      rg.polygon([D, A, B]),
      rg.line(D, C)
    ],
    letters: {
      A: [5],
      B: [5],
      C: [5],
      D: [1],
    }
  }
},

function()
{
  const r = 150;

  const E = [250, 230];
  const w = vec2.rot([0, r], Math.PI*0.2);
  const B = vec2.add(E, w);
  const C = vec2.sub(E, w);
  const A = vec2.add(E, vec2.rot(w, Math.PI*0.4));
  const D = vec2.add(E, vec2.rot(w, Math.PI*0.7));
  const F = vec2.add(B, vec2.scale(vec2.sub(A, B), 1.8));

  return {
    prose: prop31,
    points: { A, B, C, D, E, F },
    shapes: [
      rg.circle(E, 2*r),
      rg.polygon([B, A, D, C]),
      rg.line(A, C),
      rg.line(A, E),
      rg.line(A, F)
    ],
    letters: {
      A: [3],
      B: [4],
      C: [0.5],
      D: [1.5],
      E: [-1.5],
      F: [3]
    }
  }
},

function()
{
  const r = 150;

  const T = [250, 230];
  const w = [0, r];
  const A = vec2.sub(T, w);
  const B = vec2.add(T, w);
  const C = vec2.add(T, vec2.rot(w, -Math.PI*0.35));
  const D = vec2.add(T, vec2.rot(w, -Math.PI*0.7));
  const be = vec2.rot(w, Math.PI/2);
  const E = vec2.add(B, be);
  const F = vec2.sub(B, be);

  return {
    prose: prop32,
    points: { A, B, C, D, E, F, T },
    shapes: [
      rg.circle(T, 2*r),
      rg.polygon([A, B, C, D]),
      rg.line(B, D),
      rg.line(E, F),
    ],
    letters: {
      A: [1],
      B: [5],
      C: [-1.5],
      D: [0],
      E: [5],
      F: [5]
    }
  }
},

function()
{
  const r = 70;

  return {
    prose: prop33,
    figures: [
      (function()
      {
        const alpha = Math.PI*0.35;
        const A = [90, 100];
        const ca = [-r/2, 0];
        const cb = vec2.rot(ca, alpha);
        const C = vec2.add(A, [0, -40]);
        const Ca = vec2.add(C, ca);
        const Cb = vec2.add(C, cb);
        const D = vec2.add(A, vec2.scale(ca, 1.8));
        const v = vec2.rot([r, 0], Math.PI/2);
        const G = vec2.add(A, v);
        const E = vec2.add(G, v);
        const theta = (Math.PI/2 - alpha) * 2;
        const gb = vec2.rot(v, theta);
        const B = vec2.add(G, gb);
        const F = vec2.scale(vec2.add(A, B), 0.5);

        return{
          points: { A, B, C, D, E, F, G },
          given: {
            C: rg.angle(Ca, C, Cb),
          },
          shapes: [
            rg.circle(G, 2*r),
            rg.line(C, Ca),
            rg.line(C, Cb),
            rg.line(A, B),
            rg.line(A, D),
            rg.line(A, E),
            rg.line(B, E),
            rg.line(F, G),
            rg.line(B, G),
          ],
          smallletters: 'ABCDEFG',
          letters: {
            A: [1],
            B: [4],
            C: [-1],
            D: [3],
            E: [5],
            F: [2.5],
            G: [-1]
          }
        }
      })(),
      (function()
      {
        const alpha = Math.PI*0.5;
        const A = [250, 100];
        const ca = [-r/2, 0];
        const cb = vec2.rot(ca, alpha);
        const C = vec2.add(A, [0, -40]);
        const Ca = vec2.add(C, ca);
        const Cb = vec2.add(C, cb);
        const D = vec2.add(A, vec2.scale(ca, 1.8));
        const v = vec2.rot([r, 0], Math.PI/2);
        const F = vec2.add(A, v);
        const B = vec2.add(F, v);
        const fb = vec2.rot(v, Math.PI/2);
        const E = vec2.add(F, fb);

        return{
          points: { A, B, C, D, E, F },
          given: {
            C: rg.angle(Ca, C, Cb),
          },
          shapes: [
            rg.circle(F, 2*r),
            rg.line(C, Ca),
            rg.line(C, Cb),
            rg.line(A, B),
            rg.line(A, D),
            rg.line(A, E),
            rg.line(B, E),
          ],
          smallletters: 'ABCDEF',
          letters: {
            A: [1],
            B: [5],
            C: [-1],
            D: [3],
            E: [3],
            F: [-1],
          }
        }
      })(),
      (function()
      {
        const alpha = Math.PI*0.7;
        const A = [410, 100];
        const ca = [-r/2, 0];
        const cb = vec2.rot(ca, alpha);
        const C = vec2.add(A, [0, -40]);
        const Ca = vec2.add(C, ca);
        const Cb = vec2.add(C, cb);
        const D = vec2.add(A, vec2.scale(ca, 1.8));
        const v = vec2.rot([r, 0], Math.PI/2);
        const G = vec2.add(A, v);
        const E = vec2.add(G, v);
        const theta = (Math.PI/2 - alpha) * 2;
        const gb = vec2.rot(v, theta);
        const B = vec2.add(G, gb);
        const F = vec2.scale(vec2.add(A, B), 0.5);
        const gf = vec2.sub(F, G);
        const H = vec2.add(G, vec2.scale(gf, r/vec2.len(gf)));

        return{
          points: { A, B, C, D, E, F, G, H },
          given: {
            C: rg.angle(Ca, C, Cb),
          },
          shapes: [
            rg.circle(G, 2*r),
            rg.line(C, Ca),
            rg.line(C, Cb),
            rg.line(A, B),
            rg.line(A, D),
            rg.line(A, E),
            rg.line(F, G),
            rg.line(B, G),
            rg.line(H, A),
            rg.line(H, B),
          ],
          smallletters: 'ABCDEFGH',
          letters: {
            A: [1],
            B: [-1.5],
            C: [-1.5],
            D: [3],
            E: [5],
            F: [-0.5],
            G: [3],
            H: [0]
          }
        }
      })(),
    ]
  }
},

function()
{
  const r = 120;

  const alpha = Math.PI*0.27;
  const T = [200, 200];
  const da = [r, 0];
  const db = vec2.rot(da, -alpha);
  const D = [350, 300];
  const Da = vec2.add(D, da);
  const Db = vec2.add(D, db);
  const w = [-r, 0];
  const B = vec2.add(T, w);
  const C = vec2.add(T, vec2.rot(w, 2*alpha))
  const A = vec2.add(T, vec2.rot(w, -Math.PI*0.7));
  const bf = vec2.rot(w, Math.PI/2);
  const F = vec2.add(B, bf);
  const E = vec2.sub(B, bf);

  return {
    prose: prop34,
    points: { A, B, C, D, E, F, T },
    given: {
      D: rg.angle(Da, D, Db)
    },
    shapes: [
      rg.circle(T, 2*r),
      rg.polygon([A, B, C]),
      rg.line(E, F),
      rg.line(D, Da),
      rg.line(D, Db)
    ],
    letters: {
      A: [-2],
      B: [3],
      C: [1],
      D: [-0.5, 15],
      E: [3],
      F: [3],
    }
  }
},

function()
{
  const r = 100;
  return {
    prose: prop35,
    figures: [
    (function()
    {
      const F = [136, 156];
      const E = F;
      const w = [-r, 0];
      const B = vec2.add(F, w);
      const D = vec2.sub(F, w);
      const v = vec2.rot(w, Math.PI/3);
      const A = vec2.add(F, v);
      const C = vec2.sub(F, v);

      return {
        points: { A, B, C, D, E, F },
        shapes: [
          rg.circle(F, 2 * r),
          rg.line(A, C),
          rg.line(B, D),
        ],
        letters: {
          A: [2],
          B: [3],
          C: [-2],
          D: [-1],
          E: [0],
        }
      }
    })(),
    (function()
    {
      const F = [386, 156];
      const fe = [5, 50];
      const len_fe = vec2.len(fe);
      const ufe = vec2.scale(fe, 1/len_fe);
      const E = vec2.add(F, fe);

      const [A, C, G, B, D, H] = [Math.PI*0.27, -Math.PI*0.27].flatMap((theta) => {
        const ufm = vec2.rot(ufe, theta);
        const len_fm = len_fe * Math.cos(theta);
        const fm = vec2.scale(ufm, len_fm);
        const l = Math.sqrt(r*r - len_fm * len_fm);
        const t = vec2.scale(vec2.rot(ufm, Math.PI/2), l);
        return [vec2.add(fm, t), vec2.sub(fm, t), fm]
      }).map(v => vec2.add(F, v));

      return {
        points: { A, B, C, D, E, F, G, H },
        shapes: [
          rg.circle(F, 2 * r),
          rg.line(F, E),
          rg.line(A, C),
          rg.line(B, D),
          rg.line(F, G),
          rg.line(F, H),
          rg.line(F, B),
          rg.line(F, C),
        ],
        letters: {
          A: [2],
          B: [4],
          C: [-2],
          D: [0],
          E: [5, 1.4],
          F: [1.4],
          G: [4],
          H: [-2]
        }
      }
    })(),
    ]
  };
},

function()
{
  const r = 100;
  return {
    prose: prop36,
    figures: [
    (function()
    {
      const F = [136, 156];
      const E = F;
      const w = [-r, 0];
      const B = vec2.add(F, w);
      const D = vec2.sub(B, vec2.rot(vec2.scale(w, 2), Math.PI/2));
      const df = vec2.sub(F, D);
      const fa = vec2.scale(df, r/vec2.len(df));
      const A = vec2.add(F, fa);
      const C = vec2.sub(F, fa);

      return {
        points: { A, B, C, D, E, F },
        shapes: [
          rg.circle(F, 2 * r),
          rg.line(A, D),
          rg.line(B, D),
          rg.line(B, F),
        ],
        letters: {
          A: [0],
          B: [3],
          C: [-2.9, 4],
          D: [-3],
          F: [-1],
        }
      }
    })(),
    (function()
    {
      const E = [386, 156];
      const w = [-r, 0];
      const B = vec2.add(E, w);
      const D = vec2.sub(B, vec2.rot(vec2.scale(w, 2), Math.PI/2));

      const A = vec2.add(E, vec2.rot(w, Math.PI/3));
      const da = vec2.sub(A, D);
      const len_da = vec2.len(da);
      const uda = vec2.scale(da, 1/len_da);
      const dc = vec2.scale(uda, 2*r*2*r/vec2.len(da))
      const C = vec2.add(D, dc);
      const F = vec2.scale(vec2.add(A, C), 0.5);

      return {
        points: { A, B, C, D, E, F },
        shapes: [
          rg.circle(E, 2 * r),
          rg.line(B, D),
          rg.line(B, E),
          rg.line(D, A),
          rg.line(D, E),
          rg.line(C, E),
          rg.line(F, E)
        ],
        letters: {
          A: [1],
          B: [3],
          C: [3.4, 3],
          D: [-3],
          E: [-1],
          F: [2.5],
        }
      }
    })(),
    ]
  };
},

function()
{
  const r = 130;
  const F = [336, 226];
  const D = [50, 40];
  const fd = vec2.sub(D, F);
  const len_fd = vec2.len(fd);
  const w = vec2.scale(fd, r/len_fd);
  const alpha = Math.acos(r/len_fd);
  const E = vec2.add(F, vec2.rot(w, alpha));
  const B = vec2.add(F, vec2.rot(w, -alpha));
  const A = vec2.add(F, vec2.rot(w, -Math.PI*0.8));
  const da = vec2.sub(A, D);
  const len_da = vec2.len(da);
  const uda = vec2.scale(da, 1/len_da);
  const t = vec2.dist(D, B);
  const C = vec2.add(D, vec2.scale(uda, t*t/len_da));

  return {
    prose: prop37,
    points: { A, B, C, D, E, F },
    shapes: [
      rg.circle(F, 2 * r),
      rg.polygon([D, B, F, E]),
      rg.line(D, A),
      rg.line(D, F),
    ],
    letters: {
      A: [-2],
      B: [4],
      C: [3.3, 3],
      D: [3],
      E: [1],
      F: [-1.5],
    }
  }
},

]
}

export default book3;
