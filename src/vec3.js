let v3 = {
  o: [0, 0, 0],
  x: [1, 0, 0],
  y: [0, 1, 0],
  z: [0, 0, 1],
  dot: (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2],
  sub: (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]],
  add: (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]],
  scale: (v, s) => [s * v[0], s * v[1], s * v[2]],
  len: (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]),
  dist: (a, b) => v3.len(v3.sub(b, a)),
  normalize: (v) => v3.scale(v, 1/v3.len(v)),
  cross: (a, b) => [a[1]*b[2] - a[2]*b[1],a[2]*b[0] - a[0]*b[2], a[0]*b[1] - a[1]*b[0]],
  rot: (v, n, a) => {
    let r = v, q=v, s = 1, i = 1;
    while(i < 15)
    {
      s = s * a / i;
      q = v3.cross(n, q);
      r = v3.add(r, v3.scale(q, s))
      i++;
    }
    return r;
  }
}
v3.r = v3.rot;
v3.s = v3.scale;
v3.u = v3.normalize;
v3.i = [v3.x, v3.y, v3.z];

export default v3;
