import v2 from '../vec2.js';

import prop1 from './13/1';
import prop2 from './13/2';
import prop3 from './13/3';
import prop4 from './13/4';
import prop5 from './13/5';
import prop6 from './13/6';
import prop7 from './13/7';
import prop8 from './13/8';
import prop9 from './13/9';
import prop10 from './13/10';
import prop11 from './13/11';
import prop12 from './13/12';
import prop13 from './13/13';
import propl1 from './13/l1-13';
import prop14 from './13/14';
import prop15 from './13/15';
import prop16 from './13/16';
import prop17 from './13/17';
import prop18 from './13/18';
import propl2 from './13/l2-18';

function s(o, ls, ps) {
  for(let i = 0; i < ls.length; i++)
    o[ls[i]] = ps[i];
}

function book(rg)
{
  return [

function() {
  let z = {};
  let phi = 2/(1+Math.sqrt(5))
  s(z, 'LaFPHbDAC', [-phi-0.5, -0.5, 0].map(y => [-0.5, 0, phi].map(x => [x, y])).flat());
  z.B = v2.x;
  s(z, 'KGE', [...'ACB'].map(l => v2.add(v2.y, z[l])));
  s(z, 'MNO', [...'PFA'].map(l => v2.add(z.H, v2.s(v2.u(v2.sub(z[l], z.H)), 0.25))));
  for(let i in z)
    z[i] = v2.s(z[i], 150);
  return {
    title: 'Proposition 1',
    id: '13.1',
    prose: prop1,
    points: z,
    smallletters: 'MNO',
    letters: {
      H: [6],
      A: [3.8, 5],
      L: [3],
      P: [3],
      D: [3],
      F: [7],
      C: [8, 2],
      B: [7],
      K: [5],
      G: [5],
      E: [5],
      N: [1, 2],
      M: [5],
      O: [3],
    },
    shapes: [
      rg.gnomon(z.H, z.M, z.O),
      ...['Pb', 'aK', 'DF', 'LF', 'LD', 'FG', 'DB', 'KE', 'BE']
        .map(s => rg.line(z[s[0]], z[s[1]])),
    ]
  };
},

function() {
  let z = {};
  let phi = 2/(1+Math.sqrt(5))
  s(z, 'LaFPHbACB', [-phi-0.5, -0.5, 0].map(y => [-0.5, 0, phi].map(x => [x, y])).flat());
  z.D = v2.x;
  s(z, 'KEG', [...'CBD'].map(l => v2.add(v2.y, z[l])));
  s(z, 'MNO', [...'PFC'].map(l => v2.add(z.H, v2.s(v2.u(v2.sub(z[l], z.H)), 0.25))));
  for(let i in z)
    z[i] = v2.s(z[i], 150);
  return {
    title: 'Proposition 2',
    id: '13.2',
    prose: prop2,
    points: z,
    smallletters: 'MNO',
    letters: {
      L: [3],
      F: [7],
      A: [3],
      B: [8, 2],
      D: [7],
      C: [3.9,5],
      K: [5],
      E: [5],
      G: [5],
      M: [5],
      O: [3],
      N: [1, 2],
      H: [6],
    },
    shapes: [
      rg.gnomon(z.H, z.M, z.O),
      ...['FE', 'LF', 'AL', 'DA', 'GD', 'KG', 'aK', 'Pb', 'AF'].map(s => rg.line(z[s[0]], z[s[1]])),
    ],
  };
},

function() {
  let z = {};
  let phi = 2/(1+Math.sqrt(5))
  s(z, 'ADCBRGaMHKFNbLSE', [0, 1-phi, 1-phi/2, 1].map(y => [0, phi/2, phi, 1].map(x => [x, y])).flat());
  s(z, 'OPQ', [...'RBS'].map(l => v2.add(z.a, v2.s(v2.u(v2.sub(z[l], z.a)), 0.1))));
  for(let i in z)
    z[i] = v2.s(z[i], 300);
  return {
    title: 'Proposition 3',
    id: '13.3',
    prose: prop3,
    points: z,
    smallletters: 'OPQ',
    letters: {
      A: [1],
      D: [1],
      C: [1],
      B: [1],
      R: [3],
      H: [3],
      G: [2],
      K: [6],
      L: [5],
      S: [5],
      E: [5],
      F: [6],
      M: [7],
      N: [7],
      O: [5],
      Q: [3],
      P: [1]
    },
    shapes: [
      rg.gnomon(z.a, z.O, z.Q),
      ...['AB', 'RM', 'HN', 'bE', 'Ab', 'DL', 'CS', 'BE', 'bB'].map(s => rg.line(z[s[0]], z[s[1]])),
    ],
  };
},

function() {
  let z = {};
  let phi = 2/(1+Math.sqrt(5))
  s(z, 'ACBHFKDGE', [0, 1-phi, 1].map(y => [0, phi, 1].map(x => [x, y])).flat());
  s(z, 'LMN', [...'HBG'].map(l => v2.add(z.F, v2.s(v2.u(v2.sub(z[l], z.F)), 0.1))));
  for(let i in z)
    z[i] = v2.s(z[i], 300);
  return {
    title: 'Proposition 4',
    id: '13.4',
    img: '/img/13/4',
    prose: prop4,
    points: z,
    smallletters: 'LMN',
    letters: {
      A: [1],
      C: [1],
      B: [1],
      D: [5],
      G: [5],
      E: [5],
      H: [3],
      K: [7],
      L: [5],
      M: [7, 3],
      N: [3],
      F: [6],
    },
    shapes: [
      rg.gnomon(z.F, z.L, z.N),
      ...['AB', 'HK', 'DE', 'AD', 'CG', 'BE', 'DB'].map(s => rg.line(z[s[0]], z[s[1]])),
    ],
  };
},

function() {
  let z = {};
  let phi = 2/(1+Math.sqrt(5))
  s(z, 'DACBLHdKabcE', [0, phi, 1].map(y => [-phi, 0, phi, 1].map(x=> [x,y])).flat())
  for(let i in z)
    z[i] = v2.s(z[i], 250);
  return {
    title: 'Proposition 5',
    id: '13.5',
    img: '/img/13/5',
    prose: prop5,
    points: z,
    letters: {
      D: [1],
      A: [1],
      C: [1],
      B: [1],
      L: [5],
      H: [3.9, 10],
      K: [7],
      E: [8]
    },
    shapes: [
      ...['EA', 'Ab', 'bE', 'EB', 'BD', 'DL', 'LK', 'Cc'].map(s => rg.line(z[s[0]], z[s[1]])),
    ]
  };
},

function() {
  let phi = 2/(1+Math.sqrt(5))
  let r = 250;
  return {
    title: 'Proposition 6',
    id: '13.6',
    prose: prop6,
    mags: [
      { l: 'D', m: 0.5*r, p: v2.o },
      { l: 'A', m: phi*r },
      { l: 'C', m: (1-phi)*r },
      { l: 'B' },
    ]
  };
},

function() {
  let z = {};
  let phi = 2/(1+Math.sqrt(5))
  s(z, 'ABCDE', [0, 1, 2, 3, 4].map(i => v2.rot(v2.y, Math.PI*(1-2*i/5))));
  z.F = v2.add(z.C, v2.s(v2.sub(z.A, z.C), phi));
  for(let i in z)
    z[i] = v2.s(z[i], 150);
  return {
    title: 'Proposition 7',
    id: '13.7',
    prose: prop7,
    points: z,
    letters: {
      A: [1],
      B: [3],
      C: [5],
      D: [5],
      E: [7],
      F: [2],
    },
    shapes: [
      rg.polygon([...'ABCDE'].map(l => z[l])),
      ...['AC', 'BD', 'BE', 'DF'].map(s => rg.line(z[s[0]], z[s[1]]))
    ],
  };
},

function() {
  let z = {};
  let phi = 2/(1+Math.sqrt(5))
  s(z, 'ABCDE', [0, 1, 2, 3, 4].map(i => v2.rot(v2.y, Math.PI*(1+2*i/5))));
  z.H = v2.add(z.C, v2.s(v2.sub(z.A, z.C), phi));
  z.O = v2.o;
  for(let i in z)
    z[i] = v2.s(z[i], 150);
  return {
    title: 'Proposition 8',
    id: '13.8',
    img: '/img/13/8',
    prose: prop8,
    points: z,
    letters: {
      A: [1],
      B: [8],
      C: [6],
      D: [4],
      E: [2],
      H: [8, 2]
    },
    shapes: [
      rg.polygon([...'ABCDE'].map(l => z[l])),
      rg.circle(z.O, 150*2),
      ...['AC', 'BE'].map(s => rg.line(z[s[0]], z[s[1]]))
    ],
  };
},

function() {
  let z = {};
  let r = 120;
  z.E = v2.o;
  z.A = v2.x;
  z.B = v2.s(v2.x, -1);
  z.C = v2.r(z.B, -Math.PI/5);
  z.F = v2.r(z.B, -Math.PI*2/5);
  z.D = v2.add(z.C, v2.u(v2.sub(z.C, z.B)));
  for(let i in z)
    z[i] = v2.s(z[i], r);
  return {
    title: 'Proposition 9',
    id: '13.9',
    prose: prop9,
    points: z,
    letters: {
      A: [7],
      B: [3],
      C: [3.5],
      D: [5],
      F: [5.5],
      E: [1]
    },
    shapes: [
      rg.circle(z.E, r*2),
      ...['AB', 'BD', 'DE', 'EC'].map(s => rg.line(z[s[0]], z[s[1]]))
    ],
  };
},

function() {
  let z = [];
  let r = 200;
  z.F = v2.o;
  z.A = v2.s(v2.y, -1);
  s(z, 'MKBCGDE', [0.25, 0.5, 1, 2, 2.5, 3, 4].map(i => v2.rot(z.A, -Math.PI*2*i/5)));
  let h = Math.cos(Math.PI/5);
  let l = Math.cos(Math.PI/10);
  let n = h / l;
  z.H = v2.s(z.K, h);
  z.N = v2.s(z.M, n);
  z.L = v2.s(z.M, l);
  for(let i in z)
    z[i] = v2.s(z[i], r);
  return {
    title: 'Proposition 10',
    id: '13.10',
    prose: prop10,
    points: z,
    smallletters: 'NL',
    letters: {
      A: [1],
      B: [2],
      C: [3.5],
      G: [5],
      D: [6],
      E: [7.5],
      F: [7],
      K: [2],
      M: [2],
      H: [4.5, 10],
      N: [6.7, 3],
      L: [4.4, 3],
    },
    shapes: [
      rg.circle(z.F, r*2),
      rg.polygon([...'ABCDE'].map(l => z[l])),
      ...['AG', 'AK', 'KB', 'KF', 'FM'].map(s => rg.line(z[s[0]], z[s[1]])),
    ],
  };
},

function() {
  let z = [];
  let r = 200;
  let phi = 2
  z.F = v2.o;
  z.A = v2.s(v2.y, -1);
  s(z, 'BCGDHE', [1, 2, 2.5, 3, 3.5, 4].map(i => v2.rot(z.A, -Math.PI*2*i/5)));
  let l = Math.cos(Math.PI/5);
  let m = Math.cos(Math.PI*2/5);
  z.L = v2.s(z.G, l);
  z.M = v2.s(z.B, m);
  z.K = v2.s(z.H, 0.25);
  let k = v2.u(v2.rot(z.K, Math.PI/2));
  z.N = v2.r(v2.s(z.B, 1.3), -Math.PI/5);
  for(let i in z)
    z[i] = v2.s(z[i], r);
  return {
    title: 'Proposition 11',
    id: '13.11',
    prose: prop11,
    points: z,
    letters: {
      A: [1],
      B: [2],
      C: [4],
      G: [5],
      D: [6],
      H: [6],
      E: [7],
      F: [8],
      M: [1.5, 2],
      K: [1,2],
      L: [8],
      N: [7, 2],
    },
    shapes: [
      rg.circle(z.F, r*2),
      rg.polygon([...'ABCDE'].map(l => z[l])),
      ...['AG', 'BH', 'AC'].map(s => rg.line(z[s[0]], z[s[1]])),
      rg.line(v2.add(z.K, v2.s(k, -5)), v2.add(z.K, v2.s(k, 5))),
      rg.line(v2.add(z.N, v2.s(v2.y, -50)), v2.add(z.N, v2.s(v2.y, 50))),
    ],
  };
},

function() {
  let z = [];
  let r = 150;
  let phi = 2
  z.D = v2.o;
  z.A = v2.s(v2.y, -1);
  s(z, 'BEC', [1, 1.5, 2].map(i => v2.rot(z.A, -Math.PI*2*i/3)));
  for(let i in z)
    z[i] = v2.s(z[i], r);
  return {
    title: 'Proposition 12',
    id: '13.12',
    prose: prop12,
    points: z,
    letters: {
      A: [1],
      B: [4],
      C: [6],
      E: [5],
      D: [7],
    },
    shapes: [
      rg.circle(z.D, r*2),
      rg.polygon([...'ABC'].map(l => z[l])),
      ...['AE', 'BE'].map(s => rg.line(z[s[0]], z[s[1]])),
      rg.line(v2.add(z.D, v2.s(v2.x, -5)), v2.add(z.D, v2.s(v2.x, 5))),
    ],
  };
},

function() {
  return {
    title: 'Proposition 13',
    id: '13.13',
    img: '/img/13/13',
    prose: prop13,
  };
},

function() {
  return {
    title: 'Lemma',
    id: '13.13-lem',
    img: '/img/13/l1',
    prose: propl1,
  };
},

function() {
  return {
    title: 'Proposition 14',
    id: '13.14',
    img: '/img/13/14',
    prose: prop14,
  };
},

function() {
  return {
    title: 'Proposition 15',
    id: '13.15',
    img: '/img/13/15',
    prose: prop15,
  };
},

function() {
  return {
    title: 'Proposition 16',
    id: '13.16',
    img: '/img/13/16',
    prose: prop16,
  };
},

function() {
  return {
    title: 'Proposition 17',
    id: '13.17',
    img: '/img/13/17',
    prose: prop17,
  };
},

function() {
  return {
    title: 'Proposition 18',
    id: '13.18',
    img: '/img/13/18',
    prose: prop18,
  };
},

function() {
  return {
    title: 'Lemma',
    id: '13.18-lem',
    img: '/img/13/l2',
    prose: propl2,
  };
},

]
}

export default book;
