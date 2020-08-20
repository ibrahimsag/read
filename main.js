import vec2 from './vec2.js';
import makeRG from './makeRG.js';
import makeGround from './makeGround.js';

const svg = document.getElementById('figure');
const rg = makeRG(svg);

function processProse(t)
{
  return t.split('\n\n').map(p => p.split('\n'));
}

import prop1 from './prose/proposition1';
import prop2 from './prose/proposition2';
import prop3 from './prose/proposition3';
import prop4 from './prose/proposition4';
import prop5 from './prose/proposition5';
import prop6 from './prose/proposition6';
import prop7 from './prose/proposition7';
import prop8 from './prose/proposition8';
import prop9 from './prose/proposition9';
import prop10 from './prose/proposition10';
import prop11 from './prose/proposition11';
import prop12 from './prose/proposition12';

let book1 = [
function()
{
  const distanceAB = 160;
  const A = [170, 200];
  const B = [A[0] + distanceAB, 200];
  const C = [A[0] + distanceAB/2, A[1] - (distanceAB/2) * Math.sqrt(3)];
  const D = [A[0] - distanceAB, A[1]];
  const E = [B[0] + distanceAB, B[1]];
  return {
    title: 'Proposition 1',
    prose: processProse(prop1),
    points: { A, B, C, D, E },
    shapes: [
      rg.line(A, B),
      rg.line(B, C),
      rg.line(C, A),
      rg.circle(A, distanceAB * 2),
      rg.circle(B, distanceAB * 2),
    ],
    letters: {
      A: [2.5],
      B: [-0.5],
      C: [0.9, 1.2],
      D: [-0.5],
      E: [2.5]
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
    title: 'Proposition 2',
    prose: processProse(prop2),
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
    title: "Proposition 3",
    prose: processProse(prop3),
    points: {A, B, C, D, E, F},
    shapes: [
      rg.line(A, B),
      rg.line(C, Ce),
      rg.line(A, D),
      rg.circle(A, 2 * r)
    ],
    letters: {
      A: [3.5, 0.7],
      B: [-0.5, 1.3],
      C: [0, 1.3],
      D: [1.7, 1],
      E: [0.1, 1.5],
      F: [6, 1]
    },
    given: {
      C: () => [rg.line(C, Ce)]
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
    title: "Proposition 4",
    prose: processProse(prop4),
    points: {A, B, C, D, E, F},
    shapes: [
      rg.polygon([A, B, C]),
      rg.polygon([D, E, F]),
      rg.curve(ps)
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
    title: "Proposition 5",
    prose: processProse(prop5),
    points: { A, B, C, D, E, F, G },
    shapes: [
      rg.line(B, C),
      rg.line(A, D),
      rg.line(A, E),
      rg.line(F, C),
      rg.line(B, G)
    ],
    letters: {
      A: [0.9, 1.5],
      B: [2.4, 1],
      C: [-0.5, 1.2],
      D: [2.4, 1],
      E: [-0.5, 1.2],
      F: [2.4, 1],
      G: [-0.5, 1.2]
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
    title: "Proposition 6",
    prose: processProse(prop6),
    points: { A, B, C, D },
    shapes: [
      rg.polygon([A, B, C]),
      rg.line(C, D)
    ],
    letters: {
      A: [0.9, 1.5],
      B: [2.4, 1],
      C: [-0.5, 1.2],
      D: [2.4, 1]
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
    title: "Proposition 7",
    prose: processProse(prop7),
    points: { A, B, C, D },
    shapes: [
      rg.polygon([A, B, C]),
      rg.line(B, D),
      rg.line(C, D),
      rg.line(A, D)
    ],
    letters: {
      A: [2.4, 1],
      B: [-0.5, 1.2],
      C: [0.9, 1.5],
      D: [-0.4, 1]
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
    title: "Proposition 8",
    prose: processProse(prop8),
    points: {A, B, C, D, E, F, G},
    shapes: [
      rg.polygon([A, B, C]),
      rg.polygon([D, E, F]),
      rg.polygon([G, E, F]),
    ],
    letters: {
      A: [.7, 1.2],
      B: [2.4, 1],
      C: [-0.5, 1.2],
      D: [.7, 1.2],
      E: [2.4, 1],
      F: [-0.5, 1.2],
      G: [0.5, 1.2]
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
    title: "Proposition 9",
    prose: processProse(prop9),
    points: { A, B, C, D, E, F },
    shapes: [
      rg.line(A, B),
      rg.line(A, C),
      rg.polygon([D, E, F]),
      rg.line(A, F)
    ],
    letters: {
      A: [0.9, 1.5],
      B: [2.4, 1],
      C: [-0.2, 1.2],
      D: [2.4, 1],
      E: [-0.2, 1.2],
      F: [5.5, .5]
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
    title: "Proposition 10",
    prose: processProse(prop10),
    points: { A, B, C, D },
    shapes: [
      rg.polygon([A, B, C]),
      rg.line(C, D)
    ],
    letters: {
      A: [2.5],
      B: [-0.5],
      C: [0.8, 1.2],
      D: [5.5, .6]
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
    title: "Proposition 11",
    prose: processProse(prop11),
    points: { A, B, C, D, E, F},
    shapes: [
      rg.line(A, B),
      rg.line(F, C),
      rg.polygon([D, E, F])
    ],
    letters: {
      A: [1],
      B: [0.2, 1.2],
      C: [5.5, .6],
      D: [5, .5],
      E: [5.5, .6],
      F: [.8, 1.2]
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
    title: "Proposition 12",
    prose: processProse(prop12),
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
      B: [0.2, 1.2],
      C: [.8, 1.2],
      D: [-1.5, 1],
      E: [6, .6],
      F: [.8, 1.2],
      G: [5, .5],
      H: [5, .5],
    }
  }
}
]

let ps = book1.map(f => f())
let ground = makeGround(ps, rg, svg);

ground.draw(0, ps[ps.length - 1]);
