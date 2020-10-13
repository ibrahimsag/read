import book10 from './elements/10.js';

window.includeLatest = () => {
  window.books[10] = book10(rg).map(f => f());
};
