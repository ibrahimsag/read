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
  p.img = 'img/' + (ind+1) + '.png';
  if(p.shapes.length == 0)
  {
    for(var i in p.points)
    {
      let pt = p.points[i];
      p.letters[i] = [0];
      p.shapes.push(rg.circle(pt, 5, {strokeWidth: 2}));
    }
  }
  return p;
} );
let ground = makeGround(ps, rg, svg);

ground.draw(0, (parseInt(localStorage.last_i) || ps.length) - 1);
