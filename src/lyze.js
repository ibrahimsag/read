import hsluv from 'hsluv';

const SVG_NS = 'http://www.w3.org/2000/svg';

/**
 * Create DOM node, set attributes.
 *
 * @param {String} name
 * @param {Object} [attrs]
 * @return Element
 */
function de(name, attrs)
{
  const element = document.createElement(name)

  if(attrs)
  {
    for (const attr in attrs)
    {
      element.setAttribute(attr, attrs[attr])
    }
  }

  return element
}
function se(name, attrs)
{
  const element = document.createElementNS(SVG_NS, name)

  if(attrs)
  {
    for (const attr in attrs)
    {
      if(attr === 'textContent')
        element.textContent = attrs[attr];
      else
        element.setAttribute(attr, attrs[attr])
    }
  }

  return element
}

function hsl(...args)
{
  if(args.length === 1)
  {
    return hsluv.hsluvToHex([0, 0, args[0]]);
  }
  else if(args.length === 2)
  {
    return hsluv.hsluvToHex([args[0], 100, args[1]]);
  }
  else if(args.length === 3)
  {
    return hsluv.hsluvToHex(args);
  }
  else
  {
    console.error("# arguments for hsluv", args);
  }
}

function hpl(...args)
{
  if(args.length === 1)
  {
    return hsluv.hpluvToHex([0, 0, args[0]]);
  }
  else if(args.length === 2)
  {
    return hsluv.hpluvToHex([args[0], 100, args[1]]);
  }
  else if(args.length === 3)
  {
    return hsluv.hpluvToHex(args);
  }
  else
  {
    console.error("# arguments for hpl", args);
  }
}

function gatherRefs()
{
  let deps = {}, os = {};
  let i = 0;
  for(let book_i = 1; book_i < 14; book_i++)
  {
    let sections = books[book_i];
    for(let section_i = 0; section_i < sections.length; section_i++)
    {
      let section = sections[section_i];
      deps[section.id] = [];
      os[section.id] = i++;
    }
  }

  for(let book_i = 1; book_i < 14; book_i++)
  {
    let sections = books[book_i];
    for(let section_i = 0; section_i < sections.length; section_i++)
    {
      let section = sections[section_i];
      let prose = section.prose;
      let sentences = prose.split('\n\n').map(p => p.split('\n')).flat();
      let parts = [], nparts = [];
      for(let sent_i = 0; sent_i < sentences.length; sent_i++)
      {
        let s = sentences[sent_i];
        let n_RE = /(\[[^\[]*Prop[^\]]*\])/g;
        let nsparts = s.match(n_RE);
        if(nsparts)
        {
          nparts.push(...nsparts);
        }
      }
      for(let part_i = 0; part_i < nparts.length; part_i++)
      {
        let part = nparts[part_i];
        let refs = part.split(',')
        for(let ref_i = 0; ref_i < refs.length; ref_i++)
        {
          let ref = refs[ref_i];
          let dm = ref.match(/Def/);
          if(dm)
            continue;

          let re = /([0-9]+.[0-9]+)/;
          let m = ref.match(re);
          let pref = m[1];
          if(ref.match(/lem. II/))
            pref += '-lemII';
          else if(ref.match(/lem. I/))
            pref += '-lemI';
          else if(ref.match(/lem./) && !ref.match(/12.2 lem/))
            pref += '-lem'
          deps[section.id].push(pref);
          //console.log(section.id, ref, pref, deps[pref]);
        }
      }
    }
  }
  return {max_o: i, os, deps};
}

function main()
{
  let {max_o, os, deps} = gatherRefs();
  let w = {};
  w.e = se('svg');
  w.w = 1200;
  w.h = w.w;
  w.e.setAttribute('width', `${w.w}`);
  w.e.setAttribute('height', `${w.h}`);
  w.e.setAttribute('viewBox', [0, 0, w.w, w.h]);
  w.e.style.dominantBaseline = 'hanging';
  w.e.classList = 'deps';
  document.body.append(w.e);
  let v = { i: 10 };

  function draw()
  {
    for(let k in deps)
    {
      let section = deps[k], o = os[k];
      let book_i = parseInt(k.split('.')[0]);
      for(let ref_i = 0; ref_i < section.length; ref_i++)
      {
        let ref = section[ref_i];
        let ref_o = os[ref];
        let ref_book_i = parseInt(ref.split('.')[0]);
        let e = se('rect', {fill: hsl((book_i%4)*360/4+ 30, ref_book_i == v.i ? 80 : 40), x: o*2, y: ref_o*2, width: 2, height: 2});
        w.e.append(e);
      }
    }
    let e = se('rect', {fill: hsl(100), x: max_o*2, y: max_o*2, width: 4, height: 4});
    w.e.append(e);
  }
  draw();

  setTimeout( () => document.onkeydown = keyHandler, 500);
  function keyHandler(e)
  {
    if(e.key === 'j')
    {
      v.i++;
      draw();
    }
    else if(e.key === 'k')
    {
      v.i--;
      draw();
    }

  }
}
//main();
