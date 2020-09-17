import vec2 from '../vec2.js';

import propdef1 from '../prose/10/def1';
import prop1 from '../prose/10/1';
import prop2 from '../prose/10/2';
import prop3 from '../prose/10/3';
import prop4 from '../prose/10/4';
import prop5 from '../prose/10/5';
import prop6 from '../prose/10/6';
import prop7 from '../prose/10/7';
import prop8 from '../prose/10/8';
import prop9 from '../prose/10/9';
import prop10 from '../prose/10/10';
import prop11 from '../prose/10/11';
import prop12 from '../prose/10/12';
import prop13 from '../prose/10/13';
import propl1 from '../prose/10/l1-14';
import prop14 from '../prose/10/14';
import prop15 from '../prose/10/15';
import prop16 from '../prose/10/16';
import propl2 from '../prose/10/l2-17';
import prop17 from '../prose/10/17';
import prop18 from '../prose/10/18';
import prop19 from '../prose/10/19';

function book(rg)
{
  return [
function() {
  return {
    title: 'Definitions I',
    prose: propdef1,
  };
},

function() {
  return {
    title: 'Proposition 1',
    img: 'img/10/1.png',
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
    img: 'img/10/2.png',
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
    img: 'img/10/3.png',
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
    img: 'img/10/4.png',
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
    img: 'img/10/5.png',
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
    img: 'img/10/6.png',
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
    img: 'img/10/7.png',
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
    img: 'img/10/8.png',
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
    img: 'img/10/9.png',
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
    img: 'img/10/10.png',
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
    img: 'img/10/11.png',
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
    img: 'img/10/12.png',
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
    img: 'img/10/13.png',
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
    img: 'img/10/l1.png',
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
    img: 'img/10/14.png',
    prose: prop14,
  };
},

function() {
  return {
    title: 'Proposition 15',
    img: 'img/10/15.png',
    prose: prop15,
  };
},

function() {
  return {
    title: 'Proposition 16',
    img: 'img/10/16.png',
    prose: prop16,
  };
},

function() {
  return {
    title: 'Lemma',
    img: 'img/10/l2.png',
    prose: propl2,
  };
},

function() {
  return {
    title: 'Proposition 17',
    img: 'img/10/17.png',
    prose: prop17,
  };
},

function() {
  return {
    title: 'Proposition 18',
    img: 'img/10/18.png',
    prose: prop18,
  };
},

function() {
  return {
    title: 'Proposition 19',
    img: 'img/10/19.png',
    prose: prop19,
  };
},

]
}

export default book;
