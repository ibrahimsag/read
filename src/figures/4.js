import vec2 from '../vec2.js';

function book4(rg)
{
  return [
function()
{
  const r = 150;
  const d = 100;
  const D = [300, 40];
  const Da = vec2.sub(D, [d/2,0]);
  const Db = vec2.add(D, [d/2,0]);
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
    id: '4.1',
    points: { A, B, C, D, E, F, G },
    given: {
      D: [rg.line(Da, Db)],
    },
    shapes: [
      rg.circle(G, 2*r),
      rg.circle(C, 2*d),
      rg.line(A, C),
      rg.line(B, C),
      rg.line(Da, Db)
    ],
    letters: {
      A: [0.8],
      B: [3],
      C: [-1],
      D: [1],
      E: [2],
      F: [-3]
    }
  }
},

function()
{
  const r = 100;
  const O = [180, 200];
  const P = vec2.add(O, [r*2.0, -20]);
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
    id: '4.2',
    points: { A, B, C, D, E, F, O, G, H },
    shapes: [
      rg.circle(O, 2*r),
      rg.polygon([A, B, C]),
      rg.polygon([D, E, F]),
      rg.line(G, H)
    ],
    letters: {
      A: [-3.5],
      B: [2],
      C: [-1],
      D: [3],
      E: [1],
      F: [-1],
      G: [3],
      H: [-1]
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
    id: '4.3',
    points: { A, B, C, D, E, F, G, H, K, L, M, N, P },
    shapes: [
      rg.circle(K, 2*r),
      rg.polygon([L, M, N]),
      rg.line(G, H),
      rg.line(D, E),
      rg.line(D, F),
      rg.line(K, A),
      rg.line(K, B),
      rg.line(K, C),
    ],
    letters: {
      A: [2],
      B: [0],
      C: [-3],
      D: [-1],
      E: [4],
      F: [3.8, 1.2],
      G: [-1.5],
      H: [1],
      K: [-1.5],
      L: [-3],
      M: [1],
      N: [-3],
    }
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
  const ds = [f(gamma, dg), f(theta/2, w), f(alpha/2, w)];
  const [A, B, C] = ds.map(v => vec2.add(D, v));

  return {
    id: '4.4',
    points: { A, B, C, D, E, F, G },
    shapes: [
      rg.circle(D, 2*r),
      rg.polygon([A, B, C]),
      rg.line(D, B),
      rg.line(D, C),
      rg.line(D, E),
      rg.line(D, F),
      rg.line(D, G),
    ],
    letters: {
      A: [1],
      B: [3],
      C: [-1],
      D: [1],
      E: [2],
      F: [-3],
      G: [0]
    }
  };
},

function()
{
  const r = 70;
  const dist = 170;
  const O = [80, 120];

  return {
    id: '4.5',
    singlecanvas: true,
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
          shapes: [
            rg.circle(F, 2*r),
            rg.polygon([A, B, C]),
            rg.line(F, A),
            rg.line(F, B),
            rg.line(F, C),
            rg.line(F, D),
            rg.line(F, E),
          ],
          letters: {
            A: [1],
            B: [4],
            C: [-1.5],
            D: [2],
            E: [0],
            F: [-3, 2]
          }
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
          shapes: [
            rg.circle(F, 2*r),
            rg.polygon([A, B, C]),
            rg.line(F, A),
            rg.line(F, B),
            rg.line(F, C),
            rg.line(F, D),
            rg.line(F, E),
          ],
          letters: {
            A: [1],
            B: [3],
            C: [-1.5],
            D: [2],
            E: [2.7, 4],
            F: [-3]
          }
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
          shapes: [
            rg.circle(F, 2*r),
            rg.polygon([A, B, C]),
            rg.line(F, A),
            rg.line(F, B),
            rg.line(F, C),
            rg.line(F, D),
            rg.line(F, E),
          ],
          letters: {
            A: [1],
            B: [2],
            C: [-1.5],
            D: [1.3],
            E: [2.7, 4],
            F: [-3]
          }
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
    id: '4.6',
    points: { A, B, C, D, E },
    shapes: [
      rg.circle(E, 2*r),
      rg.polygon([A, B, C, D]),
      rg.line(A, C),
      rg.line(B, D),
    ],
    letters: {
      A: [1],
      B: [3],
      C: [-3],
      D: [-1],
      E: [0],
    }
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
    id: '4.7',
    points: { A, B, C, D, E, F, G, H, K },
    shapes: [
      rg.circle(E, 2*r),
      rg.polygon([F, G, H, K]),
      rg.line(A, C),
      rg.line(B, D),
    ],
    letters: {
      A: [1],
      B: [3],
      C: [-3],
      D: [-1],
      E: [0],
      F: [1],
      G: [1],
      H: [-3],
      K: [-3]
    },
    polygonl: {
      GK: 'GHKF',
      GC: 'GHCA',
      AK: 'ACKF',
      FB: 'FDBG',
      BK: 'BHKD',
    }
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
    id: '4.8',
    points: { A, B, C, D, E, F, G, H, K },
    shapes: [
      rg.circle(G, 2*r),
      rg.polygon([A, B, C, D]),
      rg.line(F, K),
      rg.line(E, H),
    ],
    letters: {
      A: [1],
      B: [-3],
      C: [-3],
      D: [1],
      E: [1],
      F: [3],
      G: [2],
      H: [-3],
      K: [-1],
    },
    polygonl: {

      AK: 'DAFK',
      KB: 'CKFB',
      AH: 'EABH',
      HD: 'EHCD',
      AG: 'EAFG',
      GC: 'KGHC',
      BG: 'FBHG',
      GD: 'EGKD',
    }
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
    id: '4.9',
    points: { A, B, C, D, E },
    shapes: [
      rg.circle(E, 2*r),
      rg.polygon([A, B, C, D]),
      rg.line(A, C),
      rg.line(B, D),
    ],
    letters: {
      A: [1],
      B: [3],
      C: [-3],
      D: [-1],
      E: [0, 1.3],
    }
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
    id: '4.10',
    points: { A, B, C, D, E, O },
    shapes: [
      rg.circle(A, 2*r),
      rg.circle(O, 2*o),
      rg.polygon([A, B, D]),
      rg.line(C, D)
    ],
    letters: {
      A: [3],
      B: [0.5],
      C: [1.7],
      D: [0],
      E: [-2],
    }
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
    id: '4.11',
    points: { A, B, C, D, E, F, G, H, O },
    shapes: [
      rg.circle(O, 2*r),
      rg.polygon([A, B, C, D, E]),
      rg.polygon([F, G, H]),
      rg.line(B, D),
      rg.line(C, E),
      rg.line(A, D),
      rg.line(A, C)
    ],
    letters: {
      A: [1],
      B: [3],
      C: [4],
      D: [-2],
      E: [-1],
      F: [1],
      G: [-3],
      H: [-3],
    }
  };
},

function()
{
  const r = 150;
  const F = [220, 250];
  const w = [0, -1];
  let f = (r) => (a) => vec2.add(F, vec2.rot([0, -r], -Math.PI * a/5));
  const [A, B, C, D, E] = [1, 3, 5, 7, 9].map(f(r));
  const [G, H, K, L, M] = [0, 2, 4, 6, 8].map(f(r/Math.cos(Math.PI/5)));

  return {
    id: '4.12',
    points: { A, B, C, D, E, F, G, H, K, L, M },
    shapes: [
      rg.circle(F, 2*r),
      rg.polygon([G, H, K, L, M]),
      rg.line(F, B),
      rg.line(F, C),
      rg.line(F, D),
      rg.line(F, K),
      rg.line(F, L),
    ],
    letters: {
      A: [2],
      B: [3.5],
      C: [-3],
      D: [-1.5],
      E: [0],
      F: [1],
      G: [1],
      H: [3],
      K: [-3],
      L: [-3],
      M: [-1],
    }
  };
},

function()
{
  const r = 180;
  const F = [220, 250];
  const w = [0, -1];
  let f = (r) => (a) => vec2.add(F, vec2.rot([0, -r], -Math.PI * a/5));
  const [A, B, C, D, E] = [0, 2, 4, 6, 8].map(f(r));
  const [G, H, K, L, M] = [1, 3, 5, 7, 9].map(f(r*Math.cos(Math.PI/5)));

  return {
    id: '4.13',
    points: { A, B, C, D, E, F, G, H, K, L, M },
    shapes: [
      rg.circle(F, 2*r*Math.cos(Math.PI/5)),
      rg.polygon([A, B, C, D, E]),
    ].concat([A, B, C, D, E, F, G, H, K, L, M].map((pt) => rg.line(F, pt))),
    letters: {
      A: [1],
      B: [3],
      C: [-3],
      D: [-3],
      E: [-1],
      F: [0.4, 5],
      G: [2],
      H: [4],
      K: [-3],
      L: [-2],
      M: [0],
    }
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
    id: '4.14',
    points: { A, B, C, D, E, F },
    shapes: [
      rg.circle(F, 2*r),
      rg.polygon([A, B, C, D, E]),
    ].concat([A, B, C, D, E].map(pt => rg.line(F, pt))),
    letters: {
      A: [1],
      B: [3],
      C: [4],
      D: [-2],
      E: [-1],
      F: [0.2, 1.2]
    }
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
  const pts = [A, B, C, D, E, F];

  return {
    id: '4.15',
    points: { A, B, C, D, E, F, G, H },
    shapes: [
      rg.circle(G, 2*r),
      rg.circle(D, 2*r),
      rg.polygon(pts),
    ].concat(pts.map(pt => rg.line(G, pt))),
    letters: {
      A: [3],
      B: [2],
      C: [1],
      D: [-1],
      E: [-3.2, 1.2],
      F: [4, 1.3],
      G: [2.5, 4],
      H: [-1],
    }
  };
},

function()
{
  const r = 180;
  const O = [256, 256];
  let f = (a) => vec2.add(O, vec2.rot([0, -r], -Math.PI*2*a/15));
  const pts = [...Array(15).keys()].map(f);
  const A = pts[0];
  const B = pts[3];
  const E = pts[4];
  const C = pts[5];
  const D = pts[10];

  return {
    id: '4.16',
    points: { A, B, C, D, E, O },
    shapes: [
      rg.circle(O, 2*r),
      rg.polygon(pts),
      rg.polygon([0, 1, 2, 3, 4].map(i => pts[i * 3])),
      rg.polygon([A, C, D]),
    ],
    letters: {
      A: [1],
      B: [2.5],
      C: [3.5],
      D: [-2],
      E: [3],
    }
  };
},

]
}

export default book4;
