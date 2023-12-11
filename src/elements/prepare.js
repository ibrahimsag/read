import book1 from './1.js';
import book2 from './2.js';
import book3 from './3.js';
import book4 from './4.js';
import book5 from './5.js';
import book6 from './6.js';
import book7 from './7.js';
import book8 from './8.js';
import book9 from './9.js';
import book10 from './10.js';
import book11 from './11.js';
import book12 from './12.js';
import book13 from './13.js';

import fs from 'fs/promises';

let books = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, book13];

function storeProps()
{
  let srg = {};
  let calls = ['tick', 'arc', 'gnomon', 'anglecurve', 'angle', 'curve', 'line', 'polygon', 'circle'];
  calls.forEach(k => srg[k] = (...args) => [k, ...args]);
  srg.angle = (a, o, b) => [srg.anglecurve(a, o, b), srg.line(o, a), srg.line(o, b)];

  function saveBook(book, i)
  {
    let ps = book(srg).map(f => f());
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
