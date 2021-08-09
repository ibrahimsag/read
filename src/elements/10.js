import v2 from '../vec2.js';

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
import propl1 from './10/l1-13';
import prop14 from './10/14';
import prop15 from './10/15';
import prop16 from './10/16';
import propl2 from './10/l2-16';
import prop17 from './10/17';
import prop18 from './10/18';
import prop19 from './10/19';
import prop20 from './10/20';
import prop21 from './10/21';
import propl3 from './10/l3-21';
import prop22 from './10/22';
import prop23 from './10/23';
import prop24 from './10/24';
import prop25 from './10/25';
import prop26 from './10/26';
import prop27 from './10/27';
import prop28 from './10/28';
import propl4 from './10/l4-I28';
import propl5 from './10/l5-II28';
import prop29 from './10/29';
import prop30 from './10/30';
import prop31 from './10/31';
import prop32 from './10/32';
import propl6 from './10/l6-32';
import prop33 from './10/33';
import prop34 from './10/34';
import prop35 from './10/35';
import prop36 from './10/36';
import prop37 from './10/37';
import prop38 from './10/38';
import prop39 from './10/39';
import prop40 from './10/40';
import prop41 from './10/41';
import propl7 from './10/l7-41';
import prop42 from './10/42';
import prop43 from './10/43';
import prop44 from './10/44';
import prop45 from './10/45';
import prop46 from './10/46';
import prop47 from './10/47';
import propdef2 from './10/def2';
import prop48 from './10/48';
import prop49 from './10/49';
import prop50 from './10/50';
import prop51 from './10/51';
import prop52 from './10/52';
import prop53 from './10/53';
import propl8 from './10/l8-53';
import prop54 from './10/54';
import prop55 from './10/55';
import prop56 from './10/56';
import prop57 from './10/57';
import prop58 from './10/58';
import prop59 from './10/59';
import propl9 from './10/l9-59';
import prop60 from './10/60';
import prop61 from './10/61';
import prop62 from './10/62';
import prop63 from './10/63';
import prop64 from './10/64';
import prop65 from './10/65';
import prop66 from './10/66';
import prop67 from './10/67';
import prop68 from './10/68';
import prop69 from './10/69';
import prop70 from './10/70';
import prop71 from './10/71';
import prop72 from './10/72';
import prop73 from './10/73';
import prop74 from './10/74';
import prop75 from './10/75';
import prop76 from './10/76';
import prop77 from './10/77';
import prop78 from './10/78';
import prop79 from './10/79';
import prop80 from './10/80';
import prop81 from './10/81';
import prop82 from './10/82';
import prop83 from './10/83';
import prop84 from './10/84';
import propdef3 from './10/def3';
import prop85 from './10/85';
import prop86 from './10/86';
import prop87 from './10/87';
import prop88 from './10/88';
import prop89 from './10/89';
import prop90 from './10/90';
import prop91 from './10/91';
import prop92 from './10/92';
import prop93 from './10/93';
import prop94 from './10/94';
import prop95 from './10/95';
import prop96 from './10/96';
import prop97 from './10/97';
import prop98 from './10/98';
import prop99 from './10/99';
import prop100 from './10/100';
import prop101 from './10/101';
import prop102 from './10/102';
import prop103 from './10/103';
import prop104 from './10/104';
import prop105 from './10/105';
import prop106 from './10/106';
import prop107 from './10/107';
import prop108 from './10/108';
import prop109 from './10/109';
import prop110 from './10/110';
import prop111 from './10/111';
import prop112 from './10/112';
import prop113 from './10/113';
import prop114 from './10/114';
import prop115 from './10/115';

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
  const A = v2.add(O, oa);
  const B = v2.sub(O, oa);
  const D = v2.add(O, v2.rot(oa, Math.PI/3));

  return {
    title: 'Lemma',
    id: '10.13-lem',
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
  const A = v2.add(E, v);
  const D = v2.add(E, w);
  const F = v2.add(D, u);
  const C = v2.add(A, w);
  const B = v2.add(C, u);

  return {
    title: 'Lemma',
    id: '10.16-lem',
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
  const A = v2.add(E, v);
  const F = v2.add(E, w);
  const D = v2.add(E, u);
  const C = v2.add(D, w);
  const B = v2.add(D, v);

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
  const B = v2.add(D, v);
  const E = v2.add(D, u);
  const A = v2.add(E, v);
  const C = v2.add(D, w);
  const F = v2.add(E, w);

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
  const B = v2.add(D, v);
  const E = v2.add(D, u);
  const A = v2.add(E, v);
  const C = v2.add(D, w);
  const F = v2.add(E, w);

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
  const E = v2.add(F, u);
  const A = v2.add(F, v);
  const D = v2.add(A, u);
  const G = v2.add(F, w);
  const B = v2.add(A, w);

  return {
    title: 'Lemma',
    id: '10.21-lem',
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
  const B = v2.add(C, [c, 0]);
  const H = v2.add(D, [c, 0]);
  const G = v2.add(E, [e, 0]);
  const K = v2.add(F, [e, 0]);

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
  const C = v2.add(G, u);
  const E = v2.add(G, w);
  const D = v2.add(E, u);
  const H = v2.add(G, v);
  const F = v2.add(E, v);

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
  const A = v2.add(F, w);
  const C = v2.add(F, u);
  const E = v2.add(A, v);
  const B = v2.add(A, u);
  const D = v2.add(B, v);

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
  const A = v2.add(Q, u);
  const D = v2.add(Q, ui);
  const B = v2.add(A, ui);
  const P = v2.add(A, v);
  const O = v2.add(B, vi);
  const C = v2.add(B, v);
  const E = v2.add(O, v);

  const F = [300, 50];
  u = [90, 0], v = [0, 100*(100/90)];
  let w = [0, 70*(100/90)], x = [0, 70*(70/90)];
  const G = v2.add(F, u);
  const H = v2.add(F, v);
  const M = v2.add(G, v);
  const K = v2.add(H, w);
  const N = v2.add(M, w);
  const L = v2.add(K, x);
  const R = v2.add(N, x);

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
  let z = {};
  let w1 = 200, w2 = 120;
  let h1 = 150, h2 = 90;
  z.A = [50, 50];
  z.A2 = v2.add(z.A, [w1, 0]);
  z.B = v2.add(z.A, [w1, h1]);
  z.B2 = v2.add(z.A, [0, h1]);
  z.C = v2.add(z.A, [w1, h2]);
  z.D = v2.add(z.A, [0, h2]);
  z.F = v2.add(z.A, [w1+90, 0]);
  z.E = v2.add(z.F, [w2, 0]);
  z.G = v2.add(z.E, [0, w1*h2/w2]);
  z.H = v2.add(z.E, [0, w1*h1/w2]);
  z.K = v2.add(z.F, [0, w1*h2/w2]);
  z.H2 = v2.add(z.F, [0, w1*h1/w2]);
  let ps = {
    AC: [z.A, z.A2, z.C, z.D],
    AB: [z.A, z.A2, z.B, z.B2],
    BD: [z.D, z.C, z.B, z.B2],
    FG: [z.F, z.E, z.G, z.K],
    FH: [z.F, z.E, z.H, z.H2],
    KH: [z.K, z.G, z.H, z.H2],
  };
  ps['DB'] = ps['BD'];

  return {
    title: 'Proposition 26',
    id: '10.26',
    prose: prop26,
    points: z,
    letters: {
      A: [3],
      B: [-1],
      C: [-1],
      D: [3],
      F: [3],
      E: [-1],
      G: [-1],
      H: [-1],
      K: [3],
    },
    shapes: [
      rg.polygon(ps['AB']),
      rg.line(z.D, z.C),
      rg.polygon(ps['FH']),
      rg.line(z.K, z.G),
    ],
    polygonl: ps,
  };
},

function() {
  return {
    title: 'Proposition 27',
    id: '10.27',
    prose: prop27,
    mags: [
      { l: 'A', m: 150, p: [0, 0] },
      { l: 'B', m: 100, v: 50 },
      { l: 'C', m: 120, v: 50 },
      { l: 'D', m: 90, v: 50}
    ],
  };
},

function() {
  return {
    title: 'Proposition 28',
    id: '10.28',
    prose: prop28,
    mags: [
      { l: 'A', m: 100, p: [0, 0] },
      { l: 'B', m: 120, v: 50 },
      { l: 'C', m: 150, v: 50 },
      { l: 'D', m: 120, p: [200, 0] },
      { l: 'E', m: 140, v: 50, }
    ],
  };
},

function() {
  return {
    title: 'Lemma I',
    id: '10.28-lemI',
    img: '/img/10/l4',
    prose: propl4,
    mags: [
      { l: 'A', m: 100, p: [0, 0] },
      { l: 'D', m: 100 },
      { l: 'C', m: 50 },
      { l: 'B' },
    ],
  };
},

function() {
  return {
    title: 'Lemma II',
    id: '10.28-lemII',
    prose: propl5,
    mags: [
      { l: 'A', m: 30, p: [0, 0] },
      { l: 'G', m: 30 },
      { l: 'H', m: 60 },
      { l: 'D', m: 20 },
      { l: 'E', m: 20 },
      { l: 'F', m: 80 },
      { l: 'C', m: 70 },
      { l: 'B' },
    ],
  };
},

function() {
  let z = {};
  let r = 150;
  z.A = [0, r];
  z.B = v2.add(z.A, [r*2, 0]);
  z.O = v2.add(z.A, [r, 0]);
  z.F = v2.add(z.O, v2.rot([r, 0],  -Math.PI*2/5));

  return {
    title: 'Proposition 29',
    id: '10.29',
    prose: prop29,
    points: z,
    letters: {
      A: [-3],
      B: [-3],
      F: [-0]
    },
    shapes: [
      rg.arc(z.O, z.A, z.B),
      rg.polygon([z.A, z.B, z.F])
    ],
    mags: [
      { l: 'C', m: 120, p: [0, r+70] },
      { l: 'E', m: 200 },
      { l: 'D' }
    ],

  };
},

function() {
  let z = {};
  let r = 150;
  z.A = [0, r];
  z.B = v2.add(z.A, [r*2, 0]);
  z.O = v2.add(z.A, [r, 0]);
  z.F = v2.add(z.O, v2.rot([r, 0],  -Math.PI*3/5));

  return {
    title: 'Proposition 30',
    id: '10.30',
    prose: prop30,
    points: z,
    letters: {
      A: [-3],
      B: [-3],
      F: [0.9]
    },
    shapes: [
      rg.arc(z.O, z.A, z.B),
      rg.polygon([z.A, z.B, z.F])
    ],
    mags: [
      { l: 'C', m: 120, p: [0, r+70] },
      { l: 'E', m: 200 },
      { l: 'D' }
    ],
  };
},

function() {
  return {
    title: 'Proposition 31',
    id: '10.31',
    prose: prop31,
    mags: [
      { l: 'A', m: 180, p: [0, 0] },
      { l: 'B', m: 120, v: 50 },
      { l: 'C', m: 150, v: 50 },
      { l: 'D', m: 100, v: 50 },
    ],
  };
},

function() {
  return {
    title: 'Proposition 32',
    id: '10.32',
    prose: prop32,
    mags: [
      { l: 'A', m: 200, p: [0, 0] },
      { l: 'B', m: 150, v: 50 },
      { l: 'C', m: 80, v: 50 },
      { l: 'D', m: 160, p: [250, 0] },
      { l: 'E', m: 60, v: 50 },
    ],
  };
},

function() {
  let z = {};
  z.A = [80, 0];
  z.B = [0, 150];
  z.C = [350, 150];
  z.D = [80, 150];
  let ba = v2.sub(z.A, z.B);
  z.B2 = [0, 0];
  z.C2 = v2.add(z.C, v2.sub(z.B2, z.B));
  z.C3 = v2.sub(z.C, ba);

  return {
    title: 'Lemma',
    id: '10.32-lem',
    prose: propl6,
    points: z,
    letters: {
      A: [1],
      B: [3],
      C: [-1],
      D: [5]
    },
    shapes: [
      rg.polygon([z.A, z.B, z.C]),
      rg.line(z.A, z.D),
      rg.polygon([z.B, z.B2, z.C2, z.C, z.C3], {strokeLineDash: [10, 10]}),
    ]
  };
},

function() {
  let z = {};
  let r = 120;
  z.A = [0, r];
  z.B = v2.add(z.A, [r*2, 0]);
  z.O = v2.add(z.A, [r, 0]);
  z.F = v2.add(z.O, v2.rot([r, 0],  -Math.PI*2/5));
  z.E = v2.add(z.A, [v2.dot(v2.sub(z.F, z.A), [1, 0]), 0]);
  z.D = v2.add(z.B, [80, 0]);
  z.C = v2.add(z.D, [80, 0]);

  return {
    title: 'Proposition 33',
    id: '10.33',
    prose: prop33,
    points: z,
    letters: {
      A: [-3],
      B: [-3],
      C: [-3],
      D: [-3],
      E: [-3],
      F: [0]
    },
    shapes: [
      rg.arc(z.O, z.A, z.B),
      rg.line(z.E, z.F),
      rg.line(z.A, z.F),
      rg.line(z.B, z.F),
      rg.line(z.A, z.C),
      rg.tick(z.D),
      rg.tick(z.C),

    ],
  };
},

function() {
  let z = {};
  let r = 120;
  z.A = [0, r];
  z.B = v2.add(z.A, [r*2, 0]);
  z.O = v2.add(z.A, [r, 0]);
  z.D = v2.add(z.O, v2.rot([r, 0],  -Math.PI*2/5));
  z.F = v2.add(z.A, [v2.dot(v2.sub(z.D, z.A), [1, 0]), 0]);
  z.E = v2.add(z.B, [80, 0]);
  z.C = v2.add(z.E, [80, 0]);

  return {
    title: 'Proposition 34',
    id: '10.34',
    prose: prop34,
    points: z,
    letters: {
      A: [-3],
      B: [-3],
      C: [-3],
      E: [-3],
      F: [-3],
      D: [0]
    },
    shapes: [
      rg.arc(z.O, z.A, z.B),
      rg.line(z.F, z.D),
      rg.line(z.A, z.D),
      rg.line(z.B, z.D),
      rg.line(z.A, z.C),
      rg.tick(z.E),
      rg.tick(z.C),

    ],
  };
},

function() {
  let z = {};
  let r = 120;
  z.A = [0, r];
  z.B = v2.add(z.A, [r*2, 0]);
  z.O = v2.add(z.A, [r, 0]);
  z.D = v2.add(z.O, v2.rot([r, 0],  -Math.PI*2/5));
  z.F = v2.add(z.A, [v2.dot(v2.sub(z.D, z.A), [1, 0]), 0]);
  z.E = v2.add(z.B, [80, 0]);
  z.C = v2.add(z.E, [80, 0]);

  return {
    title: 'Proposition 35',
    id: '10.35',
    prose: prop35,
    points: z,
    letters: {
      A: [-3],
      B: [-3],
      C: [-3],
      E: [-3],
      F: [-3],
      D: [0]
    },
    shapes: [
      rg.arc(z.O, z.A, z.B),
      rg.line(z.F, z.D),
      rg.line(z.A, z.D),
      rg.line(z.B, z.D),
      rg.line(z.A, z.C),
      rg.tick(z.E),
      rg.tick(z.C),

    ],
  };
},

function() {
  return {
    title: 'Proposition 36',
    id: '10.36',
    prose: prop36,
    mags: [
      { l: 'A', m: 150, p: [0, 0] },
      { l: 'B', m: 90 },
      { l: 'C' }
    ],
  };
},

function() {
  return {
    title: 'Proposition 37',
    id: '10.37',
    prose: prop37,
    mags: [
      { l: 'A', m: 150, p: [0, 0] },
      { l: 'B', m: 90 },
      { l: 'C' }
    ],
  };
},

function() {
  let z = {};
  let w = 210, a = 150;
  z.D = [0, 100];
  z.E = v2.add(z.D, [0, a]);
  z.H = v2.add(z.D, [w, 0]);
  z.H2 = v2.add(z.H, [0, a]);
  z.G = v2.add(z.H, [a, 0]);
  z.F = v2.add(z.G, [0, a]);

  return {
    title: 'Proposition 38',
    id: '10.38',
    prose: prop38,
    points: z,
    shapes: [
      rg.polygon([z.D, z.G, z.F, z.E]),
      rg.line(z.H, z.H2)
    ],
    letters: {
      D: [1],
      E: [5],
      F: [5],
      G: [1],
      H: [1]
    },
    polygonl: {
      'DF': 'DEFG',
      'EH': [z.D, z.E, z.H2, z.H],
      'HF': [z.G, z.F, z.H2, z.H],
      'FH': [z.G, z.F, z.H2, z.H],
    },
    mags: [
      { l: 'A', m: 150, p: [0, 0] },
      { l: 'B', m: 90 },
      { l: 'C' }
    ],
  };
},

function() {
  return {
    title: 'Proposition 39',
    id: '10.39',
    prose: prop39,
    mags: [
      { l: 'A', m: 150, p: [0, 0] },
      { l: 'B', m: 90 },
      { l: 'C' }
    ],
  };
},

function() {
  return {
    title: 'Proposition 40',
    id: '10.40',
    prose: prop40,
    mags: [
      { l: 'A', m: 150, p: [0, 0] },
      { l: 'B', m: 90 },
      { l: 'C' }
    ],
  };
},

function() {
  let z = {};
  let w = 170, a = 90, b = 140;
  z.D = [0, 100];
  z.E = v2.add(z.D, [0, b]);
  z.G = v2.add(z.D, [w, 0]);
  z.F = v2.add(z.G, [0, b]);
  z.K = v2.add(z.G, [a, 0]);
  z.H = v2.add(z.K, [0, b]);

  return {
    title: 'Proposition 41',
    id: '10.41',
    prose: prop41,
    points: z,
    shapes: [
      rg.polygon([z.D, z.E, z.H, z.K]),
      rg.line(z.G, z.F)
    ],
    letters: {
      D: [1],
      E: [5],
      F: [5],
      G: [1],
      H: [5],
      K: [1]
    },
    polygonl: {
      DF: 'DEFG',
      GH: 'GFHK',
      DH: 'DEHK',
      HD: 'DEHK',
    },
    mags: [
      { l: 'C', m: 150, p: [0, 0] },
      { l: 'B', m: 60 },
      { l: 'A' }
    ],
  };
},

function() {
  return {
    title: 'Lemma',
    id: '10.41-lem',
    prose: propl7,
    mags: [
      { l: 'A', m: 110, p: [0, 0] },
      { l: 'D', m: 60 },
      { l: 'E', m: 80 },
      { l: 'C', m: 100 },
      { l: 'B' }
    ]
  };
},

function() {
  return {
    title: 'Proposition 42',
    id: '10.42',
    prose: prop42,
    mags: [
      { l: 'A', m: 110, p: [0, 0] },
      { l: 'D', m: 80 },
      { l: 'C', m: 100 },
      { l: 'B' }
    ]
  };
},

function() {
  return {
    title: 'Proposition 43',
    id: '10.43',
    prose: prop43,
    mags: [
      { l: 'A', m: 110, p: [0, 0] },
      { l: 'D', m: 80 },
      { l: 'C', m: 100 },
      { l: 'B' }
    ]
  };
},

function() {
  return {
    title: 'Proposition 44',
    id: '10.44',
    img: '/img/10/44',
    prose: prop44,
    mags: [
      { l: 'A', m: 110, p: [0, 0] },
      { l: 'D', m: 80 },
      { l: 'C', m: 100 },
      { l: 'B' }
    ]
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

function() {
  return {
    title: 'Definitions II',
    id: '10.d2',
    prose: propdef2,
  };
},

function() {
  return {
    title: 'Proposition 48',
    id: '10.48',
    img: '/img/10/48',
    prose: prop48,
  };
},

function() {
  return {
    title: 'Proposition 49',
    id: '10.49',
    img: '/img/10/49',
    prose: prop49,
  };
},

function() {
  return {
    title: 'Proposition 50',
    id: '10.50',
    img: '/img/10/50',
    prose: prop50,
  };
},

function() {
  return {
    title: 'Proposition 51',
    id: '10.51',
    img: '/img/10/51',
    prose: prop51,
  };
},

function() {
  return {
    title: 'Proposition 52',
    id: '10.52',
    img: '/img/10/52',
    prose: prop52,
  };
},

function() {
  return {
    title: 'Proposition 53',
    id: '10.53',
    img: '/img/10/53',
    prose: prop53,
  };
},

function() {
  return {
    title: 'Lemma',
    id: '10.53-lem',
    img: '/img/10/l8',
    prose: propl8,
  };
},

function() {
  return {
    title: 'Proposition 54',
    id: '10.54',
    img: '/img/10/54',
    prose: prop54,
  };
},

function() {
  return {
    title: 'Proposition 55',
    id: '10.55',
    img: '/img/10/55',
    prose: prop55,
  };
},

function() {
  return {
    title: 'Proposition 56',
    id: '10.56',
    img: '/img/10/56',
    prose: prop56,
  };
},

function() {
  return {
    title: 'Proposition 57',
    id: '10.57',
    img: '/img/10/57',
    prose: prop57,
  };
},

function() {
  return {
    title: 'Proposition 58',
    id: '10.58',
    img: '/img/10/58',
    prose: prop58,
  };
},

function() {
  return {
    title: 'Proposition 59',
    id: '10.59',
    img: '/img/10/59',
    prose: prop59,
  };
},

function() {
  return {
    title: 'Lemma',
    id: '10.59-lem',
    img: '/img/10/l9',
    prose: propl9,
  };
},

function() {
  return {
    title: 'Proposition 60',
    id: '10.60',
    img: '/img/10/60',
    prose: prop60,
  };
},

function() {
  return {
    title: 'Proposition 61',
    id: '10.61',
    img: '/img/10/61',
    prose: prop61,
  };
},

function() {
  return {
    title: 'Proposition 62',
    id: '10.62',
    img: '/img/10/62',
    prose: prop62,
  };
},

function() {
  return {
    title: 'Proposition 63',
    id: '10.63',
    img: '/img/10/63',
    prose: prop63,
  };
},

function() {
  return {
    title: 'Proposition 64',
    id: '10.64',
    img: '/img/10/64',
    prose: prop64,
  };
},

function() {
  return {
    title: 'Proposition 65',
    id: '10.65',
    img: '/img/10/65',
    prose: prop65,
  };
},

function() {
  return {
    title: 'Proposition 66',
    id: '10.66',
    img: '/img/10/66',
    prose: prop66,
  };
},

function() {
  return {
    title: 'Proposition 67',
    id: '10.67',
    img: '/img/10/67',
    prose: prop67,
  };
},

function() {
  return {
    title: 'Proposition 68',
    id: '10.68',
    img: '/img/10/68',
    prose: prop68,
  };
},

function() {
  return {
    title: 'Proposition 69',
    id: '10.69',
    img: '/img/10/69',
    prose: prop69,
  };
},

function() {
  return {
    title: 'Proposition 70',
    id: '10.70',
    img: '/img/10/70',
    prose: prop70,
  };
},

function() {
  return {
    title: 'Proposition 71',
    id: '10.71',
    img: '/img/10/71',
    prose: prop71,
  };
},

function() {
  return {
    title: 'Proposition 72',
    id: '10.72',
    img: '/img/10/72',
    prose: prop72,
  };
},

function() {
  return {
    title: 'Proposition 73',
    id: '10.73',
    img: '/img/10/73',
    prose: prop73,
  };
},

function() {
  return {
    title: 'Proposition 74',
    id: '10.74',
    img: '/img/10/74',
    prose: prop74,
  };
},

function() {
  return {
    title: 'Proposition 75',
    id: '10.75',
    img: '/img/10/75',
    prose: prop75,
  };
},

function() {
  return {
    title: 'Proposition 76',
    id: '10.76',
    img: '/img/10/76',
    prose: prop76,
  };
},

function() {
  return {
    title: 'Proposition 77',
    id: '10.77',
    img: '/img/10/77',
    prose: prop77,
  };
},

function() {
  return {
    title: 'Proposition 78',
    id: '10.78',
    img: '/img/10/78',
    prose: prop78,
  };
},

function() {
  return {
    title: 'Proposition 79',
    id: '10.79',
    img: '/img/10/79',
    prose: prop79,
  };
},

function() {
  return {
    title: 'Proposition 80',
    id: '10.80',
    img: '/img/10/80',
    prose: prop80,
  };
},

function() {
  return {
    title: 'Proposition 81',
    id: '10.81',
    img: '/img/10/81',
    prose: prop81,
  };
},

function() {
  return {
    title: 'Proposition 82',
    id: '10.82',
    img: '/img/10/82',
    prose: prop82,
  };
},

function() {
  return {
    title: 'Proposition 83',
    id: '10.83',
    img: '/img/10/83',
    prose: prop83,
  };
},

function() {
  return {
    title: 'Proposition 84',
    id: '10.84',
    img: '/img/10/84',
    prose: prop84,
  };
},

function() {
  return {
    title: 'Definitions III',
    id: '10.d3',
    prose: propdef3,
  };
},

function() {
  return {
    title: 'Proposition 85',
    id: '10.85',
    img: '/img/10/85',
    prose: prop85,
  };
},

function() {
  return {
    title: 'Proposition 86',
    id: '10.86',
    img: '/img/10/86',
    prose: prop86,
  };
},

function() {
  return {
    title: 'Proposition 87',
    id: '10.87',
    img: '/img/10/87',
    prose: prop87,
  };
},

function() {
  return {
    title: 'Proposition 88',
    id: '10.88',
    img: '/img/10/88',
    prose: prop88,
  };
},

function() {
  return {
    title: 'Proposition 89',
    id: '10.89',
    img: '/img/10/89',
    prose: prop89,
  };
},

function() {
  return {
    title: 'Proposition 90',
    id: '10.90',
    img: '/img/10/90',
    prose: prop90,
  };
},

function() {
  return {
    title: 'Proposition 91',
    id: '10.91',
    img: '/img/10/91',
    prose: prop91,
  };
},

function() {
  return {
    title: 'Proposition 92',
    id: '10.92',
    img: '/img/10/92',
    prose: prop92,
  };
},

function() {
  return {
    title: 'Proposition 93',
    id: '10.93',
    img: '/img/10/93',
    prose: prop93,
  };
},

function() {
  return {
    title: 'Proposition 94',
    id: '10.94',
    img: '/img/10/94',
    prose: prop94,
  };
},

function() {
  return {
    title: 'Proposition 95',
    id: '10.95',
    img: '/img/10/95',
    prose: prop95,
  };
},

function() {
  return {
    title: 'Proposition 96',
    id: '10.96',
    img: '/img/10/96',
    prose: prop96,
  };
},

function() {
  return {
    title: 'Proposition 97',
    id: '10.97',
    img: '/img/10/97',
    prose: prop97,
  };
},

function() {
  return {
    title: 'Proposition 98',
    id: '10.98',
    img: '/img/10/98',
    prose: prop98,
  };
},

function() {
  return {
    title: 'Proposition 99',
    id: '10.99',
    img: '/img/10/99',
    prose: prop99,
  };
},

function() {
  return {
    title: 'Proposition 100',
    id: '10.100',
    img: '/img/10/100',
    prose: prop100,
  };
},

function() {
  return {
    title: 'Proposition 101',
    id: '10.101',
    img: '/img/10/101',
    prose: prop101,
  };
},

function() {
  return {
    title: 'Proposition 102',
    id: '10.102',
    img: '/img/10/102',
    prose: prop102,
  };
},

function() {
  return {
    title: 'Proposition 103',
    id: '10.103',
    img: '/img/10/103',
    prose: prop103,
  };
},

function() {
  return {
    title: 'Proposition 104',
    id: '10.104',
    img: '/img/10/104',
    prose: prop104,
  };
},

function() {
  return {
    title: 'Proposition 105',
    id: '10.105',
    img: '/img/10/105',
    prose: prop105,
  };
},

function() {
  return {
    title: 'Proposition 106',
    id: '10.106',
    img: '/img/10/106',
    prose: prop106,
  };
},

function() {
  return {
    title: 'Proposition 107',
    id: '10.107',
    img: '/img/10/107',
    prose: prop107,
  };
},

function() {
  return {
    title: 'Proposition 108',
    id: '10.108',
    img: '/img/10/108',
    prose: prop108,
  };
},

function() {
  return {
    title: 'Proposition 109',
    id: '10.109',
    img: '/img/10/109',
    prose: prop109,
  };
},

function() {
  return {
    title: 'Proposition 110',
    id: '10.110',
    img: '/img/10/110',
    prose: prop110,
  };
},

function() {
  return {
    title: 'Proposition 111',
    id: '10.111',
    img: '/img/10/111',
    prose: prop111,
  };
},

function() {
  return {
    title: 'Proposition 112',
    id: '10.112',
    img: '/img/10/112',
    prose: prop112,
  };
},

function() {
  return {
    title: 'Proposition 113',
    id: '10.113',
    img: '/img/10/113',
    prose: prop113,
  };
},

function() {
  return {
    title: 'Proposition 114',
    id: '10.114',
    img: '/img/10/114',
    prose: prop114,
  };
},

function() {
  return {
    title: 'Proposition 115',
    id: '10.115',
    img: '/img/10/115',
    prose: prop115,
  };
},

]
}

export default book;
