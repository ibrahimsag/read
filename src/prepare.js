import en1 from './en/1.js';
import en2 from './en/2.js';
import en3 from './en/3.js';
import en4 from './en/4.js';
import en5 from './en/5.js';
import en6 from './en/6.js';
import en7 from './en/7.js';
import en8 from './en/8.js';
import en9 from './en/9.js';
import en10 from './en/10.js';
import en11 from './en/11.js';
import en12 from './en/12.js';
import en13 from './en/13.js';

import book1 from './figures/1.js';
import book2 from './figures/2.js';
import book3 from './figures/3.js';
import book4 from './figures/4.js';
import book5 from './figures/5.js';
import book6 from './figures/6.js';
import book7 from './figures/7.js';
import book8 from './figures/8.js';
import book9 from './figures/9.js';
import book10 from './figures/10.js';
import book11 from './figures/11.js';
import book12 from './figures/12.js';
import book13 from './figures/13.js';

import fs from 'fs/promises';

let books = [[book1, en1], [book2, en2], [book3, en3], [book4, en4], [book5, en5], [book6, en6], [book7, en7], [book8, en8], [book9, en9], [book10, en10], [book11, en11], [book12, en12], [book13, en13]];

function storeProps()
{
  let srg = {};
  let calls = ['tick', 'arc', 'gnomon', 'anglecurve', 'angle', 'curve', 'line', 'polygon', 'circle'];
  calls.forEach(k => srg[k] = (...args) => [k, ...args]);
  srg.angle = (a, o, b) => [srg.anglecurve(a, o, b), srg.line(o, a), srg.line(o, b)];

  function saveBook(book, i)
  {
    let [figure_descs, en] = book;
    let figures = {};
    figure_descs(srg).forEach(f => {
      let figure = f();
      figures[figure.id] = figure;
    });
    let ps = en.map((prose) => ({...prose, ...figures[prose.id]}));
    fs.writeFile("build/"+(i+1)+".json", JSON.stringify(ps)).then(() => {
      console.log("The file was saved!", i+1);
    }).catch(function(err) {
      if(err) {
        return console.log(err);
      }

    });
  }

  books.forEach(saveBook)
}
storeProps();
