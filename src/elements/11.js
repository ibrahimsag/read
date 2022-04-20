import v2 from '../vec2.js';
import v3 from '../vec3.js';
import hsluv from 'hsluv';

function hsl(...args)
{
  if(args.length === 1)
  {
    return hsluv.hsluvToHex([0, 0, args[0]]);
  }
  else if(args.length === 2)
  {
    return hsluv.hsluvToHex([args[0], 100, args[1]]);
  }
  else if(args.length === 3)
  {
    return hsluv.hsluvToHex(args);
  }
  else
  {
    console.error("# arguments for hsluv", args);
  }
}

import prop0 from './11/0';
import prop1 from './11/1';
import prop2 from './11/2';
import prop3 from './11/3';
import prop4 from './11/4';
import prop5 from './11/5';
import prop6 from './11/6';
import prop7 from './11/7';
import prop8 from './11/8';
import prop9 from './11/9';
import prop10 from './11/10';
import prop11 from './11/11';
import prop12 from './11/12';
import prop13 from './11/13';
import prop14 from './11/14';
import prop15 from './11/15';
import prop16 from './11/16';
import prop17 from './11/17';
import prop18 from './11/18';
import prop19 from './11/19';
import prop20 from './11/20';
import prop21 from './11/21';
import prop22 from './11/22';
import prop23 from './11/23';
import propl1 from './11/l1-23';
import prop24 from './11/24';
import prop25 from './11/25';
import prop26 from './11/26';
import prop27 from './11/27';
import prop28 from './11/28';
import prop29 from './11/29';
import prop30 from './11/30';
import prop31 from './11/31';
import prop32 from './11/32';
import prop33 from './11/33';
import prop34 from './11/34';
import prop35 from './11/35';
import prop36 from './11/36';
import prop37 from './11/37';
import prop38 from './11/38';
import prop39 from './11/39';

function book(rg)
{
  function piped(z, ls)
  {
    let ps1 = ls.slice(0, 4);
    let ps2 = ls.slice(4, 8);
    return [
      rg.polygon([...ps1].map(l => z[l])),
      rg.polygon([...ps2].map(l => z[l])),
      ...[...ps1].map((l, i) => rg.line(z[l], z[ps2[i]])),
    ]
  }

  return [
function() {
  return {
    title: 'Definitions',
    id: '11.d',
    prose: prop0,
  };
},

function() {
  let y = {};
  [y.K, y.N, y.L, y.M] = [-1.2, 1.2].map(z => [-0.5, 0.5].map(x=>[x,0, z])).flat();
  y.B = v3.o;
  y.D = v3.s(v3.z, 0.7);
  y.A = v3.s(y.D, -1);
  y.C = v3.s(v3.y, -1.9);
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.9));
  f = f.map(d => v3.r(d, f[1], -0.3));
  f = f.map(d => v3.r(d, f[2], -0.4));
  for(let i in y)
  {
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  }
  return {
    title: 'Proposition 1',
    id: '11.1',
    prose: prop1,
    points: z,
    letters: {
      A: [7],
      B: [7],
      D: [7],
      C: [1],
    },
    shapes: [
      rg.polygon([z.K, z.L, z.M, z.N]),
      rg.line(z.A, z.D),
      rg.line(z.B, z.C)
    ]
  };
},

function() {
  let z = {};
  z.E = v2.o;
  z.A = [-100, -100];
  z.D = [80, -100];
  [z.F, z.C] = [0.5, 1.5].map(s => v2.sub(z.E, v2.s(z.D, s)));
  [z.G, z.B] = [0.5, 1.5].map(s => v2.sub(z.E, v2.s(z.A, s)));
  [z.H, z.K] = [0.3, 0.6].map(s => v2.add(z.C, v2.s(v2.sub(z.B, z.C), s)));
  return {
    title: 'Proposition 2',
    id: '11.2',
    prose: prop2,
    points: z,
    letters: {
      A: [1],
      D: [1],
      C: [5],
      B: [5],
      F: [2, 0.5],
      G: [8],
      E: [7.2, 5],
      H: [5],
      K: [5]
    },
    shapes: [
      rg.line(z.A, z.B),
      rg.line(z.B, z.C),
      rg.line(z.C, z.D),
      rg.line(z.A, z.D),
      rg.line(z.H, z.F),
      rg.line(z.F, z.G),
      rg.line(z.G, z.K),
    ]
  };
},

function() {
  let y = {};
  [y.Q, y.P, y.R, y.A] = [-0.7, 0.7].map(y => [-1, 1].map(x => [x, y, 0])).flat();
  [y.M, y.L, y.C, y.K] = [-0.7, 0.7].map(y => [-1, 1].map(z => [0, y, z])).flat();
  y.B = v3.s(v3.y, -0.7);
  y.D = v3.s(y.B, -1);
  y.E = v3.s(v3.x, 0.15);
  y.F = v3.s(v3.z, -0.2);
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[1], -0.6));
  f = f.map(d => v3.r(d, f[0], -0.5));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  return {
    title: 'Proposition 3',
    id: '11.3',
    prose: prop3,
    points: z,
    letters: {
      A: [5],
      B: [1.1],
      C: [5],
      D: [5.2],
      E: [7],
      F: [3],
    },
    shapes: [
      rg.polygon([z.A, z.P, z.Q, z.R]),
      rg.polygon([z.C, z.K, z.L, z.M]),
      rg.line(z.B, z.D),
      rg.curve([z.B,z.E,z.D]),
      rg.curve([z.B,z.F,z.D]),
    ],
    polygonl: {
      AB: [z.A, z.P, z.Q, z.R],
      BC: [z.C, z.K, z.L, z.M],
    },
    given: {
      DEB: [rg.curve([z.B,z.E,z.D])],
      DFB: [rg.curve([z.B,z.F,z.D])],
    }
  };
},

function() {
  let y = {};
  [y.K, y.L, y.N, y.M] = [-1, 1].map(z => [-1, 1].map(x => [x, 0, z])).flat();
  y.E = v3.o;
  y.B = [0.5, 0, -0.5];
  y.D = v3.rot([-0.5, 0, -0.5], v3.y, -0.2);
  y.C = v3.s(y.D, -1);
  y.A = v3.s(y.B, -1);
  y.H = v3.add(y.B, v3.s(v3.sub(y.C, y.B), 0.5));
  y.G = v3.add(y.D, v3.s(v3.sub(y.A, y.D), 0.5));
  y.F = [0, -1.5, 0];
  let z = {};

  let f = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
  f = f.map(d => v3.rot(d, f[0], -0.7));
  f = f.map(d => v3.rot(d, f[1], -0.1));
  for(let i in y) {
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  }
  return {
    title: 'Proposition 4',
    id: '11.4',
    prose: prop4,
    points: z,
    letters: {
      F: [1],
      A: [3],
      G: [3],
      D: [3],
      B: [7],
      H: [7],
      C: [7],
      E: [5]
    },
    shapes: [
      rg.polygon([z.K, z.L, z.M, z.N]),
      ...[z.E, z.A, z.G, z.D, z.B, z.H, z.C].map(p=> rg.line(p, z.F)),
      rg.line(z.A, z.D),
      rg.line(z.D, z.C),
      rg.line(z.C, z.B),
      rg.line(z.A, z.B),
      rg.line(z.G, z.H),
      rg.line(z.B, z.C),
    ]
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-1, 1].map(z => [-0.5, 1.5].map(x => [x, 0, z])).flat();
  y.B = v3.o;
  y.D = v3.x;
  y.A = v3.s(v3.y, -1.3);
  y.E = v3.rot(y.D, v3.y, 0.5);
  y.F = v3.rot(y.D, v3.y, -1.2);
  y.C = v3.s(v3.z, 1.3);
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.7));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y) {
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  }
  return {
    title: 'Proposition 5',
    id: '11.5',
    prose: prop5,
    points: z,
    letters: {
      A: [1],
      B: [5],
      C: [1],
      D: [7],
      E: [7],
      F: [7],
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
      ...[z.A, z.C, z.D, z.E, z.F].map(p => rg.line(z.B, p)),
    ]
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-1, 1].map(z => [-0.5, 1.5].map(x => [x, 0, z])).flat();
  y.D = v3.o;
  y.C = v3.s(v3.y, -1.5);
  y.B = v3.rot(v3.x, v3.y, -0.5);
  y.E = v3.s(v3.rot(v3.x, v3.y, 0.9), 0.7);
  y.A = v3.sub(y.B, v3.y);
  y.o = v3.o;
  y.x = v3.x;
  y.y = v3.y;
  y.z = v3.z;
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.rot(d, f[0], -0.7));
  f = f.map(d => v3.rot(d, f[1], -0.3));
  for(let i in y)
  {
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  }
  return {
    title: 'Proposition 6',
    id: '11.6',
    prose: prop6,
    points: z,
    letters: {
      A: [1],
      B: [7],
      C: [1],
      D: [3],
      E: [5],
    },
    shapes: [
      rg.line(z.D, z.C),
      rg.line(z.D, z.B),
      rg.line(z.D, z.E),
      rg.line(z.E, z.B),
      rg.line(z.A, z.B),
      ...[z.D, z.E, z.B].map(p => rg.line(z.A, p)),
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
    ],
  };
},

function() {
  let z = {};
  z.A = v2.o;
  z.B = [300, 0];
  z.C = [0, 150];
  z.D = [300, 150];
  z.E = [100, 0];
  z.F = [200, 150];
  z.G = v2.add([20, 0], v2.add(z.F, v2.s(v2.sub(z.E, z.F), 0.5)));
  return {
    title: 'Proposition 7',
    id: '11.7',
    prose: prop7,
    points: z,
    letters: {
      A: [1],
      E: [1],
      B: [1],
      C: [5],
      D: [5],
      F: [5],
      G: [8]
    },
    shapes: [
      rg.line(z.A, z.B),
      rg.line(z.C, z.D),
      rg.line(z.E, z.F),
      rg.curve([z.E, z.G, z.F]),
    ],
    given: {
      EGF: [rg.curve([z.E, z.G, z.F])]
    }
  };
},

function() {
  let y = {};
  y.B = v3.o;
  y.D = v3.x;
  y.E = v3.sub(y.D, v3.z);
  y.A = v3.s(v3.y, -1);
  y.C = v3.add(y.D, y.A);
  y.o = v3.o;
  y.x = v3.x;
  y.y = v3.y;
  y.z = v3.z;
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.rot(d, f[0], -0.5));
  f = f.map(d => v3.rot(d, f[1], -0.3));
  for(let i in y)
  {
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 200);
  }
  return {
    title: 'Proposition 8',
    id: '11.8',
    prose: prop8,
    points: z,
    letters: {
      A: [1],
      B: [3],
      D: [7],
      E: [5],
      C: [1],
    },
    shapes: [
      rg.line(z.B, z.D),
      rg.line(z.D, z.E),
      rg.line(z.E, z.B),
      ...[z.B, z.D, z.E].map(p => rg.line(z.A, p)),
      rg.line(z.C, z.D),
    ]
  };
},

function() {
  let z = {};
  [z.B, z.H, z.A,
    z.F, z.G, z.E,
    z.D, z.K, z.C] = [0, 100, 200].map(y => [0, 200, 350].map(x => [x, y])).flat();
  z.G = v2.sub(z.G, v2.s(v2.x, 100));

  return {
    title: 'Proposition 9',
    id: '11.9',
    prose: prop9,
    points: z,
    letters: {
      A: [1],
      B: [1],
      C: [1],
      D: [1],
      E: [1],
      F: [1],
      H: [1],
      G: [2],
      K: [5],
    },
    shapes: [
      rg.line(z.B, z.A),
      rg.line(z.F, z.E),
      rg.line(z.D, z.C),
      rg.line(z.H, z.G),
      rg.line(z.G, z.K)
    ],
    given: {
      HGK: [rg.line(z.H, z.G), rg.line(z.G, z.K)]
    }
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-1.4, 0.5].map(z => [-0.3, 1.3].map(x=> [x, 0, z])).flat();
  [y.q1, y.q2, y.q4, y.q3] = [-1.3, 0.3].map(z => [-0.5, 1.5].map(x=> [x, 1.4, z])).flat();
  y.B = v3.o;
  y.A = v3.s(v3.z, -1);
  y.C = v3.x;
  [y.D, y.E, y.F] = [y.A, y.B, y.C].map(p => v3.add(p, v3.s(v3.y, 1.4)));
  y.o = v3.o;
  y.x = v3.x;
  y.y = v3.y;
  y.z = v3.z;
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
  {
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  }
  return {
    title: 'Proposition 10',
    id: '11.10',
    prose: prop10,
    points: z,
    letters: {
      A: [3],
      B: [2],
      C: [8],
      D: [3],
      E: [3, 4],
      F: [7]
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
      rg.polygon([z.q1, z.q2, z.q3, z.q4]),
      rg.polygon([z.A, z.B, z.C]),
      rg.polygon([z.D, z.E, z.F]),
      rg.line(z.A, z.D),
      rg.line(z.B, z.E),
      rg.line(z.C, z.F),
    ]
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-1.3, 1].map(z => [-0.9, 1.1].map(x=> [x, 0, z])).flat();
  y.F = v3.o;
  y.A = v3.s(v3.y, -1);
  y.H = v3.r(v3.z, v3.y, 0.7);
  y.G = v3.s(y.H, -1);
  y.D = v3.s(v3.r(y.H, v3.y, Math.PI/2), 0.7);
  y.E = v3.s(y.D, -1);
  y.C = v3.add(y.D, v3.s(y.H, 0.5));
  y.B = v3.add(y.D, v3.s(y.H, -0.5));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
  {
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  }
  return {
    title: 'Proposition 11',
    id: '11.11',
    prose: prop11,
    points: z,
    letters: {
      A: [1],
      B: [3],
      C: [7.3],
      D: [6],
      E: [8],
      F: [5],
      G: [3],
      H: [7]
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
      rg.line(z.B, z.C),
      rg.line(z.A, z.D),
      rg.line(z.D, z.E),
      rg.line(z.G, z.H),
      rg.line(z.A, z.F),
    ]
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-0.7, 1.5].map(z => [-0.3, 1.4].map(x => [x, 0, z])).flat();
  y.A = v3.o;
  y.C = [1, 0, 1];
  y.B = v3.add(y.C, v3.s(v3.y, -1.5));
  y.D = v3.add(y.A, v3.s(v3.y, -1.5));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
  {
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  }
  return {
    title: 'Proposition 12',
    id: '11.12',
    prose: prop12,
    points: z,
    letters: {
      A: [5],
      C: [5],
      B: [1],
      D: [1],
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
      rg.line(z.A, z.D),
      rg.line(z.C, z.B),
    ]
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-1, 1].map(z => [-1, 1].map(x => [x, 0, z])).flat();
  y.A = v3.o;
  y.E = [1, 0, -0.5];
  y.D = v3.s(y.E, -1);
  y.B = v3.s(v3.y, -1.5);
  y.C = v3.r(v3.y, v3.u(y.D), 3.5);
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
  {
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  }
  return {
    title: 'Proposition 13',
    id: '11.13',
    prose: prop13,
    points: z,
    letters: {
      A: [5],
      B: [1],
      C: [8],
      D: [2],
      E: [6]
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
      rg.line(z.E, z.D),
      rg.line(z.A, z.B),
      rg.line(z.A, z.C),
    ]
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-1, 1].map(z => [-1, 1].map(x => [x, 0, z])).flat();
  y.A = v3.o;
  y.B = v3.s(v3.y, 1.5);
  [y.q1, y.q2, y.q3, y.q4] = [y.p1, y.p2, y.p3, y.p4].map(p => v3.add(y.B, p));
  y.K = v3.add(v3.s(v3.y, 0.7), v3.s(v3.x, 3));
  y.G = v3.add(y.K, v3.s(v3.z, 2));
  y.H = v3.add(y.K, v3.s(v3.z, -2));
  y.E = y.q1;
  y.F = y.q3;
  y.C = y.p3;
  y.D = y.p1;
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 100);
  return {
    title: 'Proposition 14',
    id: '11.14',
    prose: prop14,
    points: z,
    letters: {
      A: [1],
      B: [5],
      C: [8],
      D: [4],
      E: [4],
      F: [8],
      G: [1],
      H: [5],
      K: [6.5]
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
      rg.polygon([z.q1, z.q2, z.q3, z.q4]),
      rg.line(z.A, z.B),
      rg.line(z.A, z.K),
      rg.line(z.B, z.K),
      rg.line(z.G, z.H),
    ],
    polygonl: {
      CD: [z.p1, z.p2, z.p3, z.p4],
      EF: [z.q1, z.q2, z.q3, z.q4]
    }
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-1.2, 1].map(z => [-1, 1].map(x => [x, 0, z])).flat();
  y.B = v3.o;
  y.C = v3.r(v3.x, v3.y, 0.9);
  y.A = v3.r(v3.x, v3.y, 2.3);
  y.G = v3.s(v3.y, 1.5);
  [y.q1, y.q2, y.q3, y.q4, y.H, y.K] = [y.p1, y.p2, y.p3, y.p4, y.A, y.C].map(p => v3.add(p, y.G));
  [y.D, y.E, y.F] = [y.H, y.G, y.K].map(p => v3.add(p, v3.s(v3.z, 0.5)));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  return {
    title: 'Proposition 15',
    id: '11.15',
    prose: prop15,
    points: z,
    letters: {
      A: [3],
      B: [1],
      C: [7],
      D: [3],
      E: [1],
      F: [7],
      H: [3],
      G: [8],
      K: [7]
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
      rg.polygon([z.q1, z.q2, z.q3, z.q4]),
      rg.line(z.A, z.B),
      rg.line(z.B, z.C),
      rg.line(z.B, z.G),
      rg.line(z.H, z.G),
      rg.line(z.G, z.K),
      rg.line(z.D, z.E),
      rg.line(z.E, z.F),
    ]
  };
},

function() {
  let y = {};
  [y.A, y.p1, y.p2, y.B] = [-1, 1].map(z => [-1, 1].map(x => [x, 0, z])).flat();
  y.q = v3.s(v3.y, 1.5);
  y.E = v3.s(v3.x, -1);
  y.F = v3.x;
  [y.C, y.q1, y.q2, y.D, y.G, y.H] = [y.A, y.p1, y.p2, y.B, y.E, y.F].map(p => v3.add(y.q, p));
  y.K = v3.add(v3.s(v3.x, 3), v3.s(y.q, 0.5));
  y.o = v3.o;
  y.x = v3.x;
  y.y = v3.y;
  y.z = v3.z;

  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d,y[i])), 100);
  return {
    title: 'Proposition 16',
    id: '11.16',
    prose: prop16,
    points: z,
    letters: {
      A: [5],
      B: [1],
      C: [5],
      D: [1],
      E: [2.7, 2],
      F: [7.5, 5],
      G: [2.7, 2],
      H: [6],
      K: [7]
    },
    shapes: [
      rg.polygon([z.A, z.p1, z.B, z.p2]),
      rg.polygon([z.C, z.q1, z.D, z.q2]),
      rg.polygon([z.E, z.G, z.H, z.F]),
      rg.line(z.F, z.K),
      rg.line(z.H, z.K),
    ],
    polygonl: {
      AB: [z.A, z.p1, z.B, z.p2],
      CD: [z.C, z.q1, z.D, z.q2],
    },
    given: {
      EFK: [rg.line(z.E, z.F), rg.line(z.F, z.K)],
    }
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-1, 1].map(z => [-1.2, 1.2].map(x => [x, 0, z])).flat();;
  y.A = v3.r(v3.add(v3.s(v3.x, 0.3), v3.s(v3.z, 0.3)), v3.y, -0.2);
  y.C = v3.s(y.A, -1);
  y.q = v3.add(v3.s(v3.y, 1.5), v3.s(v3.x, 0.5));
  y.r = v3.s(y.q, 2);
  y.rB = v3.s(v3.r(y.A, v3.y, 0.5), 1.8);
  y.B = v3.add(y.r, y.rB);
  y.D = v3.add(y.r, v3.s(y.rB, -1));
  y.E = v3.add(y.A, v3.s(v3.sub(y.B, y.A), 0.5));
  y.F = v3.add(y.C, v3.s(v3.sub(y.D, y.C), 0.5));
  y.O = v3.add(y.A, v3.s(v3.sub(y.D, y.A), 0.5));
  [y.q1, y.q2, y.q3, y.q4] = [y.p1, y.p2, y.p3, y.p4].map(p => v3.add(p, y.q));
  [y.r1, y.r2, y.r3, y.r4] = [y.p1, y.p2, y.p3, y.p4].map(p => v3.add(p, y.r));
  [y.G, y.H, y.K, y.L, y.M, y.N] = [y.p1, y.p3, y.q1, y.q3, y.r1, y.r3];
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 100);
  return {
    title: 'Proposition 17',
    id: '11.17',
    prose: prop17,
    points: z,
    letters: {
      A: [1],
      B: [7],
      C: [3],
      D: [3],
      E: [7.8,2],
      F: [3.5, 2],
      G: [5],
      H: [1],
      K: [5],
      L: [1],
      M: [5],
      N: [1],
      O: [8.2, 2],
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
      rg.polygon([z.q1, z.q2, z.q3, z.q4]),
      rg.polygon([z.r1, z.r2, z.r3, z.r4]),
      rg.line(z.A, z.B),
      rg.line(z.C, z.D),
      rg.line(z.A, z.C),
      rg.line(z.B, z.D),
      rg.line(z.A, z.D),
      rg.line(z.F, z.O),
      rg.line(z.O, z.E),
    ],
    polygonl: {
      "GH": [z.p1, z.p2, z.p3, z.p4],
      "KL": [z.q1, z.q2, z.q3, z.q4],
      "MN": [z.r1, z.r2, z.r3, z.r4],
    }
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-1, 1].map(z => [-1.2, 0.6].map(x => [x, 0, z])).flat();
  [y.D, y.G, y.A, y. H,
    y.C, y.F, y.B, y.E] = [-1, 0].map(y => [-1.2, -0.6, 0, 0.6].map(x=>[x, y, 0])).flat();
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  return {
    title: 'Proposition 18',
    id: '11.18',
    prose: prop18,
    points: z,
    letters: {
      A: [1],
      G: [1],
      D: [1],
      C: [2.7,2],
      F: [5],
      B: [5],
      E: [7, 2],
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
      rg.polygon([z.D, z.C, z.E, z.H]),
      rg.line(z.G, z.F),
      rg.line(z.A, z.B),
    ],
    polygonl: {
      DE: [z.D, z.C, z.E, z.H],
    }
  };
},

function() {
  let y = {};
  [y.p1, y.p2, y.p4, y.p3] = [-1, 1].map(z => [-1, 1].map(x => [x, 0, z])).flat();
  [y.a1, y.a2, y.a4, y.a3] = [0, -1].map(y => [-1, 1].map(z => [z*0.5, y, z])).flat();
  [y.c1, y.c2, y.c4, y.c3] = [0, -1].map(y => [-1, 1].map(z => [-z*0.8, y, z])).flat();
  y.A = y.a1;
  y.C = y.c1;
  y.B = v3.s(v3.y, -1);
  y.D = v3.o;
  y.E = v3.add(v3.s(y.a1, 0.3), v3.s(y.B, 0.7));
  y.F = v3.add(v3.s(y.c1, 0.3), v3.s(y.B, 0.7));
  [y.o, y.x, y.y, y.z] = [v3.o, ...v3.i];
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.4));
  f = f.map(d => v3.r(d, f[1], -0.2));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  return {
    title: 'Proposition 19',
    id: '11.19',
    prose: prop19,
    points: z,
    letters: {
      A: [5],
      B: [1, 2],
      C: [5],
      D: [5],
      E: [1],
      F: [1],
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3, z.p4]),
      rg.polygon([z.a1, z.a2, z.a3, z.a4]),
      rg.polygon([z.c1, z.c2, z.c3, z.c4]),
      rg.line(z.B, z.D),
      rg.line(z.E, z.D),
      rg.line(z.F, z.D),
    ],
    polygonl: {
      "AB": [z.a1, z.a2, z.a3, z.a4],
      "BC": [z.c1, z.c2, z.c3, z.c4],
    }
  };
},

function() {
  let y = {};
  y.A = v3.s(v3.z, -1);
  y.B = v3.s(v3.r(v3.y, v3.z, 1.3), 1.5);
  y.C = v3.s(v3.r(y.B, v3.z, -2.5), 0.7);
  y.D = v3.s(v3.r(y.C, v3.z, -1.5), 0.6);
  y.E = v3.add(y.B, v3.s(v3.sub(y.C, y.B), 0.7));
  let z = {};
  let f = v3.i;
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  return {
    title: 'Proposition 20',
    id: '11.20',
    prose: prop20,
    points: z,
    letters: {
      D: [1],
      A: [2],
      C: [5],
      B: [5],
      E: [5]
    },
    shapes: [
      rg.polygon([z.B, z.C, z.D]),
      ...[z.B, z.C, z.D, z.E].map(p => rg.line(z.A, p))
    ],
    given: {
      A: [z.B, z.C, z.D].map(p => rg.line(z.A, p))
    }
  };
},

function() {
  let y = {};
  y.A = v3.s(v3.z, -1);
  y.B = v3.r(v3.y, v3.z, 1.1);
  y.C = v3.s(v3.r(y.B, v3.z, 1.8), 0.7);
  y.D = v3.s(v3.r(y.C, v3.z, 2), 2);
  let z = {};
  let f = v3.i;
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  return {
    title: 'Proposition 21',
    id: '11.21',
    prose: prop21,
    points: z,
    letters: {
      A: [5],
      B: [5],
      C: [1],
      D: [7],
    },
    shapes: [
      rg.polygon([z.B, z.D, z.C]),
      ...[z.B, z.C, z.D].map(p => rg.line(p, z.A)),
    ],
    given: {
      A: [z.B, z.C, z.D].map(p => rg.line(z.A, p))
    }
  };
},

function() {
  let z = {};
  z.A = v2.o;
  z.C = v2.add(z.A, v2.s(v2.x, 100));
  z.B = v2.add(z.A, v2.add(v2.s(v2.y, -80), v2.s(v2.sub(z.C, z.A), 0.5)));
  z.D = v2.add(z.C, v2.s(v2.x, 30));
  z.F = v2.add(z.D, v2.s(v2.x, 120));
  z.E = v2.add(z.D, v2.add(v2.s(v2.y, -70), v2.s(v2.sub(z.F, z.D), 0.5)));
  z.G = v2.add(z.F, v2.s(v2.x, 30));
  z.K = v2.add(z.G, v2.s(v2.x, 90));
  z.H = v2.add(z.G, v2.add(v2.s(v2.y, -100), v2.s(v2.sub(z.K, z.G), 0.5)));
  let bc = v2.u(v2.sub(z.C, z.B));
  let ba = v2.u(v2.sub(z.A, z.B));
  let t = Math.acos(v2.dot(bc, ba));
  z.L = v2.add(z.H, v2.rot(v2.sub(z.K, z.H), -t));
  return {
    title: 'Proposition 22',
    id: '11.22',
    prose: prop22,
    points: z,
    letters: {
      A: [5],
      B: [1],
      C: [5],
      D: [5],
      E: [1],
      F: [5],
      G: [5],
      H: [1],
      K: [5],
      L: [8],
    },
    shapes: [
      rg.polygon([z.A, z.C, z.B]),
      rg.polygon([z.D, z.F, z.E]),
      rg.polygon([z.G, z.K, z.H]),
      ...[z.G, z.H, z.K].map(p => rg.line(p, z.L)),
    ]
  };
},

function() {
  let y = {};
  y.O = v3.o;
  y.L = v3.r(v3.x, v3.y, 2.5);
  y.M = v3.r(y.L, v3.y, 2.2);
  y.N = v3.r(y.M, v3.y, 2.1);
  y.P = v3.s(y.L, 0.6);
  y.Q = v3.s(y.M, 0.6);
  y.R = v3.s(v3.y, -1.5);
  [y.o, y.x, y.y, y.z] = [v3.o, ...v3.i];
  let yc = [v3.x];
  for(let i = 0; i < 20; i++)
    yc.push(v3.r(yc[i], v3.y, (1/20)*Math.PI*2))
  let z = {};
  let zc = [];
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.9));
  f = f.map(d => v3.r(d, f[1], -0.5));
  let o = (p) => v3.add([150, 200, 0], p);
  for(let i in y)
    z[i] = o(v3.s(f.map(d => v3.dot(d, y[i])), 150));
  for(let i = 0; i < yc.length; i++)
    zc.push(o(v3.s(f.map(d => v3.dot(d, yc[i])), 150)));

  z.A = v2.o;
  z.C = v2.add(z.A, v2.s(v2.x, 100));
  z.B = v2.add(z.A, v2.add(v2.s(v2.y, -80), v2.s(v2.sub(z.C, z.A), 0.5)));
  z.D = v2.add(z.C, v2.s(v2.x, 30));
  z.F = v2.add(z.D, v2.s(v2.x, 120));
  z.E = v2.add(z.D, v2.add(v2.s(v2.y, -70), v2.s(v2.sub(z.F, z.D), 0.5)));
  z.G = v2.add(z.F, v2.s(v2.x, 30));
  z.K = v2.add(z.G, v2.s(v2.x, 90));
  z.H = v2.add(z.G, v2.add(v2.s(v2.y, -100), v2.s(v2.sub(z.K, z.G), 0.5)));

  return {
    title: 'Proposition 23',
    id: '11.23',
    prose: prop23,
    points: z,
    letters: {
      A: [5],
      B: [1],
      C: [5],
      D: [5],
      E: [1],
      F: [5],
      G: [5],
      H: [1],
      K: [5],
      L: [3],
      M: [1],
      N: [7],
      O: [5],
      P: [6.2],
      Q: [7],
      R: [1],
    },
    shapes: [
      rg.polygon([z.A, z.C, z.B]),
      rg.polygon([z.D, z.F, z.E]),
      rg.polygon([z.G, z.K, z.H]),
      rg.polygon([z.L, z.M, z.N]),
      rg.line(z.P, z.Q),
      ...[z.O, z.L, z.M, z.N].map(p => rg.line(p, z.R)),
      ...[z.L, z.M, z.N].map(p => rg.line(p, z.O)),
      rg.curve(zc),
    ],
    given: {
      LMN: [rg.curve(zc)],
      R: [z.L, z.M, z.N].map(p => rg.line(z.R, p)),
    }
  };
},

function() {
  let y = {};
  y.O = v3.o;
  y.L = v3.r(v3.x, v3.y, 2.7);
  y.M = v3.r(y.L, v3.y, 2);
  y.N = v3.r(y.M, v3.y, 2);
  y.P = v3.s(y.L, 0.6);
  y.Q = v3.s(y.M, 0.6);
  y.R = v3.s(v3.y, -1.5);
  [y.o, y.x, y.y, y.z] = [v3.o, ...v3.i];
  let yc = [v3.x];
  for(let i = 0; i < 20; i++)
    yc.push(v3.r(yc[i], v3.y, (1/20)*Math.PI*2))
  let z = {};
  let zc = [];
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.9));
  f = f.map(d => v3.r(d, f[1], -0.5));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  for(let i = 0; i < yc.length; i++)
    zc.push(v3.s(f.map(d => v3.dot(d, yc[i])), 150));
  z.D = v2.s(v2.y, 300);
  z.B = v2.add(z.D, v2.s(v2.x, 150));
  z.A = v2.add(z.D, v2.s(v2.x, -150));
  z.C = v2.add(z.D, v2.s(v2.rot(v2.x, -1), 150));
  return {
    title: 'Lemma',
    id: '11.23-lem',
    prose: propl1,
    points: z,
    letters: {
      A: [5],
      B: [5],
      C: [1],
      L: [3],
      M: [1],
      N: [7],
      O: [5],
      P: [5],
      Q: [7],
      R: [1],
    },
    shapes: [
      rg.polygon([z.A, z.B, z.C]),
      rg.arc(z.D, z.A, z.B),
      rg.polygon([z.L, z.M, z.N]),
      rg.line(z.P, z.Q),
      ...[z.O, z.L, z.M, z.N].map(p => rg.line(p, z.R)),
      ...[z.L, z.M, z.N].map(p => rg.line(p, z.O)),
      rg.curve(zc),
    ]
  };
},

function() {
  let y = {};
  [y.o, y.x, y.y, y.z] = [v3.o, ...v3.i];
  [y.C, y.D, y.B, y.A] = [1, -1].map(y => [1, -1].map(z => [0, y, z])).flat();
  [y.F, y.E, y.H, y.G] = [y.C, y.D, y.B, y.A].map(p => v3.add(v3.s(v3.x, 3), p));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.7));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 100);
  let s = [z.A, z.D, z.C, z.B];
  let t = [z.G, z.E, z.F, z.H];
  return {
    title: 'Proposition 24',
    id: '11.24',
    prose: prop24,
    points: z,
    letters: {
      A: [3],
      B: [2],
      C: [2.7, 2],
      D: [5],
      E: [5],
      F: [7],
      G: [7],
      H: [8],
    },
    shapes: [
      rg.line(z.A, z.H),
      rg.line(z.D, z.F),
      rg.polygon(s),
      rg.polygon(t),
      ...s.map((p, i) => rg.line(p, t[i])),
    ],
    given: {
      CDHG: piped(z, 'DCBAEFHG'),
    },
    polygonl: {
      "AC": "ADCB",
      "GF": "GEFH",
      "AH": "AGHB",
      "DF": "DEFC",
      "BF": "BCFH",
      "AE": "ADEG",
      "BG": "AGHB",
      "GB": "AGHB",
      "CE": "DEFC",
      "FG": "GEFH",
    }
  };
},

function() {
  let y = {}, a;
  function s(ls, ps) {
    for(let i = 0; i < ls.length; i++)
      y[ls[i]] = ps[i];
  }
  a = [1, -1].map(y => [1, -1].map(z => [0, y, z])).flat();
  s('FEUG', a);
  s('VARB', a.map(p => v3.add(p, v3.s(v3.x, -0.9))));
  s('PKQa', a.map(p => v3.add(p, v3.s(v3.x, -0.9*2))));
  s('bLXO', a.map(p => v3.add(p, v3.s(v3.x, -0.9*3))));
  s('CHDc', a.map(p => v3.add(p, v3.s(v3.x, 0.6))));
  s('WMYI', a.map(p => v3.add(p, v3.s(v3.x, 0.6*2))));
  s('SNTd', a.map(p => v3.add(p, v3.s(v3.x, 0.6*3))));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.3));
  f = f.map(d => v3.r(d, f[1], -0.2));
  let p = (v) => v3.s(f.map(d => v3.dot(d, v)), 85);
  for(let i in y)
  {
    if(y[i].length && y[i][0].length)
      z[i] = y[i].map(p);
    else
      z[i] = p(y[i]);
  }
  return {
    title: 'Proposition 25',
    id: '11.25',
    prose: prop25,
    points: z,
    letters: {
      X: [1],
      Q: [1],
      R: [1],
      U: [1],
      D: [1],
      Y: [1],
      T: [1],
      A: [5],
      L: [5],
      K: [5],
      M: [5],
      N: [5],
      E: [5],
      H: [5],
      P: [2.2, 2],
      V: [2.2, 2],
      F: [2.2, 2],
      C: [2.2, 2],
      W: [2.2, 2],
      S: [2.2, 2],
      O: [2],
      B: [2],
      G: [2],
      I: [1.5],
    },
    shapes: [
      rg.polygon([...'VRBA'].map(l => z[l])),
      rg.polygon([...'PQaK'].map(l => z[l])),
      rg.polygon([...'bXOL'].map(l => z[l])),
      rg.polygon([...'FUGE'].map(l => z[l])),
      rg.polygon([...'CDcH'].map(l => z[l])),
      rg.polygon([...'WYIM'].map(l => z[l])),
      rg.polygon([...'STdN'].map(l => z[l])),
      ...[...'bLXO'].map((l, i) => rg.line(z[l], z['SNTd'[i]])),
    ],
    polygonl: {
      GF: 'FUGE',
      FG: "FUGE",
      RA: "RBAV",
      DH: "DcHC",
      LP: "LKPb",
      KV: "KAVP",
      HW: "HMWC",
      MS: "MNSW",
      AF: "AEFV",
      KO: "KaOL",
      KB: "KABa",
      AG: "AEGB",
      LX: "LbXO",
      KQ: "KPQa",
      AR: "AVRB",
      EC: "EHCF",
      HG: "HcGE",
      HI: "HMIc",
      IN: "IMNd",
      MY: "MWYI",
      NT: "NSTd",
      LF: "LEFb",
      NF: "NSFE",
      FH: "FEHC",
      HF: "HCFE",
      FN: "FENS"
    },
    given: {
      ABCD: piped(z, 'AVRBHCDc'),
      ABFU: piped(z, 'AVRBEFUG'),
      EGCD: piped(z, 'EFUGHCDc'),
      LQ: piped(z, 'LbXOKPQa'),
      KR: piped(z, 'KPQaAVRB'),
      DM: piped(z, 'DcHCYIMW'),
      MT: piped(z, 'MWYINSTd'),
      AU: piped(z, 'AVRBEFUG'),
      ED: piped(z, 'EFUGHCDc'),
      LU: piped(z, 'LbXOEFUG'),
      HU: piped(z, 'HCDcEFUG'),
      UH: piped(z, 'HCDcEFUG'),
      NU: piped(z, 'NSTdEFUG'),
    }
  };
},

function() {
  let y = {};
  [y.P, y.Q, y.S, y.R] = [-1.2, 1.2].map(z => [-1, 3].map(x => [x, 0, z])).flat();
  [y.o, y.x, y.y, y.z] = [v3.o, v3.x, v3.y, v3.z];
  y.D = v3.s(v3.x, -0.7);
  y.G = v3.add(y.D, v3.s(v3.x, 1.5));
  y.C = v3.add(y.D, v3.s(v3.r(v3.x, v3.y, -0.8), 1));
  y.E = v3.add(y.D, v3.s(v3.r(v3.x, v3.y, 0.5), 1.3));
  y.F = v3.add(y.G, v3.s(v3.y, -2));
  [y.L, y.A, y.B, y.H, y.K] = [y.C, y.D, y.E, y.F, y.G]
    .map(p => v3.add(v3.r(p, v3.y, -1.2), v3.s(v3.x, 2)));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.6));
  f = f.map(d => v3.r(d, f[1], -0.2));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 100);
  return {
    title: 'Proposition 26',
    id: '11.26',
    prose: prop26,
    points: z,
    letters: {
      C: [5],
      D: [3],
      E: [6],
      F: [1],
      G: [7],
      L: [3],
      A: [4],
      B: [7],
      H: [1],
      K: [8],
    },
    shapes: [
      rg.polygon([z.P, z.Q, z.R, z.S]),
      rg.line(z.D, z.G),
      rg.polygon([z.D, z.C, z.G, z.E]),
      ...[z.D, z.C, z.G, z.E].map(p => rg.line(p, z.F)),
      rg.line(z.A, z.K),
      rg.polygon([z.L, z.A, z.B, z.K]),
      ...[z.L, z.A, z.B, z.K].map(p => rg.line(p, z.H)),
    ],
    given: {
      D: [z.C, z.E, z.F].map(p => rg.line(z.D, p)),
    }
  };
},

function() {
  let y = {}, c, e, a, b;
  function s(ls, ps) {
    for(let i = 0; i < ls.length; i++)
      y[ls[i]] = ps[i];
  }
  c = [-1, 1].map(z => [1, -1].map(y => [-1+y/4, y, z])).flat();
  s('CFGa', c);
  s('EbcD', c.map(p => v3.add(p, v3.s(v3.x, 2))));
  s('AHKd', c.map(p => v3.add(v3.s(p, 0.6), v3.s(v3.x, 3))));
  s('BMeL', [...'EbcD'].map(l => v3.add(v3.s(y[l], 0.6), v3.s(v3.x, 3))));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 80);
  return {
    title: 'Proposition 27',
    id: '11.27',
    prose: prop27,
    points: z,
    letters: {
      A: [5],
      B: [5],
      C: [5],
      D: [1],
      E: [5],
      F: [3],
      G: [8.3],
      H: [3],
      K: [8.1, 2],
      L: [1],
      M: [2],
    },
    shapes: [
      ...piped(z, 'CGaFEcDb'),
      ...piped(z, 'AHdKBMLe'),
    ],
    given: {
      CD: piped(z, 'CGaFEcDb'),
      AL: piped(z, 'AHdKBMLe'),
      C: [z.F, z.E, z.G].map(p => rg.line(p, z.C)),
    },
    polygonl: {
      HB: 'HABM',
      GE: "GCEc",
      KB: "KABe",
      KH: "KdHA",
      GF: "GaFC",
      FE: "FCEb"
    }
  };
},

function() {
  let y = {}, d, a;
  [y.D, y.H, y.C, y.B] = d = [-1, 1].map(z => [1, -1].map(y => [-1+y/4, y, z])).flat();
  [y.A, y.E, y.G, y.F] = d.map(p => v3.add(p, v3.s(v3.x, 2)));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.1));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 100);
  return {
    title: 'Proposition 28',
    id: '11.28',
    prose: prop28,
    points: z,
    letters: {
      A: [5],
      B: [1],
      C: [3],
      D: [5],
      E: [7],
      F: [1],
      G: [7],
      H: [3]
    },
    shapes: [
      rg.polygon([z.D, z.C, z.B, z.H]),
      rg.polygon([z.A, z.G, z.F, z.E]),
      rg.polygon([z.D, z.E, z.F, z.C]),
      ...[z.D,z.C,z.B,z.H].map((p, i) => rg.line(p, [z.A,z.G,z.F,z.E][i]))
    ],
    given: {
      AB: piped(z, 'AGCDEFBH'),
    },
    polygonl: {
      CA: "CDAG",
      EB: "EFBH",
      GE: "GFEA",
      CH: "CBHD",
      AC: "AGCD",
      CE: "CDEF",
      BE: "BHEF"
    }
  };
},

function() {
  let y = {}, a;
  [y.G, y.N, y.E, y.K] = a = [-1, 1].map(z => [-1.0, 1.0].map(x=> [x, 0, z])).flat();
  [y.F, y.M, y.D, y.H] = a.map(p => v3.add(p, v3.s(v3.x, -0.6)));
  [y.A, y.L, y.C, y.B] = a.map(p => v3.add(p, v3.add(v3.y, v3.s(v3.x, 0.1))));
  [y.o, y.x, y.y, y.z] = [v3.o, ...v3.i];
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.25));
  f = f.map(d => v3.r(d, f[1], 0.10));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 160);
  return {
    title: 'Proposition 29',
    id: '11.29',
    prose: prop29,
    points: z,
    letters: {
      A: [5],
      B: [8],
      C: [8],
      D: [1],
      E: [1],
      F: [4],
      G: [8],
      H: [1],
      K: [1],
      L: [5],
      M: [4],
      N: [7],
    },
    shapes: [
      rg.polygon([z.F, z.N, z.K, z.D]),
      rg.polygon([z.A, z.L, z.B, z.C]),
      rg.line(z.E, z.G),
      rg.line(z.H, z.M),
      ...[z.A, z.L, z.B, z.C].map((p, i) => rg.line(p, [z.G, z.N, z.K, z.E][i])),
      ...[z.A, z.L, z.B, z.C].map((p, i) => rg.line(p, [z.F, z.M, z.H, z.D][i])),
      rg.line(z.F, z.N, {strokeWidth: 2}),
    ]
  };
},

function() {
  let y = {}, ya, yo;
  [y.A, y.C, y.L, y.B] = ya = [-1, 1].map(z => [-1, 1].map(x => [x, 0, z])).flat();
  [y.O, y.Q, y.P, y.R] = yo = ya.map(p => v3.add(p, v3.s(v3.y, -2)));
  [y.G, y.E, y.N, y.K] = yo.map(p => v3.add(p, v3.s(v3.x, -0.7)));
  [y.F, y.D, y.M, y.H] = yo.map(p => v3.add(p, v3.s(v3.z, -0.9)));
  [y.o, y.x, y.y, y.z] = [v3.o, ...v3.i];
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.3));
  f = f.map(d => v3.r(d, f[1], 0.2));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 100);
  let za = [z.A, z.C, z.B, z.L]
  let zo = [z.O, z.Q, z.R, z.P]
  let zg = [z.G, z.E, z.K, z.N]
  let zf = [z.F, z.D, z.H, z.M]
  return {
    title: 'Proposition 30',
    id: '11.30',
    prose: prop30,
    points: z,
    letters: {
      N: [1],
      P: [1],
      K: [1],
      R: [1],
      G: [8.2],
      M: [8.2],
      O: [8.2],
      E: [8.2],
      H: [8],
      Q: [8],
      D: [6],
      F: [6],
      L: [4],
      B: [4],
      A: [5],
      C: [5]
    },
    shapes: [
      rg.polygon(za),
      rg.polygon(zo),
      rg.polygon(zg),
      rg.polygon(zf),
      ...za.map((p, i) => rg.line(p, zo[i])),
      ...za.map((p, i) => rg.line(p, zg[i])),
      ...za.map((p, i) => rg.line(p, zf[i])),
    ]
  };
},

function() {
  return {
    title: 'Proposition 31',
    id: '11.31',
    prose: prop31,
    figures: [
      (function() {
        let y = {};
        function s(ls, ps) {
          for(let i = 0; i < ls.length; i++)
            y[ls[i]] = ps[i];
        }

        s('ALGM', [-1, 1].map(z => [-1, 1].map(x => [x, 0, z])).flat());
        s('HBKE', [...'ALGM'].map(l =>  v3.add(v3.add(v3.s(v3.y, -2), v3.s(v3.x, -1)), y[l])));
        s('UWVd', [...'ALMG'].map(l =>  v3.add(v3.add(v3.s(v3.y, 1), v3.s(v3.x, -4)), y[l])));
        s('RTXS', [...'UWVd'].map(l =>  v3.add(v3.add(v3.s(v3.y, -2), v3.s(v3.x, -1)), y[l])));
        s('Ybce', [...'RTXS'].map(l =>  v3.add(v3.s(v3.y, 2), y[l])));
        s('DaIF', [...'RTXS'].map(l =>  v3.add(v3.s(v3.y, -2), y[l])));
        s('COQP', [...'RSFD'].map(l =>  v3.add(v3.s(v3.x, -2), y[l])));
        [y.o, y.x, y.y, y.z] = [v3.o, ...v3.i];
        let z = {};
        let f = v3.i;
        f = f.map(d => v3.r(d, f[0], -0.3));
        f = f.map(d => v3.r(d, f[1], -0.3));
        for(let i in y)
          z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 50);
        return {
          points: z,
          smallLetters: false,
          letters: {
            A: [5],
            L: [5],
            M: [8],
            G: [8],
            B: [4.2],
            E: [1],
            K: [1],
            H: [3],
            Y: [5],
            U: [5],
            b: [5],
            W: [5],
            V: [8],
            c: [8],
            d: [8,2],
            e: [8],
            R: [4],
            T: [4],
            X: [8],
            S: [8],
            C: [5],
            O: [8],
            a: [2],
            D: [2],
            P: [2],
            I: [1],
            F: [1],
            Q: [1],
          },
          shapes: [
            rg.polygon([...'ALMG'].map(l=>z[l])),
            rg.polygon([...'HBEK'].map(l=>z[l])),
            ...[...'ALMG'].map((l, i) => rg.line(z[l], z['HBEK'[i]])),
            rg.line(z.H, z.B, {stroke:hsl(0), strokeWidth: 10}),
            rg.line(z.L, z.B, {stroke:hsl(0), strokeWidth: 10}),
            rg.line(z.H, z.B, {strokeWidth: 1}),
            rg.line(z.L, z.B, {strokeWidth: 1}),
            rg.polygon([...'UWVd'].map(l=>z[l])),
            rg.polygon([...'RTXS'].map(l=>z[l])),
            ...[...'UWVd'].map((l, i) => rg.line(z[l], z['RTXS'[i]])),
            rg.polygon([...'Ybce'].map(l=>z[l])),
            ...[...'Ybce'].map((l, i) => rg.line(z[l], z['RTXS'[i]])),
            rg.polygon([...'DaIF'].map(l=>z[l])),
            ...[...'DaIF'].map((l, i) => rg.line(z[l], z['RTXS'[i]])),
            rg.polygon([...'COQP'].map(l=>z[l])),
            ...[...'COQP'].map((l, i) => rg.line(z[l], z['RSFD'[i]])),
          ]
        }
      })(),
      (function() {
        let y = {};
        function s(ls, ps) {
          for(let i = 0; i < ls.length; i++)
            y[ls[i]] = ps[i];
        }
        s('LBAH', [-1, 1].map(z => [-1, 1].map(x => [x, 2, z])).flat());
        s('VTUN', [...'LBAH'].map(l => v3.add(y[l], v3.add(v3.z, v3.s(v3.x, -1)))));
        s('MEKG', [...'VTNU'].map(l => v3.add(y[l], v3.s(v3.y, -1.5))));
        s('PCRDWYIXQOSF', [...'LBHAVTNUMEKG'].map(l =>
          v3.add(v3.s(v3.x, -4.5), v3.r(v3.r(y[l], v3.y, 0.7), v3.x, 0.1))));
        [y.o, y.x, y.y, y.z] = [v3.o, ...v3.i];
        let z = {};
        let f = v3.i;
        f = f.map(d => v3.r(d, f[0], -0.3));
        f = f.map(d => v3.r(d, f[1], -0.3));
        for(let i in y)
          z[i] = v3.add([0, 150], v3.s(f.map(d => v3.dot(d, y[i])), 70));
        return {
          points: z,
          letters: {
            L: [5],
            B: [5],
            A: [8],
            T: [6],
            V: [4],
            U: [6],
            N: [6],
            H: [8],
            M: [2],
            G: [1],
            E: [2],
            K: [1],
            C: [5],
            R: [5],
            Y: [5],
            I: [5],
            P: [3],
            D: [5],
            O: [1],
            S: [7],
            W: [8],
            X: [7.5, 3],
            Q: [1],
            F: [1],
          },
          shapes: [
            rg.polygon([...'LBHA'].map(l => z[l])),
            rg.polygon([...'VTNU'].map(l => z[l])),
            rg.polygon([...'MEKG'].map(l => z[l])),
            ...[...'LBHA'].map((l, i) => rg.line(z[l], z['MEKG'[i]])),
            ...[...'VTNU'].map((l, i) => rg.line(z[l], z['MEKG'[i]])),
            rg.polygon([...'PCRD'].map(l => z[l])),
            rg.polygon([...'WYIX'].map(l => z[l])),
            rg.polygon([...'QOSF'].map(l => z[l])),
            ...[...'PCRD'].map((l, i) => rg.line(z[l], z['QOSF'[i]])),
            ...[...'WYIX'].map((l, i) => rg.line(z[l], z['QOSF'[i]])),
          ]
        }
      })()
    ]
  };
},

function() {
  let y = {};
  function s(ls, ps) {
    for(let i = 0; i < ls.length; i++)
      y[ls[i]] = ps[i];
  }
  [y.o, y.x, y.y, y.z] = [v3.o, ...v3.i];
  s('AMON', [1, -1].map(y => [-1, 1].map(z => [y/2, y, z])).flat());
  s('PEQB', [...'AMON'].map(l => v3.add(v3.s(v3.x, 3), y[l])));
  s('CLSR', [1, -1].map(y => [-1, 1].map(z => [5.5-y/2-z/4, y, z])).flat());
  s('GFTD', [...'CLSR'].map(l => v3.add(v3.s(v3.x, 3), y[l])));
  s('HUVK', [...'CLSR'].map(l => v3.add(v3.s(v3.x, 5), y[l])));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.1));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 40);
  return {
    title: 'Proposition 32',
    id: '11.32',
    prose: prop32,
    points: z,
    letters: {
      A: [5],
      B: [1],
      E: [7],
      L: [3],
      C: [5],
      G: [5],
      H: [5],
      F: [2],
      D: [1],
      K: [1],
      /*
      M: [6],
      N: [1],
      O: [3],
      P: [5],
      Q: [2],
      R: [1],
      S: [8],
      T: [8],
      U: [2],
      V: [8],
      */
    },
    shapes: [
      rg.polygon([...'AMNO'].map(l => z[l])),
      rg.polygon([...'PEBQ'].map(l => z[l])),
      ...[...'AMNO'].map((l, i) => rg.line(z[l], z['PEBQ'[i]])),
      rg.polygon([...'CLRS'].map(l => z[l])),
      rg.polygon([...'GFDT'].map(l => z[l])),
      rg.polygon([...'HUKV'].map(l => z[l])),
      ...[...'CLRS'].map((l, i) => rg.line(z[l], z['HUKV'[i]])),
      ...[...'OBP'].map(l => rg.line(z[l], z.Q, {stroke: hsl(0), strokeWidth: 7})),
      ...[...'OBP'].map(l => rg.line(z[l], z.Q)),
      ...[...'CRV'].map(l => rg.line(z[l], z.S, {stroke: hsl(0), strokeWidth: 7})),
      ...[...'CRV'].map(l => rg.line(z[l], z.S)),
    ]
  };
},

function() {
  let y = {};
  function s(ls, ps) {
    for(let i = 0; i < ls.length; i++)
      y[ls[i]] = ps[i];
  }
  // .map(p => v3.r(p, v3.y, Math.PI/4))
  s('CSFN', [-1, 1].map(x => [1.5, -1.5].map(z => [x-2, 0, z])).flat());
  s('TURD', [...'CSFN'].map(l => v3.add(v3.s(v3.y, 2.5), y[l])));
  s('BHOQ', [-1, 1].map(x => [1, -1].map(z => [x, 5, z])).flat());
  s('GEVK', [...'BHOQ'].map(l => v3.add(v3.s(v3.y, 2), y[l])));
  s('LWXY', [...'EKQH'].map(l => v3.add(v3.s(v3.z, -2), y[l])));
  s('Aabc', [...'EHBG'].map(l => v3.add(v3.s(v3.x, -4), y[l])));
  s('MPZd', [...'ELWK'].map(l => v3.add(v3.s(v3.y, 2), y[l])));

  [y.o, y.x, y.y, y.z] = [v3.o, ...v3.i];
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[1], 0.4));
  f = f.map(d => v3.r(d, f[0], -0.3));
  // f = f.map(d => v3.r(d, f[2], 0.1));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 50);
  // [...'CSFNTURD'].forEach(l => { z[l] = v3.add(v3.s(v3.x, -100), z[l]); });
  return {
    title: 'Proposition 33',
    id: '11.33',
    // img: '/img/11/33',
    prose: prop33,
    points: z,
    letters: {
      C: [1],
      F: [1],
      N: [8],
      R: [2],
      D: [5],

      A: [5],
      E: [3.9,4],
      M: [3],
      P: [5],
      G: [2],
      B: [1],
      O: [1],
      Q: [8],
      H: [8],
      K: [7.5],
      L : [8],
      S: [8],
      T: [2],
      U: [4],
      /*
      a: [6],
      b: [1],
      c: [4],
      Z: [5],
      d: [2],
      W: [7],
      X: [8],
      Y: [3.5, 2],
      V: [7.5],
      */
    },
    shapes: [
      rg.polygon([...'CSNF'].map(l => z[l])),
      rg.polygon([...'TUDR'].map(l => z[l])),
      ...[...'TUDR'].map((l, i) => rg.line(z[l], z['CSNF'[i]])),
      rg.polygon([...'BHQO'].map(l => z[l])),
      rg.polygon([...'GEKV'].map(l => z[l])),
      ...[...'BHQO'].map((l, i) => rg.line(z[l], z['GEKV'[i]])),
      rg.polygon([...'Aabc'].map(l => z[l])),
      rg.polygon([...'MPZd'].map(l => z[l])),
      rg.polygon([...'LWXY'].map(l => z[l])),
      ...[...'LWXY'].map((l, i) => rg.line(z[l], z['EKQH'[i]])),
      ...[...'Aabc'].map((l, i) => rg.line(z[l], z['EHBG'[i]])),
      ...[...'MPZd'].map((l, i) => rg.line(z[l], z['ELWK'[i]])),
      ...[...'NCU'].map(l => rg.line(z[l], z.S, {stroke: hsl(0), strokeWidth: 10})),
      ...[...'NCU'].map(l => rg.line(z[l], z.S)),
    ]
  };
},

function() {
  return {
    title: 'Proposition 34',
    id: '11.34',
    // imgs: [/*'/img/11/34',*/ '/img/11/34b'],
    prose: prop34,
    figures: [
      (function() {
        let y = {};
        function s(ls, ps) {
          for(let i = 0; i < ls.length; i++)
            y[ls[i]] = ps[i];
        }
        s('AHEL', [-1.5, 0].map(x => [0, 1].map(z => [x+z/4, 0, z])).flat());
        s('GKFB', [...'AHEL'].map(l => v3.add(y[l], v3.s(v3.y, -1))));
        s('CQNP', [1.2, 2.2].map(x => [0, 1].map(z => [x-z/4, 0, z])).flat());
        s('TXWV', [...'CQNP'].map(l => v3.add(y[l], v3.s(v3.y, -1))));
        s('MROD', [...'CQNP'].map(l => v3.add(y[l], v3.s(v3.y, -1.5))));

        let z = {};
        let f = v3.i;
        f = f.map(d => v3.r(d, f[0], -0.3));
        for(let i in y)
          z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 100);
        return {
          points: z,
          letters: {
            A: [5],
            E: [5],
            H: [6],
            L: [6],
            G: [2],
            K: [1],
            B: [1],
            F: [2],
            Q: [3],
            C: [5],
            N: [5],
            P: [4],
            T: [6],
            V: [4],
            R: [1],
            D: [1],
            M: [8],
            O: [8]
          },
          shapes: [
            rg.polygon([...'AELH'].map(l => z[l])),
            rg.polygon([...'GFBK'].map(l => z[l])),
            ...[...'AELH'].map((l, i) => rg.line(z[l], z['GFBK'[i]])),
            rg.polygon([...'CNPQ'].map(l => z[l])),
            rg.polygon([...'TWVX'].map(l => z[l])),
            rg.polygon([...'MODR'].map(l => z[l])),
            ...[...'MODR'].map((l, i) => rg.line(z[l], z['CNPQ'[i]])),
          ]
        };
      })(),
      (function() {
        let y = {};
        function s(ls, ps) {
          for(let i = 0; i < ls.length; i++)
            y[ls[i]] = ps[i];
        }

        s('GKFB', [-1, 1].map(x => [-1, 1].map(z => [x+1, 1, z])).flat());
        s('TVSU', [...'GKFB'].map(l => v3.add(y[l], v3.s(v3.y, 1.4))));
        s('AHEL', [...'TVSU'].map(l => v3.add(y[l], v3.sub(v3.s(v3.z, 0.8), v3.s(v3.x, 0.6)))));
        s('ODMR', [...'GKTV'].map(l => v3.add(y[l], v3.add(v3.s(v3.y, 3), v3.s(v3.x, -0.6)))));
        s('NPCQ', [...'ODMR'].map(l => v3.add(y[l], v3.s(v3.x, 3))));
        s('WaXY', [...'NPCQ'].map(l => v3.add(y[l], v3.add(v3.s(v3.y, -0.6), v3.s(v3.z, -0.6)))));

        let z = {};
        let f = v3.i;
        f = f.map(d => v3.r(d, f[0], -0.3));
        f = f.map(d => v3.r(d, f[1], 0.3));
        for(let i in y)
          z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 80);
        return {
          points: z,
          letters: {
            T: [4],
            S: [7],
            A: [4],
            E: [6],
            V: [3],
            U: [2],
            H: [3],
            L: [2],
            G: [8],
            F: [8],
            K: [1],
            B: [1],

            D: [2],
            R: [3],
            O: [4],
            M: [5],
            a: [1],
            W: [7],
            P: [1],
            N: [8],
            Y: [8],
            Q: [8],
            X: [7],
            C: [5],

          },
          shapes: [
            rg.polygon([...'GFBK'].map(l => z[l])),
            rg.polygon([...'TSUV'].map(l => z[l])),
            ...[...'TSUV'].map((l, i) => rg.line(z[l], z['GFBK'[i]])),
            rg.polygon([...'AELH'].map(l => z[l])),
            ...[...'AELH'].map((l, i) => rg.line(z[l], z['GFBK'[i]])),
            rg.polygon([...'ODRM'].map(l => z[l])),
            rg.polygon([...'NPQC'].map(l => z[l])),
            ...[...'ODRM'].map((l, i) => rg.line(z[l], z['NPQC'[i]])),
            rg.polygon([...'WaYX'].map(l => z[l])),
            ...[...'WaYX'].map((l, i) => rg.line(z[l], z['ODRM'[i]])),
          ]
        };
      })(),
    ]

  };
},

function() {
  let y = {};
  y.D = v3.o;
  y.N = v3.x;
  y.M = v3.add(y.N, v3.s(v3.y, -1));
  y.F = v3.r(y.N, v3.y, 0.9);
  y.E = v3.r(y.N, v3.y, -0.6);
  [y.A, y.B, y.C, y.K, y.H] = [y.D, y.E, y.F, y.N, y.M]
    .map(p => v3.add(v3.r(p, v3.y, -0.15), v3.add(v3.s(v3.x, -1.5), v3.s(v3.z, 1))));
  [y.R, y.S, y.P, y.Q] = [y.H, y.K, y.B, y.C].map(p => v3.add(y.A, v3.s(v3.sub(p, y.A), 1.5)));
  [y.G, y.L] = [y.R, y.S].map(p => v3.add(y.A, v3.s(v3.sub(p, y.A), 0.9)));
  [y.p1, y.p2, y.p4, y.p3] = [-1.5, 2.5].map(z => [-1.8, 1.4].map(x => [x, 0, z])).flat();
  [y.o, y.x, y.y, y.z] = [v3.o, ...v3.i];
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], 0.1));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 120);
  return {
    title: 'Proposition 35',
    id: '11.35',
    prose: prop35,
    points: z,
    letters: {
      M: [1],
      D: [3],
      E: [2],
      N: [7],
      F: [5],
      H: [2],
      H: [2],
      A: [3],
      C: [4],
      B: [2],
      K: [6],
      L: [5],
      G: [2],
    },
    shapes: [
      rg.polygon([z.p1, z.p2, z.p3 ,z.p4]),
      ...[z.D, z.E, z.N, z.F].map(p => rg.line(p, z.M)),
      ...[z.E, z.N, z.F].map(p => rg.line(p, z.D)),
      ...[z.E, z.N].map(p => rg.line(p, z.F)),
      rg.line(z.E, z.N),
      ...[z.B, z.C, z.K].map(p => rg.line(p, z.H)),
      ...[z.P, z.Q, z.R, z.S].map(p => rg.line(p, z.A)),
      rg.line(z.G, z.L),
      rg.polygon([z.B, z.C, z.K]),
    ]
  };
},

function() {
  let y = {};
  function s(ls, ps) {
    for(let i = 0; i < ls.length; i++)
      y[ls[i]] = ps[i];
  }
  s('MPQH', [-0.66, 0.66].map(z => [1, -1].map(y => [0, y, z])).flat());
  s('LNOR', [-0.66, 0.66].map(z => [1, -1].map(y => [3, y, z])).flat());
  s('FSTK', [-1, 1].map(z => [1, -1].map(y => [5, y, z])).flat());
  s('EDGU', [-1, 1].map(z => [1, -1].map(y => [7, y, z])).flat());

  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], 0.5));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 50);
  return {
    title: 'Proposition 36',
    id: '11.36',
    prose: prop36,
    points: z,
    letters: {
      M: [5],
      L: [5],
      H: [1],
      N: [7],
      O: [2],
      K: [1],
      D: [7],
      G: [7.3, 3],
      F: [5],
      E: [5],

      /*
      P: [8],
      Q: [3],
      R: [1],
      S: [8],
      T: [3],
      U: [1],
      */
    },
    shapes: [
      rg.polygon([...'MPHQ'].map(l => z[l])),
      rg.polygon([...'LNRO'].map(l => z[l])),
      ...[...'MPHQ'].map((l, i) => rg.line(z[l], z['LNRO'[i]])),
      rg.polygon([...'FSKT'].map(l => z[l])),
      rg.polygon([...'EDUG'].map(l => z[l])),
      ...[...'FSKT'].map((l, i) => rg.line(z[l], z['EDUG'[i]])),
    ],
    mags: [
      { l: 'A', m: 150, p: [0, 140] },
      { l: 'B', m: 100, v: 40 },
      { l: 'C', m: 66, v: 40 }
    ],
  };
},

function() {
  let y = {};
  function s(ls, ps) {
    for(let i = 0; i < ls.length; i++)
      y[ls[i]] = ps[i];
  }
  s('AOQP', [0, -0.5].map(y => [0, 0.5].map(z => [0, y, z])).flat());
  s('BRSK', [...'AOQP'].map(l => v3.add(v3.x, y[l])));
  s('CTUVDWLX', [...'AOPQBRKS'].map(l => v3.add(v3.s(v3.x, 2.5), v3.s(y[l], 1.2))));
  s('EYZaFbMc', [...'AOPQBRKS'].map(l => v3.add(v3.add(v3.s(v3.y, 2), v3.s(v3.x, -0.8)), v3.s(y[l], 1.5))));
  s('GdefHgNh', [...'AOPQBRKS'].map(l => v3.add(v3.add(v3.s(v3.y, 2), v3.s(v3.x, 2)), v3.s(y[l], 1.5*1.2))));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.5));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 100);

  return {
    title: 'Proposition 37',
    id: '11.37',
    prose: prop37,
    points: z,
    letters: {
      A: [5],
      B: [5],
      K: [1],
      C: [5],
      D: [5],
      L: [1],
      E: [5],
      F: [5],
      M: [1],
      G: [5],
      H: [5],
      N: [1],
    },
    shapes: [
      ...piped(z, 'AOPQBRKS'),
      ...piped(z, 'CTUVDWLX'),
      ...piped(z, 'EYZaFbMc'),
      ...piped(z, 'GdefHgNh'),
    ]
  };
},

function() {
  let y = {};
  function s(ls, ps) {
    for(let i = 0; i < ls.length; i++)
      y[ls[i]] = ps[i];
  }
  s('CLEOUPDKFANGQSRBMH', [0, 2].map(y => [-1, 0, 1].map(z => [-1, 0, 1].map(x =>[x, y, z]))).flat(2));
  y.T = v3.y;
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[1], 0.3));
  f = f.map(d => v3.r(d, f[0], -0.5));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 120);
  return {
    title: 'Proposition 38',
    id: '11.38',
    prose: prop38,
    points: z,
    letters: {
      A: [5],
      N: [5],
      G: [5],
      Q: [4],
      S: [4],
      R: [7],
      B: [2],
      M: [2],
      H: [8],
      T: [8],
      C: [4],
      L: [6],
      E: [7],
      O: [3],
      U: [8],
      P: [8],
      D: [1],
      K: [1],
      F: [1],
    },
    shapes: [
      rg.polygon([...'CEFD'].map(l => z[l])),
      rg.polygon([...'AGHB'].map(l => z[l])),
      rg.polygon([...'LKMN'].map(l => z[l])),
      rg.polygon([...'QRPO'].map(l => z[l])),
      rg.polygon([...'EDBG'].map(l => z[l])),
      rg.line(z.C, z.A),
      rg.line(z.F, z.H),
      rg.line(z.D, z.G),
      rg.line(z.U, z.S),
    ]
  };
},

function() {
  let y = {};
  function s(ls, ps) {
    for(let i = 0; i < ls.length; i++)
      y[ls[i]] = ps[i];
  }
  s('ABEQCDFO', [0, 1.5].map(x => [1, 0].map(z => [0.8, 0].map(y => [x, y, z]))).flat(2));
  s('HMGLRPKN', [0, 1].map(x => [1.3, 0].map(z => [0.8, 0].map(y => [x+2.5, y, z]))).flat(2));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.3));
  f = f.map(d => v3.r(d, f[1], 0.3));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 120);
  return {
    title: 'Proposition 39',
    id: '11.39',
    prose: prop39,
    points: z,
    letters: {
      A: [3],
      B: [1],
      E: [5],
      D: [1],
      C: [2],
      O: [8],
      F: [5],
      H: [3],
      M: [1],
      G: [5],
      L: [8.5],
      P: [1],
      N: [7],
      K: [5],
    },
    shapes: [
      ...piped(z, 'ABQECDOF'),
      rg.line(z.B, z.E),
      rg.line(z.D, z.F),
      ...piped(z, 'HMLGRPNK'),
      rg.line(z.H, z.K),
      rg.line(z.M, z.N),
    ]
  };
},

]
}

export default book;
