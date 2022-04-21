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
    img: '/img/12/1',
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
      ...[z.A,z.B, z.D].map(p => rg.line(p, z.C, {strokeWidth: 3})),
      ...['HE', 'EG', 'GH', 'HK', 'KL', 'LH', 'KF', 'FG', 'EF', 'EK']
          .map(s=>rg.line(z[s[0]], z[s[1]])),
    ]
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
      rg.line(z.G, z.B, {strokeWidth: 3}),
      rg.line(z.H, z.E, {strokeWidth: 3}),
    ]
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
      rg.line(z.G, z.B, {strokeWidth: 3}),
      rg.line(z.H, z.E, {strokeWidth: 3}),
      ...prism(z, 'abcdefgh'),
    ],
    given: {
      W: prism(z, 'abcdefgh')
    }
  };
},

function() {
  return {
    title: 'Proposition 6',
    id: '12.6',
    img: '/img/12/6',
    prose: prop6,
  };
},

function() {
  return {
    title: 'Proposition 7',
    id: '12.7',
    img: '/img/12/7',
    prose: prop7,
  };
},

function() {
  return {
    title: 'Proposition 8',
    id: '12.8',
    img: '/img/12/8',
    prose: prop8,
  };
},

function() {
  return {
    title: 'Proposition 9',
    id: '12.9',
    img: '/img/12/9',
    prose: prop9,
  };
},

function() {
  return {
    title: 'Proposition 10',
    id: '12.10',
    img: '/img/12/10',
    prose: prop10,
  };
},

function() {
  return {
    title: 'Proposition 11',
    id: '12.11',
    img: '/img/12/11',
    prose: prop11,
  };
},

function() {
  return {
    title: 'Proposition 12',
    id: '12.12',
    img: '/img/12/12',
    prose: prop12,
  };
},

function() {
  return {
    title: 'Proposition 13',
    id: '12.13',
    img: '/img/12/13',
    prose: prop13,
  };
},

function() {
  return {
    title: 'Proposition 14',
    id: '12.14',
    img: '/img/12/14',
    prose: prop14,
  };
},

function() {
  return {
    title: 'Proposition 15',
    id: '12.15',
    img: '/img/12/15',
    prose: prop15,
  };
},

function() {
  return {
    title: 'Proposition 16',
    id: '12.16',
    img: '/img/12/16',
    prose: prop16,
  };
},

function() {
  return {
    title: 'Proposition 17',
    id: '12.17',
    img: '/img/12/17',
    prose: prop17,
  };
},

function() {
  return {
    title: 'Proposition 18',
    id: '12.18',
    img: '/img/12/18',
    prose: prop18,
  };
},

]
}

export default book;
