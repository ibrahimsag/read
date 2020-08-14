import rough from 'roughjs';
console.log('hello');

const rc = rough.canvas(document.getElementById('figure'));

rc.line(10, 10, 200, 200, { stroke: '#999' }); // x, y, width, height
