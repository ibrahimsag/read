import vec2 from './vec2.js'
import colors from './colors.js';

function makeGround(ps, rg, svg)
{
  function draw(o, p)
  {
    let nearHighlights = [];
    let highlight = [];
    let figureIndex = 0;
    let lastSeenFigureIndex = 0;

    let proseEl = document.querySelector('#prose');
    proseEl.innerHTML = '';
    if(p.img)
    {
      let imgEl = document.createElement('img');
      imgEl.src = p.img;
      proseEl.appendChild(imgEl);
    }

    let titleEl = document.createElement('h3');
    titleEl.innerHTML = p.title;
    titleEl.style['color'] = colors.sentence;
    proseEl.appendChild(titleEl);

    let refCount = 0;
    p.prose.forEach(paragraphProse =>
    {
      let paragraphEl = document.createElement('p');
      let content = '';
      paragraphProse.forEach(sentenceProse =>
      {
        let isFocusSentence = false;;
        let sentenceMarks = [];
        let sentenceWithoutRef = true;
        function highlightReference(m, name, typ, arg1)
        {
          sentenceMarks.push([name, typ, arg1]);

          let refEl = document.createElement('span');
          refEl.innerHTML = name;
          refEl.style['font-style'] = 'italic';
          refEl.dataset.ref = refCount;

          if(refCount == o)
          {
            isFocusSentence = true;
            refEl.style['color'] = colors.bright;
            figureIndex = lastSeenFigureIndex;

            highlight = [name, typ, arg1];
          }
          refCount++;

          sentenceWithoutRef = false;
          return refEl.outerHTML;
        }

        function selectFigure(m, ind)
        {
          lastSeenFigureIndex = parseInt(ind);
          if(isNaN(lastSeenFigureIndex))
          {
            console.error("figure index: ", ind);
            lastSeenFigureIndex = 0;
          }
          return '';
        }

        let sp = sentenceProse.replace(/\{figure ([0-9])\}/g, selectFigure);
        let sentenceHTML = sp.replace(/\{([A-Z]+) ([a-z]+)( [A-Z])?\}/g, highlightReference);

        let el = document.createElement('span');
        el.innerHTML = sentenceHTML + ' ';
        if(isFocusSentence)
        {
          nearHighlights = [...sentenceMarks];
          el.style['color'] = colors.sentence;
        }

        if(sentenceWithoutRef)
        {
          if(refCount == o)
          {
            el.style['color'] = colors.sentence;
          }
          refCount++;
        }
        paragraphEl.appendChild(el);
      });
      proseEl.appendChild(paragraphEl);
    })

    if(o < 0)
    {
      return draw(refCount, p);
    }
    else if (o >= refCount && refCount > 0)
    {
      return draw(0, p);
    }

    svg.innerHTML = "";

    function drawFigure(figure, highlightFigure)
    {
      let shapes = [...figure.shapes];

      if(highlightFigure)
      {
        nearHighlights.forEach(h =>
          {
            rg.makeHighlight(figure, ...h).forEach(s =>
              {
                if(!(h[1] === 'angle' && s.shape === 'curve'))
                {
                  s.options["stroke"] = colors.sentence;
                }
                shapes.push(s);
              });
          });

        if(highlight.length)
        {
          rg.makeHighlight(figure, ...highlight).forEach(s =>
            {
              s.options["stroke"] = colors.bright;
              s.options["strokeWidth"] += 1;
              shapes.push(s);
            });
        }
      }

      for(var i = 0; i < shapes.length; i++)
      shapes.forEach(s =>
      {
        svg.appendChild(rg.draw(s));
      });

      let nearHighlightNames = nearHighlights.map(m => m[0]).join('');
      let highlightName = highlight.length && highlight[0];

      for(var i in figure.letters)
      {
        let letter = figure.letters[i];
        let shouldBeSmall = figure.smallletters && figure.smallletters.indexOf(i) > -1;
        let offset;
        var el = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        el.setAttribute('font-family', 'Futura');
        if(shouldBeSmall)
          el.setAttribute('font-size', '16px');
        else
          el.setAttribute('font-size', '24px');
        let fillColor = colors.dim;
        if(highlightFigure && highlightName && highlightName.indexOf(i) > -1)
        {
          fillColor = colors.bright;
        }
        else if(highlightFigure && nearHighlightNames.indexOf(i) > -1)
        {
          fillColor = colors.sentence;
        }
        el.setAttribute('fill', fillColor);
        el.textContent = i;
        svg.appendChild(el);

        if(letter[0] < 8)
        {
          let dir = vec2.sub(vec2.rot([letter[1] || 1, 0], -Math.PI * ((1 + letter[0]) / 4)), [1,-1]);
          let m = el.getBBox();
          offset = [dir[0] * m.width, dir[1] * m.height/2];
          if(shouldBeSmall)
            offset = vec2.add(offset, [5, -5]);
          else
            offset = vec2.add(offset, [9, -8]);
        }
        else
        {
          offset = [letter[1], letter[2]];
        }
        let pos = vec2.add(figure.points[i], offset);
        el.setAttribute('x', pos[0]);
        el.setAttribute('y', pos[1]);
      }
    }
    if(!p.figures)
    {
      drawFigure(p, true)
    }
    else
    {
      for(var i = 0; i < p.figures.length; i++)
      {
        drawFigure(p.figures[i], figureIndex == 0 || figureIndex == i+1);
      }
    }

    document.onkeypress = pressHandler(o, p);
    proseEl.onclick = clickHandler(p);
  }

  function clickHandler(p)
  {
    return function(e)
    {
      let ref = parseInt(e.srcElement.dataset.ref);
      if(ref)
      {
        draw(ref, p);
      }
    }
  }

  function pressHandler(o, p)
  {
    return function(e)
    {
      if(e.key == "n")
      {
        draw(0, ps[(ps.indexOf(p)-1 + ps.length) % ps.length])
      }
      else if(e.key == "m")
      {
        draw(0, ps[(ps.indexOf(p)+1) % ps.length])
      }
      if(e.key == "j")
      {
        draw(o + 1, p);
      }
      else if(e.key == "k")
      {
        draw(o - 1, p);
      }
    }
  }
  return {draw};
}

export default makeGround;
