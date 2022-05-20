import vec2 from '../vec2.js';

import prop0 from './1/0';
import prop1 from './1/1';
import prop2 from './1/2';
import prop3 from './1/3';
import prop4 from './1/4';
import prop5 from './1/5';
import prop6 from './1/6';
import prop7 from './1/7';
import prop8 from './1/8';
import prop9 from './1/9';
import prop10 from './1/10';
import prop11 from './1/11';
import prop12 from './1/12';
import prop13 from './1/13';
import prop14 from './1/14';
import prop15 from './1/15';
import prop16 from './1/16';
import prop17 from './1/17';
import prop18 from './1/18';
import prop19 from './1/19';
import prop20 from './1/20';
import prop21 from './1/21';
import prop22 from './1/22';
import prop23 from './1/23';
import prop24 from './1/24';
import prop25 from './1/25';
import prop26 from './1/26';
import prop27 from './1/27';
import prop28 from './1/28';
import prop29 from './1/29';
import prop30 from './1/30';
import prop31 from './1/31';
import prop32 from './1/32';
import prop33 from './1/33';
import prop34 from './1/34';
import prop35 from './1/35';
import prop36 from './1/36';
import prop37 from './1/37';
import prop38 from './1/38';
import prop39 from './1/39';
import prop40 from './1/40';
import prop41 from './1/41';
import prop42 from './1/42';
import prop43 from './1/43';
import prop44 from './1/44';
import prop45 from './1/45';
import prop46 from './1/46';
import prop47 from './1/47';
import prop48 from './1/48';

function book1(rg)
{
  return [
function()
{
  return {
    id: '1.d',
    title: 'Definitions',
    prose: prop0,
    points: {},
    shapes: [],
    letters: {}
  };
},

function()
{
  const distanceAB = 160;
  const A = [170, 200];
  const B = [A[0] + distanceAB, 200];
  const C = vec2.add(B, vec2.rot(vec2.sub(A, B), Math.PI/3));
  const D = [A[0] - distanceAB, A[1]];
  const E = [B[0] + distanceAB, B[1]];
  return {
    id: '1.1',
    title: 'Proposition 1',
    prose: prop1,
    points: { A, B, C, D, E },
    shapes: [
      rg.line(A, B),
      rg.line(B, C),
      rg.line(C, A),
      rg.circle(A, distanceAB * 2),
      rg.circle(B, distanceAB * 2),
    ],
    letters: {
      A: [3],
      B: [-1],
      C: [1],
      D: [-1],
      E: [3, 1.3]
    }
  }
},

function()
{
  const A = [200, 270];
  const B = [250, 230];
  const C = [250, 120];
  const D = vec2.add(A, vec2.rot(vec2.sub(B, A), -Math.PI / 3));
  const E = vec2.add(D, vec2.scale(vec2.sub(A, D), 4));
  const F = vec2.add(D, vec2.scale(vec2.sub(B, D), 4.5));
  const bf = vec2.sub(B, F);
  const radius1 = vec2.dist(B, C);
  const G = vec2.add(B, vec2.scale(bf, -radius1/ vec2.len(bf)));
  const H = vec2.add(B, vec2.scale(bf, radius1/ vec2.len(bf)));
  const de = vec2.sub(E, D);
  const radius2 = vec2.dist(D, G);
  const L = vec2.sub(D, vec2.scale(de, -radius2/ vec2.len(de)));
  const K = vec2.sub(D, vec2.scale(de, radius2/ vec2.len(de)));
  return {
    id: '1.2',
    title: 'Proposition 2',
    prose: prop2,
    points: { A, B, C, D, E, F, G, H, K, L },
    shapes: [
      rg.line(B, C),
      rg.line(B, A),
      rg.line(D, E),
      rg.line(D, F),
      rg.circle(B, 2 * radius1),
      rg.circle(D, 2 * radius2)
    ],
    letters: {
      A: [3],
      B: [0],
      C: [1],
      D: [2],
      E: [5],
      F: [7, 0.8],
      G: [-0.4, 3],
      H: [2],
      K: [1],
      L: [4, 1],
    }
  }
},

function()
{
  const A = [200, 250];
  const B = [450, 250];
  const C = [180, 50];
  const Ce = [330, 50];
  const cg = vec2.sub(Ce, C);
  const ae = vec2.rot(cg, -Math.PI * 3/4)
  const r = vec2.len(ae);
  const D = vec2.add(A, ae);
  const E = vec2.add(A, cg);
  const F = vec2.add(A, vec2.rot(cg, Math.PI * 1/3));
  return {
    id: '1.3',
    title: 'Proposition 3',
    prose: prop3,
    points: {A, B, C, D, E, F},
    shapes: [
      rg.line(A, B),
      rg.line(C, Ce),
      rg.line(A, D),
      rg.circle(A, 2 * r)
    ],
    letters: {
      A: [4],
      B: [-1, 0.8],
      C: [0, 1.3],
      D: [2],
      E: [0],
      F: [6]
    },
    given: {
      C: [rg.line(C, Ce)]
    }
  };
},

function()
{
  const A = [170, 50];
  const B = [50, 200];
  const C = [220, 200];
  const D = vec2.add(A, [230, 0]);
  const E = vec2.add(B, [230, 0]);
  const F = vec2.add(C, [230, 0]);
  const ef = vec2.sub(F, E);
  let ps = [E];
  for(var i = 0; i < 6; i++)
  {
    ps.push(vec2.add(vec2.add(E, vec2.scale(ef, i/6)), [0, 20*Math.sin(Math.PI * (i/6))]));
  }
  ps.push(F)

  return {
    id: '1.4',
    title: 'Proposition 4',
    prose: prop4,
    points: {A, B, C, D, E, F},
    shapes: [
      rg.polygon([A, B, C]),
      rg.polygon([D, E, F]),
      rg.curve(ps)
    ],
    letters: {
      A: [1],
      B: [3],
      C: [-1, 0.8],
      D: [1],
      E: [3],
      F: [-1, 0.8]
    }
  }
},

function()
{
  const A = [256, 50];
  const B = [206, 180];
  const C = [306, 180];
  const ab = vec2.sub(B, A);
  const ac = vec2.sub(C, A);
  const D = vec2.add(A, vec2.scale(ab, 2.5));
  const E = vec2.add(A, vec2.scale(ac, 2.5));
  const F = vec2.add(A, vec2.scale(ab, 1.5));
  const G = vec2.add(A, vec2.scale(ac, 1.5));
  return {
    id: '1.5',
    title: 'Proposition 5',
    prose: prop5,
    points: { A, B, C, D, E, F, G },
    shapes: [
      rg.line(B, C),
      rg.line(A, D),
      rg.line(A, E),
      rg.line(F, C),
      rg.line(B, G)
    ],
    letters: {
      A: [1],
      B: [3, 1.3],
      C: [-1],
      D: [3],
      E: [-1],
      F: [3, 1.3],
      G: [-1]
    }
  }
},

function()
{
  const A = [256, 50];
  const B = [106, 280];
  const C = [406, 280];
  const ab = vec2.sub(B, A);
  const D = vec2.add(A, vec2.scale(ab, 0.3));
  return {
    id: '1.6',
    title: 'Proposition 6',
    prose: prop6,
    points: { A, B, C, D },
    shapes: [
      rg.polygon([A, B, C]),
      rg.line(C, D)
    ],
    letters: {
      A: [1],
      B: [3],
      C: [-1],
      D: [2.5]
    }
  }
},

function()
{
  const A = [106, 280];
  const B = [406, 280];
  const C = [226, 50];
  const bc = vec2.rot(vec2.sub(C, B), Math.PI/10);
  const D = vec2.add(B, vec2.scale(bc, 0.8));
  return {
    id: '1.7',
    title: 'Proposition 7',
    prose: prop7,
    points: { A, B, C, D },
    shapes: [
      rg.polygon([A, B, C]),
      rg.line(B, D),
      rg.line(C, D),
      rg.line(A, D)
    ],
    letters: {
      A: [3],
      B: [-1],
      C: [2],
      D: [0]
    }
  }
},

function()
{
  const A = [140, 50];
  const B = [70, 200];
  const C = [220, 150];
  const D = vec2.add(A, [230, 0]);
  const E = vec2.add(B, [230, 0]);
  const F = vec2.add(C, [230, 0]);
  const fg = vec2.rot(vec2.scale(vec2.sub(D, F), 0.8), Math.PI/10);
  const G = vec2.add(F, fg);

  return {
    id: '1.8',
    title: 'Proposition 8',
    prose: prop8,
    points: {A, B, C, D, E, F, G},
    shapes: [
      rg.polygon([A, B, C]),
      rg.polygon([D, E, F]),
      rg.polygon([G, E, F]),
    ],
    letters: {
      A: [1],
      B: [3],
      C: [-1],
      D: [1],
      E: [3],
      F: [-1],
      G: [1]
    }
  }
},

function()
{
  const A = [156, 50];
  const B = [126, 380];
  const C = [356, 300];
  const ad = vec2.scale(vec2.sub(B, A), 0.5);
  const ac = vec2.sub(C, A);
  const ae = vec2.scale(ac, vec2.len(ad) / vec2.len(ac));
  const D = vec2.add(A, ad);
  const E = vec2.add(A, ae);
  const de = vec2.sub(E, D);
  const F = vec2.add(D, vec2.rot(de, Math.PI/3));
  return {
    id: '1.9',
    title: 'Proposition 9',
    prose: prop9,
    points: { A, B, C, D, E, F },
    shapes: [
      rg.line(A, B),
      rg.line(A, C),
      rg.polygon([D, E, F]),
      rg.line(A, F)
    ],
    letters: {
      A: [1],
      B: [3],
      C: [-1],
      D: [3],
      E: [-0.5],
      F: [5]
    }
  }
},

function()
{
  const A = [126, 300];
  const B = [356, 300];
  const ab = vec2.sub(B, A);
  const ac = vec2.rot(ab, -Math.PI/3);
  const C = vec2.add(A, ac);
  const ad = vec2.scale(ab, 0.5);
  const D = vec2.add(A, ad);

  return {
    id: '1.10',
    title: 'Proposition 10',
    prose: prop10,
    points: { A, B, C, D },
    shapes: [
      rg.polygon([A, B, C]),
      rg.line(C, D)
    ],
    letters: {
      A: [3],
      B: [-1],
      C: [1],
      D: [5]
    }
  }
},

function()
{
  const A = [56, 250];
  const B = [426, 250];
  const ab = vec2.sub(B, A);
  const ac = vec2.scale(ab, 0.45);
  const ad = vec2.scale(ab, 0.2);
  const C = vec2.add(A, ac);
  const D = vec2.add(A, ad);
  const ce = vec2.scale(vec2.sub(D, C), -1);
  const E = vec2.add(C, ce);
  const df = vec2.rot(vec2.sub(E, D), -Math.PI/3);
  const F = vec2.add(D, df);

  return {
    id: '1.11',
    title: 'Proposition 11',
    prose: prop11,
    points: { A, B, C, D, E, F},
    shapes: [
      rg.line(A, B),
      rg.line(F, C),
      rg.polygon([D, E, F])
    ],
    letters: {
      A: [1],
      B: [1],
      C: [5],
      D: [5],
      E: [5],
      F: [1]
    }
  }
},

function()
{
  const A = [56, 350];
  const B = [426, 350];
  const ab = vec2.sub(B, A);
  const uab = vec2.scale(ab, 1/vec2.len(ab));
  const ah = vec2.scale(ab, 0.45);
  const ag = vec2.scale(ab, 0.2);
  const H = vec2.add(A, ah);
  const G = vec2.add(A, ag);
  const he = vec2.scale(vec2.sub(G, H), -1);
  const E = vec2.add(H, he);
  const hc = vec2.scale(vec2.rot(uab, -Math.PI/2), 100);
  const C = vec2.add(H, hc);
  const ce = vec2.sub(E, C);
  const cd = vec2.rot(ce, Math.PI/8);
  const D = vec2.add(C, cd);
  const radius = vec2.len(ce);
  const F = vec2.add(C, [0, -1 * radius]);

  return {
    id: '1.12',
    title: 'Proposition 12',
    prose: prop12,
    points: { A, B, C, D, E, F, G, H},
    shapes: [
      rg.line(A, B),
      rg.line(C, G),
      rg.line(C, H),
      rg.line(C, E),
      rg.circle(C, 2 * radius),
      rg.circle(D, 5)
    ],
    letters: {
      A: [1],
      B: [1],
      C: [1],
      D: [5.5],
      E: [5.5],
      F: [1],
      G: [4.5],
      H: [5],
    }
  }
},

function()
{
  const C = [400, 256];
  const D = [56, 256];
  const cb = vec2.scale(vec2.sub(D, C), 0.6);
  const B = vec2.add(C, cb);
  const be = vec2.rot(cb, Math.PI/2);
  const E = vec2.add(B, be);
  const A = vec2.add(B, vec2.rot(be, Math.PI/5));

  return {
    id: '1.13',
    title: 'Proposition 13',
    prose: prop13,
    points: { A, B, C, D, E },
    shapes: [
      rg.line(C, D),
      rg.line(B, E),
      rg.line(B, A)
    ],
    letters: {
      A: [1],
      B: [5],
      C: [5],
      D: [5],
      E: [1]
    }
  }
},

function()
{
  const D = [400, 256];
  const C = [56, 256];
  const cb = vec2.scale(vec2.sub(D, C), 0.4);
  const B = vec2.add(C, cb);
  const be = vec2.rot(cb, -Math.PI/3.5);
  const E = vec2.add(B, be);
  const A = vec2.add(B, vec2.rot(be, -Math.PI/3));

  return {
    id: '1.14',
    title: 'Proposition 14',
    prose: prop14,
    points: { A, B, C, D, E },
    shapes: [
      rg.line(C, D),
      rg.line(B, E),
      rg.line(B, A)
    ],
    letters: {
      A: [1],
      B: [5],
      C: [5],
      D: [5],
      E: [1]
    }
  }
},

function()
{
  const C = [400, 256];
  const D = [56, 256];
  const ce = vec2.scale(vec2.sub(D, C), 0.4);
  const E = vec2.add(C, ce);
  const A = vec2.add(E, vec2.scale(vec2.rot(ce, Math.PI/3.5), 1.5));
  const B = vec2.add(E, vec2.scale(vec2.rot(ce, Math.PI/3.5), -1));

  return {
    id: '1.15',
    title: 'Proposition 15',
    prose: prop15,
    points: { A, B, C, D, E },
    shapes: [
      rg.line(C, D),
      rg.line(A, B)
    ],
    letters: {
      A: [3],
      B: [-1],
      C: [-1],
      D: [3],
      E: [0.5]
    }
  }
},

function()
{
  const A = [150, 50];
  const B = [50, 250];
  const C = [250, 250];
  const bd = vec2.scale(vec2.sub(C, B), 2);
  const D = vec2.add(B, bd);
  const ca = vec2.sub(A, C);
  const ce = vec2.scale(ca, 0.5);
  const E = vec2.add(C, ce);
  const bf = vec2.scale(vec2.sub(E, B), 2);
  const F = vec2.add(B, bf);
  const cg = vec2.scale(ca, -1);
  const G = vec2.add(C, cg);

  return {
    id: '1.16',
    title: 'Proposition 16',
    prose: prop16,
    points: { A, B, C, D, E, F, G },
    shapes: [
      rg.line(A, B),
      rg.line(A, G),
      rg.line(B, D),
      rg.line(B, F),
      rg.line(F, C)
    ],
    letters: {
      A: [1],
      B: [4],
      C: [4.5],
      D: [5],
      E: [-3.4, 2],
      F: [1],
      G: [-1],
    }
  }
},

function()
{
  const A = [50, 70];
  const B = [120, 250];
  const C = [250, 250];
  const bd = vec2.scale(vec2.sub(C, B), 1.5);
  const D = vec2.add(B, bd);

  return {
    id: '1.17',
    title: 'Proposition 17',
    prose: prop17,
    points: { A, B, C, D },
    shapes: [
      rg.line(A, B),
      rg.line(A, C),
      rg.line(B, D),
    ],
    letters: {
      A: [1],
      B: [5],
      C: [5],
      D: [5]
    }
  }
},

function()
{
  const A = [50, 70];
  const B = [120, 250];
  const C = [350, 250];
  const ac = vec2.sub(C, A);
  const ab = vec2.sub(B, A);
  const ad = vec2.scale(ac, vec2.len(ab)/vec2.len(ac));
  const D = vec2.add(A, ad);

  return {
    id: '1.18',
    title: 'Proposition 18',
    prose: prop18,
    points: { A, B, C, D },
    shapes: [
      rg.line(A, B),
      rg.line(A, C),
      rg.line(B, C),
      rg.line(B, D),
    ],
    letters: {
      A: [1],
      B: [5],
      C: [5],
      D: [0]
    }
  }
},

function()
{
  const A = [250, 50];
  const B = [120, 150];
  const C = [300, 300];

  return {
    id: '1.19',
    title: 'Proposition 19',
    prose: prop19,
    points: { A, B, C },
    shapes: [
      rg.line(A, B),
      rg.line(A, C),
      rg.line(B, C),
    ],
    letters: {
      A: [1],
      B: [3],
      C: [5]
    }
  }
},

function()
{
  const A = [150, 250];
  const B = [80, 350];
  const C = [300, 350];
  const ca = vec2.sub(A, C);
  const ba = vec2.sub(A, B);
  const ad = vec2.scale(ba, vec2.len(ca)/vec2.len(ba));
  const D = vec2.add(A, ad);

  return {
    id: '1.20',
    title: 'Proposition 20',
    prose: prop20,
    points: { A, B, C, D },
    shapes: [
      rg.line(A, B),
      rg.line(A, C),
      rg.line(B, C),
      rg.line(D, A),
      rg.line(D, C),
    ],
    letters: {
      A: [2],
      B: [3],
      C: [7],
      D: [1],
    }
  }
},

function()
{
  const A = [150, 100];
  const B = [80, 300];
  const C = [400, 300];
  const ce = vec2.scale(vec2.sub(A, C), 0.8);
  const E = vec2.add(C, ce);
  const bd = vec2.scale(vec2.sub(E, B), 0.8);
  const D = vec2.add(B, bd);

  return {
    id: '1.21',
    title: 'Proposition 21',
    prose: prop21,
    points: { A, B, C, D, E },
    shapes: [
      rg.line(A, B),
      rg.line(A, C),
      rg.line(B, C),
      rg.line(B, E),
      rg.line(D, C),
    ],
    letters: {
      A: [1],
      B: [3],
      C: [7],
      D: [2],
      E: [0]
    }
  }
},

function()
{
  const A = [50, 30];
  const B = [50, 60];
  const C = [50, 90];
  const a = 135;
  const b = 115;
  const c = 85;
  const Ae = vec2.add(A, [a, 0]);
  const Be = vec2.add(B, [b, 0]);
  const Ce = vec2.add(C, [c, 0]);
  const D = [60, 280];
  const E = [450, 280];
  const de = vec2.sub(E, D)
  const ude = vec2.scale(de, 1/vec2.len(de));
  const F = vec2.add(D, vec2.scale(ude, a));
  const G = vec2.add(F, vec2.scale(ude, b));
  const H = vec2.add(G, vec2.scale(ude, c));

  const alpha = Math.acos((a * a + b * b - c * c) / (2 * a * b))
  const df = vec2.sub(F, D);
  const K = vec2.add(F, vec2.rot(df, -alpha));
  const L = vec2.add(F, vec2.rot(df, alpha));

  return {
    id: '1.22',
    title: 'Proposition 22',
    prose: prop22,
    points: { A, B, C, D, E, F, G, H, K, L },
    shapes: [
      rg.line(A, Ae),
      rg.line(B, Be),
      rg.line(C, Ce),
      rg.line(D, E),
      rg.circle(F, 5),
      rg.circle(G, 5),
      rg.circle(H, 5),
      rg.circle(F, 2 * a),
      rg.circle(G, 2 * c),
      rg.line(K, G),
      rg.line(K, F)
    ],
    letters: {
      A: [3, 0.8],
      B: [3],
      C: [3],
      D: [3],
      E: [-1],
      F: [5],
      G: [5],
      H: [-2],
      K: [0.5],
      L: [-2],
    },
    given: {
      A: [rg.line(A, Ae)],
      B: [rg.line(B, Be)],
      C: [rg.line(C, Ce)]
    }
  }
},

function()
{
  const A = [100, 350];
  const B = [400, 350];
  const C = [100, 100];
  const D = [220, 50];
  const E = [260, 160];
  const cd = vec2.sub(D, C);
  const De = vec2.add(C, vec2.scale(cd, 1.4));
  const ce = vec2.sub(E, C);
  const Ee = vec2.add(C, vec2.scale(ce, 1.4));

  const len_cd = vec2.len(cd);
  const ucd = vec2.scale(cd, 1/len_cd);
  const len_ce = vec2.len(ce);
  const uce = vec2.scale(ce, 1/len_ce);
  const alpha = Math.acos(vec2.dot(ucd, uce));

  const ab = vec2.sub(B, A);
  const uab = vec2.scale(ab, 1/vec2.len(ab));
  const F = vec2.add(A, vec2.scale(vec2.rot(uab, -alpha), len_cd));
  const G = vec2.add(A, vec2.scale(uab, len_ce));

  return {
    id: '1.23',
    title: 'Proposition 23',
    prose: prop23,
    points: { A, B, C, D, E, F, G },
    shapes: [
      rg.line(A, B),
      rg.line(C, De),
      rg.line(C, Ee),
      rg.line(D, E),
      rg.line(F, A),
      rg.line(F, G)
    ],
    letters: {
      A: [3],
      B: [2],
      C: [3],
      D: [1],
      E: [5],
      F: [1],
      G: [0.2]
    }
  }
},

function()
{
  const A = [100, 50];
  const B = [200, 200];
  const C = [70, 250];
  const D = vec2.add(A, [200, 0]);
  const E = vec2.add(B, [200, 0]);
  const G = vec2.add(C, [200, 0]);
  const dg = vec2.sub(G, D);
  const F = vec2.add(D, vec2.rot(dg, -Math.PI/12));

  return {
    id: '1.24',
    title: 'Proposition 24',
    prose: prop24,
    points: { A, B, C, D, E, F, G },
    shapes: [
      rg.polygon([A, B, C]),
      rg.polygon([D, E, G]),
      rg.line(F, E),
      rg.line(F, D),
      rg.line(F, G),
    ],
    letters: {
      A: [1],
      B: [-1],
      C: [4],
      D: [1],
      E: [-1],
      F: [5],
      G: [4],
    }
  }
},

function()
{
  const A = [200, 50];
  const B = [70, 200];
  const C = [320, 100];
  const D = vec2.add(A, [50, 150]);
  const E = vec2.add(D, vec2.rot(vec2.sub(B, A), Math.PI/10));
  const F = vec2.add(D, vec2.rot(vec2.sub(C, A), Math.PI/7));

  return {
    id: '1.25',
    title: 'Proposition 25',
    prose: prop25,
    points: { A, B, C, D, E, F },
    shapes: [
      rg.polygon([A, B, C]),
      rg.polygon([D, E, F]),
    ],
    letters: {
      A: [1],
      B: [3],
      C: [-1],
      D: [1],
      E: [3],
      F: [-1],
    }
  }
},

function()
{
  const A = [100, 120];
  const B = [70, 250];
  const C = [260, 250];
  const D = vec2.add(A, [200, -80]);
  const E = vec2.add(B, [200, -80]);
  const F = vec2.add(C, [200, -80]);
  const bg = vec2.scale(vec2.sub(A, B), 0.7);
  const bh = vec2.scale(vec2.sub(C, B), 0.7);
  const G = vec2.add(B, bg);
  const H = vec2.add(B, bh);

  return {
    id: '1.26',
    title: 'Proposition 26',
    prose: prop26,
    points: { A, B, C, D, E, F, G, H },
    shapes: [
      rg.polygon([A, B, C]),
      rg.polygon([D, E, F]),
      rg.line(G, C),
      rg.line(H, A),
    ],
    letters: {
      A: [1],
      B: [3],
      C: [-1],
      D: [1],
      E: [3],
      F: [-1],
      G: [3],
      H: [5],
    }
  }
},

function()
{
  const A = [50, 80];
  const B = [300, 80];
  const C = [50, 200];
  const D = [350, 200];
  const E = vec2.add(A, vec2.scale(vec2.sub(B, A), 0.6));
  const F = vec2.add(C, vec2.scale(vec2.sub(D, C), 0.3));
  const fe = vec2.sub(E, F);
  const Fe = vec2.add(F, vec2.scale(fe, -0.5));
  const Ee = vec2.add(E, vec2.scale(fe, 0.5));

  const G = [450, 140];

  return {
    id: '1.27',
    title: 'Proposition 27',
    prose: prop27,
    points: { A, B, C, D, E, F, G },
    shapes: [
      rg.line(A, B),
      rg.line(C, D),
      rg.line(G, D),
      rg.line(G, B),
      rg.line(Fe, Ee),
    ],
    letters: {
      A: [1],
      B: [1],
      C: [5],
      D: [5],
      E: [1.8],
      F: [5.3],
      G: [0],
    }
  }
},

function()
{
  const A = [50, 100];
  const B = [400, 100];
  const C = [50, 250];
  const D = [400, 250];
  const G = vec2.add(A, vec2.scale(vec2.sub(B, A), 0.3));
  const H = vec2.add(C, vec2.scale(vec2.sub(D, C), 0.6));
  const gh = vec2.sub(H, G);
  const E = vec2.add(G, vec2.scale(gh, -0.5));
  const F = vec2.add(H, vec2.scale(gh, 0.5));

  return {
    id: '1.28',
    title: 'Proposition 28',
    prose: prop28,
    points: { A, B, C, D, E, F, G, H },
    shapes: [
      rg.line(A, B),
      rg.line(C, D),
      rg.line(E, F),
    ],
    letters: {
      A: [1],
      B: [1],
      C: [1],
      D: [1],
      E: [3],
      F: [-1],
      G: [0.3],
      H: [0.3],
    }
  }
},

function()
{
  const A = [50, 100];
  const B = [400, 100];
  const C = [50, 250];
  const D = [400, 250];
  const G = vec2.add(A, vec2.scale(vec2.sub(B, A), 0.3));
  const H = vec2.add(C, vec2.scale(vec2.sub(D, C), 0.6));
  const gh = vec2.sub(H, G);
  const E = vec2.add(G, vec2.scale(gh, -0.5));
  const F = vec2.add(H, vec2.scale(gh, 0.5));

  return {
    id: '1.29',
    title: 'Proposition 29',
    prose: prop29,
    points: { A, B, C, D, E, F, G, H },
    shapes: [
      rg.line(A, B),
      rg.line(C, D),
      rg.line(E, F),
    ],
    letters: {
      A: [1],
      B: [1],
      C: [1],
      D: [1],
      E: [3],
      F: [-1],
      G: [0.3],
      H: [0.3],
    }
  }
},

function()
{
  const A = [50, 100];
  const B = [400, 100];
  const C = [50, 250];
  const D = [400, 250];
  const E = [50, 170];
  const F = [400, 170];
  const G = vec2.add(A, vec2.scale(vec2.sub(B, A), 0.55));
  const H = vec2.add(E, vec2.scale(vec2.sub(F, E), 0.45));
  const K = vec2.add(C, vec2.scale(vec2.sub(D, C), 0.35));
  const gk = vec2.sub(K, G);
  const Ge = vec2.add(G, vec2.scale(gk, -0.4));
  const Ke = vec2.add(K, vec2.scale(gk, 0.4));

  return {
    id: '1.30',
    title: 'Proposition 30',
    prose: prop30,
    points: { A, B, C, D, E, F, G, H, K },
    shapes: [
      rg.line(A, B),
      rg.line(C, D),
      rg.line(E, F),
      rg.line(Ge, Ke),
    ],
    letters: {
      A: [3, 0.8],
      B: [-1],
      C: [3],
      D: [-1],
      E: [3],
      F: [-1],
      G: [1.6],
      H: [1.6],
      K: [1.6],
    }
  }
},

function()
{
  const A = [250, 100];
  const B = [50, 250];
  const C = [400, 250];
  const D = [150, 250];
  const E = [50, 100];
  const F = [400, 100];

  return {
    id: '1.31',
    title: 'Proposition 31',
    prose: prop31,
    points: { A, B, C, D, E, F },
    shapes: [
      rg.line(B, C),
      rg.line(E, F),
      rg.line(A, D),
    ],
    letters: {
      A: [1],
      B: [3],
      C: [-1],
      D: [4.5],
      E: [3],
      F: [-1]
    }
  }
},

function()
{
  const A = [150, 100];
  const B = [50, 350];
  const C = [250, 350];
  const D = [400, 350];
  const E = [350, 100];

  return {
    id: '1.32',
    title: 'Proposition 32',
    prose: prop32,
    points: { A, B, C, D, E },
    shapes: [
      rg.line(B, A),
      rg.line(B, D),
      rg.line(A, C),
      rg.line(E, C),
    ],
    letters: {
      A: [1],
      B: [5],
      C: [5],
      D: [5],
      E: [1],
    }
  }
},

function()
{
  const A = [400, 100];
  const B = [150, 100];
  const C = [300, 250];
  const D = [50, 250];

  return {
    id: '1.33',
    title: 'Proposition 33',
    prose: prop33,
    points: { A, B, C, D },
    shapes: [
      rg.polygon([A, B, D, C]),
      rg.line(B, C),
    ],
    letters: {
      A: [1],
      B: [1],
      C: [5],
      D: [5]
    }
  }
},

function()
{
  const A = [150, 100];
  const B = [400, 100];
  const C = [120, 250];
  const D = [370, 250];

  return {
    id: '1.34',
    title: 'Proposition 34',
    prose: prop34,
    points: { A, B, C, D },
    shapes: [
      rg.polygon([A, B, D, C]),
      rg.line(B, C),
    ],
    letters: {
      A: [1],
      B: [1],
      C: [5],
      D: [5]
    }
  }
},

function()
{
  const A = [100, 100];
  const B = [170, 250];
  const C = [270, 250];
  const D = [200, 100];
  const E = vec2.add(A, [200, 0]);
  const F = vec2.add(D, [200, 0]);
  const de = vec2.dist(E, D);
  const bc = vec2.dist(C, B);
  const cg = vec2.scale(vec2.sub(D, C), de / (bc + de));
  const G = vec2.add(C, cg);

  return {
    id: '1.35',
    title: 'Proposition 35',
    prose: prop35,
    points: { A, B, C, D, E, F, G },
    shapes: [
      rg.polygon([A, B, C, F]),
      rg.line(D, C),
      rg.line(E, B),
    ],
    letters: {
      A: [1],
      B: [-3],
      C: [-3],
      D: [1],
      E: [1],
      F: [1],
      G: [-1, 2],
    }
  }
},

function()
{
  const A = [100, 100];
  const B = [70, 250];
  const C = [140, 250];
  const D = [170, 100];
  const E = vec2.add(A, [170, 0]);
  const F = vec2.add(B, [270, 0]);
  const G = vec2.add(C, [270, 0]);
  const H = vec2.add(D, [170, 0]);

  return {
    id: '1.36',
    title: 'Proposition 36',
    prose: prop36,
    points: { A, B, C, D, E, F, G, H },
    shapes: [
      rg.polygon([A, B, G, H]),
      rg.line(C, D),
      rg.line(C, H),
      rg.line(E, B),
      rg.line(E, F),
    ],
    letters: {
      A: [1],
      B: [5],
      C: [5],
      D: [1],
      E: [1],
      F: [5],
      G: [5],
      H: [1],
    }
  }
},

function()
{
  const A = [200, 100];
  const B = [150, 250];
  const C = [320, 250];
  const D = [300, 100];
  const base = vec2.dist(C, B);
  const E = vec2.add(A, [-base, 0]);
  const F = vec2.add(D, [base, 0]);

  return {
    id: '1.37',
    title: 'Proposition 37',
    prose: prop37,
    points: { A, B, C, D, E, F },
    shapes: [
      rg.polygon([E, B, C, F]),
      rg.line(A, B),
      rg.line(A, C),
      rg.line(D, B),
      rg.line(D, C),
    ],
    letters: {
      A: [1],
      B: [5],
      C: [5],
      D: [1],
      E: [1],
      F: [1],
    }
  }
},

function()
{
  const A = [220, 100];
  const B = [90, 250];
  const C = [190, 250];
  const D = [300, 100];
  const E = vec2.add(B, [250, 0]);
  const F = vec2.add(C, [250, 0]);
  const base = vec2.dist(B, C);
  const G = vec2.add(A, [-base, 0]);
  const H = vec2.add(D, [base, 0]);

  return {
    id: '1.38',
    title: 'Proposition 38',
    prose: prop38,
    points: { A, B, C, D, E, F, G, H },
    shapes: [
      rg.polygon([G, B, F, H]),
      rg.line(A, B),
      rg.line(A, C),
      rg.line(D, E),
      rg.line(D, F),
    ],
    letters: {
      A: [1],
      B: [5],
      C: [5],
      D: [1],
      E: [5],
      F: [5],
      G: [1],
      H: [1],
    }
  }
},

function()
{
  const A = [120, 100];
  const B = [90, 300];
  const C = [400, 300];
  const D = [350, 100];
  const E = vec2.add(B, vec2.scale(vec2.sub(D, B), 0.9));

  return {
    id: '1.39',
    title: 'Proposition 39',
    prose: prop39,
    points: { A, B, C, D, E },
    shapes: [
      rg.polygon([A, B, C, D]),
      rg.line(A, C),
      rg.line(B, D),
      rg.line(E, A),
      rg.line(E, C),
    ],
    letters: {
      A: [1],
      B: [3],
      C: [-1],
      D: [1],
      E: [4.6, 4],
    }
  }
},

function()
{
  const A = [120, 100];
  const B = [90, 300];
  const C = [270, 300];
  const D = [400, 100];
  const E = vec2.add(C, vec2.sub(C, B));
  const F = vec2.add(C, vec2.scale(vec2.sub(D, C), 0.8));

  return {
    id: '1.40',
    title: 'Proposition 40',
    prose: prop40,
    points: { A, B, C, D, E, F },
    shapes: [
      rg.polygon([A, B, E, D]),
      rg.line(A, C),
      rg.line(C, D),
      rg.line(F, A),
      rg.line(F, E),
    ],
    letters: {
      A: [1],
      B: [5],
      C: [5],
      D: [1],
      E: [5],
      F: [1.5],
    }
  }
},

function()
{
  const A = [70, 100];
  const B = [40, 300];
  const C = [220, 300];
  const D = [250, 100];
  const E = vec2.add(D, vec2.sub(D, A));

  return {
    id: '1.41',
    title: 'Proposition 41',
    prose: prop41,
    points: { A, B, C, D, E },
    shapes: [
      rg.polygon([A, B, C, E]),
      rg.line(A, C),
      rg.line(D, C),
      rg.line(B, E),
    ],
    letters: {
      A: [1],
      B: [5],
      C: [5],
      D: [1],
      E: [1],
    }
  }
},

function()
{
  const A = [130, 100];
  const B = [100, 300];
  const C = [360, 300];

  const Da = [20, 20];
  const D = [60, 90];
  const Dtheta = Math.PI / 3;
  const Db = vec2.add(D, vec2.rot(vec2.sub(Da, D), Dtheta));

  const E = vec2.add(B, vec2.scale(vec2.sub(C, B), 0.5));
  const height = (B[1]-A[1]);
  const ef = [height / Math.tan(Dtheta), -height];
  const F = vec2.add(E, ef);
  const G = vec2.add(C, ef);

  return {
    id: '1.42',
    title: 'Proposition 42',
    prose: prop42,
    points: { A, B, C, D, E, F, G },
    shapes: [
      rg.polygon([A, B, C]),
      rg.line(Da, D),
      rg.line(Db, D),
      rg.line(A, E),
      rg.line(A, G),
      rg.line(C, G),
      rg.line(E, F),
    ],
    letters: {
      A: [1],
      B: [5],
      C: [5],
      D: [1, 8],
      E: [5],
      F: [1],
      G: [1],
    },
    given: {
      D: rg.angle(Da, D, Db)
    }
  }
},

function()
{
  const A = [100, 70];
  const B = [50, 250];
  const C = [350, 250];
  const D = [400, 70];
  const ah = vec2.scale(vec2.sub(D, A), 0.3);
  const ae = vec2.scale(vec2.sub(B, A), 0.3);
  const ak = vec2.scale(vec2.sub(C, A), 0.3);
  const E = vec2.add(A, ae);
  const F = vec2.add(D, ae);
  const G = vec2.add(B, ah);
  const H = vec2.add(A, ah);
  const K = vec2.add(A, ak);

  return {
    id: '1.43',
    title: 'Proposition 43',
    prose: prop43,
    points: { A, B, C, D, E, F, G, H, K },
    shapes: [
      rg.polygon([A, B, C, D]),
      rg.line(A, C),
      rg.line(E, F),
      rg.line(G, H),
    ],
    letters: {
      A: [1],
      B: [5],
      C: [5],
      D: [1],
      E: [3,2],
      F: [-1],
      G: [5],
      H: [1],
      K: [-0.2, 4],
    },
    polygonl: {
      EH: 'EAHK',
      FG: 'FCGK',
      BK: 'BGKE',
      KD: 'KFDH',
    }
  }
},

function()
{
  const A = [160, 440];
  const B = [170, 370];
  const Da = [330, 150];
  const D = [380, 100];
  const ab = vec2.sub(B, A);
  const Dtheta = Math.PI - Math.acos(vec2.dot(vec2.scale(ab, 1/vec2.len(ab)), [1,0]));
  const Db = vec2.add(D, vec2.rot(vec2.sub(Da, D), Dtheta));

  const Cb = [50, 170];
  const C = [200, 170];
  const Ca = vec2.add(C, vec2.rot(vec2.sub(Cb, C), Dtheta));

  const E = vec2.add(B, vec2.scale(ab, 2));
  const bg = vec2.scale(vec2.rot(ab, -Dtheta), 1.3);
  const F = vec2.add(E, bg);
  const G = vec2.add(B, bg);
  const H = vec2.add(A, bg);
  const bm = vec2.scale(bg, -2);
  const K = vec2.add(E, bm);
  const L = vec2.add(A, bm);
  const M = vec2.add(B, bm);

  return {
    id: '1.44',
    title: 'Proposition 44',
    prose: prop44,
    points: { A, B, C, D, E, F, G, H, K, L, M },
    shapes: [
      rg.polygon([Ca, Cb, C]),
      rg.line(Da, D),
      rg.line(Db, D),
      rg.line(A, E),
      rg.polygon([H, L, K, F]),
      rg.line(G, M),
      rg.line(H, K),
    ],
    letters: {
      A: [5],
      B: [-2],
      C: [2, 10],
      D: [3, 10],
      E: [1],
      F: [1],
      G: [3],
      H: [5],
      K: [1],
      L: [5],
      M: [-1],
    },
    given: {
      C: [rg.polygon([Ca, Cb, C])],
      D: rg.angle(Da, D, Db)
    },
    polygonl: {
      AG: 'ABGH',
      ME: 'MKEB',
      LB: 'LMBA',
      BF: 'BEFG',
    }
  }
},

function()
{
  const A = [100, 150];
  const B = [230, 250];
  const C = [310, 120];
  const D = [260, 70];

  const K = [70, 450];
  const F = [100, 320];
  const H = vec2.add(K, [100, 0])
  const M = vec2.add(H, [60, 0])
  const G = vec2.add(F, [100, 0])
  const L = vec2.add(G, [60, 0])

  const kf = vec2.sub(F, K);
  const Ea = [340, 180];
  const E = [290, 230];
  const Etheta = Math.PI - Math.acos(vec2.dot(vec2.scale(kf, 1/vec2.len(kf)), [1,0]));
  const Eb = vec2.add(E, vec2.rot(vec2.sub(Ea, E), Etheta));

  return {
    id: '1.45',
    title: 'Proposition 45',
    prose: prop45,
    points: { A, B, C, D, E, F, G, H, K, L, M },
    shapes: [
      rg.polygon([A, B, C, D]),
      rg.line(B, D),
      rg.line(Ea, E),
      rg.line(Eb, E),
      rg.line(K, F),
      rg.line(G, H),
      rg.line(L, M),
      rg.line(F, L),
      rg.line(K, M),
    ],
    letters: {
      A: [3],
      B: [5],
      C: [-1],
      D: [1],
      E: [-1, 10],
      F: [1],
      G: [1],
      H: [5],
      K: [5],
      L: [1],
      M: [5],
    },
    given: {
      E: rg.angle(Ea, E, Eb)
    },
    polygonl: {
      FH: 'FKHG',
      GM: 'GHML',
    }
  }
},

function()
{
  const A = [100, 350];
  const B = [230, 350];
  const C = [100, 50];
  const E = [230, 220];
  const D = [100, 220];

  return {
    id: '1.46',
    title: 'Proposition 46',
    prose: prop46,
    points: { A, B, C, D, E },
    shapes: [
      rg.line(A, C),
      rg.line(A, B),
      rg.line(E, B),
      rg.line(E, D),
    ],
    letters: {
      A: [5],
      B: [5],
      C: [0],
      D: [0],
      E: [0],
    }
  }
},
function()
{
  const B = [130, 280];
  const C = [330, 280];
 
  const A = vec2.add([230, 280], vec2.rot([-100, 0], Math.PI/3))

  const bd = vec2.rot(vec2.sub(C, B), Math.PI/2);
  const D = vec2.add(B, bd);
  const E = vec2.add(C, bd);

  const ag = vec2.rot(vec2.sub(B, A), Math.PI/2);
  const G = vec2.add(A, ag);
  const F = vec2.add(B, ag);

  const ck = vec2.rot(vec2.sub(A, C), Math.PI/2);
  const K = vec2.add(C, ck);
  const H = vec2.add(A, ck);

  const bc = vec2.sub(C, B);
  const ubc = vec2.scale(bc, 1/vec2.len(bc));
  const dl = vec2.scale(ubc, vec2.dot(vec2.sub(A, B), ubc));
  const L = vec2.add(D, dl);
  const M = vec2.add(B, dl);

  return {
    id: '1.47',
    title: 'Proposition 47',
    prose: prop47,
    points: { A, B, C, D, E, F, G, H, K, L, M },
    shapes: [
      rg.polygon([A, G, F, B]),
      rg.polygon([B, D, E, C]),
      rg.polygon([A, C, K, H]),
      rg.line(A, L),
      rg.line(A, D),
      rg.line(A, E),
      rg.line(B, K),
      rg.line(C, F),
    ],
    letters: {
      A: [1.3, 1.2],
      B: [3.5],
      C: [-1.5],
      D: [5],
      E: [5],
      F: [3],
      G: [2],
      H: [0],
      K: [0],
      L: [5],
    },
    polygonl: {
      GB: 'GABF',
      HC: 'HKCA',
      BL: 'BDLM',
      CL: 'CELM',
    }
  }
},
function()
{
  const A = [250, 280];
  const B = [350, 280];
  const C = [250, 50];
  const D = [150, 280];

  return {
    id: '1.48',
    title: 'Proposition 48',
    prose: prop48,
    points: { A, B, C, D },
    shapes: [
      rg.polygon([C, D, B]),
      rg.line(A, C),
    ],
    letters: {
      A: [5],
      B: [5],
      C: [1],
      D: [5],
    }
  }
},
]
}

export default book1;
