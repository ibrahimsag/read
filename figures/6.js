import vec2 from '../vec2.js';

import prop0 from '../prose/book6/0';
import prop1 from '../prose/book6/1';
import prop2 from '../prose/book6/2';
import prop3 from '../prose/book6/3';
import prop4 from '../prose/book6/4';
import prop5 from '../prose/book6/5';
import prop6 from '../prose/book6/6';
import prop7 from '../prose/book6/7';
import prop8 from '../prose/book6/8';
import prop9 from '../prose/book6/9';
import prop10 from '../prose/book6/10';
import prop11 from '../prose/book6/11';
import prop12 from '../prose/book6/12';
import prop13 from '../prose/book6/13';
import prop14 from '../prose/book6/14';
import prop15 from '../prose/book6/15';
import prop16 from '../prose/book6/16';
import prop17 from '../prose/book6/17';
import prop18 from '../prose/book6/18';
import prop19 from '../prose/book6/19';
import prop20 from '../prose/book6/20';
import prop21 from '../prose/book6/21';
import prop22 from '../prose/book6/22';
import prop23 from '../prose/book6/23';
import prop24 from '../prose/book6/24';
import prop25 from '../prose/book6/25';
import prop26 from '../prose/book6/26';
import prop27 from '../prose/book6/27';
import prop28 from '../prose/book6/28';
import prop29 from '../prose/book6/29';
import prop30 from '../prose/book6/30';
import prop31 from '../prose/book6/31';
import prop32 from '../prose/book6/32';
import prop33 from '../prose/book6/33';

function book6(rg)
{
  return [
function()
{
  return {
    prose: prop0,
  };
},

function()
{
  const A = [200, 50];
  const C = [200, 250];
  const l1 = 50;
  const l2 = 65;
  const B = vec2.sub(C, [l1, 0]);
  const D = vec2.add(C, [l2, 0]);
  const E = vec2.sub(A, [l1, 0]);
  const F = vec2.add(A, [l2, 0]);
  const G = vec2.sub(C, [l1 * 2, 0]);
  const H = vec2.sub(C, [l1 * 3, 0]);
  const K = vec2.add(C, [l2 * 2, 0]);
  const L = vec2.add(C, [l2 * 3, 0]);
  return {
    prose: prop1,
    points: { A, B, C, D, E, F, G, H, K, L },
    shapes: [
      rg.line(E, F),
      rg.line(E, B),
      rg.line(F, D),
      rg.line(H, L),
    ].concat([H, G, B, C, D, K, L].map(pt=>rg.line(A, pt))),
    letters: {
      A: [1],
      B: [-3],
      C: [-3],
      D: [-3],
      E: [1],
      F: [1],
      G: [-3],
      H: [-3],
      K: [-3],
      L: [-3],
    }

  };
},

function()
{
  const A = [50, 50];
  const B = [150, 300];
  const C = [350, 300];
  const ab = vec2.sub(B, A);
  const ac = vec2.sub(C, A);
  const D = vec2.add(A, vec2.scale(ab, 0.7));
  const E = vec2.add(A, vec2.scale(ac, 0.7));

  return {
    prose: prop2,
    points: { A, B, C, D, E },
    shapes: [
      rg.polygon([A, B, C]),
      rg.line(D, E),
      rg.line(B, E),
      rg.line(D, C),
    ],
    letters: {
      A: [1],
      B: [-3],
      C: [-3],
      D: [3],
      E: [-1]
    }
  };
},

function()
{
  const base = 300, h = 150;
  const B = [50, base];
  const A = [240, base - h];
  const C = [300, base];
  const ba = vec2.sub(A, B);
  const len_ba = vec2.len(ba);
  const uba = vec2.scale(ba, 1/len_ba);
  const len_ac = vec2.dist(A, C);
  const ae = vec2.scale(uba, len_ac);
  const E = vec2.add(A, ae);
  const ec = vec2.sub(C, E);
  const s_ad = len_ba / (len_ba + len_ac);
  const ad = vec2.scale(ec, s_ad);
  const D = vec2.add(A, ad);

  return {
    prose: prop3,
    points: { A, B, C, D, E },
    shapes: [
      rg.polygon([E, B, C]),
      rg.line(A, D),
      rg.line(A, C)
    ],
    letters: {
      A: [2],
      B: [-3],
      C: [-3],
      D: [-3],
      E: [1],
    }
  };
},

function()
{
  const A = [300, 150];
  const B = [50, 300];
  const C = [230, 300];
  const bc = vec2.sub(C, B);
  const ca = vec2.sub(A, C);
  const E = vec2.add(B, vec2.scale(bc, 1.5));
  const D = vec2.add(E, vec2.scale(ca, 0.5));
  const F = vec2.add(E, vec2.scale(ca, 1.5));

  return {
    prose: prop4,
    points: { A, B, C, D, E, F },
    shapes: [
      rg.polygon([B, E, F]),
      rg.line(A, C),
      rg.line(C, D)
    ],
    letters: {
      A: [2],
      B: [-3],
      C: [-3],
      D: [-1],
      E: [-3],
      F: [1]
    }
  };
},

function()
{
  const B = [50, 320];
  const C = [200, 300];
  const cb = vec2.sub(B, C);
  const theta = Math.PI * 0.6;
  const ca = vec2.scale(vec2.rot(cb, theta), 1.3);
  const A = vec2.add(C, ca);
  const F = [400, 200];
  const E = vec2.add(F, vec2.scale(cb, 0.6));
  const D = vec2.add(F, vec2.scale(ca, 0.6));
  const G = vec2.add(F, vec2.scale(vec2.rot(ca, -2*theta), 0.6));

  return {
    prose: prop5,
    points: { A, B, C, D, E, F, G },
    shapes: [
      rg.polygon([A, B, C]),
      rg.polygon([D, E, G, F]),
      rg.line(E, F)
    ],
    letters: {
      A: [1],
      B: [-3],
      C: [-3],
      D: [1],
      E: [3],
      F: [-1],
      G: [-3]
    }
  };
},

function()
{
  const A = [70, 50];
  const B = [50, 300];
  const ab = vec2.sub(B, A);
  const theta = -Math.PI * 0.2;
  const ac = vec2.scale(vec2.rot(ab, theta), 1.2);
  const C = vec2.add(A, ac);
  const de = vec2.scale(ab, 0.5);
  const df = vec2.scale(vec2.rot(de, theta), 1.2);
  const dg = vec2.rot(de, 2*theta);
  const D = [270, 50];
  const [E, F, G] = [de, df, dg].map(v => vec2.add(D, v));

  return {
    prose: prop6,
    points: { A, B, C, D, E, F, G },
    shapes: [
      rg.polygon([A, B, C]),
      rg.polygon([D, E, F, G]),
      rg.line(D, F)
    ],
    letters: {
      A: [1],
      B: [-3],
      C: [-3],
      D: [1],
      E: [-3],
      F: [-3],
      G: [-1],
    }
  };
},

function()
{
  const A = [150, 50];
  const B = [50, 150];
  const ab = vec2.sub(B, A);
  const theta = -Math.PI * 0.3;
  const ac = vec2.scale(vec2.rot(ab, theta), 1.5);
  const ag = vec2.scale(ac, 0.8);
  const C = vec2.add(A, ac);
  const G = vec2.add(A, ag);

  const D = [300, 100];
  const de = vec2.scale(ab, 0.6);
  const E = vec2.add(D, de);
  const df = vec2.scale(ac, 0.6);
  const F = vec2.add(D, df);

  return {
    prose: prop7,
    points: { A, B, C, D, E, F, G },
    shapes: [
      rg.polygon([A, B, C]),
      rg.polygon([D, E, F]),
      rg.line(B, G),
    ],
    letters: {
      A: [1],
      B: [3],
      C: [-1],
      D: [1],
      E: [3],
      F: [-1],
      G: [-1]
    }
  };
},

function()
{
  const A = [250, 50];
  const B = [50, 250];
  const ab = vec2.sub(B, A);
  const ac = vec2.rot(ab, -Math.PI/2);
  const C = vec2.add(A, ac);
  const bd = vec2.scale(vec2.sub(C, B), 0.5);
  const D = vec2.add(B, bd);

  return {
    prose: prop8,
    points: { A, B, C, D },
    shapes: [
      rg.polygon([A, B, C]),
      rg.line(A, D)
    ],
    letters: {
      A: [1],
      B: [-3],
      C: [-3],
      D: [-3],
    }
  };
},

function()
{
  const A = [50, 300];
  const at = [350, 0];
  const At = vec2.add(A, vec2.scale(at, 1.2));
  const av = vec2.scale(vec2.rot(at, -Math.PI*0.2), 0.8);
  const Av = vec2.add(A, vec2.scale(av, 1.4));
  const B = vec2.add(A, vec2.scale(at, 0.9));
  const C = vec2.add(A, vec2.scale(av, 0.9));
  const D = vec2.add(A, vec2.scale(av, 0.3));
  const E = vec2.add(A, vec2.scale(av, 0.6));
  const F = vec2.add(A, vec2.scale(at, 0.3));

  return {
    prose: prop9,
    points: { A, B, C, D, E, F },
    shapes: [
      rg.line(A, At),
      rg.line(A, Av),
      rg.line(D, F),
      rg.line(C, B)
    ],
    letters: {
      A: [-3],
      B: [-3],
      C: [2],
      D: [2],
      E: [2],
      F: [-3]
    }
  };
},

function()
{
  const A = [50, 350];
  const C = [450, 50];
  const B = [330, 350];
  const ac = vec2.sub(C, A);
  const ab = vec2.sub(B, A);
  const D = vec2.add(A, vec2.scale(ac, 0.25));
  const E = vec2.add(A, vec2.scale(ac, 0.65));
  const F = vec2.add(A, vec2.scale(ab, 0.25));
  const G = vec2.add(A, vec2.scale(ab, 0.65));
  const fd = vec2.sub(D, F);
  const H = vec2.add(G, fd);
  const K = vec2.add(B, fd);

  return {
    prose: prop10,
    points: { A, B, C, D, E, F, G, H, K },
    shapes: [
      rg.polygon([A, B, C]),
      rg.line(D, K),
      rg.line(D, F),
      rg.line(E, G)
    ],
    letters: {
      A: [-3],
      B: [-3],
      C: [1],
      D: [2],
      E: [2],
      F: [-3],
      G: [-3],
      H: [-0.2, 1.2],
      K: [-1]
    }
  };
},

function()
{
  const A = [230, 50];
  const C = [250, 200];
  const ac = vec2.sub(C, A);
  const r_ac = vec2.rot(ac, Math.PI * 0.22);
  const ab = vec2.scale(r_ac, 0.7);
  const ad = vec2.scale(r_ac, 1.7);
  const ae = vec2.scale(ac, (1.7/0.7));
  const [B, D, E] = [ab, ad, ae].map(v => vec2.add(A, v));

  return {
    prose: prop11,
    points: { A, B, C, D, E },
    shapes: [
      rg.polygon([A, D, E]),
      rg.line(B, C)
    ],
    letters: {
      A: [1],
      B: [2],
      C: [-1],
      D: [2],
      E: [-1]
    }
  };
},

function()
{
  const a = 180, b = 100, c = 150;
  const D = [50, 350];
  const udf = [1, 0];
  const ude = vec2.rot(udf, -Math.PI * 0.2);
  const dg = vec2.scale(ude, a);
  const de = vec2.scale(ude, a+b);
  const dt = vec2.scale(ude, a+b+ 50);
  const dh = vec2.scale(udf, c);
  const df = vec2.scale(udf, c*(a+b)/a);
  const dw = vec2.scale(udf, c*(a+b)/a + 50);
  const [G, E, H, F, T, W] = [dg, de, dh, df, dt, dw].map(v => vec2.add(D, v));

  return {
    prose: prop12,
    points: { D, E, F, G, H },
    mags: [
      { l: 'A', m: a, p: [50, 50] },
      { l: 'B', m: b, v: 40 },
      { l: 'C', m: c, v: 40 },
    ],
    shapes: [
      rg.line(D, T),
      rg.line(D, W),
      rg.line(G, H),
      rg.line(E, F)
    ],
    letters: {
      D: [-3],
      E: [1],
      F: [-3],
      G: [1],
      H: [-3]
    }
  };
},

function()
{
  const a = 280, b = 150, r= (a + b)/ 2;
  const A = [50, 300];
  const O = vec2.add(A, [r, 0]);
  const B = vec2.add(A, [a, 0]);
  const C = vec2.add(B, [b, 0]);
  const D = vec2.sub(B, [0, Math.sqrt(a * b)]);

  return {
    prose: prop13,
    points: { A, B, C, D, O },
    shapes: [
      rg.polygon([A, C, D]),
      rg.line(D, B),
      rg.arc(O, A, C),
    ],
    letters: {
      A: [-3],
      B: [-3],
      C: [-3],
      D: [0.5]
    }
  };
},

function()
{
  const u = [1, 0];
  const v = vec2.rot(u, -Math.PI*0.4);
  const B = [200, 150];
  const v1 = vec2.scale(v, 100);
  const v2 = vec2.scale(v, 150);
  const E = vec2.add(B, v1);
  const D = vec2.sub(B, v2);
  const u1 = vec2.scale(u, 120);
  const u2 = vec2.scale(u, 180);
  const [A, F, H] = [D, B, E].map(pt => vec2.sub(pt, u1));
  const [G, C] = [B, E].map(pt => vec2.add(pt, u2));

  return {
    prose: prop14,
    points: { A, B, C, D, E, F, G, H },
    shapes: [
      rg.line(H, C),
      rg.line(F, G),
      rg.line(A, D),
      rg.line(H, A),
      rg.line(D, E),
      rg.line(C, G)
    ],
    letters: {
      A: [-3],
      B: [-2.5],
      C: [1],
      D: [-3],
      E: [1],
      F: [3],
      G: [-1],
      H: [1]
    }
  };
},

function()
{
  const A = [200, 200];
  const B = [150, 50];
  const C = [350, 50];
  const ba = vec2.sub(A, B);
  const ca = vec2.sub(A, C);
  const D = vec2.add(A, vec2.scale(ca, 1.1));
  const E = vec2.add(A, vec2.scale(ba, 1/1.1));

  return {
    prose: prop15,
    points: { A, B, C, D, E },
    shapes: [
      rg.polygon([B, D, E]),
      rg.line(B, C),
      rg.line(C, D),
    ],
    letters: {
      A: [-1],
      B: [1],
      C: [1],
      D: [-3],
      E: [-3]
    }
  };
},

function()
{
  const a = 200, c = a*0.7, e = 120, f = e * 0.7;
  const A = [50, 150];
  const B = vec2.add(A, [a, 0]);
  const G = vec2.sub(A, [0, f]);
  const K = vec2.sub(B, [0, f]);
  const C = vec2.add(A, [70+ a, 0]);
  const D = vec2.add(C, [c, 0]);
  const H = vec2.sub(C, [0, e]);
  const L = vec2.sub(D, [0, e]);

  return {
    prose: prop16,
    points: { A, B, C, D, G, H, K, L },
    mags: [
      { l: 'E', m: e, p: [50, 200] },
      { l: 'F', m: f, p: [C[0], 200] },
    ],
    shapes: [
      rg.polygon([A, B, K, G]),
      rg.polygon([C, D, L, H]),
    ],
    letters: {
      A: [3],
      B: [-1],
      C: [3],
      D: [-1],
      G: [1],
      H: [1],
      K: [1],
      L: [1],
    }
  };
},

function()
{
  const b = 120, c = 90, a = b * b / c;
  return {
    prose: prop17,
    mags: [
      { l: 'A', m: a, p: [50, 50] },
      { l: 'B', m: b, v: 50 },
      { l: 'C', m: c, v: 50 },
      { l: 'D', m: b, p: [220, 100] },
    ],
  };
},

function()
{
  const C = [50, 200];
  const cd = [150, 0];
  const cf = [20, -130];
  const ce = [170, -160];
  const [D, F, E] = [cd, cf, ce].map(v => vec2.add(C, v));
  const A = [300, 200];
  const [B, G, H] = [cd, cf, ce].map(v => vec2.add(A, vec2.scale(v, 0.6)));

  return {
    prose: prop18,
    points: { A, B, C, D, E, F, G, H },
    shapes: [
      rg.polygon([C, D, E, F]),
      rg.polygon([A, B, H, G]),
      rg.line(F, D),
      rg.line(G, B)
    ],
    letters: {
      A: [-3],
      B: [-3],
      C: [-3],
      D: [-3],
      E: [1],
      F: [1],
      G: [1],
      H: [1],
    }
  };
},

function()
{
  const B = [50, 250];
  const ba = [100, -200];
  const bc = [200, 0];
  const ratio = 0.6;
  const [A, C] = [ba, bc].map(v => vec2.add(B, v));
  const G = vec2.add(B, vec2.scale(bc, ratio * ratio));
  const E = [300, 250];
  const [D, F] = [ba, bc].map(v => vec2.add(E, vec2.scale(v, ratio)));

  return {
    prose: prop19,
    points: { A, B, C, D, E, F, G },
    shapes: [
      rg.polygon([A, B, C]),
      rg.polygon([D, E, F]),
      rg.line(A, G)
    ],
    letters: {
      A: [1],
      B: [-3],
      C: [-3],
      D: [1],
      E: [-3],
      F: [-3],
      G: [-3]
    }
  };
},

function()
{
  const A = [100, 50];
  const ds = [[-50, 80], [0, 200], [100, 200], [150, 40], [0, 70]];
  const [B, C, D, E, M] = ds.map(v => vec2.add(A, v));
  const F = [350, 100];
  const [G, H, K, L, N] = ds.map(v => vec2.add(F, vec2.scale(v, 0.6)));

  return {
    prose: prop20,
    points: { A, B, C, D, E, F, G, H, K, L, M, N },
    shapes: [
      rg.polygon([A, B, C, D, E]),
      rg.polygon([F, G, H, K, L]),
      rg.line(A, C),
      rg.line(B, D),
      rg.line(B, E),
      rg.line(C, E),
      rg.line(F, H),
      rg.line(G, K),
      rg.line(G, L),
      rg.line(H, L),
    ],
    letters: {
      A: [1],
      B: [3],
      C: [-3],
      D: [-3],
      E: [-1],
      F: [1],
      G: [3],
      H: [-3],
      K: [-3],
      L: [-1],
      M: [-2],
      N: [-2],
    }
  };
},

function()
{
  const A = [20, 20];
  const ds = [[80, 150], [150, 150], [150, 50]];
  const apts = ds.map(v => vec2.add(A, v));
  const B = [240, 70];
  const bpts = ds.map(v => vec2.add(B, vec2.scale(v, 0.6)));
  const C = [150, 200];
  const cpts = ds.map(v => vec2.add(C, vec2.scale(v, 1.2)));

  return {
    prose: prop21,
    points: { A, B, C },
    shapes: [
      rg.polygon([A, ...apts]),
      rg.polygon([B, ...bpts]),
      rg.polygon([C, ...cpts]),
    ],
    letters: {
      A: [-2, 9],
      B: [-2, 6],
      C: [-2, 10],
    },
    given: {
      A: () => [rg.polygon([A, ...apts])],
      B: () => [rg.polygon([B, ...bpts])],
      C: () => [rg.polygon([C, ...cpts])],
    }
  };
},

function()
{
  const r = 0.8, a = 130, c = a*r, e = 80, g = e*r, o = c * r,  p = g * r;
  const A = [50, 150];
  const B = vec2.add(A, [a, 0]);
  const K = vec2.add(A, vec2.rot([a, 0], -Math.PI*0.35));
  const C = [250, 150];
  const D = vec2.add(C, [c, 0]);
  const L = vec2.add(C, vec2.rot([c, 0], -Math.PI*0.35));
  const E = [70, 300];
  const F = vec2.add(E, [e, 0]);
  const M = vec2.add(E, vec2.rot([e, 0], -Math.PI * 0.4));
  const U = vec2.add(M, [e, 0]);
  const G = [270, 300];
  const H = vec2.add(G, [g, 0]);
  const N = vec2.add(G, vec2.rot([g, 0], -Math.PI * 0.4));
  const V = vec2.add(N, [g, 0]);
  const Q = [270, 420];
  const R = vec2.add(Q, [g, 0]);
  const S = vec2.add(Q, vec2.rot([g, 0], -Math.PI * 0.4));
  const T = vec2.add(S, [g, 0]);

  return {
    prose: prop22,
    points: {A, B, C, D, E, F, G, H, K, L, M, N, Q, R, S, T, U, V },
    mags: [
      { l: 'O', m: o, p: [70, 350] },
      { l: 'P', m: p, p: [200, 350] }
    ],
    shapes: [
      rg.polygon([K, A, B]),
      rg.polygon([L, C, D]),
      rg.polygon([M, E, F, U]),
      rg.polygon([N, G, H, V]),
      rg.polygon([S, Q, R, T])
    ],
    letters: {
      A: [-3],
      B: [-3],
      C: [-3],
      D: [-3],
      E: [-3],
      F: [-3],
      G: [-3],
      H: [-3],
      K: [1],
      L: [1],
      M: [1],
      N: [1],
      Q: [-3],
      R: [-3],
      S: [1],
      T: [1],
      U: [1],
      V: [1],
    }
  };
},

function()
{
  const k = 130, l = 160, m = 220, j = l * l / m;
  const u = [1, 0];
  const v = vec2.rot(u, -Math.PI * 0.43);
  const C = [280, 150];
  const D = vec2.add(C, vec2.scale(v, j));
  const E = vec2.sub(C, vec2.scale(v, l));
  const [A, B] = [D, C].map(pt => vec2.sub(pt, vec2.scale(u, k)));
  const [F, G, H] = [E, C, D].map(pt=>vec2.add(pt, vec2.scale(u, l)));

  return {
    prose: prop23,
    points: { A, B, C, D, E, F, G, H },
    mags: [
      { l: 'K', m: k*0.7, p: [50, 200] },
      { l: 'L', m: l*0.7, v: 50 },
      { l: 'M', m: m*0.7, v: 50 },
    ],
    shapes: [
      rg.line(A, H),
      rg.line(B, G),
      rg.line(E, F),
      rg.line(A, B),
      rg.line(D, E),
      rg.line(H, F)
    ],
    letters: {
      A: [1],
      B: [-3],
      C: [4, 1.3],
      D: [1],
      E: [-3],
      F: [-3],
      G: [-2],
      H: [1]
    }
  };
},

function()
{
  const A = [50, 50];
  const ab = [300, 0]
  const ad = [50, 200];
  const B = vec2.add(A, ab);
  const C = vec2.add(B, ad);
  const D = vec2.add(A, ad);
  const ae = vec2.scale(ab, 0.3);
  const ag = vec2.scale(ad, 0.3);
  const E = vec2.add(A, ae);
  const F = vec2.add(E, ag);
  const G = vec2.add(A, ag);
  const H = vec2.add(B, ag);
  const K = vec2.add(D, ae);

  return {
    prose: prop24,
    points: { A, B, C, D, E, F, G, H, K },
    shapes: [
      rg.polygon([A, B, C, D]),
      rg.line(G, H),
      rg.line(E, K),
      rg.line(A, C)
    ],
    letters: {
      A: [1],
      B: [1],
      C: [-3],
      D: [-3],
      E: [1],
      F: [0],
      G: [3],
      H: [-1],
      K: [-3],
    }
  };
},

function()
{
  const B = [50, 150];
  const ba = [-20, -100];
  const bl = [-10, 50];
  const b = 100, c = 140, g = Math.sqrt(b * c);
  const A = vec2.add(B, ba);
  const C = vec2.add(B, [b, 0]);
  const F = vec2.add(C, [c, 0]);
  const L = vec2.add(B, bl);
  const E = vec2.add(C, bl);
  const M = vec2.add(F, bl);
  const D = [120, 60];
  const ds = [[c+10, 0], [c+20, 50], [30, 50]].map(v => vec2.add(D, v));
  const G = [360, 160];
  const H = vec2.add(G, [g, 0]);
  const K = vec2.add(G, vec2.scale(ba, g/b));

  return {
    prose: prop25,
    points: { A, B, C, D, E, F, G, H, K, L, M },
    given: {
      D: () => [rg.polygon([D, ...ds])],
    },
    shapes: [
      rg.polygon([G, H, K]),
      rg.polygon([D, ...ds]),
      rg.polygon([B, L, M, F]),
      rg.line(C, E),
      rg.line(A, B),
      rg.line(A, C)
    ],
    letters: {
      A: [1],
      B: [3],
      C: [0],
      D: [-1.4, 5],
      E: [-3],
      F: [1],
      G: [-3],
      H: [-3],
      K: [1],
      L: [-3],
      M: [-3]
    }
  };
},

function()
{
  const A = [100, 50];
  const u = [1, 0];
  const v = vec2.rot(u, Math.PI * 0.6);
  const ab = vec2.scale(v, 200);
  const ad = vec2.scale(u, 300);
  const ae = vec2.scale(ab, 0.45);
  const ak = vec2.scale(ab, 0.7);
  const ag = vec2.scale(ad, 0.45);
  const B = vec2.add(A, ab);
  const D = vec2.add(A, ad);
  const C = vec2.add(D, ab);
  const E = vec2.add(A, ae);
  const K = vec2.add(A, ak);
  const G = vec2.add(A, ag);
  const F = vec2.add(G, ae);
  const H = vec2.add(G, ak);

  return {
    prose: prop26,
    points: { A, B, C, D, E, F, G, H, K },
    given: {
      AHC: () => [rg.line(A, H), rg.line(H, C)],
    },
    shapes: [
      rg.polygon([A, B, C, D]),
      rg.line(A, C),
      rg.line(E, F),
      rg.line(G, H),
      rg.line(H, K),
      rg.line(A, H),
      rg.line(H, C),
    ],
    letters: {
      A: [1],
      B: [-3],
      C: [-3],
      D: [1],
      E: [3],
      F: [-0.3],
      G: [1],
      H: [-3],
      K: [3],
    }
  };
},

function()
{
  const u = [1, 0];
  const v = vec2.rot(u, Math.PI * 0.4);
  const w = 300, h = 250;
  const O = [50, 50];
  const A = vec2.add(O, vec2.scale(v, h));
  const B = vec2.add(A, vec2.scale(u, w));
  const C = vec2.add(A, vec2.scale(u, w * 0.5));
  const D = vec2.add(O, vec2.scale(u, w * 0.5));
  const E = vec2.add(O, vec2.scale(u, w));
  const G = vec2.add(O, vec2.scale(v, h * 0.3));
  const Q = vec2.add(G, vec2.scale(u, w * 0.5));
  const F = vec2.add(G, vec2.scale(u, w * 0.65));
  const H = vec2.add(E, vec2.scale(v, h * 0.3));
  const K = vec2.add(A, vec2.scale(u, w * 0.65));
  const P = vec2.add(O, vec2.scale(u, w * 0.65));
  const L = vec2.sub(F, vec2.scale(u, 20));
  const M = vec2.add(F, vec2.scale(u, 20));
  const N = vec2.sub(F, vec2.scale(v, 20));

  return {
    prose: prop27,
    points: { A, B, C, D, E, F, G, H, K, L, M, N, O, P, Q },
    shapes: [
      rg.polygon([O, A, B, E]),
      rg.line(G, H),
      rg.line(D, C),
      rg.line(P, K),
      rg.line(D, B),
      rg.gnomon(F, N, L)
    ],
    given: {
      LMN: () => [rg.gnomon(F, N, L)],
    },
    smallletters: 'LMNF',
    letters: {
      A: [-3],
      B: [-3],
      C: [-3],
      D: [1],
      E: [1],
      F: [0],
      G: [3],
      H: [-1],
      K: [-3],
      L: [4],
      M: [0],
      N: [0],
      O: [1],
      P: [1],
      Q: [4.4],
    }
  };
},

function()
{
  const u = [1, 0];
  const v = vec2.rot(u, Math.PI * 0.4);
  const w = 250, h = 200;
  const H = [50, 50];
  const A = vec2.add(H, vec2.scale(v, h));
  const B = vec2.add(A, vec2.scale(u, w));
  const E = vec2.add(A, vec2.scale(u, w * 0.5));
  const G = vec2.add(H, vec2.scale(u, w * 0.5));
  const F = vec2.add(H, vec2.scale(u, w));
  const T = vec2.add(H, vec2.scale(v, h * 0.6));
  const Q = vec2.add(T, vec2.scale(u, w * 0.8));
  const R = vec2.add(F, vec2.scale(v, h * 0.6));
  const S = vec2.add(A, vec2.scale(u, w * 0.8));
  const P = vec2.add(H, vec2.scale(u, w * 0.8));
  const V = vec2.sub(Q, vec2.scale(u, 20));
  const W = vec2.add(Q, vec2.scale(u, 20));
  const U = vec2.sub(Q, vec2.scale(v, 20));
  const O = vec2.add(T, vec2.scale(u, w/2));

  const C = [100, 400];
  const cpts = [[90, -10], [100, -80], [-10, -70]].map(d => vec2.add(C, d));
  const D = [250, 400];
  const dpts = [[50, 0], [30, -70], [-20, -70]].map(d => vec2.add(D, d));
  const L = [330, 330];
  const M = vec2.add(L, vec2.scale(u, w * 0.3));
  const K = vec2.add(L, vec2.scale(v, h * 0.6));
  const N = vec2.add(K, vec2.scale(u, w * 0.3));

  return {
    prose: prop28,
    points: { A, B, C, D, E, F, G, H, K, L, M, N, O, P, Q, R, S, T, U, V, W },
    shapes: [
      rg.polygon([A, B, F, H]),
      rg.polygon([D, ...dpts]),
      rg.polygon([C, ...cpts]),
      rg.polygon([K, L, M, N]),
      rg.line(T, R),
      rg.line(G, E),
      rg.line(P, S),
      rg.line(G, B),
      rg.gnomon(Q, U, V)
    ],
    given: {
      C: () => [rg.polygon([C, ...cpts])],
      D: () => [rg.polygon([D, ...dpts])],
      VWU: () => [rg.gnomon(Q, U, V)],
    },
    smallletters: 'UVWQ',
    letters: {
      A: [-3],
      B: [-3],
      C: [0, 3],
      D: [0.5, 2],
      E: [-3],
      F: [1],
      G: [1],
      H: [1],
      K: [-3],
      L: [1],
      M: [1],
      N: [-3],
      O: [2],
      P: [1],
      Q: [4.5, 0.8],
      R: [-1],
      S: [-3],
      T: [3],
      U: [0],
      V: [1.5],
      W: [0]
    }
  };
},

function()
{
  const A = [30, 250];
  const u = [1, 0];
  const v = vec2.rot(u, -Math.PI * 0.44);
  const w = 200, h = 200;
  const B = vec2.add(A, vec2.scale(u, w));
  const C = [50, 20];
  const cpts = [[80, 0], [100, 50], [20, 100], [-20, 20]].map(d => vec2.add(C, d));
  const D = [50, 200];
  const du = vec2.scale(u, 40), dv = vec2.scale(v, 70);
  const dpts = [du, vec2.add(du, dv), dv].map(d => vec2.add(D, d));
  const E = vec2.add(A, vec2.scale(u, w/2));
  const F = vec2.add(E, vec2.scale(v, h));
  const L = vec2.add(B, vec2.scale(v, h));
  const G = vec2.add(A, vec2.add(vec2.scale(v, -h*0.4), vec2.scale(u, w * 1.45)));
  const K = vec2.add(G, vec2.scale(v, h*1.4));
  const H = vec2.add(K, vec2.scale(u, w*0.7));
  const U = vec2.add(G, vec2.scale(u, w*0.7));
  const P = vec2.add(A, vec2.scale(u, w*1.2));
  const M = vec2.add(P, vec2.scale(v, h));
  const N = vec2.sub(E, vec2.scale(v, h*0.4));
  const Q = vec2.sub(B, vec2.scale(v, h*0.4));
  const O = vec2.sub(P, vec2.scale(v, h*0.4));
  const S = vec2.sub(A, vec2.scale(v, h*0.4));
  const X = vec2.sub(B, vec2.scale(u, 20));
  const V = vec2.add(B, vec2.scale(v, 20));
  const W = vec2.add(B, vec2.scale(u, 20));


  return {
    prose: prop29,
    points: { A, B, C, D, E, F, G, H, K, L, M, N, O, P, Q, S, U, V, W, X },
    given: {
      C: () => [rg.polygon([C, ...cpts])],
      D: () => [rg.polygon([D, ...dpts])],
      VWX: () => [rg.gnomon(B, V, X)]
    },
    shapes: [
      rg.polygon([D, ...dpts]),
      rg.polygon([C, ...cpts]),
      rg.polygon([G, U, H, K]),
      rg.line(A, P),
      rg.line(A, S),
      rg.line(F, N),
      rg.line(L, Q),
      rg.line(M, O),
      rg.line(S, O),
      rg.line(F, M),
      rg.line(F, O),
      rg.gnomon(B, V, X),
    ],
    smallletters: 'BVWX',
    letters: {
      A: [1],
      B: [0],
      C: [-2, 3],
      D: [0, 2],
      E: [2],
      F: [1],
      G: [-3],
      H: [1],
      K: [1],
      L: [1],
      M: [1],
      N: [-3],
      O: [-3],
      P: [-1],
      Q: [-3],
      S: [-3],
      U: [-3],
      V: [-0.3],
      W: [-2.3],
      X: [1]
    }
  };
},

function()
{
  const phi = (Math.sqrt(5) - 1) / 2
  const A = [50, 300];
  const a = 250;
  const B = vec2.add(A, [a, 0]);
  const C = vec2.add(A, [0, -a]);
  const E = vec2.add(A, [a*phi, 0]);
  const D = vec2.add(E, [0, a*phi]);
  const F = vec2.add(E, [0, -a]);
  const G = vec2.add(A, [0, a*phi]);
  const H = vec2.add(B, [0, -a]);

  return {
    prose: prop30,
    points: { A, B, C, D, E, F, G, H },
    shapes: [
      rg.line(C, G),
      rg.line(C, H),
      rg.line(A, B),
      rg.line(F, D),
      rg.line(G, D),
      rg.line(H, B),
    ],
    letters: {
      A: [3],
      B: [-1],
      C: [1],
      D: [-1],
      E: [-2.5],
      F: [1],
      G: [3],
      H: [1]
    }
  };
},

function()
{
  const O = [250, 250];
  const r = 200;
  const B = vec2.sub(O, [r, 0]);
  const C = vec2.add(O, [r, 0]);
  const A = vec2.add(O, vec2.rot([r, 0], -Math.PI * 0.6));
  const ba = vec2.sub(A, B);
  const D = vec2.add(B, [ba[0], 0]);
  const ac = vec2.sub(C, A);
  const cb = vec2.sub(B, C);
  const bai = vec2.scale(vec2.rot(ba, -Math.PI/2), 0.2);
  const aci = vec2.scale(vec2.rot(ac, -Math.PI/2), 0.2);
  const cbi = vec2.scale(vec2.rot(cb, -Math.PI/2), 0.2);
  const bs = [[0, 0], ba, vec2.add(ba, bai), bai].map(v => vec2.add(B, v));
  const as = [[0, 0], ac, vec2.add(ac, aci), aci].map(v => vec2.add(A, v));
  const cs = [[0, 0], cb, vec2.add(cb, cbi), cbi].map(v => vec2.add(C, v));

  return {
    prose: prop31,
    points: { A, B, C, D },
    shapes: [
      rg.polygon(as),
      rg.polygon(bs),
      rg.polygon(cs),
      rg.line(A, D)
    ],
    letters: {
      A: [1],
      B: [4],
      C: [-2],
      D: [-3]
    }
  };
},

function()
{
  const B = [50, 280];
  const u = [1, 0];
  const v = vec2.rot(u, -Math.PI * 0.25);
  const C = vec2.add(B, vec2.scale(u, 100));
  const A = vec2.add(B, vec2.scale(v, 150));
  const E = vec2.add(C, vec2.scale(u, 100*2));
  const D = vec2.add(C, vec2.scale(v, 150* 2));

  return {
    prose: prop32,
    points: { A, B, C, D, E },
    shapes: [
      rg.polygon([A, B, C]),
      rg.polygon([D, C, E])
    ],
    letters: {
      A: [1],
      B: [-3],
      C: [-3],
      D: [1],
      E: [-3],
    }
  };
},

function()
{
  const G = [150, 150];
  const H = [400, 150];
  const r = 100;
  const A = vec2.add(G, vec2.rot([r, 0], -Math.PI*0.17));
  const B = vec2.add(G, vec2.rot([r, 0], -Math.PI));
  const C = vec2.add(G, vec2.rot([r, 0], -Math.PI*1.3));
  const K = vec2.add(G, vec2.rot([r, 0], -Math.PI*1.6));
  const L = vec2.add(G, vec2.rot([r, 0], -Math.PI*1.9));

  const D = vec2.add(H, vec2.rot([r, 0], -Math.PI*0.2));
  const E = vec2.add(H, vec2.rot([r, 0], -Math.PI*1.1));
  const F = vec2.add(H, vec2.rot([r, 0], -Math.PI*1.3));
  const M = vec2.add(H, vec2.rot([r, 0], -Math.PI*1.5));
  const N = vec2.add(H, vec2.rot([r, 0], -Math.PI*1.7));


  return {
    prose: prop33,
    points: { A, B, C, D, E, F, G, H, K, L, M, N },
    shapes: [
      rg.circle(G, 2*r),
      rg.line(A, B),
      rg.line(A, C),
      rg.line(G, B),
      rg.line(G, C),
      rg.line(G, K),
      rg.line(G, L),
      rg.circle(H, 2*r),
      rg.line(D, E),
      rg.line(D, F),
      rg.line(H, E),
      rg.line(H, F),
      rg.line(H, M),
      rg.line(H, N)
    ],
    smallletters: 'GH',
    letters: {
      A: [0],
      B: [3],
      C: [4],
      G: [0],
      K: [-2],
      L: [-2],
      D: [0],
      E: [3],
      F: [4],
      H: [0],
      M: [-2],
      N: [-2],
    }
  };
},

]
}

export default book6;
