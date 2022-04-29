import book from './elements/13.js';

let books_last = window.books_;

window.books_ = (rg) =>
{
  let books = books_last(rg);
  books[13] = book(rg).map(f => f());
  return books;
}
