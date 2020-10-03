import vec2 from '../vec2.js';

import propdef1 from './10/def1';
import prop1 from './10/1';
import prop2 from './10/2';
import prop3 from './10/3';
import prop4 from './10/4';
import prop5 from './10/5';
import prop6 from './10/6';
import prop7 from './10/7';
import prop8 from './10/8';
import prop9 from './10/9';
import prop10 from './10/10';
import prop11 from './10/11';
import prop12 from './10/12';
import prop13 from './10/13';
import propl1 from './10/l1-14';
import prop14 from './10/14';
import prop15 from './10/15';
import prop16 from './10/16';
import propl2 from './10/l2-17';
import prop17 from './10/17';
import prop18 from './10/18';
import prop19 from './10/19';
import prop20 from './10/20';
import prop21 from './10/21';
import propl3 from './10/l3-22';
import prop22 from './10/22';
import prop23 from './10/23';
import prop24 from './10/24';
import prop25 from './10/25';
import prop26 from './10/26';
import prop27 from './10/27';
import prop28 from './10/28';
import propl4 from './10/l4-I29';
import propl5 from './10/l5-II29';
import prop29 from './10/29';
import prop30 from './10/30';
import prop31 from './10/31';
import prop32 from './10/32';
import propl6 from './10/l6-33';
import prop33 from './10/33';
import prop34 from './10/34';
import prop35 from './10/35';
import prop36 from './10/36';
import prop37 from './10/37';
import prop38 from './10/38';
import prop39 from './10/39';
import prop40 from './10/40';
import prop41 from './10/41';
import propl7 from './10/l7-42';
import prop42 from './10/42';
import prop43 from './10/43';
import prop44 from './10/44';
import prop45 from './10/45';
import prop46 from './10/46';
import prop47 from './10/47';

function book(rg)
{
  return [
function() {
  return {
    title: 'Definitions I',
    id: '10.d1',
    prose: propdef1,
  };
},

function() {
  return {
    title: 'Proposition 1',
    id: '10.1',
    prose: prop1,
    mags: [
      { l: 'A', m: 30, p: [50, 50] },
      { l: 'K', m: 60 },
      { l: 'H', m: 150 },
      { l: 'B' },
      { l: 'C', m: 90, v: 50 },
      { l: 'D', m: 90, v: 50 },
      { l: 'F', m: 90 },
      { l: 'G', m: 90 },
      { l: 'E' },
    ]
  };
},

function() {
  return {
    title: 'Proposition 2',
    id: '10.2',
    prose: prop2,
    mags: [
      { l: 'A', m: 30, p: [50, 50] },
      { l: 'G', m: 60, n: 2 },
      { l: 'B' },
      { l: 'E', m: 50, v: 50 },
      { l: 'C', m: 65, v: 50 },
      { l: 'F', m: 150, n: 2 },
      { l: 'D' },
    ]
  };
},

function() {
  return {
    title: 'Proposition 3',
    id: '10.3',
    prose: prop3,
    mags: [
      { l: 'A', m: 25, p: [50, 50] },
      { l: 'F', m: 50, n: 3 },
      { l: 'B' },
      { l: 'C', m: 25, n: 2, v: 50 },
      { l: 'E', m: 175, n: 2 },
      { l: 'D' },
      { l: 'G', m: 75, v: 50 },
    ]
  };
},

function() {
  return {
    title: 'Proposition 4',
    id: '10.4',
    prose: prop4,
    mags: [
      { l: 'A', m: 280, p: [50, 50] },
      { l: 'B', m: 250, v: 50 },
      { l: 'C', m: 240, v: 50 },
      { l: 'D', m: 60, v: 50 },
      { l: 'E', m: 30, p: [150, 200] },
      { l: 'F', m: 45, p: [220, 200] },
    ]
  };
},

function() {
  return {
    title: 'Proposition 5',
    id: '10.5',
    prose: prop5,
    mags: [
      { l: 'A', m: 50, n: 3, p: [50, 50] },
      { l: 'B', m: 50, n: 2, p: [240, 50] },
      { l: 'C', m: 50, p: [380, 50] },
      { l: 'D', m: 120, p: [50, 100] },
      { l: 'E', m: 80, p: [240, 100] },
    ]
  };
},

function() {
  return {
    title: 'Proposition 6',
    id: '10.6',
    prose: prop6,
    mags: [
      { l: 'A', m: 40, n: 4, p: [50, 50] },
      { l: 'D', m: 80, v: 50 },
      { l: 'C', m: 40, v: 50 },
      { l: 'B', m: 120, p: [250, 50] },
      { l: 'E', m: 60, v: 50 },
      { l: 'F', m: 40, n: 3, v: 50 },
    ]
  };
},

function() {
  return {
    title: 'Proposition 7',
    id: '10.7',
    prose: prop7,
    mags: [
      { l: 'A', m: 150, p: [50, 50] },
      { l: 'B', m: 100, v: 50 },
    ]
  };
},

function() {
  return {
    title: 'Proposition 8',
    id: '10.8',
    prose: prop8,
    mags: [
      { l: 'A', m: 150, p: [50, 50] },
      { l: 'B', m: 100, v: 50 },
    ]
  };
},

function() {
  return {
    title: 'Proposition 9',
    id: '10.9',
    prose: prop9,
    mags: [
      { l: 'A', m: 150, p: [50, 50] },
      { l: 'C', m: 75, v: 50 },
      { l: 'B', m: 120, p: [250, 50] },
      { l: 'D', m: 60, v: 50 },
    ]
  };
},

function() {
  return {
    title: 'Proposition 10',
    id: '10.10',
    prose: prop10,
    mags: [
      { l: 'A', m: 120, p: [50, 50] },
      { l: 'E', m: 140, v: 50 },
      { l: 'D', m: 160, v: 50 },
      { l: 'B', m: 80, v: 50 },
      { l: 'C', m: 100, v: 50 },
    ]
  };
},

function() {
  return {
    title: 'Proposition 11',
    id: '10.11',
    prose: prop11,
    mags: [
      { l: 'A', m: 150, p: [50, 50] },
      { l: 'C', m: 100, v: 50 },
      { l: 'B', m: 120, p: [250, 50] },
      { l: 'D', m: 90, v: 50 },
    ]
  };
},

function() {
  return {
    title: 'Proposition 12',
    id: '10.12',
    prose: prop12,
    mags: [
      { l: 'A', m: 100, p: [50, 50] },
      { l: 'D', m: 50, v: 40 },
      { l: 'E', m: 60, v: 40 },
      { l: 'F', m: 70, v: 40 },
      { l: 'G', m: 80, v: 40 },
      { l: 'C', m: 100, p: [200, 50] },
      { l: 'H', m: 40, v: 40 },
      { l: 'K', m: 50, v: 40 },
      { l: 'L', m: 60, v: 40 },
      { l: 'B', m: 150, p: [350, 50] },
    ]
  };
},

function() {
  return {
    title: 'Proposition 13',
    id: '10.13',
    prose: prop13,
    mags: [
      { l: 'A', m: 140, p: [50, 50] },
      { l: 'C', m: 100, v: 50 },
      { l: 'B', m: 180, v: 50 },
    ]
  };
},

function() {

  const r = 90;
  const oa = [0, -r];
  const O = [50, 180];
  const A = vec2.add(O, oa);
  const B = vec2.sub(O, oa);
  const D = vec2.add(O, vec2.rot(oa, Math.PI/3));

  return {
    title: 'Lemma',
    id: '10.14-lem',
    prose: propl1,
    mags: [
      { l: 'C', m: 90, p: [50, 50] }
    ],
    points: { A, B, D, O },
    shapes: [
      rg.polygon([A, B, D]),
      rg.arc(O, A, B)
    ],
    letters: {
      A: [3],
      B: [3],
      D: [0]
    }
  };
},

function() {
  return {
    title: 'Proposition 14',
    id: '10.14',
    prose: prop14,
    mags: [
      { l: 'A', m: 250, p: [50, 50] },
      { l: 'B', m: 210, v: 50 },
      { l: 'E', m: 70, v: 50 },
      { l: 'C', m: 230, v: 50 },
      { l: 'D', m: 180, v: 50 },
      { l: 'F', m: 60, v: 50 },
    ],
  };
},

function() {
  return {
    title: 'Proposition 15',
    id: '10.15',
    prose: prop15,
    mags: [
      { l: 'A', m: 200, p: [50, 50] },
      { l: 'B', m: 110 },
      { l: 'C' },
      { l: 'D', m: 70, v: 50 },
    ],
  };
},

function() {
  return {
    title: 'Proposition 16',
    id: '10.16',
    prose: prop16,
    mags: [
      { l: 'A', m: 200, p: [50, 50] },
      { l: 'B', m: 110 },
      { l: 'C' },
      { l: 'D', m: 70, v: 50 },
    ],
  };
},

function() {
  const E = [50, 50];
  const u = [150, 0];
  const v = [0, 150];
  const w = [220, 0];
  const A = vec2.add(E, v);
  const D = vec2.add(E, w);
  const F = vec2.add(D, u);
  const C = vec2.add(A, w);
  const B = vec2.add(C, u);

  return {
    title: 'Lemma',
    id: '10.17-lem',
    prose: propl2,
    points: { A, B, C, D, E ,F },
    shapes: [
      rg.polygon([A, B, F, E]),
      rg.line(D, C)
    ],
    letters: {
      A: [-3],
      B: [-3],
      C: [-3],
      D: [1],
    },
    polygonl: {
      AD: 'ACDE',
      DB: 'DCBF'
    }
  };
},

function() {
  const A = [50, 50];
  const B = [50, 100];
  const D = [340, 100];
  const G = [340, 150];
  const H = [50, 150];

  return {
    title: 'Proposition 17',
    id: '10.17',
    prose: prop17,
    shapes: [
      rg.line(B, H),
      rg.line(G, D, {strokeLineDash: [10, 10]}),
      rg.line(G, H, {strokeLineDash: [10, 10]}),
    ],
    mags: [
      { l: 'A', m: 100, n: 2, p: A },
      { l: 'B', m: 50, v: 50 },
      { l: 'F', m: 120 },
      { l: 'E', m: 120 },
      { l: 'D', m: 50 },
      { l: 'C'  },
    ]
  };
},

function() {
  return {
    title: 'Proposition 18',
    id: '10.18',
    prose: prop18,
    mags: [
      { l: 'A', m: 100, p: [50, 50] },
      { l: 'B', m: 70, v: 50 },
      { l: 'F', m: 120 },
      { l: 'E', m: 120 },
      { l: 'D', m: 70 },
      { l: 'C'  },
    ]
  };
},

function() {
  const E = [50, 50];
  const u = [250, 0];
  const v = [0, 250];
  const w = [0, 90];
  const A = vec2.add(E, v);
  const F = vec2.add(E, w);
  const D = vec2.add(E, u);
  const C = vec2.add(D, w);
  const B = vec2.add(D, v);

  return {
    title: 'Proposition 19',
    id: '10.19',
    prose: prop19,
    points: { A, B, C, D, E, F },
    shapes: [
      rg.polygon([A, B, D, E]),
      rg.line(F, C)
    ],
    letters: {
      A: [3],
      B: [-1],
      C: [-1],
      D: [-1],
    },
    polygonl: {
      AC: 'ABCF',
      AD: 'ABDE',
      DA: 'ABDE'
    }
  };
},

function() {
  const D = [50, 50];
  const u = [150, 0], v = [0, 150], w = [0, 340];
  const B = vec2.add(D, v);
  const E = vec2.add(D, u);
  const A = vec2.add(E, v);
  const C = vec2.add(D, w);
  const F = vec2.add(E, w);

  return {
    title: 'Proposition 20',
    id: '10.20',
    prose: prop20,
    points: { A, B, C, D, E, F},
    shapes: [
      rg.polygon([D, C, F, E]),
      rg.line(B, A)
    ],
    letters: {
      A: [-1],
      B: [3],
      C: [3],
      D: [3],
    },
    polygonl: {
      AC: 'AFCB',
      AD: 'ABDE',
      DA: 'ABDE',
    }
  };
},

function() {
  const D = [50, 50];
  const u = [150, 0], v = [0, 150], w = [0, 340];
  const B = vec2.add(D, v);
  const E = vec2.add(D, u);
  const A = vec2.add(E, v);
  const C = vec2.add(D, w);
  const F = vec2.add(E, w);

  return {
    title: 'Proposition 21',
    id: '10.21',
    prose: prop21,
    points: { A, B, C, D, E, F},
    shapes: [
      rg.polygon([D, C, F, E]),
      rg.line(B, A)
    ],
    letters: {
      A: [-1],
      B: [3],
      C: [3],
      D: [3],
    },
    polygonl: {
      AC: 'AFCB',
      AD: 'ABDE',
      DA: 'ABDE',
    }
  };
},

function() {
  const F = [50, 50];
  const u = [150, 0], v = [0, 150], w = [340, 0];
  const E = vec2.add(F, u);
  const A = vec2.add(F, v);
  const D = vec2.add(A, u);
  const G = vec2.add(F, w);
  const B = vec2.add(A, w);

  return {
    title: 'Lemma',
    id: '10.22-lem',
    prose: propl3,
    points: { A, B, D, E, F, G},
    shapes: [
      rg.polygon([F, A, B, G]),
      rg.line(E, D)
    ],
    letters: {
      D: [-3],
      E: [1],
      F: [1],
      G: [1],
    },
    polygonl: {
      GD: 'GBDE',
      DF: 'DEFA',
      FD: 'FADE',
      DG: 'DBGE'
    }
  };
},

function() {
  const A = [50, 50];
  const C = [50, 100];
  const D = [50, 150];
  const E = [50, 200];
  const F = [50, 270];
  const a = 150, c = 190, e = 130;
  const B = vec2.add(C, [c, 0]);
  const H = vec2.add(D, [c, 0]);
  const G = vec2.add(E, [e, 0]);
  const K = vec2.add(F, [e, 0]);

  return {
    title: 'Proposition 22',
    id: '10.22',
    prose: prop22,
    points: { B, C, D, E, F, G, H, K },
    shapes: [
      rg.polygon([B, C, D, H]),
      rg.polygon([G, E, F, K]),
    ],
    mags: [
      { l: 'A', m: a, p: A }
    ],
    letters: {
      B: [-1],
      C: [3],
      D: [3],
      E: [3],
      F: [3],
      G: [-1],
    },
    polygonl: {
      BD: 'BCDH',
      GF: 'GEFK'
    }
  };
},

function() {
  const A = [50, 50], B = [260, 50];
  const G = [50, 120];
  const u = [130, 0], v = [200, 0], w = [0, 210];
  const C = vec2.add(G, u);
  const E = vec2.add(G, w);
  const D = vec2.add(E, u);
  const H = vec2.add(G, v);
  const F = vec2.add(E, v);

  return {
    title: 'Proposition 23',
    id: '10.23',
    prose: prop23,
    points: { C, D, E, F, G, H },
    shapes: [
      rg.polygon([E, F, H, G]),
      rg.line(C, D),
    ],
    mags: [
      { l: 'A', m: 150, p: A },
      { l: 'B', m: 100, p: B },
    ],
    letters: {
      C: [1],
      D: [-3],
      E: [-3],
      F: [-3],
    },
    polygonl: {
      CE: 'CDEG',
      EC: 'CDEG',
      CF: 'CDFH'
    }
  };
},

function() {
  const F = [50, 50];
  const u = [150, 0], v = [0, 150], w = [0, 200];
  const A = vec2.add(F, w);
  const C = vec2.add(F, u);
  const E = vec2.add(A, v);
  const B = vec2.add(A, u);
  const D = vec2.add(B, v);

  return {
    title: 'Proposition 24',
    id: '10.24',
    prose: prop24,
    points: { A, B, C, D, E, F },
    shapes: [
      rg.polygon([C, D, E, F]),
      rg.line(A, B)
    ],
    letters: {
      A: [3],
      B: [-1],
      C: [-1],
      D: [-1],
    },
    polygonl: {
      AC: 'ABCF',
      AD: 'AEDB',
      DA: 'AEDB',
    }
  };
},

function() {
  const Q = [50, 50];
  let u = [100, 0], ui = [0, 100], v = [70, 0], vi = [0, 70];
  const A = vec2.add(Q, u);
  const D = vec2.add(Q, ui);
  const B = vec2.add(A, ui);
  const P = vec2.add(A, v);
  const O = vec2.add(B, vi);
  const C = vec2.add(B, v);
  const E = vec2.add(O, v);

  const F = [300, 50];
  u = [90, 0], v = [0, 100*(100/90)];
  let w = [0, 70*(100/90)], x = [0, 70*(70/90)];
  const G = vec2.add(F, u);
  const H = vec2.add(F, v);
  const M = vec2.add(G, v);
  const K = vec2.add(H, w);
  const N = vec2.add(M, w);
  const L = vec2.add(K, x);
  const R = vec2.add(N, x);

  return {
    title: 'Proposition 25',
    id: '10.25',
    prose: prop25,
    points: {A, B, C, D, E, F, G, H, K, L, M, N, O, P, Q, R},
    shapes: [
      rg.line(Q, P),
      rg.line(Q, D),
      rg.line(P, E),
      rg.line(O, E),
      rg.line(O, A),
      rg.line(D, C),
      rg.polygon([F, L, R, G]),
      rg.line(H, M),
      rg.line(K, N),
    ],
    letters: {
      A: [1],
      B: [3.9, 10],
      C: [-1],
      D: [-3],
      E: [-3],
      F: [3],
      G: [-1],
      H: [3],
      K: [3],
      L: [3],
      M: [-1],
      N: [-1],
      O: [-3],
    },
    polygonl: {
      AC: 'ABCP',
      AD: 'ABDQ',
      DA: 'ABDQ',
      BE: 'BCEO',
      CO: 'BCEO',
      GH: 'GFHM',
      HN: 'KNMH',
      MK: 'KNMH',
      NL: 'LKNR'
    }
  };
},

function() {
  return {
    title: 'Proposition 26',
    id: '10.26',
    img: '/img/10/26',
    prose: prop26,
  };
},

function() {
  return {
    title: 'Proposition 27',
    id: '10.27',
    img: '/img/10/27',
    prose: prop27,
  };
},

function() {
  return {
    title: 'Proposition 28',
    id: '10.28',
    img: '/img/10/28',
    prose: prop28,
  };
},

function() {
  return {
    title: 'Lemma I',
    id: '10.29-lemI',
    img: '/img/10/l4',
    prose: propl4,
  };
},

function() {
  return {
    title: 'Lemma II',
    id: '10.29-lemII',
    img: '/img/10/l5',
    prose: propl5,
  };
},

function() {
  return {
    title: 'Proposition 29',
    id: '10.29',
    img: '/img/10/29',
    prose: prop29,
  };
},

function() {
  return {
    title: 'Proposition 30',
    id: '10.30',
    img: '/img/10/30',
    prose: prop30,
  };
},

function() {
  return {
    title: 'Proposition 31',
    id: '10.31',
    img: '/img/10/31',
    prose: prop31,
  };
},

function() {
  return {
    title: 'Proposition 32',
    id: '10.32',
    img: '/img/10/32',
    prose: prop32,
  };
},

function() {
  return {
    title: 'Lemma',
    id: '10.33-lem',
    img: '/img/10/l6',
    prose: propl6,
  };
},

function() {
  return {
    title: 'Proposition 33',
    id: '10.33',
    img: '/img/10/33',
    prose: prop33,
  };
},

function() {
  return {
    title: 'Proposition 34',
    id: '10.34',
    img: '/img/10/34',
    prose: prop34,
  };
},

function() {
  return {
    title: 'Proposition 35',
    id: '10.35',
    img: '/img/10/35',
    prose: prop35,
  };
},

function() {
  return {
    title: 'Proposition 36',
    id: '10.36',
    img: '/img/10/36',
    prose: prop36,
  };
},

function() {
  return {
    title: 'Proposition 37',
    id: '10.37',
    img: '/img/10/37',
    prose: prop37,
  };
},

function() {
  return {
    title: 'Proposition 38',
    id: '10.38',
    img: '/img/10/38',
    prose: prop38,
  };
},

function() {
  return {
    title: 'Proposition 39',
    id: '10.39',
    img: '/img/10/39',
    prose: prop39,
  };
},

function() {
  return {
    title: 'Proposition 40',
    id: '10.40',
    img: '/img/10/40',
    prose: prop40,
  };
},

function() {
  return {
    title: 'Proposition 41',
    id: '10.41',
    img: '/img/10/41',
    prose: prop41,
  };
},

function() {
  return {
    title: 'Lemma',
    id: '10.42-lem',
    img: '/img/10/l7',
    prose: propl7,
  };
},

function() {
  return {
    title: 'Proposition 42',
    id: '10.42',
    img: '/img/10/42',
    prose: prop42,
  };
},

function() {
  return {
    title: 'Proposition 43',
    id: '10.43',
    img: '/img/10/43',
    prose: prop43,
  };
},

function() {
  return {
    title: 'Proposition 44',
    id: '10.44',
    img: '/img/10/44',
    prose: prop44,
  };
},

function() {
  return {
    title: 'Proposition 45',
    id: '10.45',
    img: '/img/10/45',
    prose: prop45,
  };
},

function() {
  return {
    title: 'Proposition 46',
    id: '10.46',
    img: '/img/10/46',
    prose: prop46,
  };
},

function() {
  return {
    title: 'Proposition 47',
    id: '10.47',
    img: '/img/10/47',
    prose: prop47,
  };
},

]
}

export default book;
