import vec2 from './vec2.js';

import prop1 from './prose/book4/1';
import prop2 from './prose/book4/2';
import prop3 from './prose/book4/3';
import prop4 from './prose/book4/4';
import prop5 from './prose/book4/5';
import prop6 from './prose/book4/6';
import prop7 from './prose/book4/7';
import prop8 from './prose/book4/8';
import prop9 from './prose/book4/9';
import prop10 from './prose/book4/10';
import prop11 from './prose/book4/11';
import prop12 from './prose/book4/12';
import prop13 from './prose/book4/13';
import prop14 from './prose/book4/14';
import prop15 from './prose/book4/15';
import prop16 from './prose/book4/16';

function book4(rg)
{
  return [
function()
{
  const r = 150;
  const d = 100;
  const D = [300, 40];
  const G = [200, 250];
  const w = [r, 0];
  const B = vec2.sub(G, w);
  const C = vec2.add(G, w);
  const v = [-d, 0];
  const E = vec2.add(C, v);
  const alpha = Math.acos(d/(2*r));
  const A = vec2.add(C, vec2.rot(v, alpha));
  const F = vec2.add(C, vec2.rot(v, -alpha));

  return {
    prose: prop1,
    points: { A, B, C, D, E, F, G },
    shapes: [
    ],
    letters: {
    }
  }
},

function()
{
  const r = 100;
  const O = [150, 200];
  const P = vec2.add(O, [r*2.5, -20]);
  const w = [1, 0];
  const uoa = vec2.rot(w, Math.PI*0.6);
  const uob = vec2.rot(w, -Math.PI*0.7);
  const uoc = vec2.rot(w, Math.PI*0.1);
  const A = vec2.add(O, vec2.scale(uoa, r));
  const B = vec2.add(O, vec2.scale(uob, r));
  const C = vec2.add(O, vec2.scale(uoc, r));
  const D = vec2.add(P, vec2.scale(uoa, 0.8*r));
  const E = vec2.add(P, vec2.scale(uob, 0.8*r));
  const F = vec2.add(P, vec2.scale(uoc, 0.8*r));
  const uag = vec2.rot(uoa, Math.PI/2);
  const G = vec2.add(A, vec2.scale(uag, r));
  const H = vec2.add(A, vec2.scale(uag, -1.5*r));

  return {
    prose: prop2,
    points: { A, B, C, D, E, F, O, G, H },
    shapes: [
    ],
    letters: {
    }
  }
},

function()
{
  const r = 80;
  const K = [250, 200];
  const w = [0, r];
  const alpha = -Math.PI * 0.7;
  const theta = Math.PI * 0.77;
  const gamma = -(2 * Math.PI + alpha - theta)/2;
  const kb = vec2.rot(w, alpha);
  const C = vec2.add(K, w);
  const B = vec2.add(K, kb);
  const A = vec2.add(K, vec2.rot(w, theta));
  let f = (a, v) => vec2.scale(vec2.rot(v, a), 1/Math.cos(a))
  const kl = f(theta/2, w), km = f(gamma, kb), kn = f(alpha/2, w);
  const L = vec2.add(K, kl);
  const M = vec2.add(K, km);
  const N = vec2.add(K, kn);
  const P = vec2.add(K, [150, -80]);
  let u = (v) => vec2.rot(vec2.scale(v, 0.3), Math.PI);
  const D = vec2.add(P, u(kl));
  const E = vec2.add(P, u(km));
  const F = vec2.add(P, u(kn));
  const fe = vec2.sub(E, F);
  const G = vec2.add(E, fe);
  const H = vec2.sub(F, fe);

  return {
    prose: prop3,
    points: { A, B, C, D, E, F, G, H, K, L, M, N, P },
    shapes: [],
    letters: {}
  };
},

function()
{
  const r = 100;
  const D = [250, 220];
  const w = [0, r];
  const alpha = -Math.PI * 0.72;
  const theta = Math.PI * 0.72;
  const gamma = -(2 * Math.PI + alpha - theta)/2;
  const dg = vec2.rot(w, alpha);
  const F = vec2.add(D, w);
  const G = vec2.add(D, dg);
  const E = vec2.add(D, vec2.rot(w, theta));
  let f = (a, v) => vec2.scale(vec2.rot(v, a), 1/Math.cos(a))
  const ds = [f(theta/2, w), f(gamma, dg), f(alpha/2, w)];
  const [A, B, C] = ds.map(v => vec2.add(D, v));

  return {
    prose: prop4,
    points: { A, B, C, D, E, F, G },
    shapes: [],
    letters: {}
  };
},

function()
{
  const r = 60;
  const dist = 150;
  const O = [120, 120];

  return {
    prose: prop5,
    figures: [
      (function()
      {
        const F = O;
        const w = [0, -r];
        const A = vec2.add(F, w);
        const B = vec2.add(F, vec2.rot(w, Math.PI * 1.3));
        const C = vec2.add(F, vec2.rot(w, Math.PI * 0.75));
        const D = vec2.scale(vec2.add(A, B), 0.5);
        const E = vec2.scale(vec2.add(A, C), 0.5);

        return {
          points: { A, B, C, D, E, F },
          shapes: [],
          letters: {}
        };
      })(),
      (function()
      {
        const F = vec2.add(O, [dist, 0]);
        const w = [0, -r];
        const A = vec2.add(F, vec2.rot(w, Math.PI * 0.15));
        const B = vec2.add(F, vec2.rot(w, Math.PI * 1.5));
        const C = vec2.add(F, vec2.rot(w, Math.PI * 0.5));
        const D = vec2.scale(vec2.add(A, B), 0.5);
        const E = vec2.scale(vec2.add(A, C), 0.5);

        return {
          points: { A, B, C, D, E, F },
          shapes: [],
          letters: {}
        };
      })(),
      (function()
      {
        const F = vec2.add(O, [dist*2, 0]);
        const w = [0, -r];
        const A = vec2.add(F, vec2.rot(w, Math.PI * 0.15));
        const B = vec2.add(F, vec2.rot(w, Math.PI * 1.7));
        const C = vec2.add(F, vec2.rot(w, Math.PI * 0.5));
        const D = vec2.scale(vec2.add(A, B), 0.5);
        const E = vec2.scale(vec2.add(A, C), 0.5);

        return {
          points: { A, B, C, D, E, F },
          shapes: [],
          letters: {}
        };
      })(),
    ]
  };
},

function()
{
  const r = 150;
  const E = [200, 200];
  const w = [0, -r];
  const A = vec2.add(E, w);
  const B = vec2.add(E, vec2.rot(w, -Math.PI*0.5));
  const C = vec2.add(E, vec2.rot(w, -Math.PI*1));
  const D = vec2.add(E, vec2.rot(w, -Math.PI*1.5));

  return {
    prose: prop6,
    points: { A, B, C, D, E },
    shapes: [],
    letters: {}
  };
},

function()
{
  const r = 150;
  const E = [200, 200];
  const w = [0, -r];
  const A = vec2.add(E, w);
  const B = vec2.add(E, vec2.rot(w, -Math.PI*0.5));
  const C = vec2.add(E, vec2.rot(w, -Math.PI*1));
  const D = vec2.add(E, vec2.rot(w, -Math.PI*1.5));
  const F = vec2.add(D, w);
  const G = vec2.add(B, w);
  const H = vec2.sub(B, w);
  const K = vec2.sub(D, w);

  return {
    prose: prop7,
    points: { A, B, C, D, E, F, G, H, K },
    shapes: [],
    letters: {}
  };
},

function()
{
  const r = 150;
  const G = [200, 200];
  const w = [0, -r];
  const E = vec2.add(G, w);
  const F = vec2.add(G, vec2.rot(w, -Math.PI*0.5));
  const H = vec2.add(G, vec2.rot(w, -Math.PI*1));
  const K = vec2.add(G, vec2.rot(w, -Math.PI*1.5));
  const A = vec2.add(F, w);
  const B = vec2.sub(F, w);
  const C = vec2.sub(K, w);
  const D = vec2.add(K, w);

  return {
    prose: prop8,
    points: { A, B, C, D, E, F, G, H, K },
    shapes: [],
    letters: {}
  };
},

function()
{
  const r = 150;
  const E = [200, 200];
  const w = [0, -r];
  const A = vec2.add(E, w);
  const B = vec2.add(E, vec2.rot(w, -Math.PI*0.5));
  const C = vec2.add(E, vec2.rot(w, -Math.PI*1));
  const D = vec2.add(E, vec2.rot(w, -Math.PI*1.5));

  return {
    prose: prop9,
    points: { A, B, C, D, E },
    shapes: [],
    letters: {}
  };
},

function()
{
  const r = 180;
  const A = [220, 220];
  const w = [1, 0];
  const phi = (Math.sqrt(5) - 1)/2;
  const v = vec2.rot(w, -Math.PI * 3/10);
  const B = vec2.add(A, vec2.scale(v, r));
  const C = vec2.add(A, vec2.scale(v, r*phi));
  const D = vec2.add(A, vec2.scale(vec2.rot(w, -Math.PI * 1/10), r));
  const E = vec2.add(A, vec2.scale(vec2.rot(w, Math.PI * 1/10), r));
  const o = r*(phi/2) / Math.cos(Math.PI*3/10);
  const O = vec2.add(A, vec2.scale(w, o));

  return {
    prose: prop10,
    points: { A, B, C, D, E, O },
    shapes: [],
    letters: {}
  };
},

function()
{
  const r = 120;
  const O = [150, 180];
  const w = [0, -r];
  let f = (a) => vec2.add(O, vec2.rot(w, -Math.PI * a/5));
  const [A, B, C, D, E] = [0, 2, 4, 6, 8].map(f);
  const [F, G, H] = [A, C, D].map(pt => vec2.add(pt, [250, 0]));

  return {
    prose: prop11,
    points: { A, B, C, D, E, F, G, H },
    shapes: [],
    letters: {}
  };
},

function()
{
  const r = 180;
  const F = [220, 220];
  const w = [0, -1];
  let f = (r) => (a) => vec2.add(F, vec2.rot([0, -r], -Math.PI * a/5));
  const [A, B, C, D, E] = [1, 3, 5, 7, 9].map(f(r*Math.cos(Math.PI/5)));
  const [G, H, K, L, M] = [0, 2, 4, 6, 8].map(f(r));

  return {
    prose: prop12,
    points: { A, B, C, D, E, F, G, H, K, L, M },
    shapes: [],
    letters: {}
  };
},

function()
{
  const r = 180;
  const F = [220, 220];
  const w = [0, -1];
  let f = (r) => (a) => vec2.add(F, vec2.rot([0, -r], -Math.PI * a/5));
  const [A, B, C, D, E] = [0, 2, 4, 6, 8].map(f(r));
  const [G, H, K, L, M] = [1, 3, 5, 7, 9].map(f(r*Math.cos(Math.PI/5)));

  return {
    prose: prop13,
    points: { A, B, C, D, E, F, G, H, K, L, M },
    shapes: [],
    letters: {}
  };
},

function()
{
  const r = 180;
  const F = [220, 220];
  const w = [0, -1];
  let f = (r) => (a) => vec2.add(F, vec2.rot([0, -r], -Math.PI * a/5));
  const [A, B, C, D, E] = [0, 2, 4, 6, 8].map(f(r));

  return {
    prose: prop14,
    points: { A, B, C, D, E, F },
    shapes: [],
    letters: {}
  };
},

function()
{
  const r = 120;
  const G = [150, 220];
  const w = [-r, 0];
  let f = (r) => (a) => vec2.add(G, vec2.rot(w, Math.PI * a/6));
  const [A, B, C, D, E, F] = [0, 2, 4, 6, 8, 10].map(f(r));
  const H = vec2.sub(D, w);

  return {
    prose: prop15,
    points: { A, B, C, D, E, F, G, H },
    shapes: [],
    letters: {}
  };
},

function()
{
  const r = 150;
  const O = [256, 256];
  let f = (a) => vec2.add(O, vec2.rot([0, -r], -Math.PI*2*a/15));
  const ps = [...Array(15).keys()].map(f);
  const A = ps[0];
  const B = ps[3];
  const E = ps[4];
  const C = ps[5];
  const D = ps[10];

  return {
    prose: prop16,
    points: { A, B, C, D, E, O },
    shapes: [],
    letters: {}
  };
},

]
}

export default book4;
