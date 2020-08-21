import vec2 from './vec2.js';
import makeRG from './makeRG.js';
import makeGround from './makeGround.js';

const svg = document.getElementById('figure');
const rg = makeRG(svg);

import book1 from './book1.js';

let ps = book1(rg).map(f => f())
let ground = makeGround(ps, rg, svg);

ground.draw(0, ps[ps.length - 1]);
