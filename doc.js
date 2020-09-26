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
      return pdf.getPage(307);
    });

  function makeSVG(page)
  {
    let scale = 2;
    viewport = page.getViewport({ scale });

    return page.getOperatorList()
      .then(opList =>
      {
        const svgGfx = new pdfjsLib.SVGGraphics(page.commonObjs, page.objs);

        return svgGfx.getSVG(opList, viewport);
      });
  }

  let svgPromise = pagePromise.then(makeSVG);

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
    let g = svg.children[1];
    let region;
    let els = g.children;
    let seenonce = false;
    for(let i = 0; i < els.length; i++)
    {
      let el = els[i];
      if(el.getAttribute('transform') === 'scale(0.1 0.1)')
      {
        if(seenonce)
        {
          region = el;
          break;
        }
        else
        {
          seenonce = true;
        }
      }
    }
    let bb = region.getClientRects()[0]
    let tl = [bb.left, bb.top];
    let br = [bb.right, bb.bottom];

    let s = rect(tl, br, {stroke: colors.make([-30, 100, 40])});
    markers.push(s);
    svg.appendChild(s);
    debugger;

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
    }

    let letterInFigure = {};
    textDivs.forEach((div, i) =>
    {
      let crect = div.getClientRects()[0]

      if(intersectRect(crect, bb))
      {
        letterInFigure[i] = true;
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
    debugger;

    markers.forEach(rem);
    onlyFigure(svg);
    debugger;

    // Crop text layer

    svg.style['dominant-baseline'] = 'hanging';
    let letters = {};
    let figureLetterDivs = [], figureLetterStr = [];
    textDivs.forEach((div, i) => {
      if(letterInFigure[i])
      {
        let crect = div.getClientRects()[0]
        let fs = Number(div.style['font-size'].replace(/[^-\d\.]/g, ''));
        let l = textContentItemsStr[i];
        let p = [crect.left, crect.top, fs];
        letters[l] = p;
        var el = document.createElementNS(SVG_NS, 'text');
        el.textContent = l;
        el.setAttribute('font-family', 'sans-serif');
        el.setAttribute('font-size', fs);
        el.setAttribute('fill', '#474747');
        el.setAttribute('x', p[0]);
        el.setAttribute('y', p[1]);
        svg.appendChild(el);
      }
      rem(div);
    });
    debugger;

    let vb = [tl[0], tl[1], br[0]-tl[0], br[1]-tl[1]];
    svg.setAttribute('viewBox', vb.join(' '));
    svg.setAttribute('width', vb[2]);
    svg.setAttribute('height', vb[3]);
  });
}

window.onload = load;
