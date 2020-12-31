import book1 from '../build/1.json';
import book2 from '../build/2.json';
import book3 from '../build/3.json';
import book4 from '../build/4.json';
import book5 from '../build/5.json';
import book6 from '../build/6.json';
import book7 from '../build/7.json';
import book8 from '../build/8.json';
import book9 from '../build/9.json';
import book10 from '../build/10.json';
import book11 from '../build/11.json';
import book12 from '../build/12.json';
import book13 from '../build/13.json';

let descs = [
  "Fundamentals of Plane Geometry Involving Straight-Lines",
  "Fundamentals of Geometric Algebra",
  "Fundamentals of Plane Geometry Involving Circles",
  "Construction of Rectilinear Figures In and Around Circles",
  "Proportion",
  "Similar Figures",
  "Elementary Number Theory",
  "Continued Proportion",
  "Applications of Number Theory",
  "Incommensurable Magnitudes",
  "Elementary Stereometry",
  "Proportional Stereometry",
  "The Platonic Solids"
];

function unfoldGraphics(p) {
  let callrg = a => rg[a[0]](...a.slice(1));
  if(p.shapes)
  {
    p.shapes = p.shapes.map(callrg);
  }
  if(p.given)
  {
    for(let k in p.given)
    {
      p.given[k] = p.given[k].map(callrg);
    }
  }
  if(p.figures)
    p.figures.forEach(unfoldGraphics);

  return p;
}

let books = {
  descs,
  1: book1.map(unfoldGraphics),
  2: book2.map(unfoldGraphics),
  3: book3.map(unfoldGraphics),
  4: book4.map(unfoldGraphics),
  5: book5.map(unfoldGraphics),
  6: book6.map(unfoldGraphics),
  7: book7.map(unfoldGraphics),
  8: book8.map(unfoldGraphics),
  9: book9.map(unfoldGraphics),
  10: book10.map(unfoldGraphics),
  11: book11.map(unfoldGraphics),
  12: book12.map(unfoldGraphics),
  13: book13.map(unfoldGraphics),
};

window.books = books;
