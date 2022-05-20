import v2 from '../vec2.js';
import v3 from '../vec3.js';

import prop1 from './12/1';
import prop2 from './12/2';
import prop3 from './12/3';
import prop4 from './12/4';
import prop5 from './12/5';
import prop6 from './12/6';
import prop7 from './12/7';
import prop8 from './12/8';
import prop9 from './12/9';
import prop10 from './12/10';
import prop11 from './12/11';
import prop12 from './12/12';
import prop13 from './12/13';
import prop14 from './12/14';
import prop15 from './12/15';
import prop16 from './12/16';
import prop17 from './12/17';
import prop18 from './12/18';

function s(o, ls, ps) {
  for(let i = 0; i < ls.length; i++)
    o[ls[i]] = ps[i];
}

function book(rg)
{

  function cone(z, c, ls)
  {
    return [ rg.curve(c[ls[0]]),
      rg.line(z[ls[1]], z[ls[2]]), rg.line(z[ls[1]], z[ls[3]])]
  }

  function cyl(z, c, ls)
  {
    return [ rg.curve(c[ls[0]]), rg.curve(c[ls[1]]),
      rg.line(z[ls[2]], z[ls[3]]), rg.line(z[ls[4]], z[ls[5]])]
  }

  function prism(z, ls)
  {
    let ps1 = ls.slice(0, ls.length/2);
    let ps2 = ls.slice(ls.length/2, ls.length);
    return [
      rg.polygon([...ps1].map(l => z[l])),
      rg.polygon([...ps2].map(l => z[l])),
      ...[...ps1].map((l, i) => rg.line(z[l], z[ps2[i]])),
    ]
  }
  function pyr(z, ls)
  {
    let p1 = ls[0];
    let ps = ls.slice(1, ls.length);
    return [
      rg.polygon([...ps].map(l => z[l])),
      ...[...ps].map((l, i) => rg.line(z[l], z[p1])),
    ]
  }

  return [

function() {
  let z = {}, r = 100;
  z.X = v2.o;
  z.M = v2.r(v2.x, 0.4);
  s(z, 'EABCD', [1, 3, 5, 7, 9].map(i => v2.r(z.M, (-i/10)*Math.PI*2)));
  z.Y = v2.s(v2.x, 2.5);
  let n = v2.s(v2.r(v2.x, 0.3), 0.9);
  z.N = v2.add(z.Y, n);
  s(z, 'LFGHK', [1, 3, 5, 7, 9].map(i => v2.add(z.Y, v2.r(n, (-i/10)*Math.PI*2))));
  for(let i in z)
    z[i] = v2.s(z[i], r);
  return {
    title: 'Proposition 1',
    id: '12.1',
    prose: prop1,
    points: z,
    letters: {
      A: [1],
      B: [2.5],
      C: [4],
      D: [6],
      E: [7.5],
      M: [6.7],
      F: [1],
      G: [2.5],
      H: [4],
      K: [6],
      L: [7.5],
      N: [6.7]
    },
    shapes: [
      rg.line(z.B, z.M),
      rg.polygon([...'ABCDE'].map(l => z[l])),
      rg.line(z.B, z.E),
      rg.line(z.A, z.M),
      rg.circle(z.X, r*2),
      rg.line(z.G, z.N),
      rg.polygon([...'FGHKL'].map(l => z[l])),
      rg.line(z.G, z.L),
      rg.line(z.F, z.N),
      rg.circle(z.Y, r*2*0.9)
    ]
  };
},

function() {
  let z = {}, r = 90;
  z.X = v2.o;
  s(z, 'DRAOBPCQ', [0, 1, 2, 3, 4, 5, 6, 7].map(i => v2.r(v2.x, (-i/8)*Math.PI*2)));
  z.Y = v2.s(v2.x, 2.5);
  let h = v2.s(v2.x, 0.9);
  s(z, 'HNEKFLGM', [0, 1, 2, 3, 4, 5, 6, 7].map(i => v2.add(z.Y, v2.r(h, (-i/8)*Math.PI*2))));
  let e = v2.u(v2.sub(z.E, z.H));
  let f = v2.s(e, v2.dot(e, v2.sub(z.K, z.E)));
  z.e = v2.add(z.E, f);
  z.f = v2.add(z.F, f);
  z.S = v2.add(z.X, v2.s(v2.y, 2.5));
  z.T = v2.add(z.Y, v2.s(v2.y, 2.5));
  s(z, 'pqsr', [-0.7, 0.7].map(x=> [-1, 1].map(y => v2.add(z.S, [x, y]))).flat());
  s(z, 'twyx', [-0.6, 0.6].map(x=> [-0.9, 0.9].map(y => v2.add(z.T, [x, y]))).flat());
  for(let i in z)
    z[i] =  v2.s(z[i], r);
  return {
    title: 'Proposition 2',
    id: '12.2',
    prose: prop2,
    points: z,
    letters: {
      A: [1],
      O: [2],
      B: [3],
      P: [4],
      C: [5],
      Q: [6],
      D: [7],
      R: [8],
      E: [8.3, 2],
      K: [2],
      F: [3.7, 2],
      L: [4],
      G: [5],
      M: [6],
      H: [7],
      N: [8],
      S: [1],
      T: [1],
    },
    shapes: [
      rg.polygon([...'DRAOBPCQ'].map(l => z[l])),
      rg.line(z.B, z.D),
      rg.circle(z.X, r*2),
      rg.polygon([...'HNEKFLGM'].map(l => z[l])),
      rg.polygon([...'EFGH'].map(l => z[l])),
      rg.polygon([...'EefF'].map(l => z[l])),
      rg.line(z.F, z.H),
      rg.circle(z.Y, r*2*0.9),
      rg.polygon([...'pqrs'].map(l => z[l])),
      rg.polygon([...'twxy'].map(l => z[l])),
    ],
    given: {
      S: [rg.polygon([...'pqrs'].map(l => z[l]))],
      T: [rg.polygon([...'twxy'].map(l => z[l]))],
    }
  };
},

function() {
  let y = {};
  y.B = v3.r(v3.x, v3.z, 0.5);
  y.A = v3.r(y.B, v3.z, 2);
  y.D = v3.r(y.A, v3.z, 2.3);
  y.C = v3.s(v3.z, -1);
  let pairs = ['AB', 'BC', 'CA', 'AD', 'DB', 'CD']
  s(y, 'EFGHKL', pairs.map(s => v3.s(v3.add(y[s[0]], y[s[1]]), 0.5)));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], 0.3));
  f = f.map(d => v3.r(d, f[0], -0.3));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  return {
    title: 'Proposition 3',
    id: '12.3',
    prose: prop3,
    points: z,
    letters: {
      D: [1],
      H: [2.4],
      A: [4],
      B: [5],
      E: [5],
      G: [2.3],
      F: [7.7,3],
      C: [7.5, 3],
      K: [7.8],
      L: [2.3,2],
    },
    shapes: [
      rg.polygon([...'ABD'].map(l => z[l])),
      ...[z.A,z.B, z.D].map(p => rg.line(p, z.C)),
      ...['HE', 'EG', 'GH', 'HK', 'KL', 'LH', 'KF', 'FG', 'EF', 'EK']
          .map(s=>rg.line(z[s[0]], z[s[1]])),
    ],
    given: {
      ABCD: pyr(z, 'ABCD'),
      AEGH: pyr(z, 'AEGH'),
      HKLD: pyr(z, 'HKLD'),
    }
  };
},

function() {
  let y = {};
  y.B = v3.o;
  y.A = v3.z;
  y.C = v3.x;
  y.G = v3.s(v3.y, -2);
  s(y, 'KLMNOP', ['AB', 'AC', 'GB', 'GC', 'CB', 'GA'].map(s => v3.s(v3.add(y[s[0]], y[s[1]]), 0.5)));
  s(y, 'DEFHQRTUVS', [...'ABCGKLMNOP']
      .map(l => v3.add(v3.add(v3.s(v3.x, 1.5), v3.s(v3.z, -1)), v3.r(v3.r(y[l], v3.y, 0.1), v3.x, 0.1))));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[1], 0.7));
  f = f.map(d => v3.r(d, f[0], -0.5));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  return {
    title: 'Proposition 4',
    id: '12.4',
    prose: prop4,
    points: z,
    letters: {
      G: [1],
      H: [1],
      C: [7],
      B: [5],
      A: [3],
      D: [3],
      E: [5],
      F: [7],
      P: [2.6],
      K: [4],
      O: [5.5],
      L: [8],
      M: [6.8, 4],
      N: [7.6, 2],
      S: [2.6],
      Q: [4],
      V: [5.5],
      R: [5],
      T: [6.4, 3],
      U: [7.6, 2],

    },
    shapes: [
      rg.polygon([...'ABC'].map(l => z[l])),
      ...[...'ABC'].map(l => rg.line(z[l], z.G)),
      rg.polygon([...'PKL'].map(l => z[l])),
      rg.polygon([...'PMN'].map(l => z[l])),
      rg.polygon([...'PLOM'].map(l => z[l])),
      rg.polygon([...'DEF'].map(l => z[l])),
      ...[...'DEF'].map(l => rg.line(z[l], z.H)),
      rg.polygon([...'SQR'].map(l => z[l])),
      rg.polygon([...'STU'].map(l => z[l])),
      rg.polygon([...'SRVT'].map(l => z[l])),
    ],
    given: {
      ABCG: pyr(z, 'ABCG'),
      DEFH: pyr(z, 'DEFH'),
      PMNG: pyr(z, 'PMNG'),
      STUH: pyr(z, 'STUH'),
    }
  };
},

function() {
  let y = {};
  y.B = v3.o;
  y.A = v3.z;
  y.C = v3.x;
  y.G = v3.s(v3.y, -2);
  s(y, 'KLMNOP', ['AB', 'AC', 'GB', 'GC', 'CB', 'GA'].map(s => v3.s(v3.add(y[s[0]], y[s[1]]), 0.5)));
  s(y, 'DEFHQRTUVS', [...'ABCGKLMNOP']
      .map(l => v3.add(v3.add(v3.s(v3.x, 1.5), v3.s(v3.z, -1)), v3.r(v3.r(y[l], v3.y, 0.1), v3.x, 0.1))));
  s(y, 'abdcefhg', [0, 1].map(x => [-0.5, 0].map(y=> [0, 0.5].map(z => [x+2.5, y, z-2.2]))).flat(2));
  y.W = v3.s([...'abcdefgh'].map(l => y[l]).reduce(v3.add), 1/8);
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[1], 0.7));
  f = f.map(d => v3.r(d, f[0], -0.5));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 100);
  return {
    title: 'Proposition 5',
    id: '12.5',
    prose: prop5,
    points: z,
    letters: {
      G: [1],
      H: [1],
      C: [7],
      B: [5],
      A: [3],
      D: [3],
      E: [5],
      F: [7],
      P: [2.6],
      K: [4],
      O: [5.5],
      L: [8],
      M: [6.8, 4],
      N: [7.6, 2],
      S: [2.6],
      Q: [4],
      V: [5.5],
      R: [5],
      T: [6.4, 3],
      U: [7.6, 2],
      W: [1],
    },
    shapes: [
      rg.polygon([...'ABC'].map(l => z[l])),
      ...[...'ABC'].map(l => rg.line(z[l], z.G)),
      rg.polygon([...'PKL'].map(l => z[l])),
      rg.polygon([...'PMN'].map(l => z[l])),
      rg.polygon([...'PLOM'].map(l => z[l])),
      rg.polygon([...'DEF'].map(l => z[l])),
      ...[...'DEF'].map(l => rg.line(z[l], z.H)),
      rg.polygon([...'SQR'].map(l => z[l])),
      rg.polygon([...'STU'].map(l => z[l])),
      rg.polygon([...'SRVT'].map(l => z[l])),
      ...prism(z, 'abcdefgh'),
    ],
    given: {
      W: prism(z, 'abcdefgh'),
      ABCG: pyr(z, 'ABCG'),
      DEFH: pyr(z, 'DEFH'),
      DQRS: pyr(z, 'DQRS'),
      STUH: pyr(z, 'STUH'),
    }
  };
},

function() {
  let y = {};
  y.X = v3.o;
  y.M = v3.s(v3.y, -2);
  let a = v3.r(v3.x, v3.y, 1);
  s(y, 'ABCDE', [0, 1, 2, 3, 4].map(i => v3.r(a, v3.y, (-i/5)*Math.PI*2)));
  y.Y = v3.s(v3.x, 2.5);
  s(y, 'FGHKLN', [...'ABCDEM'].map(l => v3.add(y.Y, v3.r(y[l], v3.y, 0.8))));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 100);
  return {
    title: 'Proposition 6',
    id: '12.6',
    prose: prop6,
    points: z,
    letters: {
      M: [1],
      A: [6],
      B: [7],
      C: [2.2],
      D: [3],
      E: [5],
      N: [1],
      F: [5],
      G: [7],
      L: [3],
      H: [8],
      K: [2],
    },
    shapes: [
      ...pyr(z, 'MABCDE'),
      rg.line(z.A, z.D),
      rg.line(z.A, z.C),
      ...pyr(z, 'NFGHKL'),
      rg.line(z.F, z.K),
      rg.line(z.F, z.H),
    ],
    given: {
      ABCDEM: pyr(z, 'MABCDE'),
      FGHKLN: pyr(z, 'NFGHKL'),
      ABCM: pyr(z, 'MABC'),
      ACDM: pyr(z, 'MACD'),
      ADEM: pyr(z, 'MADE'),
      ABCDM: pyr(z, 'MABCD'),
      FGHN: pyr(z, 'NFGH'),
    }
  };
},

function() {
  let y = {};
  y.C = v3.o;
  y.A = v3.x;
  y.B = v3.z;
  s(y, 'DEF', [...'ABC'].map(l => v3.add(v3.s(v3.y, -2), y[l])));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[1], 1.1));
  f = f.map(d => v3.r(d, f[0], 0.6));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 150);
  return {
    title: 'Proposition 7',
    id: '12.7',
    prose: prop7,
    points: z,
    letters: {
      F: [1],
      A: [5],
      E: [3],
      D: [7],
      B: [5],
      C: [4.5]
    },
    shapes: [
      ...prism(z, 'ABCDEF'),
      rg.line(z.C, z.D),
      rg.line(z.B, z.D),
      rg.line(z.C, z.E),
    ],
    given: {
      ABCDEF: prism(z, 'ABCDEF'),
    }
  };
},

function() {
  let y = {};
  s(y, 'AMBCKLGN', [-1, 1]
    .map(z => [-1, 1].map(y => [-1, 1].map(x => [x, y, z]))).flat(2));
  s(y, 'DQEFOPHR', [-1, 1]
    .map(z => [-1, 1].map(y => [-1, 1].map(x => [x*1.2+3.8, y*1.2, z*1.2]))).flat(2));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.2));
  f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 70);
  return {
    title: 'Proposition 8',
    id: '12.8',
    prose: prop8,
    points: z,
    letters: {
      E: [5],
      F: [5],
      H: [8, 2],
      R: [7],
      D: [3],
      Q: [6.5],
      O: [1],
      P: [1],
      B: [5],
      C: [5],
      G: [8, 2],
      N: [7],
      A: [3],
      M: [6.5],
      K: [1],
      L: [1],
    },
    shapes: [
      ...prism(z, 'AMCBKLNG'),
      ...prism(z, 'DQFEOPRH'),
      rg.polygon([...'AGC'].map(l => z[l])),
      rg.polygon([...'DHF'].map(l => z[l])),
    ],
    polygonl: {
      BM: 'ABCM',
      MB: 'ABCM',
      EQ: 'EFQD',
      BN: 'BCNG',
      ER: 'EFRH',
      BK: 'BGKA',
      EO: 'EHOD',
    },
    given: {
      ABCG: pyr(z, 'GABC'),
      DEFH: pyr(z, 'HDEF'),
      BGML: prism(z, 'AMCBKLNG'),
      EHQP: prism(z, 'DQFEOPRH'),
    }
  };
},

function() {
  let y = {};
  s(y, 'RPFQHOED', [-1, 1]
    .map(z => [-1, 1].map(y => [-1, 1].map(x => [(x-z/2)*0.7, y*2, z]))).flat(2));
  s(y, 'GaBCbLAM', [-1, 1]
    .map(z => [-1, 1].map(y => [-1, 1].map(x => [x+2.8+z/4, y, z]))).flat(2));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.3));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 70);
  return {
    title: 'Proposition 9',
    id: '12.9',
    prose: prop9,
    points: z,
    letters: {
      H: [3],
      O: [1],
      R: [3.5,3],
      P: [7],
      E: [3],
      D: [8],
      F: [5],
      Q: [5],
      G: [3],
      L: [1],
      A: [5],
      M: [7],
      B: [5],
      C: [5]
    },
    shapes: [
      ...prism(z, 'RPQFHODE'),
      ...prism(z, 'GaCBbLMA'),
      rg.polygon([...'HDF'].map(l => z[l])),
      rg.polygon([...'GAC'].map(l => z[l])),
    ],
    polygonl: {
      BM: 'BCMA',
      EQ: 'EFQD',
    },
    given: {
      ABCG: pyr(z, 'GABC'),
      DEFH: pyr(z, 'HDEF'),
      BGML: prism(z, 'GaCBbLMA'),
      EHQP: prism(z, 'RPQFHODE'),
    }
  };
},

function() {
  let z = {}, r = 150;
  z.O = v2.o;
  s(z, 'DHAEBFCG', [...Array(8).keys()].map(i => v2.r(v2.x, (-i/8)*Math.PI*2)));
  for(let i in z)
    z[i] = v2.s(z[i], r);
  return {
    title: 'Proposition 10',
    id: '12.10',
    prose: prop10,
    points: z,
    letters: {
      A: [1],
      E: [2],
      B: [3],
      F: [4],
      C: [5],
      G: [6],
      D: [7],
      H: [8]
    },
    shapes: [
      rg.circle(z.O, r*2),
      rg.polygon([...'AEBFCGDH'].map(l => z[l])),
      rg.polygon([...'ABCD'].map(l => z[l])),
    ]
  };
},

function() {
  let y = {};
  y.O = v3.add(v3.s(v3.x, 0.6), v3.s(v3.y, -0.2));
  y.X = v3.add(v3.s(v3.x, 0.5), v3.s(v3.y, -1.2));
  s(y, 'abdcefhg', [0, 1].map(z => [0, 1].map(y => [0, 1].map(x => [x, y*0.4, z]))).flat(2))
  s(y, 'klnmoprq', [0, 1].map(z => [0, 1].map(y => [0, 1].map(x => [x*0.8, y*0.3-1, z*0.8]))).flat(2))

  let z = {}, r = 90;
  z.K = v2.s(v2.x, -3.5);
  z.M = v2.s(v2.x, -1.2);
  s(z, 'CWDTAUBV', [...Array(8).keys()].map(i => v2.add(z.K, v2.r(v2.x, (-i/8)*Math.PI*2))));
  s(z, 'GSHPEQFR', [...Array(8).keys()].map(i => v2.add(z.M, v2.r(v2.s(v2.x, 0.8), (-i/8)*Math.PI*2))));
  z.L = v2.add(z.K, v2.s(v2.r(v2.x, -1), 1.8));
  z.N = v2.add(z.M, v2.s(v2.r(v2.x, -1), 1.4));
  for(let i in z)
    z[i] = v2.s(z[i], r);
  let f = v3.i;
  f = f.map(d => v3.r(d, f[1], -0.15));
  f = f.map(d => v3.r(d, f[0], -0.15));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 70);
  return {
    title: 'Proposition 11',
    id: '12.11',
    prose: prop11,
    points: z,
    letters: {
      D: [1],
      T: [2],
      A: [3],
      U: [4],
      B: [5],
      V: [6],
      C: [7],
      W: [8],
      K: [5],
      H: [1],
      P: [2],
      E: [3],
      Q: [4],
      F: [5],
      R: [6],
      G: [7],
      S: [8],
      M: [5],
      O: [1],
      X: [1],
      L: [8],
      N: [8]
    },
    shapes: [
      rg.circle(z.K, r*2),
      rg.polygon([...'CWDTAUBV'].map(l => z[l])),
      rg.polygon([...'ABCD'].map(l => z[l])),
      rg.line(z.A, z.C),
      rg.circle(z.M, r*0.8*2),
      rg.polygon([...'GSHPEQFR'].map(l => z[l])),
      rg.polygon([...'GHEF'].map(l => z[l])),
      rg.line(z.E, z.G),
      rg.line(z.K, z.L),
      rg.line(z.M, z.N),
      ...prism(z, 'abcdefgh'),
      ...prism(z, 'klmnopqr'),
    ],
    given: {
      AL: [ rg.circle(z.K, r*2), rg.line(z.K, z.L) ],
      EN: [ rg.circle(z.M, r*0.8*2), rg.line(z.M, z.N) ],
      O: prism(z, 'abcdefgh'),
      X: prism(z, 'klmnopqr'),
    }

  };
},

function() {
  let y = {};
  y.O = v3.add(v3.s(v3.x, 0.6), v3.s(v3.y, -0.2));
  s(y, 'abdcefhg', [0, 1].map(z => [0, 1].map(y => [0, 1].map(x => [x*1.2, y*0.4, z]))).flat(2))

  let z = {}, r = 70;
  z.K = v2.s(v2.x, -3.8);
  z.M = v2.s(v2.x, -1.4);
  s(z, 'DWATBUCV', [...Array(8).keys()].map(i => v2.add(z.K, v2.r(v2.s(v2.x, 0.8), (-i/8)*Math.PI*2))));
  s(z, 'FPESHRGQ', [...Array(8).keys()].map(i => v2.add(z.M, v2.r(v2.x, (-i/8)*Math.PI*2))));
  z.L = v2.add(z.K, v2.s(v2.r(v2.x, -2), 1.7));
  z.N = v2.add(z.M, v2.s(v2.r(v2.x, -1.1), 1.8));
  for(let i in z)
    z[i] = v2.s(z[i], r);
  let f = v3.i;
  f = f.map(d => v3.r(d, f[1], -0.15));
  f = f.map(d => v3.r(d, f[0], -0.15));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 70);
  return {
    title: 'Proposition 12',
    id: '12.12',
    prose: prop12,
    points: z,
    smallletters: 'TP',
    letters: {
      E: [1],
      S: [2],
      H: [3],
      R: [4],
      G: [5],
      Q: [6],
      F: [7],
      P: [7.5, 3],
      N: [1],
      M: [5],
      A: [1],
      T: [2.7],
      B: [3],
      U: [4],
      C: [5],
      V: [6],
      D: [7],
      W: [8],
      L: [1],
      K: [5],
      O: [1],
    },
    shapes: [
      rg.circle(z.K, r*0.8*2),
      rg.polygon([...'DWATBUCV'].map(l => z[l])),
      rg.polygon([...'ABCD'].map(l => z[l])),
      rg.line(z.B, z.D),
      rg.circle(z.M, r*2),
      rg.polygon([...'FPESHRGQ'].map(l => z[l])),
      rg.polygon([...'GFEH'].map(l => z[l])),
      rg.line(z.H, z.F),
      rg.line(z.K, z.L),
      rg.line(z.M, z.N),
      rg.line(z.B, z.L),
      rg.line(z.T, z.L),
      rg.line(z.T, z.K),
      rg.line(z.N, z.F),
      rg.line(z.N, z.P),
      rg.line(z.M, z.P),
      ...prism(z, 'abcdefgh'),
    ],
    given: {
      ABCDL: [ rg.circle(z.K, r*0.8*2), rg.line(z.K, z.L) ],
      EFGHN: [ rg.circle(z.M, r*2), rg.line(z.M, z.N) ],
      BKTL: pyr(z, 'LBKT'),
      FMPN: pyr(z, 'NFMP'),
      O: prism(z, 'abcdefgh'),
    }
  };
},

function() {
  let z = {};
  let c = {};
  let r = 50;
  c.p = Array(21).fill()
    .map((_, i) => v2.rot(v2.s(v2.x, r), 2*Math.PI*i/20))
    .map(([x, y]) => [x*0.4, y]);
  z.L = v2.o;
  s(z, 'NEKFOM', Array(6).fill()
    .map((_, i) => v2.s(v2.x, (i+1)*(r+10))));
  s(c, 'ragctv', [...'NEKFOM']
    .map(l => c.p.map(v => v2.add(v, z[l]))));
  s(z, 'QSBHDUW', [...'LNEKFOM'].map(l => v2.add(z[l], v2.s(v2.y, r))));
  s(z, 'PRAGCTV', [...'LNEKFOM'].map(l => v2.add(z[l], v2.s(v2.y, -r))));

  return {
    title: 'Proposition 13',
    id: '12.13',
    prose: prop13,
    points: z,
    letters: {
      P: [1],
      R: [1],
      A: [1],
      G: [1],
      C: [1],
      T: [1],
      V: [1],
      L: [1],
      N: [1],
      E: [1],
      K: [1],
      F: [1],
      O: [1],
      M: [1],
      Q: [5],
      S: [5],
      B: [5],
      H: [5],
      D: [5],
      U: [5],
      W: [5],
    },
    shapes: [
      ...[...'pragctv'].map(l => rg.curve(c[l])),
      rg.line(z.L, z.M),
      rg.line(z.P, z.V),
      rg.line(z.Q, z.W),
      ...[...'LNEKFOM'].map(l => rg.line(v2.add(z[l], v2.s(v2.y, -5)), v2.add(z[l], v2.s(v2.y, 5)))),
    ],
    given: {
      AD: cyl(z, c, 'acACBD'),
      GH: [rg.curve(c.g)],
      AB: [rg.curve(c.a)],
      CD: [rg.curve(c.c)],
      BG: cyl(z, c, 'agAGBH'),
      GD: cyl(z, c, 'cgGCHD'),
      PW: cyl(z, c, 'pvPVQW'),
      PQ: [rg.curve(c.p)],
      VW: [rg.curve(c.v)],
      RS: [rg.curve(c.r)],
      TU: [rg.curve(c.t)],
      QR: cyl(z, c, 'prPRQS'),
      RB: cyl(z, c, 'raRASB'),
      GB: cyl(z, c, 'agAGBH'),
      QG: cyl(z, c, 'pgPGQH'),
      WG: cyl(z, c, 'vgVGWH'),
      GW: cyl(z, c, 'vgVGWH'),
    },
  };
},

function() {
  let z = {};
  let c = {};
  z.G = v2.o;
  z.H = v2.s(v2.y, 1.9);
  z.K = v2.add(v2.s(v2.x, 2.7,), v2.s(v2.y, -0.5));
  z.L = v2.add(z.K, v2.s(v2.y, 1.3));
  z.N = v2.add(z.L, v2.s(v2.y, 1.9));
  s(z, 'EAFCO', [...'GHKLN'].map(l => z[l]).map(p => v2.add(p, v2.s(v2.x, -1))));
  s(z, 'PBQDM', [...'GHKLN'].map(l => z[l]).map(p => v2.add(p, v2.s(v2.x, 1))));
  c.g = Array(21).fill().map((_, i) => v2.rot(v2.x, 2*Math.PI*(i/20))).map(([x, y])=>[x, y*0.37]);
  s(c, 'hkln', [...'HKLN'].map(l => z[l]).map(p => c.g.map(v => v2.add(v, p))));
  for(let i in z)
    z[i] = v2.s(z[i], 70);
  for(let i in c)
    c[i] = c[i].map(v=>v2.s(v, 70));

  return {
    title: 'Proposition 14',
    id: '12.14',
    prose: prop14,
    points: z,
    letters: {
      E: [3],
      A: [3],
      B: [3],
      F: [3],
      C: [3],
      G: [1],
      K: [1],
      H: [7],
      L: [7],
      N: [7],
      B: [7],
      D: [7],
      M: [7],
    },
    shapes: [
      rg.line(z.E, z.A),
      rg.line(z.P, z.B),
      rg.line(z.O, z.F),
      rg.line(z.G, z.H),
      rg.line(z.K, z.N),
      rg.line(z.Q, z.M),
      rg.line(z.K, z.C),
      rg.line(z.K, z.D),
      rg.line(z.G, z.A),
      rg.line(z.G, z.B),
      ...[...'ghkln'].map(l => rg.curve(c[l])),
      ...[...'HLN'].map(l => z[l]).map(p => rg.line(v2.add(p, v2.s(v2.x, -5)), v2.add(p, v2.s(v2.x, 5))))
    ],
    given: {
      EB: cyl(z, c, 'ghEAPB'),
      FD: cyl(z, c, 'klFCQD'),
      CM: cyl(z, c, 'lnCODM'),
      FM: cyl(z, c, 'knFOQM'),
      AB: [rg.curve(c.h)],
      CD: [rg.curve(c.l)],
      ABG: cone(z, c, 'hGAB'),
      CDK: cone(z, c, 'lKCD'),
    }
  };
},

function() {
  let z = {};
  let c = {};
  let vs = [];
  z.K = v2.o;
  z.L = v2.s(v2.y, -2);
  z.M = v2.add(v2.s(v2.y, -0.5), v2.s(v2.x, 3));
  z.Q = v2.add(z.M, v2.s(v2.x, 1.7));
  z.N = v2.add(z.Q, v2.s(v2.x, 2.8));
  s(z, 'Aa', [...'KL'].map(l => z[l]).map(p => v2.add(p, v2.s(v2.x, -1))));
  s(z, 'CO', [...'KL'].map(l => z[l]).map(p => v2.add(p, v2.s(v2.x, 1))));
  s(z, 'PSG', [...'MQN'].map(l => z[l]).map(p => v2.add(p, v2.s(v2.y, -1))));
  s(z, 'RUE', [...'MQN'].map(l => z[l]).map(p => v2.add(p, v2.s(v2.y, 1))));
  vs = Array(21).fill().map((_, i) => v2.rot(v2.x, 2*Math.PI*i/20));
  s(c, 'kl', [...'KL'].map(l=>z[l]).map(p => vs.map(([x, y]) => v2.add([x, y*0.35], p))));
  s(c, 'mqn', [...'MQN'].map(l=>z[l]).map(p => vs.map(([x, y]) => v2.add([x*0.35, y], p))));
  let r = 50;
  z.T = c.q[17];
  z.B = c.k[4];
  z.D = c.k[15];
  z.H = c.n[10];
  z.F = c.n[18];

  for(let i in z)
    z[i] = v2.s(z[i], r);
  for(let i in c)
    c[i] = c[i].map(v => v2.s(v, r));
  return {
    title: 'Proposition 15',
    id: '12.15',
    prose: prop15,
    points: z,
    letters: {
      A: [3],
      O: [7],
      C: [7],
      P: [1],
      S: [1],
      G: [1],
      R: [5],
      U: [5],
      E: [5],
      M: [3],
      Q: [2],
      N: [7],
      L: [1],
      K: [5],
      T: [7],
      D: [2],
      B: [6],
      F: [7],
      H: [4]
    },
    shapes: [
      ...['Aa', 'LK', 'OC', 'LA', 'LC', 'AC', 'PG', 'RE', 'MN', 'SU', 'GE', 'MS', 'MU', 'MG', 'ME', 'QG', 'QE']
        .map(s => rg.line(z[s[0]], z[s[1]])),
      ...[...'klmnq'].map(l => rg.curve(c[l]))
    ],
    given: {
      ABCD: [rg.curve(c.k)],
      EFGH: [rg.curve(c.n)],
      AO: cyl(z, c, 'klAaCO'),
      EP: cyl(z, c, 'mnPGRE'),
      ES: cyl(z, c, 'qnSGUE'),
      TUS: [rg.curve(c.q)],
      RP: [rg.curve(c.m)],
      CDK: cone(z, c, 'lKCD'),
    }
  };
},

function() {
  let z = {};
  let r = 150;
  let g = 0.7;
  let m = g + 0.15
  z.K = v2.o;
  z.D = v2.x;
  z.B = v2.s(v2.x, -1);
  z.A = v2.r(z.D, -Math.acos(g));
  z.C = v2.r(z.D, Math.acos(g));
  z.L = v2.r(z.D, -Math.acos(m));
  z.N = v2.r(z.D, Math.acos(m));
  z.G = v2.s(v2.x, g);
  z.M = v2.s(v2.x, m);
  s(z, 'HEF', [1, 2, 3].map(i => v2.r(z.G, -2*Math.PI*i/4)));
  for(let i in z)
    z[i] = v2.s(z[i], r);
  return {
    title: 'Proposition 16',
    id: '12.16',
    prose: prop16,
    points: z,
    letters: {
      A: [8],
      L: [8],
      H: [1],
      B: [3],
      F: [5],
      G: [2],
      M: [2],
      D: [7],
      N: [6],
      C: [6],
      K: [1],
      E: [8, 2.5],

    },
    shapes: [
      ...['BD', 'AC', 'LN', 'LD', 'DN'].map(s => rg.line(z[s[0]], z[s[1]])),
      rg.circle(z.K, r*2),
      rg.circle(z.K, r*g*2),
    ]
  };
},

function() {
  let y = {};
  let c = {};
  y.A = v3.o;
  y.D = v3.x;
  y.B = v3.s(v3.x, -1);
  y.O = v3.s(v3.y, -1);
  s(y, 'KLME', [1.5, 2.4, 3.3, 4].map(i => v3.r(y.B, v3.y, Math.PI*i/8)))
  y.C = v3.s(y.E, -1);
  y.N = v3.s(y.K, -1);
  y.k = v3.r(y.K, v3.y, Math.PI/2);
  s(y, 'PQR', [1.8, 2.8, 3.5].map(i => v3.r(y.B, y.E, Math.PI*i/8)))
  s(y, 'STU', [1.8, 2.8, 3.5].map(i => v3.r(y.K, y.k, Math.PI*i/8)))
  s(y, 'FGH', [0, 2, 3].map(i => v3.r(v3.s(y.D, 0.3), v3.y, -2*Math.PI*i/4)))
  y.V = v3.s(y.B, v3.dot(y.B, y.P));
  y.W = v3.s(y.K, v3.dot(y.K, y.S));
  y.X = v3.s([...'KBPS'].map(l => y[l]).reduce(v3.add), 0.25)
  y.Y = v3.s(y.B, v3.dot(y.B, y.K));
  c.o = Array(21).fill().map((_, i) => v3.rot(y.B, v3.y, 2*Math.PI*i/20));
  c.k = Array(11).fill().map((_, i) => v3.rot(y.K, y.k, 2*Math.PI*i/20));
  c.b = Array(11).fill().map((_, i) => v3.rot(y.B, y.E, 2*Math.PI*i/20));
  c.s = Array(5).fill().map((_, i) => v3.rot(y.K, y.k, 0.28*Math.PI*i/5));
  c.p = Array(5).fill().map((_, i) => v3.rot(y.B, y.E, 0.28*Math.PI*i/5));
  c.g = Array(21).fill().map((_, i) => v3.rot(y.F, y.O, 2*Math.PI*i/20));
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[1], 1.35));
  f = f.map(d => v3.r(d, f[0], -0.6));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), 240);
  for(let i in c)
    c[i] = c[i].map(v => v3.s(f.map(d => v3.dot(d, v)), 240));
  return {
    title: 'Proposition 17',
    id: '12.17',
    prose: prop17,
    points: z,
    smallletters: 'XY',
    letters: {
      X: [1],
      B: [5],
      K: [4],
      L: [4],
      M: [3],
      E: [2.5],
      S: [2],
      T: [2],
      U: [2.4],
      P: [7],
      Q: [6],
      R: [6],
      O: [2],
      W: [5],
      Y: [6],
      V: [7, 3],
      G: [6],
      F: [1.5],
      H: [8, 3],
      N: [8, 3],
      D: [8],
      C: [7],
      A: [6],

    },
    shapes: [
      ...['AO', 'BD', 'EC', 'BK', 'KL', 'LM', 'ME', 'BP', 'PQ', 'QR', 'RO', 'KS', 'ST', 'TU', 'UO',
          'KN', 'PS', 'TQ', 'UR', 'SW', 'PV', 'VW', 'AX', 'KX', 'XB', 'KD', 'KY']
        .map(s => rg.line(z[s[0]], z[s[1]])),
      rg.curve(c.o),
      rg.curve(c.k),
      rg.curve(c.b),
      rg.curve(c.g),
    ],
    given: {
      BCDE: [rg.curve(c.o)],
      FGH: [rg.curve(c.g)],
      BE: [rg.curve(c.o.slice(0, 6))],
      BOD: [rg.curve(c.b)],
      KON: [rg.curve(c.k)],
      BED: [rg.curve(c.o.slice(0, 11))],
      BO: [rg.curve(c.b.slice(0, 6))],
      KO: [rg.curve(c.k.slice(0, 6))],
      BP: [rg.curve(c.p)],
      KS: [rg.curve(c.s)],
    }
  };
},

function() {
  let z = {};
  let r = 130;
  z.m = v2.x;
  z.e = v2.r(v2.s(v2.x, 1.1), 2.1);
  z.b = v2.r(v2.s(v2.x, 0.8), 3.9);
  s(z, 'CAB', [0, 1, 2].map(i => v2.add(z.b, v2.r(v2.s(v2.x, 0.5), -Math.PI*i/2))));
  s(z, 'FDE', [0, 0.6, 2].map(i => v2.add(z.e, v2.r(v2.s(v2.x, 0.7), -Math.PI*i/2))));
  s(z, 'KGH', [0, 1, 2].map(i => v2.add(z.e, v2.r(v2.s(v2.x, 0.5), -Math.PI*i/2))));
  s(z, 'NLM', [0, 1, 2].map(i => v2.add(z.m, v2.r(v2.s(v2.x, 0.8), -Math.PI*i/2))));
  for(let i in z)
    z[i] = v2.s(z[i], r);
  return {
    title: 'Proposition 18',
    id: '12.18',
    prose: prop18,
    points: z,
    letters: {
      A: [1],
      B: [3],
      C: [7],
      E: [3],
      D: [8],
      F: [7],
      G: [5],
      H: [7.7, 4],
      K: [2.4, 3],
      L: [1],
      M: [3],
      N: [7]
    },
    shapes: [
      rg.circle(z.e, r*0.7*2),
      rg.circle(z.e, r*0.5*2),
      rg.circle(z.b, r*0.5*2),
      rg.circle(z.m, r*0.8*2),
      rg.line(z.E, z.F),
      rg.line(z.B, z.C)
    ]
  };
},

]
}

export default book;
