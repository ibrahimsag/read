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

window.figureN = 1;

function mark(svg, rsvg, markers) {
  let g = svg.children[1];
  let region;
  let els = g.children;
  let seenTimes = 0;
  for(let i = 0; i < els.length; i++)
  {
    let el = els[i];
    if(el.getAttribute('transform') === 'scale(0.1 0.1)')
    {
      if(seenTimes == figureN)
      {
        region = el;
        break;
      }
      else
      {
        seenTimes++;
      }
    }
  }
  let bb = region.getClientRects()[0]
  let tl = [bb.left, bb.top];
  let br = [bb.right, bb.bottom];

  let s = rect(tl, br, {stroke: colors.make([-30, 100, 40])});
  markers.push(s);
  svg.appendChild(s);

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

  return [letterInFigure, tl, br];
}

function crop(svg, tl, br, letterInFigure) {
  svg.querySelectorAll('text').forEach(rem);
  svg.removeChild(svg.children[0]);
  let g = svg.children[0];
  let figureI = -1;
  let els = g.children;
  let seenTimes = 0;
  for(let i = 0; i < els.length; i++)
  {
    let el = els[i];
    if(el.getAttribute('transform') === 'scale(0.1 0.1)')
    {
      if(seenTimes == figureN)
      {
        figureI = i+1;
        break;
      }
      else
      {
        seenTimes++;
      }
    }
  }
  let node = g.removeChild(g.children[figureI]);
  while(g.firstChild)
  {
    g.removeChild(g.firstChild);
  }
  g.appendChild(node);
  node.removeAttribute('clip-path');

  // Crop text layer

  svg.style['dominant-baseline'] = 'hanging';

  let vb = [tl[0], tl[1], br[0]-tl[0], br[1]-tl[1]];
  svg.setAttribute('viewBox', vb.join(' '));
  svg.setAttribute('width', vb[2]);
  svg.setAttribute('height', vb[3]);
  let svgStr = svg.outerHTML;

  let letters = {};
  let figureLetterDivs = [], figureLetterStr = [];
  textDivs.forEach((div, i) => {
    if(letterInFigure[i])
    {
      let crect = div.getClientRects()[0]
      let fs = Number(div.style['font-size'].replace(/[^-\d\.]/g, ''));
      let l = textContentItemsStr[i];
      let p = { x: crect.left, y: crect.top, s: fs };
      letters[l] = p;
      var el = document.createElementNS(SVG_NS, 'text');
      el.textContent = l;
      el.setAttribute('font-family', 'sans-serif');
      el.setAttribute('font-size', fs);
      el.setAttribute('fill', '#777777');
      el.setAttribute('x', p.x);
      el.setAttribute('y', p.y);
      svg.appendChild(el);
    }
    rem(div);
  });

  return { svgStr, letters };
}

function loadPage(pdfDoc, pn)
{
  let container = document.querySelector('#container');
  container.innerHTML = '';
  let wrapper = document.createElement('div');
  wrapper.id = 'wrapper';
  let textLayerEl = document.createElement('div');
  textLayerEl.id = 'textLayer';
  container.appendChild(wrapper);
  container.appendChild(textLayerEl);
  textDivs = [];
  textContentItemsStr = [];
  delete window.step;

  let viewport;
  let pagePromise = pdfDoc.getPage(pn);

  let svgPromise = pagePromise
    .then((page) =>
    {
      let scale = 2;
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

  return Promise.all([svgPromise, textLayerPromise]).then(([svg, textLayer]) => {

    wrapper.appendChild(svg);
    rsvg = rough.svg(svg);
    let markers = [];

    darkMode(svg);
    window.step = () => {
      window.scrollTo(0, 0)
      let [letterInFigure, tl, br] = mark(svg, rsvg, markers);
      setTimeout(() => {
        window.scrollTo(tl[0] - 50, tl[1] - 50)
      });
      window.step = () => {
        window.scrollTo(0, 0)
        markers.forEach(rem);
        let { svgStr, letters } = crop(svg, tl, br, letterInFigure);
        window.step = () => {
          let k = prompt("storage key:", "defaultkey");
          if(k)
          {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/store/", true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({
              key: `img/10/${k}`,
              contents: { svgStr, letters }
            }));
          }
        };
      }
    }
    return true;
  });
}

function load()
{
  //
  // Asynchronous download PDF
  //
  var loadingTask = pdfjsLib.getDocument('Elements.pdf');

  loadingTask.promise
    .then(function(pdfDoc)
    {
      let pageNum = Number(localStorage.pn) || 307,
          pageRendering = false,
          pageNumPending = null;

      /**
       * If another page rendering in progress, waits until the rendering is
       * finised. Otherwise, executes rendering immediately.
       */
      function queueRenderPage(num) {
        if (pageRendering) {
          pageNumPending = num;
        } else {
          pageRendering = true;
          localStorage.pn = num;
          loadPage(pdfDoc, num)
            .then(() =>
              {
                pageRendering = false;
                if(pageNumPending !== null)
                {
                  queueRenderPage(pageNumPending);
                  pageNumPending = null;
                }
              });;
        }
      }

      function onPrevPage() {
        if (pageNum <= 1) {
          return;
        }
        pageNum--;
        queueRenderPage(pageNum);
      }

      function onNextPage() {
        if (pageNum >= pdfDoc.numPages) {
          return;
        }
        pageNum++;
        queueRenderPage(pageNum);
      }

      document.onkeydown = (e => {
        if(e.key == " ")
        {
          if(window.step)
          {
            e.preventDefault();
            window.step();
          }
        }
        else if(e.key == "k")
        {
          onPrevPage();
        }
        else if(e.key == "j")
        {
          onNextPage();
        }
        else if(e.key == "n")
        {
          figureN = (figureN === 3 ? 1 : 3);
          console.log("FigureN: ", figureN);
        }
        else if(e.key == "r")
        {
          queueRenderPage(pageNum);
        }
      });

      queueRenderPage(pageNum);
    });
}

window.onload = load;
