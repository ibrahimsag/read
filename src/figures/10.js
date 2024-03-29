import v2 from '../vec2.js';

function book(rg)
{
let fig54 = (function() {
  let z = {};
  z.A = v2.o;
  z.G = v2.add(z.A, v2.s(v2.x, 100));
  z.E = v2.add(z.G, v2.s(v2.x, 30));
  z.F = v2.add(z.E, v2.s(v2.x, 50));
  z.D = v2.add(z.F, v2.s(v2.x, 50));
  [z.B, z.H, z.K, z.L, z.C] = [z.A, z.G, z.E, z.F, z.D].map(x => v2.add(x, v2.s(v2.y, 80)));
  z.S2 = v2.s(v2.y, 150);
  z.R = v2.add(z.S2, v2.s(v2.x, 110));
  z.Q = v2.add(z.S2, v2.s(v2.x, 160));
  [z.M, z.N, z.O] = [z.S2, z.R, z.Q].map(x=> v2.add(x, v2.s(v2.y, 50)));
  [z.S, z.P, z.Q2] = [z.S2, z.R, z.Q].map(x=> v2.add(x, v2.s(v2.y, 160)));

  return {
    letters: {
      A: [1],
      G: [1],
      E: [1],
      F: [1],
      D: [1],
      B: [5],
      H: [5],
      K: [5],
      L: [5],
      C: [5],
      S: [4],
      M: [3],
      R: [1],
      Q: [0],
      N: [6],
      O: [7],
      P: [5]
    },
    points: z,
    shapes: [
      rg.polygon([z.A, z.B, z.C, z.D]),
      rg.line(z.G, z.H),
      rg.line(z.E, z.K),
      rg.line(z.F, z.L),
      rg.polygon([z.S2, z.S, z.Q2, z.Q]),
      rg.line(z.M, z.O),
      rg.line(z.R, z.P),
    ],
    polygonl: {
      AC: 'ABCD',
      SN: 'SPNM',
      AH: 'ABHG',
      HE: 'HKEG',
      AK: 'ABKE',
      NQ: 'NOQR',
      GK: 'GHKE',
      SQ: [z.S, z.Q2, z.Q, z.S2],
      EL: 'EKLF',
      LE: 'EKLF',
      KG: 'GHKE',
      MR: [z.M, z.N, z.R, z.S2],
      PO: [z.P, z.Q2, z.O, z.N],
    },
  };
})();

let fig60 = (function() {
  let z = {};
  z.D = v2.s(v2.y, 50);
  let f = (a) => { var b = 0; return a.map(x => { b+=x; return b}); };
  [z.K, z.M, z.N, z.G] = f([150, 50, 90, 90])
    .map(p => v2.add(v2.s(v2.x, p), z.D));
  [z.E, z.H, z.L, z.O, z.F] = [z.D, z.K, z.M, z.N, z.G].map(p => v2.add(p, v2.s(v2.y, 150)));
  return {
    mags: [
      { l: 'A', m: 150, p: v2.o },
      { l: 'C', m: 100 },
      { l: 'B' }
    ],
    points: z,
    letters: {
      D: [1],
      K: [1],
      M: [1],
      N: [1],
      G: [1],
      E: [5],
      H: [5],
      L: [5],
      O: [5],
      F: [5],
    },
    shapes: [
      rg.polygon([z.D, z.E, z.F, z.G]),
      rg.line(z.K, z.H),
      rg.line(z.M, z.L),
      rg.line(z.N, z.O),
    ],
    polygonl: {
      DH: 'DEHK',
      KL: 'KHLM',
      MF: 'MLFG',
      MO: 'MLON',
      NF: 'NOFG',
      DL: 'DELM',
      DF: 'DEFG'
    }
  };
})();

let fig66 = (function() {
  return {
    mags: [
      { l: 'A', m: 150, p: v2.o },
      { l: 'E', m: 70 },
      { l: 'B' },
      { l: 'C', m: 190, v: 50 },
      { l: 'F', m: 100 },
      { l: 'D' }
    ],
  };
})();

let fig71 = (function() {
  let z = {};
  [z.A, z.C, z.A1,
    z.D1, z.B, z.D] = [0, 250].map(y => [0, 70, 120].map(x=>[x,y])).flat();
  [z.E, z.H, z.K,
    z.F, z.G, z.I] = [0, 170].map(y => [170, 270, 340].map(x=>[x,y])).flat();
  return {
    points: z,
    letters: {
      A: [1],
      C: [1],
      E: [1],
      H: [1],
      K: [1],
      B: [5],
      D: [5],
      F: [5],
      G: [5],
      I: [5],
    },
    shapes: [
      rg.polygon([z.A, z.D1, z.D, z.A1]),
      rg.polygon([z.E, z.F, z.I, z.K]),
      rg.line(z.C, z.B),
      rg.line(z.H, z.G)
    ],
    polygonl: {
      AB: [z.A, z.D1, z.B, z.C],
      AD: [z.A, z.D1, z.D, z.A1],
      CD: [z.C, z.B, z.D, z.A1],
      DC: [z.C, z.B, z.D, z.A1],
      EG: 'EFGH',
      EI: 'EFIK',
      HI: 'HGIK',
    }
  };
})();

let fig73 = (function() {
  return {
    mags: [
      { l: 'A', m: 90, p: v2.o },
      { l: 'C', m: 180 },
      { l: 'B' },
    ]
  };
})();

let fig75 = (function() {
  let z = {};
  [z.D, z.F, z.G,
    z.I, z.H, z.E] = [50, 220].map(y => [0, 150, 270].map(x=>[x,y])).flat()
  return {
    ...fig73,
    points: z,
    letters: {
      D: [1],
      F: [1],
      G: [1],
      I: [5],
      H: [5],
      E: [5],
    },
    shapes: [
      rg.polygon([z.D, z.I, z.E, z.G]),
      rg.line(z.F, z.H)
    ],
    polygonl: {
      DH: 'DIHF',
      DE: 'DIEG',
      FE: 'FHEG',
    }
  };
})();

let fig79 = (function() {
  return {
    mags: [
      { l: 'A', m: 100, p: v2.o },
      { l: 'B', m: 170 },
      { l: 'C', m: 50 },
      { l: 'D' }
    ]
  };
})();

let fig81 = (function() {
  let z = {};
  [z.E, z.H, z.M, z.N,
    z.F, z.L, z.G, z.I] = [50, 170].map(y => [0, 120, 310, 350].map(x => [x, y])).flat();
  return {
    ...fig79,
    points: z,
    letters: {
      E: [1],
      H: [1],
      M: [1],
      N: [1],
      F: [5],
      L: [5],
      G: [5],
      I: [5],
    },
    shapes: [
      rg.polygon([z.E, z.F, z.I, z.N]),
      rg.line(z.H, z.L),
      rg.line(z.M, z.G)
    ],
    polygonl: {
      EG: 'EFGM',
      HG: 'HLGM',
      GH: 'HLGM',
      EL: 'EFLH',
      EI: 'EFIN',
      HI: 'HLIN',
    }
  };
})();

let fig91 = (function() {
  let z = {};
  [z.A, z.D, z.E, z.F, z.G,
    z.C, z.B, z.H, z.I, z.K] = [0, 100].map(y => [0, 80, 150, 200, 240].map(x => [x, y])).flat();
  [z.L, z.N, z.P,
    z.S, z.Q, z.O,
    z.R, z.T, z.M] = [0, 70, 170].map(y => [310, 410, 480].map(x => [x, y])).flat();
  z.U = v2.add(z.Q, v2.s(v2.u(v2.sub(z.S, z.Q)), 30));
  z.V = v2.add(z.Q, v2.s(v2.u(v2.sub(z.P, z.Q)), 30));
  z.W = v2.add(z.Q, v2.s(v2.u(v2.sub(z.T, z.Q)), 30));

  return {
    points: z,
    letters: {
      A: [1],
      D: [1],
      E: [1],
      F: [1],
      G: [1],
      C: [5],
      B: [5],
      H: [5],
      I: [5],
      K: [5],
      L: [3],
      S: [3],
      R: [3],
      P: [7],
      O: [7],
      M: [7],
      N: [1],
      T: [5],
      U: [5],
      W: [3],
      V: [1],
    },
    shapes: [
      rg.polygon([z.A, z.C, z.K, z.G]),
      rg.line(z.B, z.D),
      rg.line(z.E, z.H),
      rg.line(z.F, z.I),
      rg.polygon([z.L, z.R, z.M, z.P]),
      rg.line(z.S, z.O),
      rg.line(z.N, z.T),
      rg.line(z.R, z.P),
      rg.gnomon(z.Q, z.U, z.W)
    ],
    given: {
      UVW: [rg.gnomon(z.Q, z.U, z.W), rg.polygon([z.L, z.S, z.Q, z.T, z.M, z.P])],
    },
    polygonl: {
      'AB': 'ACBD',
      'AI': 'ACIF',
      'FK': 'FIKG',
      'DH': 'DBHE',
      'EK': 'EHKG',
      'LM': 'LRMP',
      'NO': 'NQOP',
      "AK": "ACKG",
      "DK": "DBKG",
      "KF": "KGFI",
      "LO": "LSOP",
      "MN": "NTMP",
      "ST": "SRTQ",
      "TS": "SRTQ"
    }
  };
})();

let fig97 = (function() {
  let z = {};
  [z.C, z.F, z.N, z.K, z.M,
    z.D, z.E, z.O, z.H, z.L] = [50, 170].map(y => [0, 120, 210, 240, 300].map(x => [x, y])).flat();
  return {
    mags: [
      { l: 'A', m: 120, p: [30, 0] },
      { l: 'B', m: 80 },
      { l: 'G' }
    ],
    points: z,
    letters: {
      C: [1],
      F: [1],
      N: [1],
      K: [1],
      M: [1],
      D: [5],
      E: [5],
      O: [5],
      H: [5],
      L: [5],
    },
    shapes: [
      rg.polygon([z.C, z.D, z.L, z.M]),
      rg.line(z.F, z.E),
      rg.line(z.N, z.O),
      rg.line(z.K, z.H)
    ],
    polygonl: {
      CE: 'CDEF',
      CH: 'CDHK',
      CL: 'CDLM',
      KL: 'KHLM',
      FL: 'FELM',
      LF: 'FELM',
      FO: 'FEON',
      LN: 'LMNO',
      DM: "DLMC",
      NL: "NOLM"
    }
  };
})();

let fig103 = (function() {
  return {
    mags: [
      { l: 'A', m: 150, p: v2.o },
      { l: 'B', m: 90 },
      { l: 'E' },
      { l: 'C', m: 120, p: [20, 50] },
      { l: 'D', m: 50 },
      { l: 'F' }
    ]
  };
})();

let fig109 = ( function() {
  let z = {};
  [z.B, z.E, z.M,
    z.A, z.D, z.C] = [0, 200].map(y => [0, 90, 140].map(x=> [x, y])).flat();
  [z.F, z.K, z.H,
    z.G, z.L, z.N] = [0, 250].map(y => [190, 280, 320].map(x=> [x, y])).flat();
  return {
    points: z,
    letters: {
      B: [1],
      E: [1],
      F: [1],
      K: [1],
      H: [1],
      A: [5],
      D: [5],
      C: [5],
      G: [5],
      L: [5],
    },
    shapes: [
      rg.polygon([z.B, z.A, z.C, z.M]),
      rg.line(z.E ,z.D),
      rg.polygon([z.F, z.G, z.N, z.H]),
      rg.line(z.K, z.L)
    ],
    polygonl: {
      BC: 'BACM',
      EC: 'EDCM',
      BD: 'BADE',
      LH: 'LNHK',
      GH: 'GNHF',
      GK: 'GLKF'
    }
  };
})();

  return [
function() {
  return {
    id: '10.1',
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
    id: '10.2',
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
    id: '10.3',
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
    id: '10.4',
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
    id: '10.5',
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
    id: '10.6',
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
    id: '10.7',
    mags: [
      { l: 'A', m: 150, p: [50, 50] },
      { l: 'B', m: 100, v: 50 },
    ]
  };
},

function() {
  return {
    id: '10.8',
    mags: [
      { l: 'A', m: 150, p: [50, 50] },
      { l: 'B', m: 100, v: 50 },
    ]
  };
},

function() {
  return {
    id: '10.9',
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
    id: '10.10',
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
    id: '10.11',
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
    id: '10.12',
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
    id: '10.13',
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
    id: '10.13-lem',
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
    id: '10.14',
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
    id: '10.15',
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
    id: '10.16',
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
    id: '10.16-lem',
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
    id: '10.17',
    shapes: [
      rg.line(B, H),
      rg.line(G, D, {dashed: true}),
      rg.line(G, H, {dashed: true}),
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
    id: '10.18',
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
    id: '10.19',
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
    id: '10.20',
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
    id: '10.21',
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
    id: '10.21-lem',
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
    id: '10.22',
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
    id: '10.23',
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
    id: '10.24',
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
    id: '10.25',
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
    id: '10.26',
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
    id: '10.27',
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
    id: '10.28',
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
    id: '10.28-lemI',
    img: '/img/10/l4',
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
    id: '10.28-lemII',
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
    id: '10.29',
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
    id: '10.30',
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
    id: '10.31',
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
    id: '10.32',
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
    id: '10.32-lem',
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
      rg.polygon([z.B, z.B2, z.C2, z.C, z.C3], {dashed: true}),
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
    id: '10.33',
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
    id: '10.34',
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
    id: '10.35',
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
    id: '10.36',
    mags: [
      { l: 'A', m: 150, p: [0, 0] },
      { l: 'B', m: 90 },
      { l: 'C' }
    ],
  };
},

function() {
  return {
    id: '10.37',
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
    id: '10.38',
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
    id: '10.39',
    mags: [
      { l: 'A', m: 150, p: [0, 0] },
      { l: 'B', m: 90 },
      { l: 'C' }
    ],
  };
},

function() {
  return {
    id: '10.40',
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
    id: '10.41',
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
    id: '10.41-lem',
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
    id: '10.42',
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
    id: '10.43',
    mags: [
      { l: 'A', m: 110, p: [0, 0] },
      { l: 'D', m: 80 },
      { l: 'C', m: 100 },
      { l: 'B' }
    ]
  };
},

function() {
  let z = {};
  let a = 160, b = 90, c = 100;
  z.E = [0, 100];
  [z.M, z.H, z.N] = [a, a+b, a+b+c].map(x => v2.add(z.E, [x, 0]));
  [z.F, z.L, z.G, z.K] = [z.E, z.M, z.H, z.N].map(x => v2.add(x, [0, c]));

  return {
    id: '10.44',
    points: z,
    letters: {
      E: [1],
      M: [1],
      H: [1],
      N: [1],
      F: [5],
      L: [5],
      G: [5],
      K: [5],
    },
    polygonl: {
      EK: 'EFKN',
      EG: 'EFGH',
      HK: 'HGKN',
      EL: 'EFLM',
      MK: 'MLKN',
    },
    shapes: [
      rg.polygon([z.E, z.F, z.K, z.N]),
      rg.line(z.M, z.L),
      rg.line(z.H, z.G),
    ],
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
    id: '10.45',
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
    id: '10.46',
    mags: [
      { l: 'A', m: 110, p: [0, 0] },
      { l: 'D', m: 80 },
      { l: 'C', m: 100 },
      { l: 'B' }
    ]
  };
},

function() {
  let z = {};
  let w = v2.s(v2.x, 280), h1 = v2.s(v2.y, 70), h2 = v2.s(v2.y, 40);
  z.E = v2.s(v2.y, 50);
  z.F = v2.add(z.E, w);
  z.M = v2.add(z.E, h1);
  z.H = v2.add(z.M, h2);
  z.N = v2.add(z.H, h1);
  [z.L, z.G, z.K] = [z.M, z.H, z.N].map(x => v2.add(x, w));

  return {
    id: '10.47',
    letters: {
      E: [3],
      M: [3],
      H: [3],
      N: [3],
      F: [7],
      L: [7],
      G: [7],
      K: [7],
    },
    points: z,
    shapes: [
      rg.polygon([z.E, z.N, z.K, z.F]),
      rg.line(z.M, z.L),
      rg.line(z.H, z.G),
    ],
    polygonl: {
      EG: 'EFGH',
      HK: 'HGKN',
      EK: 'EFKN',
      EL: 'EFLM',
      MK: 'MLKN',
      GN: 'HGKN',
    },
    mags: [
      { l: 'A', m: 110, p: v2.o },
      { l: 'D', m: 80 },
      { l: 'C', m: 90 },
      { l: 'B' }
    ]
  };
},

function() {
  return {
    id: '10.48',
    mags: [
      { l: 'H', m: 80, p: v2.s(v2.x, 190) },
      { l: 'D', m: 120, p: v2.o },
      { l: 'E', m: 170, v: 50 },
      { l: 'F', m: 120 },
      { l: 'G' },
      { l: 'A', m: 120, v: 50 },
      { l: 'C', m: 90 },
      { l: 'B' }

    ]
  };
},

function() {
  return {
    id: '10.49',
    mags: [
      { l: 'D', m: 200, p: v2.s(v2.x, 150) },
      { l: 'H', m: 100, p: v2.o },
      { l: 'E', m: 80, v: 50 },
      { l: 'F', m: 200 },
      { l: 'G' },
      { l: 'A', m: 60, v: 50 },
      { l: 'C', m: 150 },
      { l: 'B' }
    ]
  };
},

function() {
  return {
    id: '10.50',
    mags: [
      { l: 'A', m: 150, p: v2.o },
      { l: 'C', m: 60 },
      { l: 'B' },
      { l: 'F', m: 170, v: 100 },
      { l: 'G', m: 120 },
      { l: 'H' },
      { l: 'E', m: 80, p: v2.add(v2.s(v2.y, 50), v2.s(v2.x, 0)) },
      { l: 'K', m: 50, p: v2.add(v2.s(v2.y, 50), v2.s(v2.x, 140)) },
      { l: 'D', m: 100, p: v2.add(v2.s(v2.y, 50), v2.s(v2.x, 240)) }

    ],
  };
},

function() {
  return {
    id: '10.51',
    mags: [
      { l: 'E', m: 150, p: v2.o },
      { l: 'F', m: 120 },
      { l: 'G' },
      { l: 'D', m: 120, v: 60 },
      { l: 'A', m: 90, v: 60 },
      { l: 'C', m: 70 },
      { l: 'B' },
      { l: 'H', m: 80, p: v2.add(v2.s(v2.y, 60), v2.s(v2.x, 170)) }
    ],
  };
},

function() {
  return {
    id: '10.52',
    mags: [
      { l: 'E', m: 90, p: v2.o },
      { l: 'F', m: 180 },
      { l: 'G' },
      { l: 'D', m: 120, v: 60 },
      { l: 'A', m: 70, v: 60 },
      { l: 'C', m: 90 },
      { l: 'B' },
      { l: 'H', m: 80, p: v2.add(v2.s(v2.y, 60), v2.s(v2.x, 170)) }
    ],
  };
},

function() {
  return {
    id: '10.53',
    mags: [
      { l: 'E', m: 100, p: v2.o },
      { l: 'D', m: 130, v: 50 },
      { l: 'A', m: 160, v: 50 },
      { l: 'C', m: 120 },
      { l: 'B' },
      { l: 'K', m: 90, p: v2.s(v2.x, 180)},
      { l: 'F', m: 120, v: 50 },
      { l: 'G', m: 80 },
      { l: 'H' }
    ]
  };
},

function() {
  let z = {}, s = 250, t = 60;
  z.K = v2.o;
  z.A = v2.add(z.K, v2.s(v2.y, s));
  z.C = v2.add(z.K, v2.s(v2.x, s));
  z.H = v2.add(z.A, v2.s(v2.x, s));
  z.G = v2.sub(z.C, v2.s(v2.x, t));
  z.D = v2.add(z.K, v2.s(v2.y, t));
  z.B = v2.add(z.G, v2.s(v2.y, t));
  z.E = v2.add(z.C, v2.s(v2.y, t));
  z.F = v2.sub(z.H, v2.s(v2.x, t));

  return {
    id: '10.53-lem',
    points: z,
    letters: {
      K: [1],
      G: [1],
      C: [1],
      D: [3],
      B: [4],
      A: [5],
      F: [5],
      H: [5],
      E: [7],
    },
    polygonl: {
      AB: 'AFBD',
      BC: 'BECG',
      CB: 'BECG',
      AC: 'AHCK',
      DG: 'DBGK',
      DC: 'DECK',
      CD: 'DECK',
    },
    shapes: [
      rg.polygon([z.K, z.A, z.H, z.C]),
      rg.line(z.D, z.E),
      rg.line(z.G, z.F)
    ],
  };
},

function() {

  return {
    id: '10.54',
    ...fig54
  };
},

function() {
  return {
    id: '10.55',
    ...fig54
  };
},

function() {
  return {
    id: '10.56',
    ...fig54
  };
},

function() {
  return {
    id: '10.57',
    ...fig54
  };
},

function() {
  return {
    id: '10.58',
    ...fig54
  };
},

function() {
  return {
    id: '10.59',
    ...fig54
  };
},

function() {
  return {
    id: '10.59-lem',
    mags: [
      { l: 'A', m: 150, p: v2.o },
      { l: 'D', m: 50 },
      { l: 'C', m: 100 },
      { l: 'B' }
    ]
  };
},

function() {
  return {
    id: '10.60',
    ...fig60
  };
},

function() {
  return {
    id: '10.61',
    ...fig60
  };
},

function() {
  return {
    id: '10.62',
    ...fig60
  };
},

function() {
  return {
    id: '10.63',
    ...fig60
  };
},

function() {
  return {
    id: '10.64',
    ...fig60
  };
},

function() {
  return {
    id: '10.65',
    ...fig60
  };
},

function() {
  return {
    id: '10.66',
    ...fig66
  };
},

function() {
  return {
    id: '10.67',
    ...fig66
  };
},

function() {
  return {
    id: '10.68',
    ...fig66
  };
},

function() {
  return {
    id: '10.69',
    ...fig66
  };
},

function() {
  return {
    id: '10.70',
    ...fig66
  };
},

function() {
  return {
    id: '10.71',
    ...fig71
  };
},

function() {
  return {
    id: '10.72',
    ...fig71
  };
},

function() {
  return {
    id: '10.73',
    ...fig73
  };
},

function() {
  return {
    id: '10.74',
    ...fig73
  };
},

function() {
  return {
    id: '10.75',
    ...fig75
  };
},

function() {
  return {
    id: '10.76',
    ...fig73,
  };
},

function() {
  return {
    id: '10.77',
    ...fig73,
  };
},

function() {
  let z = {};
  [z.D, z.F, z.G,
    z.I, z.H, z.E] = [50, 170].map(y => [0, 170, 270].map(x => [x, y])).flat();
  return {
    id: '10.78',
    mags: [
      { l: 'A', m: 80, p: v2.o },
      { l: 'C', m: 170 },
      { l: 'B' },
    ],
    points: z,
    letters: {
      D: [1],
      F: [1],
      G: [1],
      I: [5],
      H: [5],
      E: [5],
    },
    shapes: [
      rg.polygon([z.D, z.I, z.E, z.G]),
      rg.line(z.F, z.H)
    ],
    polygonl: {
      DH: 'DIHF',
      DE: 'DIEG',
      FE: 'FHEG',
    }

  };
},

function() {
  return {
    id: '10.79',
    ...fig79
  };
},

function() {
  return {
    id: '10.80',
    ...fig79
  };
},

function() {
  return {
    id: '10.81',
    ...fig81
  };
},

function() {
  return {
    id: '10.82',
    ...fig79,
  };
},

function() {
  return {
    id: '10.83',
    ...fig79,
  };
},

function() {
  return {
    id: '10.84',
    ...fig81
  };
},

function() {
  return {
    id: '10.85',
    mags: [
      { l: 'A', m:100, p: v2.o },
      { l: 'H', m:120, v: 50 },
      { l: 'B', m:50, p: v2.s(v2.x, 180) },
      { l: 'C', m:120 },
      { l: 'G' },
      { l: 'E', m:50, v: 50 },
      { l: 'F', m:100 },
      { l: 'D' },
    ]
  };
},

function() {
  return {
    id: '10.86',
    mags: [
      { l: 'A', m:100, p: v2.o },
      { l: 'H', m:120, v: 50 },
      { l: 'B', m:50, p: v2.s(v2.x, 180) },
      { l: 'C', m:120 },
      { l: 'G' },
      { l: 'E', m:50, v: 50 },
      { l: 'F', m:100 },
      { l: 'D' },
    ]
  };
},

function() {
  return {
    id: '10.87',
    mags: [
      { l: 'A', m:120, p: v2.o },
      { l: 'E', m:100, v: 50 },
      { l: 'K', m:150, v: 50 },
      { l: 'B', m:50, p: v2.s(v2.x, 210) },
      { l: 'D', m:100 },
      { l: 'C' },
      { l: 'F', m:50, v: 50 },
      { l: 'H', m:120 },
      { l: 'G' },
    ]
  };
},

function() {
  return {
    id: '10.88',
    mags: [
      { l: 'A', m:120, p: v2.o },
      { l: 'H', m:100, v: 50 },
      { l: 'B', m:100, p: v2.s(v2.x, 180) },
      { l: 'C', m:70 },
      { l: 'G' },
      { l: 'E', m:100, v: 50 },
      { l: 'F', m:50 },
      { l: 'D' },
    ]
  };
},

function() {
  return {
    id: '10.89',
    mags: [
      { l: 'A', m:170, p: v2.o },
      { l: 'H', m:70, v: 50 },
      { l: 'B', m:80, p: v2.s(v2.x, 230) },
      { l: 'C', m:50 },
      { l: 'G' },
      { l: 'E', m:100, v: 50 },
      { l: 'F', m:50 },
      { l: 'D' },
    ]
  };
},

function() {
  return {
    id: '10.90',
    mags: [
      { l: 'A', m:120, p: v2.o },
      { l: 'E', m:100, v: 50 },
      { l: 'K', m:150, v: 50 },
      { l: 'B', m:80, p: v2.s(v2.x, 210) },
      { l: 'D', m:70 },
      { l: 'C' },
      { l: 'F', m:50, v: 50 },
      { l: 'H', m:120 },
      { l: 'G' },
    ]
  };
},

function() {
  return {
    id: '10.91',
    ...fig91
  };
},

function() {
  return {
    id: '10.92',
    ...fig91
  };
},

function() {
  return {
    id: '10.93',
    ...fig91
  };
},

function() {
  return {
    id: '10.94',
    ...fig91
  };
},

function() {
  return {
    id: '10.95',
    ...fig91
  };
},

function() {
  return {
    id: '10.96',
    ...fig91
  };
},

function() {
  return {
    id: '10.97',
    ...fig97,
  };
},

function() {
  return {
    id: '10.98',
    ...fig97
  };
},

function() {
  return {
    id: '10.99',
    ...fig97
  };
},

function() {
  return {
    id: '10.100',
    ...fig97
  };
},

function() {
  return {
    id: '10.101',
    ...fig97
  };
},

function() {
  return {
    id: '10.102',
    ...fig97
  };
},

function() {
  return {
    id: '10.103',
    ...fig103
  };
},

function() {
  return {
    id: '10.104',
    ...fig103
  };
},

function() {
  return {
    id: '10.105',
    ...fig103
  };
},

function() {
  return {
    id: '10.106',
    ...fig103
  };
},

function() {
  return {
    id: '10.107',
    ...fig103
  };
},

function() {
  let z = {};
  [z.A, z.E, z.B,
    z.C, z.D, z.M] = [0, 200].map(y => [0, 90, 140].map(x => [x, y])).flat();
  [z.N, z.L, z.G,
    z.H, z.K, z.F] = [70, 130].map(y => [180, 350, 480].map(x => [x, y])).flat();
  return {
    id: '10.108',
    points: z,
    letters: {
      A: [1],
      E: [1],
      B: [1],
      C: [5],
      D: [5],
      L: [1],
      G: [1],
      H: [5],
      K: [5],
      F: [5],
    },
    shapes: [
      rg.polygon([z.A, z.C, z.M, z.B]),
      rg.line(z.E, z.D),
      rg.polygon([z.N, z.H, z.F, z.G]),
      rg.line(z.L, z.K)
    ],
    polygonl: {
      BD: "BEDM",
      BC: "BACM",
      EC: "EACD",
      GH: "GNHF",
      GK: "GLKF",
      DB: "DEBM",
      LH: "LNHK"
    }
  };
},

function() {
  return {
    id: '10.109',
    ...fig109
  };
},

function() {
  return {
    id: '10.110',
    ...fig109
  };
},

function() {
  let [D, E, C, K] = [50, 300].map(y => [0, 150].map(x => [x, y])).flat()
  return {
    id: '10.111',
    mags: [
      { l: 'A', m: 250, p: v2.o },
      { l: 'B' },
      { l: 'D', m: 100, v: 50 },
      { l: 'G', m: 50 },
      { l: 'E', m: 120 },
      { l: 'F' },
    ],
    points: {C, K},
    letters: {
      C: [5],
    },
    shapes: [
      rg.polygon([D, C, K, E]),
    ],
    polygonl: {
      CE: 'CKED',
    }
  };
},

function() {
  return {
    id: '10.112',
    mags: [
      { l: 'A', m: 80, p: v2.o },
      { l: 'B', m: 50, v: 50 },
      { l: 'D', m: 100 },
      { l: 'C' },
      { l: 'K', m: 120, v: 50 },
      { l: 'E', m: 80 },
      { l: 'F', m: 120 },
      { l: 'H' },
      { l: 'G', m: 170, p: [200, 50] },
    ]
  };
},

function() {
  return {
    id: '10.113',
    mags: [
      { l: 'A', m: 80, p: v2.o },
      { l: 'B', m: 50, v: 50 },
      { l: 'D', m: 100 },
      { l: 'C' },
      { l: 'K', m: 160, v: 50 },
      { l: 'E', m: 40 },
      { l: 'F', m: 120 },
      { l: 'H' },
      { l: 'G', m: 170, p: [200, 50] },
    ]
  };
},

function() {
  return {
    id: '10.114',
    mags: [
      { l: 'A', m: 150, p: v2.o },
      { l: 'B', m: 60 },
      { l: 'F' },
      { l: 'C', m: 140, v: 50 },
      { l: 'E', m: 90 },
      { l: 'D' },
      { l: 'G', m: 190, v: 50 },
      { l: 'H', m: 210, v: 50 },
      { l: 'K', m: 150, v: 50 },
      { l: 'L', m: 80 },
      { l: 'M' },
    ]
  };
},

function() {
  return {
    id: '10.115',
    mags: [
      { l: 'A', m: 100, p: v2.o },
      { l: 'B', m: 250, v: 50 },
      { l: 'C', m: 150, v: 50 },
      { l: 'D', m: 170, v: 50 },
    ]
  };
},

]
}

export default book;
