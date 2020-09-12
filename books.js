import book8 from './figures/8.js';

let haveClips = (i_book) => (p, ind) => {
  if(ind > 0)
      p.img = 'img/' + (i_book) + '/' + ind + '.png';
  return p;
}

let descs = [
  "Fundamentals of Plane Geometry Involving Straight-Lines",
  "Fundamentals of Geometric Algebra",
  "Fundamentals of Plane Geometry Involving Circles",
  "Construction of Rectilinear Figures In and Around Circles",
  "Proportion",
  "Similar Figures",
  "Elementary Number Theory",
  "Continued Proportion",
  "Applications of Number Theory"
];

let books = {
  descs,
  8: book8(rg).map(f => f()).map(haveClips(8)),
};

window.books = books;
