import book1 from './figures/1.js';
import book2 from './figures/2.js';
import book3 from './figures/3.js';
import book4 from './figures/4.js';
import book5 from './figures/5.js';
import book6 from './figures/6.js';
import book7 from './figures/7.js';
import book8 from './figures/8.js';

var fs = require('fs');

let books = [book1, book2, book3, book4, book5, book6, book7, book8];

function storeProps()
{
  let srg = {};
  let calls = ['tick', 'arc', 'gnomon', 'anglecurve', 'angle', 'curve', 'line', 'polygon', 'circle'];
  calls.forEach(k => srg[k] = (...args) => [k, ...args]);
  srg.angle = (a, o, b) => [srg.anglecurve(a, o, b), srg.line(o, a), srg.line(o, b)];

  function saveBook(book, i)
  {
    let ps = book(srg).map(f => f());
    fs.writeFile("build/"+(i+1)+".json", JSON.stringify(ps), function(err) {
      if(err) {
        return console.log(err);
      }

      console.log("The file was saved!", i+1);
    });
  }

  books.forEach(saveBook)
}
storeProps();
