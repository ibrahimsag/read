import book10 from './figures/10.js';

let haveClips = (i_book) => (p, ind) => {
  if(!p.title.startsWith('Def'))
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
  "Applications of Number Theory",
  "Incommensurable Magnitudes"
];

let books = {
  descs,
  10: book10(rg).map(f => f()),
};

window.books = books;
