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

function()
{
  const a = 300;
  const A = [50, 50];
  const ab = [a, 0];
  const B = vec2.add(A, ab);
  const ac = vec2.scale(ab, 0.5);
  const bd = vec2.scale(ab, 0.3);
  const C = vec2.add(A, ac)
  const D = vec2.add(B, bd);
  const cd = vec2.sub(D, C);
  const ce = vec2.rot(cd, Math.PI/2);
  const E = vec2.add(C, ce);
  const F = vec2.add(D, ce);
  const G = vec2.add(B, ce);
  const bh = vec2.rot(bd, Math.PI/2);
  const H = vec2.add(B, bh);
  const K = vec2.add(A, bh);
  const L = vec2.add(C, bh);
  const M = vec2.add(D, bh);
  const hn = vec2.scale(vec2.sub(L, H), 0.3);
  const N = vec2.add(H, hn);
  const O = vec2.add(H, vec2.rot(hn, Math.PI * (3/4)));
  const P = vec2.add(H, vec2.rot(hn, -Math.PI /2));

  return {
    title: 'Proposition 6',
    prose: processProse(prop6),
    points: { A, B, C, D, E, F, G, H, K, L, M, N, O, P },
    shapes: [
      rg.line(A, K),
      rg.line(A, D),
      rg.line(K, M),
      rg.line(E, F),
      rg.line(C, E),
      rg.line(B, G),
      rg.line(D, F),
      rg.line(E, D),
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

function()
{
  const a = 300;
  const A = [50, 50];
  const ab = [a, 0];
  const B = vec2.add(A, ab);
  const ac = vec2.scale(ab, 0.6);
  const C = vec2.add(A, ac)
  const ad = vec2.rot(ab, Math.PI/2);
  const D = vec2.add(A, ad);
  const E = vec2.add(B, ad);
  const cb = vec2.sub(B, C);
  const bf = vec2.rot(cb, Math.PI/2);
  const F = vec2.add(B, bf);
  const G = vec2.add(C, bf);
  const H = vec2.add(A, bf);
  const gk = vec2.scale(vec2.sub(H, G), 0.3);
  const K = vec2.add(G, gk);
  const L = vec2.add(G, vec2.rot(gk, Math.PI * (3/4)));
  const M = vec2.add(G, vec2.rot(gk, -Math.PI /2));
  const N = vec2.add(C, ad);

  return {
    title: 'Proposition 7',
    prose: processProse(prop7),
    points: { A, B, C, D, E, F, G, H, K, L, M, N },
    shapes: [
      rg.polygon([A, D, E, B]),
      rg.line(H, F),
      rg.line(C, N),
      rg.line(D, B),
      rg.gnomon(G, K, M),
    ],
    smallletters: "KLM",
    letters: {
      A: [1],
      B: [1],
      C: [1],
      D: [5],
      E: [5],
      F: [-1],
      G: [-2.2,1.3],
      H: [3],
      K: [5],
      L: [1, 1.5],
      M: [3, 0.5],
      N: [5]
    },
    given: {
      KLM: () => [rg.gnomon(G, K, M)],
    }
  }
},

function()
{
  const a = 300;
  const A = [50, 50];
  const ab = [a, 0];
  const B = vec2.add(A, ab);
  const bc = vec2.scale(ab, -0.25);
  const C = vec2.add(B, bc)
  const bd = vec2.scale(bc, -1);
  const D = vec2.add(B, bd);
  const ad = vec2.sub(D, A);
  const ae = vec2.rot(ad, Math.PI/2);
  const E = vec2.add(A, ae);
  const F = vec2.add(D, ae);
  const cg = vec2.rot(bd, Math.PI/2);
  const G = vec2.add(C, cg);
  const H = vec2.add(C, ae);
  const K = vec2.add(B, cg);
  const L = vec2.add(B, ae);
  const M = vec2.add(A, cg);
  const N = vec2.add(D, cg);
  const O = vec2.add(M, cg);
  const P = vec2.add(N, cg);
  const Q = vec2.add(G, cg);
  const R = vec2.add(K, cg);
  const qk = vec2.sub(K, Q);
  const qcent = vec2.scale(qk, 0.5)
  const qu = vec2.rot(qcent, Math.PI * 3/4);
  const qs = vec2.rot(qu, Math.PI / 2);
  const cent = vec2.add(Q, qcent);
  const S = vec2.add(Q, qs);
  const T = vec2.add(cent, qk);
  const U = vec2.add(Q, qu);

  return {
    title: 'Proposition 8',
    prose: processProse(prop8),
    points: { A, B, C, D, E, F, G, H, K, L, M, N, O, P, Q, R, S, T, U },
    shapes: [
      rg.polygon([A, E, F, D]),
      rg.line(M, N),
      rg.line(O, P),
      rg.line(C, H),
      rg.line(B, L),
      rg.line(D, E),
      rg.gnomon(cent, S, U)
    ],
    smallletters: "STU",
    letters: {
      A: [1],
      B: [1],
      C: [1],
      D: [1],
      E: [5],
      F: [5],
      G: [0],
      H: [5],
      K: [-2.2, 1.2],
      L: [5],
      M: [3, 0.5],
      N: [-1],
      O: [3],
      P: [-1],
      Q: [-2.2, 1.2],
      R: [-2.3, 1.2],
      S: [5],
      T: [1, 1.5],
      U: [3],
    },
    given: {
      STU: () => [rg.gnomon(cent, S, U)],
    }
  }
},

]
}

export default book2;
