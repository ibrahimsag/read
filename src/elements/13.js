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
    ],
    polygonl: {
      AE: 'AKEB',
      CE: 'CGEB',
      FH: 'HbFa',
      CK: 'CAKG',
      CH: 'CbHA',
      DF: 'DCFL',
      HF: 'HbFa',
      KC: 'CAKG',
      HC: 'CbHA',
      LH: 'LPHa',
      DH: 'DAHP',
      AP: 'DAHP',
    },
    given: {
      MNO: [rg.gnomon(z.H, z.M, z.O), rg.polygon([...'ACFLPH'].map(l => z[l]))],
    },
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
    polygonl: {
      AF: 'ABFL',
      CG: 'CKGD',
      AH: 'ACHP',
      KB: 'KEBC',
      BH: 'BbHC',
      HB: 'BbHC',
      LH: 'LPHa',
      HF: 'HbFa',
      BG: 'BEGD',
    },
    given: {
      MNO: [rg.gnomon(z.H, z.M, z.O), rg.polygon([...'CBFLPH'].map(l => z[l]))],
    },
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
    polygonl: {
      AE: 'AbEB',
      RS: 'RbSa',
      FG: 'FaGK',
      CE: 'CSEB',
      GF: 'FaGK',
      HL: 'HbLK',
      MF: 'MaFN',
      FE: 'FSEN',
      CG: 'CDGa',
      CN: 'CFNB',
      DN: 'DKNB',
    },
    given: {
      OPQ: [rg.gnomon(z.a, z.O, z.Q), rg.polygon([...'FNBDGa'].map(l => z[l]))]
    }
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
    polygonl: {
      AK: 'AHKB',
      AF: 'AHFC',
      HG: 'HDGF',
      FE: 'FGEK',
      CK: 'CFKB',
      CE: 'CGEB',
      AE: 'ADEB',
      GH: 'GFHD',
    },
    given: {
      LMN: [rg.gnomon(z.F, z.L, z.N), rg.polygon([...'AHFGEB'].map(l => z[l]))]
    }
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
    ],
    polygonl: {
      "AE": "AbEB",
      "CE": "CcEB",
      "CH": "CdHA",
      "HE": "HbEK",
      "DH": "DLHA",
      "HC": "HdCA",
      "HB": "HKBA",
      "DK": "DLKB"
    },
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
  let z = {};
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
      ...['AG', 'AK', 'KB', 'KF', 'BF', 'FM', 'KN'].map(s => rg.line(z[s[0]], z[s[1]])),
    ],
  };
},

function() {
  let z = {};
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
    given: {
      N: [rg.line(v2.add(z.N, v2.s(v2.y, -50)), v2.add(z.N, v2.s(v2.y, 50)))]
    }
  };
},

function() {
  let z = {};
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
  let y = {};
  let sq2 = Math.sqrt(2);
  y.H = v3.o;
  y.E = v3.s(v3.z, sq2);
  y.F = v3.r(y.E, v3.y, -Math.PI*2/3);
  y.G = v3.r(y.F, v3.y, -Math.PI*2/3);
  y.K = v3.s(v3.y, -2);
  y.L = v3.s(v3.y, 1);
  let c = Array(21).fill().map((_, i) => v3.rot(y.E, v3.y, Math.PI*i/10));
  let z = {};
  let r = 100;
  let f = v3.i;
  f = f.map(d => v3.rot(d, f[0], -0.5));
  f = f.map(d => v3.rot(d, f[1], -0.5));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), r);
  c = c.map(v => v3.s(f.map(d => v3.dot(d, v)), r));
  let x = {};
  x.O = v2.s(v2.y, -2.5);
  x.B = v2.add(x.O, v2.s(v2.x, 1.5));
  x.A = v2.add(x.O, v2.s(v2.x, -1.5));
  x.D = v2.add(x.O, v2.rot(v2.s(v2.x, 1.5), -Math.acos(1/3)));
  x.C = v2.add(x.O, v2.s(v2.x, 0.5));
  for(let i in x)
    z[i] = v2.s(x[i], r);
  return {
    title: 'Proposition 13',
    id: '13.13',
    prose: prop13,
    points: z,
    letters: {
      K: [1],
      E: [8],
      F: [4],
      H: [4],
      L: [5],
      G: [6],
      A: [5],
      C: [5],
      B: [5],
      D: [1],
    },
    shapes: [
      ...['EF','FG','GE', 'KE', 'KF', 'KG', 'KL', 'HE', 'HF', 'HG', 'AB', 'AD', 'DC']
        .map(s => rg.line(z[s[0]], z[s[1]])),
      rg.curve(c),
      rg.arc(z.O, z.A, z.B),
    ],
    given: {
      EFG: [rg.curve(c)],
    }
  };
},

function() {
  let z = {};
  let r = 100;
  z.O = v2.o;
  z.B = v2.add(z.O, v2.s(v2.x, 1.5));
  z.A = v2.add(z.O, v2.s(v2.x, -1.5));
  z.C = v2.add(z.O, v2.s(v2.x, 0.5));
  z.D = v2.r(z.B, -Math.acos(1/3));
  s(z, 'EFG', [...'ACB'].map(l => v2.add(z[l], v2.s(v2.y, 2))));
  let c = Array(11).fill().map((_, i) => v2.rot(z.B, -Math.PI*i/10));
  for(let i in z)
    z[i] = v2.s(z[i], r);
  c = c.map(v => v2.s(v, r));
  return {
    title: 'Lemma',
    id: '13.13-lem',
    prose: propl1,
    points: z,
    letters: {
      A: [3],
      E: [5],
      F: [5],
      B: [7],
      C: [8],
      D: [1],
    },
    shapes: [
      ...['AD', 'DB', 'AB', 'AE', 'EG', 'GB', 'DF'].map(s => rg.line(z[s[0]], z[s[1]])),
      rg.curve(c),
    ],
    polygonl: {
      EC: 'EFCA',
      FB: 'FGBC',
      BF: 'FGBC',
      EB: 'EGBA',
    },
  };
},

function() {
  let y = {};
  y.K = v3.o;
  y.H = v3.x;
  y.G = v3.z;
  y.E = v3.s(y.G, -1);
  y.F = v3.s(y.H, -1);
  y.L = v3.s(v3.y, -1);
  y.M = v3.s(v3.y, 1);
  let z = {};
  let r = 150;
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], 0.7));
  f = f.map(d => v3.r(d, f[1], -0.7));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), r);
  let x = {};
  x.C = v2.s(v2.y, -1.5);
  x.B = v2.add(x.C, v2.x);
  x.A = v2.add(x.C, v2.s(v2.x, -1));
  x.D = v2.add(x.C, v2.s(v2.y, -1));
  let c = Array(11).fill().map((_, i) => v2.add(x.C, v2.r(v2.x, -Math.PI*i/10)));
  for(let i in x)
    z[i] = v2.s(x[i], r);
  c = c.map(v => v2.s(v, r));
  return {
    title: 'Proposition 14',
    id: '13.14',
    prose: prop14,
    points: z,
    letters: {
      L: [1],
      M: [5],
      E: [3],
      F: [3],
      H: [7],
      G: [7],
      K: [1],
      D: [1],
      A: [5],
      C: [5],
      B: [5],
    },
    shapes: [
      rg.curve(c),
      ...['AB', 'BD', 'DC',
          'EF', 'FG', 'GH', 'HE',
          'LE', 'LF', 'LG', 'LH',
          'ME', 'MF', 'MG', 'MH',
          'ML', 'EG', 'HF']
        .map(s => rg.line(z[s[0]], z[s[1]], {stroke: hsl(20)})),
      ...['ME', 'MH', 'EH']
        .map(s => rg.line(z[s[0]], z[s[1]])),
    ]
  };
},

function() {
  let y = {};
  s(y, 'EHFGKNLM', [-1, 1].map(z => [-1, 1].map(y => [-1, 1].map(x => [x, y, z]))).flat(2));
  let z = {};
  let r = 100;
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.5));
  f = f.map(d => v3.r(d, f[1], -0.5));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), r);
  let x = {};
  x.O = v2.s(v2.y, 3.5);
  x.B = v2.add(x.O, v2.s(v2.x, 1.5));
  x.A = v2.add(x.O, v2.s(v2.x, -1.5));
  x.C = v2.add(x.O, v2.s(v2.x, 0.5));
  x.D = v2.add(x.O, v2.r(v2.s(v2.x, 1.5), -Math.acos(1/3)));
  for(let i in x)
    z[i] = v2.s(x[i], r);
  return {
    title: 'Proposition 15',
    id: '13.15',
    prose: prop15,
    points: z,
    letters: {
      E: [2],
      F: [5],
      G: [5],
      N: [1],
      K: [1],
      L: [8.2,2],
      M: [7],
      D: [8.5,2],
      A: [5],
      C: [5],
      B: [5],
      H: [2],
    },
    shapes: [
      ...['EF', 'FG', 'GH', 'HE',
          'KL', 'LM', 'MN', 'NK',
          'KE', 'LF', 'MG', 'NH',
          'KG', 'EG', 'AB', 'BD', 'DC']
        .map(s => rg.line(z[s[0]], z[s[1]])),
      ...['EH', 'GH', 'NH']
        .map(s => rg.line(z[s[0]], z[s[1]], {strokeWidth: 3})),
      rg.arc(z.O, z.A, z.B)
    ],
    polygonl: {
      EG: 'EFGH',
    }
  };
},

function() {
  let y = {};
  y.V = v3.o;
  let sq5 = Math.sqrt(5)/2.5;
  let dec = Math.sin(Math.PI/5)*2*sq5;
  s(y, 'HNGMFLEPKO', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    .map(i => v3.r(v3.s(v3.y, sq5), v3.z, Math.PI*2*i/10)));
  s(y, 'QRSTU', [...'EFGHK']
    .map(l => v3.add(y[l], v3.s(v3.z, -sq5))));
  y.X = v3.s(v3.z, dec);
  y.W = v3.s(v3.z, -sq5);
  y.Z = v3.add(y.W, v3.s(v3.z, -dec));
  y.a = v3.s(v3.z, -sq5/2);
  let r = 250;
  let z = {};
  let f = v3.i;
  f = f.map(d => v3.r(d, f[2], 1.1));
  f = f.map(d => v3.r(d, f[0], -0.5));
  //f = f.map(d => v3.r(d, f[1], -0.3));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), r);
  let a = v2.r(v2.u(v2.sub(z.V, z.W)), Math.PI/2);
  let c = Array(21).fill().map((_, i) => v3.r(y.E, v3.z, -Math.PI*i/10))
  c = c.map(v => v3.s(f.map(d => v3.dot(d, v)), r));
  let x = {};
  x.o = v2.s(v2.y, -1.2);
  x.B = v2.add(x.o, v2.s(v2.x, 1));
  x.A = v2.add(x.o, v2.s(v2.x, -1));
  x.C = v2.add(x.o, v2.s(v2.x, 3/5));
  x.D = v2.add(x.o, v2.r(v2.s(v2.x, 1), -Math.acos(3/5)));
  for(let i in x)
    z[i] = v2.s(x[i], r-20);
  return {
    title: 'Proposition 16',
    id: '13.16',
    prose: prop16,
    points: z,
    letters: {
      H: [6],
      Q: [5],
      R: [5],
      S: [5],
      T: [5],
      U: [5],
      L: [2],
      F: [2],
      M: [4],
      G: [1],
      N: [5],
      O: [7],
      K: [8],
      P: [1],
      E: [1],
      X: [1],
      Z: [3.5],
      V: [7],
      W: [6],
      a: [7, 2],
      A: [5],
      B: [5],
      C: [5],
      D: [0],
    },
    shapes: [
      rg.line(v2.add(z.a, v2.s(a, -5)), v2.add(z.a, v2.s(a, 5)), {stroke: hsl(25)}),
      rg.polygon([...'HGFEK'].map(l => z[l]), {stroke: hsl(20)}),
      rg.polygon([...'HNGMFLEPKO'].map(l => z[l]), {stroke: hsl(20)}),
      ...['XZ', 'QE', 'RF', 'SG', 'TH', 'UK', 'QZ', 'QW', 'UW', 'UZ', 'LV',
          'QR', 'TU', 'UQ', 'PQ', 'QL', 'OU', 'UP', 'MV', 'EV', 'VK']
        .map(s => rg.line(z[s[0]], z[s[1]], {stroke: hsl(20)})),
      rg.curve(c, {stroke: hsl(20)}),
      rg.polygon([...'NMLPO'].map(l => z[l])),
      ...['RS', 'ST', 'LR', 'RM', 'MS', 'SN', 'NT', 'TO', 
          'XM', 'XL']
        .map(s => rg.line(z[s[0]], z[s[1]])),
      ...['AB', 'BD', 'DC']
        .map(s => rg.line(z[s[0]], z[s[1]])),
      rg.arc(z.o, z.A, z.B)
    ],
    given: {
      EFGHK: [rg.curve(c)],
      EF: [rg.curve(c.slice(0, 5))],
      FG: [rg.curve(c.slice(4, 9))],
      GH: [rg.curve(c.slice(8, 13))],
      HK: [rg.curve(c.slice(12, 17))],
      KE: [rg.curve(c.slice(16, 21))],
    }
  };
},

function() {
  let y = {};
  let phi = 2/(1+Math.sqrt(5));
  s(y, 'BHCGQKALD', [0, 1, 2].map(y => [-1, 0, 1].map(x => [x, y, 0])).flat());
  s(y, 'EMFNPO', [2, 1].map(z => [-1, 0, 1].map(x => [x, 0, z])).flat());
  s(y, 'RST', ['PN', 'PO', 'QH'].map(s => v3.add(y[s[0]], v3.s(v3.sub(y[s[1]], y[s[0]]), phi))));
  y.W = v3.add(y.T, v3.s(v3.z, -phi));
  s(y, 'UXV', [...'RPS'].map(l => v3.add(y[l], v3.s(v3.y, -phi))));
  y.Z = v3.add(v3.z, v3.y);
  let z = {};
  let r = 120;
  let f = v3.i;
  f = f.map(d => v3.r(d, f[0], -0.8));
  f = f.map(d => v3.r(d, f[1], -0.35));
  for(let i in y)
    z[i] = v3.s(f.map(d => v3.dot(d, y[i])), r);
  return {
    title: 'Proposition 17',
    id: '13.17',
    prose: prop17,
    points: z,
    letters: {
      B: [3],
      D: [7],
      N: [2],
      E: [1],
      M: [1],
      F: [1],
      U: [1],
      X: [1],
      V: [1],
      O: [7],
      C: [7],
      K: [7],
      Q: [6],
      G: [3],
      A: [3],
      L: [5],
      W: [5],
      R: [6],
      T: [7],
      Z: [5],
      H: [2],
      P: [6],
      S: [8.2, 2],
    },
    shapes: [
      ...['BC', 'GK', 'AD', 'BA', 'HL', 'CD',
          'EF', 'NO', 'EB', 'MH', 'FC',
          'TW', 'UR', 'SV', 'XW',
          'BR', 'BS', 'BV', 'ZU', 'ZX']
        .map(s => rg.line(z[s[0]], z[s[1]], {stroke: hsl(20)})),
      ...['BW', 'WC', 'CV', 'UV', 'BU']
        .map(s => rg.line(z[s[0]], z[s[1]])),
    ],
    polygonl: {
      BD: 'BADC',
      BF: 'BCFE',
    }
  };
},

function() {
  let z = {};
  let phi = 2/(1+Math.sqrt(5));
  z.C = v2.o;
  z.B = v2.x;
  z.A = v2.s(v2.x, -1);
  z.G = v2.add(z.A, v2.s(v2.y, -2));
  let k = -1/Math.sqrt(5);
  let d = 1/3;
  let l = -k;
  s(z, 'KDL', [k, d, l].map(c => v2.s(v2.x, c)));
  s(z, 'EHFM', [0, k, d, l].map(c => v2.r(v2.x, -Math.acos(c))));
  z.N = v2.add(z.B, v2.s(v2.sub(z.F, z.B), phi));
  let n = v2.r(v2.u(v2.sub(z.F, z.B)), Math.PI/2);
  for(let i in z)
    z[i] = v2.s(z[i], 180);
  return {
    title: 'Proposition 18',
    id: '13.18',
    prose: prop18,
    points: z,
    smallletters: 'N',
    letters: {
      H: [8.5, 3],
      E: [1],
      F: [1],
      M: [8],
      A: [5],
      K: [5],
      C: [5],
      D: [5],
      L: [5],
      B: [5],
      G: [1],
      N: [3, 3],
    },
    shapes: [
      ...['AB', 'HK', 'AG', 'GC', 'EC', 'FD', 'ML',
          'AE', 'EB', 'AF', 'FB', 'AM', 'MB']
        .map(s => rg.line(z[s[0]], z[s[1]])),
      rg.line(v2.add(z.N, v2.s(n, 5)), v2.add(z.N, v2.s(n, -5))),
      rg.arc(z.C, z.A, z.B),
    ],
  };
},

function() {
  let z = {};
  let r = 150;
  z.F = v2.o;
  s(z, 'ABCDE', [0, 1, 2, 3, 4].map(i => v2.r(v2.y, Math.PI*(1+i*2/5))));
  for(let i in z)
    z[i] = v2.s(z[i], r);
  return {
    title: 'Lemma',
    id: '13.18-lem',
    prose: propl2,
    points: z,
    letters: {
      A: [1],
      E: [2.5],
      D: [4],
      C: [6],
      B: [7.5],
      F: [2, 2],
    },
    shapes: [
      rg.circle(z.F, r*2),
      rg.polygon([...'ABCDE'].map(l => z[l])),
      ...[...'ABCDE'].map(l => rg.line(z.F, z[l]))
    ]
  };
},

]
}

export default book;
