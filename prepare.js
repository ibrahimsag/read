import book1 from './figures/1.js';
import book2 from './figures/2.js';
import book3 from './figures/3.js';
import book4 from './figures/4.js';
import book5 from './figures/5.js';
import book6 from './figures/6.js';
import book7 from './figures/7.js';
var fs = require('fs');

let books = [book1, book2, book3, book4, book5, book6, book7];

function storeProps()
{
  let srg = {};
  let calls = ['tick', 'arc', 'gnomon', 'anglecurve', 'angle', 'curve', 'line', 'polygon', 'circle'];
  for(var i = 0; i < calls.length; i++ )
  {
    let k = calls[i];
    srg[k] = (...args) => [k, ...args];
  }
  srg.angle = (a, o, b) => [srg.anglecurve(a, o, b), srg.line(o, a), srg.line(o, b)];


  for(var i = 1; i <= 7; i++)
  {
    let ps = books[i-1](srg).map(f => f());
    fs.writeFile("build/"+(i)+".json", JSON.stringify(ps), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
  }

}
storeProps();
