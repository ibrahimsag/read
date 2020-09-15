import book9 from './figures/9.js';

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
  9: book9(rg).map(f => f()).map(haveClips(9)),
};

window.books = books;
