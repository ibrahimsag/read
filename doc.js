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

function rect(p1, p2, o)
{
  return rsvg.draw(polygon([p1, [p2[0], p1[1]], p2, [p1[0], p2[1]]], o));
}

function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
           r2.right < r1.left ||
           r2.top > r1.bottom ||
           r2.bottom < r1.top);
}

//
// The workerSrc property shall be specified.
//
pdfjsLib.GlobalWorkerOptions.workerSrc =
  'node_modules/pdfjs-dist/build/pdf.worker.js';

let textLayerEl = document.querySelector('#textLayer');
let textDivs = [], textContentItemsStr = [];

let darkMode = svg => {
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
  return svg
};

/* HACK TO KEEP SVG SERIALIZABLE */
let c = document.createElementNS.bind(document);
let nc = (ns, s) => {
  if(s.startsWith('svg:'))
    return c(ns, s.slice(4));
  else
    return c(ns, s);
}
document.createElementNS = nc;

let rem = (el) =>
{
  let p = el.parentElement;
  p.removeChild(el);
  if(!p.children.length)
    rem(p);
}

let onlyFigure = (svg) =>
{
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

  return ng.getClientRects()[0];
}

function load()
{
  //
  // Asynchronous download PDF
  //
  var loadingTask = pdfjsLib.getDocument('Elements.pdf');
  let wrapper = document.querySelector('#wrapper');
  let viewport, page;
  let pagePromise = loadingTask.promise
    .then(function(pdf)
    {
      return pdf.getPage(76);
    });

  let svgPromise = pagePromise
    .then(function(page)
    {
      let scale = 1;
      viewport = page.getViewport({ scale });

      return page.getOperatorList()
        .then(opList =>
        {
          const svgGfx = new pdfjsLib.SVGGraphics(page.commonObjs, page.objs);

          return svgGfx.getSVG(opList, viewport);
        });
    });

  let textLayerPromise = pagePromise
    .then(page =>
    {
      return page.getTextContent()
        .then(textContent =>
        {
          return pdfjsLib.renderTextLayer({
            container: textLayerEl,
            textContent,
            viewport, textDivs, textContentItemsStr,
            enhanceTextSelection: true,
          }).promise;
        });
    });

  Promise.all([svgPromise, textLayerPromise]).then(([svg, textLayer]) => {

    wrapper.appendChild(svg);
    rsvg = rough.svg(svg);
    let markers = [];

    darkMode(svg);
    let bb = onlyFigure(svg);
    let tl = [bb.left, bb.top];
    let br = [bb.right, bb.bottom];

    let s = rect(tl, br, {stroke: colors.make([-30, 100, 40])});
    markers.push(s);
    svg.appendChild(s);

    textDivs.forEach((div, i) =>
    {
      let crect = div.getClientRects()[0]

      if(intersectRect(crect, bb))
      {
        let s = rect([crect.left, crect.top], [crect.right, crect.bottom], {stroke: colors.make([140, 100, 40])});
        markers.push(s);
        svg.appendChild(s);
        if(crect.left < bb.left)
        {
          tl[0] = crect.left;
        }
        if(crect.right > bb.right)
        {
          br[0] = crect.right;
        }
        if(crect.up < bb.up)
        {
          tl[1] = crect.up;
        }
        if(crect.bottom > bb.bottom)
        {
          br[1] = crect.bottom;
        }
      }
    });

    s = rect(tl, br, {stroke: colors.make([-30, 100, 70])});
    markers.push(s);
    svg.appendChild(s);

    /*
    let vb = [bb.x, bb.y, bb.width, bb.height];
    svg.setAttribute('width', vb[2]);
    svg.setAttribute('height', vb[3]);
    svg.setAttribute('viewBox', vb.join(' '));
    */
  });
}

window.onload = load;
