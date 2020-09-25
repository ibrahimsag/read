import rough from 'roughjs';
import hsluv from 'hsluv';

const SVG_NS = "http://www.w3.org/2000/svg";

let colors = {
  bright: hsluv.hsluvToHex([0, 0, 90]),
  sentence: hsluv.hsluvToHex([0, 0, 50]),
  dim: hsluv.hsluvToHex([0, 0, 30]),
  make: hsluv.hpluvToHex,
};

let rsvg;

const roughopts = { roughness: 0.5, stroke: colors.dim, strokeWidth: 1 };

function polygon(vs, o)
{
  return rsvg.generator.polygon(vs, Object.assign(Object.assign({}, roughopts), o));
}

function rect(r, o)
{
  return polygon([r[0], [r[1][0], r[0][1]], r[1], [r[0][0], r[1][1]]], o)
}

function load()
{
  //
  // Asynchronous download PDF
  //
  var loadingTask = pdfjsLib.getDocument('Elements.pdf');
  loadingTask.promise.then(function(pdf) {
    //
    // Fetch the first page
    //
    pdf.getPage(76).then(function(page) {
      let scale = 1;
      let viewport = page.getViewport({ scale });
      let wrapper = document.querySelector('#wrapper');

      page.getOperatorList().then(opList => {
        let c = document.createElementNS.bind(document);
        let nc = (ns, s) => {
          if(s.startsWith('svg:'))
            return c(ns, s.slice(4));
          else
            return c(ns, s);
        }
        document.createElementNS = nc;

        const svgGfx = new pdfjsLib.SVGGraphics(page.commonObjs, page.objs);

        return svgGfx.getSVG(opList, viewport).then(svg => {

          svg.querySelectorAll('*[fill]').forEach(el => {

            let f = el.getAttribute('fill');
            if(f === 'rgb(0,0,0)')
            {
              el.setAttribute('fill', '#777777');
            }

            let s = el.getAttribute('stroke');
            if(s === 'rgb(0,0,0)')
            {
              el.setAttribute('stroke', '#777777');
            }
          });


          let textLayerEl = document.querySelector('#textLayer');
          let textDivs = [], textContentItemsStr = [];
          page.getTextContent().then(textContent => {
            pdfjsLib.renderTextLayer({
              container: textLayerEl,
              textContent,
              viewport, textDivs, textContentItemsStr,
              enhanceTextSelection: true,
            });
          });

          wrapper.appendChild(svg);
        });
      });
    });
  });
}

load();

window.getFigure = () =>
{
  let svg = document.querySelector('#wrapper svg');
  rsvg = rough.svg(svg);

  let rem = (el) =>
  {
    let p = el.parentElement;
    p.removeChild(el);
    if(!p.children.length)
      rem(p);
  }
  svg.querySelectorAll('text').forEach(rem);
  svg.removeChild(svg.children[0]);
  let g = svg.children[0];
  g.removeChild(g.children[0]);
  g.removeChild(g.children[0]);
  g.removeChild(g.children[0]);

  let g1 = g.children[1];
  g1.removeAttribute('clip-path');

  let ng = document.createElementNS(SVG_NS, 'g');
  ng.appendChild(g);
  svg.appendChild(ng);

  let bb = ng.getBBox();

  let s = rect([[bb.x, bb.y], [bb.x+bb.width, bb.y+bb.height]], {stroke: colors.make([-30, 100, 40])});
  svg.appendChild(rsvg.draw(s));

  let vb = [bb.x, bb.y, bb.width, bb.height];
  svg.setAttribute('width', vb[2]);
  svg.setAttribute('height', vb[3]);
  svg.setAttribute('viewBox', vb.join(' '));
}

//
// The workerSrc property shall be specified.
//
pdfjsLib.GlobalWorkerOptions.workerSrc =
  'node_modules/pdfjs-dist/build/pdf.worker.js';
