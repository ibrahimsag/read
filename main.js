import vec2 from './vec2.js';
import makeRG from './makeRG.js';
import makeGround from './makeGround.js';

const svg = document.getElementById('figure');
const rg = makeRG(svg);

function processProse(t)
{
  return t.split('\n\n').map(p => p.split('\n'));
}

function processMags(p)
{
  let mags = p.mags;
  let last_pos = [0, 0];
  let pos = [0, 0];
  if(!p.points) p.points = {};
  if(!p.shapes) p.shapes = [];
  if(!p.letters) p.letters = {};
  p.ticks = [];
  p.indices = {};

  for(var i = 0; i < mags.length; i++)
  {
    let mag = mags[i];
    if(mag.p)
    {
      pos = mag.p;
      last_pos = pos;
      p.shapes.push(rg.tick(pos));
      p.ticks.push(pos);
      p.letters[mag.l] = [3];
    }
    else if(mag.v)
    {
      pos = vec2.add(last_pos, [0, mag.v]);
      last_pos = pos;
      p.shapes.push(rg.tick(pos));
      p.ticks.push(pos);
      p.letters[mag.l] = [3];
    }
    else
    {
      p.letters[mag.l] = [1];
    }
    p.points[mag.l] = pos;
    p.indices[mag.l] = p.ticks.length;

    if(mag.m)
    {
      let n = mag.n ? mag.n : 1;
      for(var k = 0; k < n; k++)
      {
        let prev_pos = pos;
        pos = vec2.add(prev_pos, [mag.m, 0]);
        p.shapes.push(rg.tick(pos));
        p.shapes.push(rg.line(prev_pos, pos));
        p.ticks.push(pos);
      }
    }
  }

  return p;
}

let processProp = (f, ind) => {
  let p = f();
  p.prose = processProse(p.prose);

  if(ind === 0)
  {
    p.title = 'Definitions';
  }
  else
  {
    p.title = 'Proposition ' + (ind);
    p.img = 'img/' + (ind) + '.png';
  }

  function letterAllPoints(f)
  {
    for(var i in f.points)
    {
      let pt = f.points[i];
      f.letters[i] = [0];
      f.shapes.push(rg.circle(pt, 5, { strokeWidth: 2 }));
    }
  }
  if(p.figures)
  {
    for(var i = 0; i<p.figures.length; i++)
    {
      let figure = p.figures[i];
      if(figure.mags)
      {
        processMags(figure);
      }
      if(figure.shapes.length == 0)
      {
        letterAllPoints(p.figures[i]);
      }
    }
  }
  else
  {
    if(p.mags)
    {
      processMags(p);
    }
    if(p.shapes.length == 0)
    {
      letterAllPoints(p);
    }
  }
  return p;
}

import book1 from './book1.js';
import book2 from './book2.js';
import book3 from './book3.js';
import book4 from './book4.js';
import book5 from './book5.js';

let books = [book1, book2, book3, book4, book5];

function openBook(i_book) {
  localStorage.last_i_book = i_book + 1;

  let ps = books[i_book](rg).map(processProp);

  let ground = makeGround(ps, rg, svg);

  ground.draw(0, (Math.min(ps.length, parseInt(localStorage.last_i)) || ps.length) - 1);

  function pressHandler(e)
  {
    if(e.key == "o")
    {
      openBook((i_book - 1 + books.length) % books.length);
    }
    else if(e.key == "p")
    {
      openBook((i_book + 1) % books.length);
    }
    else
    {
      ground.proxy.onkeypress(e);
    }
  }

  document.onkeypress = pressHandler;
}

openBook((Math.min(books.length, parseInt(localStorage.last_i_book)) || books.length) - 1);
