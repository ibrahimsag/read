let v2 = {
  o: [0, 0],
  x: [1, 0],
  y: [0, 1],
  dot: (a, b) => a[0] * b[0] + a[1] * b[1],
  sub: (a, b) => [a[0] - b[0], a[1] - b[1]],
  add: (a, b) => [a[0] + b[0], a[1] + b[1]],
  rot: (v, a) => [Math.cos(a) * v[0] - Math.sin(a) * v[1], Math.sin(a) * v[0] + Math.cos(a) * v[1]],
  normalize: (v) => v2.scale(v, 1/v2.len(v)),
  scale: (v, s) => [s * v[0], s * v[1]],
  len: (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1]),
  dist: (a, b) => v2.len(v2.sub(b, a))
}

v2.r = v2.rot;
v2.u = v2.normalize;
v2.s = v2.scale;

export default v2;
