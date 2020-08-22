import vec2 from './vec2.js';
import makeRG from './makeRG.js';
import makeGround from './makeGround.js';

const svg = document.getElementById('figure');
const rg = makeRG(svg);

import book from './book2.js';

let ps = book(rg).map(f => f())
let ground = makeGround(ps, rg, svg);

ground.draw(0, ps[ps.length - 1]);
