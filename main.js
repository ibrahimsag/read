import vec2 from './vec2.js';
import makeRG from './makeRG.js';
import makeGround from './makeGround.js';

const svg = document.getElementById('figure');
const rg = makeRG(svg);

import book from './book4.js';

function processProse(t)
{
  return t.split('\n\n').map(p => p.split('\n'));
}

let ps = book(rg).map((f, ind) => {
  let p = f();
  p.title = 'Proposition ' + (ind+1);
  p.prose = processProse(p.prose);
  p.img = 'img/' + (ind+1) + '.png';
  function letterAllPoints(f)
  {
    for(var i in f.points)
    {
      let pt = f.points[i];
      f.letters[i] = [0];
      f.shapes.push(rg.circle(pt, 5, {strokeWidth: 2}));
    }
  }
  if(p.figures)
  {
    for(var i = 0; i<p.figures.length; i++)
    {
      let figure = p.figures[i];
      if(figure.shapes.length == 0)
      {
        letterAllPoints(p.figures[i]);
      }
    }
  }
  else if(p.shapes.length == 0)
  {
    letterAllPoints(p);
  }
  return p;
} );
let ground = makeGround(ps, rg, svg);

ground.draw(0, (parseInt(localStorage.last_i) || ps.length) - 1);
