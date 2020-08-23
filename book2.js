import vec2 from './vec2.js';

function processProse(t)
{
  return t.split('\n\n').map(p => p.split('\n'));
}

import prop1 from './prose/book2/1';
import prop2 from './prose/book2/2';
import prop3 from './prose/book2/3';
import prop4 from './prose/book2/4';
import prop5 from './prose/book2/5';
import prop6 from './prose/book2/6';
import prop7 from './prose/book2/7';
import prop8 from './prose/book2/8';
import prop9 from './prose/book2/9';
import prop10 from './prose/book2/10';
import prop11 from './prose/book2/11';
import prop12 from './prose/book2/12';
import prop13 from './prose/book2/13';
import prop14 from './prose/book2/14';

function book2(rg)
{
  return [
function()
{
  const a = 200;
  const A = [170, 50];
  const Ae = vec2.add(A, [a, 0]);
  const B = [60, 100];
  const C = [450, 100];
  const bc = vec2.sub(C, B);
  const D = vec2.add(B, vec2.scale(bc, 0.45))
  const E = vec2.add(B, vec2.scale(bc, 0.75))
  const bf = vec2.scale(vec2.rot(bc, Math.PI/2), 0.6);
  const F = vec2.add(B, bf);
  const bg = vec2.scale(bf, a/vec2.len(bf));
  const G = vec2.add(B, bg);
  const K = vec2.add(D, bg);
  const L = vec2.add(E, bg);
  const H = vec2.add(C, bg);

  return {
    title: 'Proposition 1',
    prose: processProse(prop1),
    points: { A, B, C, D, E, F, G, H, K, L },
    given: {
      A: () => [rg.line(A, Ae)],
    },
    shapes: [
      rg.line(A, Ae),
      rg.line(B, C),
      rg.line(B, F),
      rg.line(D, K),
      rg.line(E, L),
      rg.line(C, H),
      rg.line(G, H),
    ],
    letters: {
      A: [3],
      B: [1],
      C: [1],
      D: [1],
      E: [1],
      F: [5],
      G: [3],
      H: [5],
      K: [5],
      L: [5],
    }
  }
},

function()
{
  const a = 250;
  const A = [100, 50];
  const B = vec2.add(A, [a, 0]);
  const ab = vec2.sub(B, A);
  const C = vec2.add(A, vec2.scale(ab, 0.3))
  const ad = vec2.rot(ab, Math.PI/2);
  const D = vec2.add(A, ad)
  const E = vec2.add(B, ad)
  const F = vec2.add(C, ad);

  return {
    title: 'Proposition 2',
    prose: processProse(prop2),
    points: { A, B, C, D, E, F },
    shapes: [
      rg.polygon([A, D, E, B]),
      rg.line(C, F),
    ],
    letters: {
      A: [1],
      B: [1],
      C: [1],
      D: [5],
      E: [5],
      F: [5],
    }
  }
},

function()
{
  const a = 350;
  const A = [50, 50];
  const B = vec2.add(A, [a, 0]);
  const ab = vec2.sub(B, A);
  const C = vec2.add(A, vec2.scale(ab, 0.3))
  const cb = vec2.sub(B, C);
  const cd = vec2.rot(cb, Math.PI/2);
  const D = vec2.add(C, cd);
  const E = vec2.add(B, cd)
  const F = vec2.add(A, cd)

  return {
    title: 'Proposition 3',
    prose: processProse(prop3),
    points: { A, B, C, D, E, F },
    shapes: [
      rg.polygon([A, F, E, B]),
      rg.line(C, D),
    ],
    letters: {
      A: [1],
      B: [1],
      C: [1],
      D: [5],
      E: [5],
      F: [5],
    }
  }
},

function()
{
  const a = 300;
  const A = [50, 50];
  const B = vec2.add(A, [a, 0]);
  const ab = vec2.sub(B, A);
  const C = vec2.add(A, vec2.scale(ab, 0.7))
  const cb = vec2.sub(B, C);
  const ad = vec2.rot(ab, Math.PI/2);
  const cg = vec2.rot(cb, Math.PI/2);
  const D = vec2.add(A, ad);
  const E = vec2.add(B, ad)
  const F = vec2.add(C, ad)
  const G = vec2.add(C, cg)
  const H = vec2.add(A, cg);
  const K = vec2.add(B, cg)

  return {
    title: 'Proposition 4',
    prose: processProse(prop4),
    points: { A, B, C, D, E, F, G, H, K },
    shapes: [
      rg.polygon([A, D, E, B]),
      rg.line(B, D),
      rg.line(C, F),
      rg.line(H, K),
    ],
    letters: {
      A: [1],
      B: [1],
      C: [1],
      D: [5],
      E: [5],
      F: [5],
      G: [5.8, 1.2],
      H: [3],
      K: [-1]
    }
  }
},

function()
{
  const a = 400;
  const A = [50, 50];
  const ab = [a, 0];
  const B = vec2.add(A, ab);
  const ac = vec2.scale(ab, 0.5);
  const bd = vec2.scale(ab, -0.38);
  const C = vec2.add(A, ac)
  const D = vec2.add(B, bd);
  const ce = vec2.rot(ac, Math.PI/2);
  const E = vec2.add(C, ce);
  const F = vec2.add(B, ce);
  const G = vec2.add(D, ce);
  const dh = vec2.rot(bd, -Math.PI/2);
  const H = vec2.add(D, dh);
  const K = vec2.add(A, dh);
  const L = vec2.add(C, dh);
  const M = vec2.add(B, dh);
  const hn = vec2.scale(vec2.sub(L, H), 0.7);
  const N = vec2.add(H, hn);
  const O = vec2.add(H, vec2.rot(hn, Math.PI * (3/4)));
  const P = vec2.add(H, vec2.rot(hn, -Math.PI /2));

  return {
    title: 'Proposition 5',
    prose: processProse(prop5),
    points: { A, B, C, D, E, F, G, H, K, L, M, N, O, P },
    shapes: [
      rg.line(A, K),
      rg.line(A, B),
      rg.line(K, M),
      rg.line(E, F),
      rg.line(C, E),
      rg.line(D, G),
      rg.line(B, F),
      rg.line(E, B),
      rg.gnomon(H, N, P),
    ],
    smallletters: "NOP",
    letters: {
      A: [1],
      B: [1],
      C: [1],
      D: [1],
      E: [4.8],
      F: [5],
      G: [5],
      H: [2],
      K: [5],
      L: [3.8, 1.5],
      M: [-1],
      N: [5],
      O: [1, 1.5],
      P: [3]
    },
    given: {
      NOP: () => [rg.gnomon(H, N, P)],
    }
  }
},
]
}

export default book2;
