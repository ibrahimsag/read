import book1 from './figures/1.js';
var fs = require('fs');

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


  let ps = book1(srg).map(f => f());
  fs.writeFile("build/1.json", JSON.stringify(ps), function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  }); 

}
storeProps();
