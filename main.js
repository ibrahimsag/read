import vec2 from './vec2.js';
import makeRG from './makeRG.js';
import makeGround from './makeGround.js';

const svg = document.getElementById('figure');
const rg = makeRG(svg);

import book from './book3.js';

function processProse(t)
{
  return t.split('\n\n').map(p => p.split('\n'));
}

let ps = book(rg).map((f, ind) => {
  let p = f();
  p.title = 'Proposition ' + (ind+1);
  p.prose = processProse(p.prose);
  return p;
} );
let ground = makeGround(ps, rg, svg);

let last_p = ps[ps.length-1];
last_p.img = 'img/' + (ps.length) + '.png';
ground.draw(0, last_p);
