import hsluv from 'hsluv';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const light = new THREE.PointLight( 0x404040, 1, 100 );
light.position.set( 0, 0, 20 );
scene.add( light );

const g_cyl = new THREE.CylinderGeometry( 0.5, 1, 10, 32 );
const sph = new THREE.IcosahedronGeometry( 1.3, 3 );
const material = new THREE.MeshPhongMaterial( {} );

const newCyl = () => 
{ 
  const cyl = new THREE.Mesh( g_cyl, material );
  cyl.position.y = -5;
  return cyl;
};

const mt = (new THREE.Matrix4()).makeTranslation(0, 10, 0);
const mr = (new THREE.Matrix4()).makeRotationAxis(new THREE.Vector3(0, 0, 1), Math.PI/3);
const m = (new THREE.Matrix4()).identity();


for(let i = 0; i < 10; i++)
{
  const cyl = newCyl();

  m.multiply(mt);

  cyl.applyMatrix4(m);
  m.multiply(mr);

  scene.add( cyl );
}

camera.position.z = 30;

function render() {
  // window.requestAnimationFrame(render);

  renderer.render( scene, camera );
}

render();
