import vec2 from './vec2.js';

import prop0 from './prose/book5/0';
import prop1 from './prose/book5/1';
import prop2 from './prose/book5/2';
import prop3 from './prose/book5/3';
import prop4 from './prose/book5/4';
import prop5 from './prose/book5/5';
import prop6 from './prose/book5/6';
import prop7 from './prose/book5/7';
import prop8 from './prose/book5/8';
import prop9 from './prose/book5/9';
import prop10 from './prose/book5/10';
import prop11 from './prose/book5/11';
import prop12 from './prose/book5/12';
import prop13 from './prose/book5/13';
import prop14 from './prose/book5/14';
import prop15 from './prose/book5/15';
import prop16 from './prose/book5/16';
import prop17 from './prose/book5/17';
import prop18 from './prose/book5/18';
import prop19 from './prose/book5/19';
import prop20 from './prose/book5/20';
import prop21 from './prose/book5/21';
import prop22 from './prose/book5/22';
import prop23 from './prose/book5/23';
import prop24 from './prose/book5/24';
import prop25 from './prose/book5/25';

function book5(rg)
{
  return [
function()
{
  return {
    prose: prop0,
    points: {},
    shapes: [],
    letters: {}
  };
},

function()
{
  const e = 70;
  const f = 90;

  return {
    prose: prop1,
    mags: [
      { l: 'A', m: e, p: [50, 50] },
      { l: 'G', m: e },
      { l: 'B' },
      { l: 'E', m: e, v: 50 },
      { l: 'C', m: f, p: [250, 50] },
      { l: 'H', m: f },
      { l: 'D' },
      { l: 'F', m: f, v: 50 },
    ],
  };
},

function()
{
  const c = 50;
  const f = 80;

  return {
    prose: prop2,
    mags: [
      { l: 'A', m: c, n: 3, p: [50, 50] },
      { l: 'B', m: c, n: 2 },
      { l: 'G' },
      { l: 'C', m: c, v: 50 },
      { l: 'D', m: f, n: 3, v: 70 },
      { l: 'E', m: f, n: 2 },
      { l: 'H' },
      { l: 'F', m: f, v: 50 },
    ]
  };
},

function()
{
  const b = 70;
  const d = 40;
  return {
    prose: prop3,
    mags: [
      { l: 'A', m: b, n: 3, p: [50, 50] },
      { l: 'B', m: b, v: 50 },
      { l: 'E', m: b * 3, v: 50 },
      { l: 'K', m: b * 3 },
      { l: 'F' },
      { l: 'C', m: d, n: 3, v: 50 },
      { l: 'D', m: d, v: 50 },
      { l: 'G', m: d * 3, v: 50 },
      { l: 'L', m: d * 3 },
      { l: 'H' },
    ]
  };
},

function()
{
  const a = 60, b = a/2.1, c = 50, d = c/2.1, v = 40;
  return {
    prose: prop4,
    mags: [
      { l: 'A', m: a, p: [50, 40] },
      { l: 'B', m: b, v },
      { l: 'E', m: a, n: 2, v },
      { l: 'G', m: b, n: 3, v },
      { l: 'K', m: a*2, n: 2, v },
      { l: 'M', m: b*3, n: 3, v },
      { l: 'C', m: c, v  },
      { l: 'D', m: d, v  },
      { l: 'F', m: c, n: 2, v },
      { l: 'H', m: d, n: 3, v },
      { l: 'L', m: c*2, n: 2, v },
      { l: 'N', m: d*3, n: 3, v },
    ]
  };
},

function()
{
  const a = 80, b = 50;
  return {
    prose: prop5,
    mags: [
      { l: 'A', m: a, n: 3, p: [50, 50] },
      { l: 'E', m: b, n: 3 },
      { l: 'B' },
      { l: 'G', m: b, v: 80 },
      { l: 'C', m: a },
      { l: 'F', m: b },
      { l: 'D' },
    ]
  };
},

function()
{
  const e = 70, f = 50;
  return {
    prose: prop6,
    mags: [
      { l: 'A', m: e, n: 3, p: [50, 50] },
      { l: 'G', m: e },
      { l: 'B' },
      { l: 'E', m: e, v: 50 },
      { l: 'K', m: e, v: 80 },
      { l: 'C', m: e, n: 3 },
      { l: 'H', m: e },
      { l: 'D' },
      { l: 'F', m: e, v: 50 },
    ]
  };
},

function()
{
  const a = 60, c = 70;
  return {
    prose: prop7,
    mags: [
      { l: 'A', m: a, p: [50, 50] },
      { l: 'B', m: a, v: 50 },
      { l: 'C', m: c, v: 50 },
      { l: 'D', m: a, n: 4, p: [180, 50] },
      { l: 'E', m: a, n: 4, v: 50 },
      { l: 'F', m: c, n: 3, v: 50 },
    ]
  };
},

function()
{
  const c1 = 60, c2 = 25, d = 35, v = 40;
  return {
    prose: prop8,
    figures: [
      {
        mags: [
          { l: 'A', m: c2, p: [40, 50] },
          { l: 'E', m: c1 },
          { l: 'B' },
          { l: 'C', m: c1, v },
          { l: 'F', m: c2, n: 2, v },
          { l: 'G', m: c1, n: 2 },
          { l: 'H' },
          { l: 'K', m: c1, n: 2, v },
          { l: 'D', m: d, v },
          { l: 'L', m: d, n: 2, v },
          { l: 'M', m: d, n: 3, v },
          { l: 'N', m: d, n: 4, v },
        ]
      },
      {
        mags: [
          { l: 'A', m: c1, p: [290, 50] },
          { l: 'E', m: c2 },
          { l: 'B' },
          { l: 'C', m: c2, v },
          { l: 'F', m: c1, n: 2, v },
          { l: 'G', m: c2, n: 2 },
          { l: 'H' },
          { l: 'K', m: c2, n: 2, v },
          { l: 'D', m: d, v },
          { l: 'L', m: d, n: 2, v },
          { l: 'M', m: d, n: 3, v },
          { l: 'N', m: d, n: 4, v },
        ]
      },

    ]
  };
},

function()
{
  const a = 140, c = 160;
  return {
    prose: prop9,
    mags: [
      { l: 'A', m: a, p: [50, 50] },
      { l: 'B', m: a, p: [250, 50] },
      { l: 'C', m: c, p: [150, 120] },
    ]
  };
},

function()
{
  const a = 140, b = 100, c = 160;
  return {
    prose: prop10,
    mags: [
      { l: 'A', m: a, p: [50, 50] },
      { l: 'B', m: b, p: [250, 50] },
      { l: 'C', m: c, p: [150, 120] },
    ]
  };
},

function()
{
  const r = 1.3, a = 30, b = a / r,
        c = 50, d = c / r,
        e = 60, f = e / r;
  return {
    prose: prop11,
    mags: [
      { l: 'A', m: a, p: [50, 50] },
      { l: 'B', m: b, v: 50 },
      { l: 'G', m: a, n: 2, v: 50 },
      { l: 'L', m: b, n: 3, v: 50 },
      { l: 'C', m: c, p: [180, 50] },
      { l: 'D', m: d, v: 50 },
      { l: 'H', m: c, n: 2, v: 50 },
      { l: 'M', m: d, n: 3, v: 50 },
      { l: 'E', m: e, p: [350, 50] },
      { l: 'F', m: f, v: 50 },
      { l: 'K', m: e, n: 2, v: 50 },
      { l: 'N', m: f, n: 3, v: 50 },
    ]
  };
},

function()
{
  const r = 1.4, a = 60, b = a / r,
        c = 70, d = c / r,
        e = 40, f = e / r;
  return {
    prose: prop12,
    mags: [
      { l: 'A', m: a, p: [50, 50] },
      { l: 'B', m: b, v: 50 },
      { l: 'C', m: c, p: [200, 50] },
      { l: 'D', m: d, v: 50 },
      { l: 'E', m: e, p: [350, 50] },
      { l: 'F', m: f, v: 50 },
      { l: 'G', m: a * 2, p: [50, 180] },
      { l: 'H', m: c * 2, v: 50 },
      { l: 'K', m: e * 2, v: 50 },
      { l: 'L', m: b * 4, p: [280, 180] },
      { l: 'M', m: d * 4, v: 50 },
      { l: 'N', m: f * 4, v: 50 },
    ]
  };
},

function()
{
  const a = 50, b = a/2, c = 60, d = c/2, e = 55, f = e/1.2, v = 40;
  return {
    prose: prop13,
    mags: [
      { l: 'A', m: a, p: [40, 50] },
      { l: 'B', m: b, v },
      { l: 'M', m: a, n: 2, v },
      { l: 'N', m: b, n: 3, v },
      { l: 'C', m: c, p: [190, 50] },
      { l: 'D', m: d, v },
      { l: 'G', m: c, n: 2, v },
      { l: 'K', m: d, n: 3, v },
      { l: 'E', m: e, p: [350, 50] },
      { l: 'F', m: f, v },
      { l: 'H', m: e, n: 2, v },
      { l: 'L', m: f, n: 3, v },
    ],
  };
},

function()
{
  const a = 120, b = a/1.3, c = 80, d = c/1.3;
  return {
    prose: prop14,
    mags: [
      { l: 'A', m: a, p: [50, 50] },
      { l: 'B', m: b, v: 50 },
      { l: 'C', m: c, p: [250, 50] },
      { l: 'D', m: d, v: 50 },
    ],
  };
},

function()
{
  const c = 60, f = 50;
  return {
    prose: prop15,
    mags: [
      { l: 'A', m: c, p: [50, 50] },
      { l: 'G', m: c },
      { l: 'H', m: c },
      { l: 'B' },
      { l: 'D', m: f, v: 50 },
      { l: 'K', m: f },
      { l: 'L', m: f },
      { l: 'E' },
      { l: 'C', m: c, p: [300, 50] },
      { l: 'F', m: f, v: 50 },
    ]
  };
},

function()
{
  const a = 60, b = a/1.3, c = 50, d = c/1.3;
  return {
    prose: prop16,
    mags: [
      { l: 'A', m: a, p: [50, 50] },
      { l: 'B', m: b, v: 50 },
      { l: 'E', m: a, n: 3, v: 50 },
      { l: 'F', m: b, n: 3, v: 50 },
      { l: 'C', m: c, p: [300, 50] },
      { l: 'D', m: d, v: 50 },
      { l: 'G', m: c, n: 2, v: 50 },
      { l: 'H', m: d, n: 2, v: 50 },
    ],
  };
},

function()
{
  const a = 70, b = a / 1.9, c = 60, d = c/1.8;
  return {
    prose: prop17,
    mags: [
      { l: 'A', m: a, p: [50, 50] },
      { l: 'E', m: b },
      { l: 'B' },
      { l: 'C', m: c, p: [250, 50] },
      { l: 'F', m: d },
      { l: 'D' },
      { l: 'G', m: a, n: 2, p: [50, 120] },
      { l: 'H', m: b, n: 2 },
      { l: 'K', m: b, n: 3 },
      { l: 'O' },
      { l: 'L', m: c, n: 2, v: 70 },
      { l: 'M', m: d, n: 2 },
      { l: 'N', m: d, n: 3 },
      { l: 'P' },
    ]
  };
},

function()
{
  const a = 150, b = a/1.7, c = 190, d = c/1.7, r = 40;
  return {
    prose: prop18,
    mags: [
      { l: 'A', m: a, p: [50, 50] },
      { l: 'E', m: b },
      { l: 'B' },
      { l: 'C', m: c, v: 70 },
      { l: 'F', m: r },
      { l: 'G', m: d-r },
      { l: 'D' },
    ]
  };
},

function()
{
  const a = 100, b = a*1.7, c = 120, d = c*1.7;
  return {
    prose: prop19,
    mags: [
      { l: 'A', m: a, p: [50, 50] },
      { l: 'E', m: b },
      { l: 'B' },
      { l: 'C', m: c, v: 70 },
      { l: 'F', m: d },
      { l: 'D' },
    ]
  };
},

function()
{
  const a = 180, b = a/1.8, c = b * 1.4,
        d = 150, e = d/1.8, f = e * 1.4;
  return {
    prose: prop20,
    mags: [
      { l: 'A', m: a, p: [50, 50] },
      { l: 'B', m: b, v: 70 },
      { l: 'C', m: c, v: 70 },
      { l: 'D', m: d, p: [300, 50] },
      { l: 'E', m: e, v: 70 },
      { l: 'F', m: f, v: 70 },
    ]
  };
},

function()
{
  const a = 180, b = a/1.8, c = b * 1.4,
        d = 150, e = d*1.2, f = e / 1.8;
  return {
    prose: prop21,
    mags: [
      { l: 'A', m: a, p: [50, 50] },
      { l: 'B', m: b, v: 70 },
      { l: 'C', m: c, v: 70 },
      { l: 'D', m: d, p: [300, 50] },
      { l: 'E', m: e, v: 70 },
      { l: 'F', m: f, v: 70 },
    ]
  };
},

function()
{
  const a = 55, d = 40, b = a/1.3, c = b*1.6, e = d/1.3, f = e*1.6;
  return {
    prose: prop22,
    mags: [
      { l: 'A', m: a, p: [30, 50] },
      { l: 'D', m: d, v: 50 },
      { l: 'G', m: a, n: 2, v: 50 },
      { l: 'H', m: d, n: 2, v: 50 },
      { l: 'B', m: b, p: [180, 50] },
      { l: 'E', m: e, v: 50 },
      { l: 'K', m: b, n: 3, v: 50 },
      { l: 'L', m: e, n: 3, v: 50 },
      { l: 'C', m: c, p: [360, 50] },
      { l: 'F', m: f, v: 50 },
      { l: 'M', m: c, n: 2, v: 50 },
      { l: 'N', m: f, n: 2, v: 50 },
    ]
  };
},

function()
{
  const a = 45, d = 30, b = a/1.6, c = b*1.6, e = d*1.6, f = e/1.6;
  return {
    prose: prop23,
    mags: [
      { l: 'A', m: a, p: [30, 50] },
      { l: 'D', m: d, v: 50 },
      { l: 'G', m: a, n: 3, v: 50 },
      { l: 'K', m: d, n: 3, v: 50 },
      { l: 'B', m: b, p: [220, 50] },
      { l: 'E', m: e, v: 50 },
      { l: 'H', m: b, n: 3, v: 50 },
      { l: 'M', m: e, n: 2, v: 50 },
      { l: 'C', m: c, p: [380, 50] },
      { l: 'F', m: f, v: 50 },
      { l: 'L', m: c, n: 2, v: 50 },
      { l: 'N', m: f, n: 2, v: 50 },
    ]
  };
},

function()
{
  const a = 160, d = 120;
  return {
    prose: prop24,
    mags: [
      { l: 'A', m: a, p: [50, 50] },
      { l: 'B', m: a/2 },
      { l: 'G' },
      { l: 'C', m: a/1.2, v: 70 },
      { l: 'D', m: d, v: 70 },
      { l: 'E', m: d/2 },
      { l: 'H' },
      { l: 'F', m: d/1.2, v: 70 },
    ]
  };
},

function()
{
  const a = 160, c = 120;
  return {
    prose: prop25,
    mags: [
      { l: 'A', m: a, p: [50, 50] },
      { l: 'G', m: a/2 },
      { l: 'B' },
      { l: 'E', m: a, v: 50 },
      { l: 'C', m: c, v: 70 },
      { l: 'H', m: c/2 },
      { l: 'D' },
      { l: 'F', m: c, v: 50 },
    ]
  };
},

]
}

export default book5;
