import rough from 'roughjs';
import vec2 from './vec2.js';
import colors from './colors.js';

function makeRG (svgEl)
{
  const rsvg = rough.svg(svgEl);

  const roughopts = { roughness: 0.1, stroke: colors.dim, strokeWidth: 1 };

  function curve(vs, o)
  {
    return rsvg.generator.curve(vs, Object.assign(Object.assign({}, roughopts), o));
  }

  function polygon(vs, o)
  {
    return rsvg.generator.polygon(vs, Object.assign(Object.assign({}, roughopts), o));
  }

  function line(a, b, o)
  {
    return rsvg.generator.line(a[0], a[1], b[0], b[1], Object.assign(Object.assign({}, roughopts), o));
  }

  function circle(c, d, o)
  {
    return rsvg.generator.circle(c[0], c[1], d, Object.assign(Object.assign({}, roughopts), o));
  }

  function makeHighlight(p, name, typ, arg1) {
    if(typ === 'point')
    {
      return [circle(p.points[name], 5)];
    }
    else if(typ == 'line')
    {
      return [line(p.points[name[0]], p.points[name[1]])];
    }
    else if(typ == 'circle')
    {
      let c = arg1.trim();
      if(/[A-Z]/.test(c))
      {
        let center = p.points[c];
        let a = p.points[name[0]];
        return [circle(center, 2 * vec2.dist(center, a))];
      }
      else
      {
        return undefined;
      }
    }
    else if(typ == 'polygon')
    {
      return [polygon(name.split('').map(l => p.points[l]))];
    }
    else if(typ == 'angle')
    {
      let [a, o, b] = name.split('').map(l => p.points[l]);
      let [d1, d2] = [a, b].map(x => vec2.sub(x, o)).map(d => vec2.scale(d, 20/vec2.len(d)));
      let dir = vec2.sub(d2, d1);
      let d = [0.3, 0.5, 0.7].map(l => vec2.add(d1, vec2.scale(dir, l)));
      let ps = [d1, ...d, d2].map(d => vec2.add(o, vec2.scale(d, 20/vec2.len(d))));
      return [curve(ps, {strokeWidth: 10}), line(o, a), line(o, b)];
    }
    else if(typ == 'given' && p.given && p.given[name])
    {
      return p.given[name]();
    }
    else
    {
      console.error('Unknown highlight: ', typ, name);
    }
  }
  return { curve, line, polygon, circle, makeHighlight, draw: rsvg.draw.bind(rsvg) }
}

export default makeRG;
