let vec2 = {
  dot: (a, b) => a[0] * b[0] + a[1] * b[1],
  sub: (a, b) => [a[0] - b[0], a[1] - b[1]],
  add: (a, b) => [a[0] + b[0], a[1] + b[1]],
  rot: (v, a) => [Math.cos(a) * v[0] - Math.sin(a) * v[1], Math.sin(a) * v[0] + Math.cos(a) * v[1]],
  scale: (v, s) => [s * v[0], s * v[1]],
  len: (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1]),
  dist: (a, b) => vec2.len(vec2.sub(b, a))
}

export default vec2;
