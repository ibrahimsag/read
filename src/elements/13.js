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
  return {
    title: 'Proposition 5',
    id: '13.5',
    img: '/img/13/5',
    prose: prop5,
  };
},

function() {
  return {
    title: 'Proposition 6',
    id: '13.6',
    img: '/img/13/6',
    prose: prop6,
  };
},

function() {
  return {
    title: 'Proposition 7',
    id: '13.7',
    img: '/img/13/7',
    prose: prop7,
  };
},

function() {
  return {
    title: 'Proposition 8',
    id: '13.8',
    img: '/img/13/8',
    prose: prop8,
  };
},

function() {
  return {
    title: 'Proposition 9',
    id: '13.9',
    img: '/img/13/9',
    prose: prop9,
  };
},

function() {
  return {
    title: 'Proposition 10',
    id: '13.10',
    img: '/img/13/10',
    prose: prop10,
  };
},

function() {
  return {
    title: 'Proposition 11',
    id: '13.11',
    img: '/img/13/11',
    prose: prop11,
  };
},

function() {
  return {
    title: 'Proposition 12',
    id: '13.12',
    img: '/img/13/12',
    prose: prop12,
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
