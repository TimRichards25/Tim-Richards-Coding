import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.112.1/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.112.1/examples/jsm/controls/OrbitControls.js';
import { MathUtils } from 'https://cdn.jsdelivr.net/npm/three@0.112.1/examples/jsm/utils/MathUtils.js';
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000000000);
camera.position.setZ(5000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement);

//                                                              LOAD IMAGES
const loader = new THREE.TextureLoader();
const backgroundTexture = loader.load('img/Compressed/2k_stars.jpg');
const sunTexture = loader.load('img/Compressed/2k_sun.jpg');
const earthTexture = loader.load('img/Compressed/2k_earth_daymap.jpg');
const earthCloudsTexture = loader.load('img/Compressed/2k_earth_clouds.jpg');
const moonTexture = loader.load('img/Compressed/2k_moon.jpg');
const mercuryTexture = loader.load('img/Compressed/2k_mercury.jpg');
const venusTexture = loader.load('img/Compressed/2k_venus_surface.jpg');
const marsTexture = loader.load('img/Compressed/2k_mars.jpg');
const jupiterTexture = loader.load('img/Compressed/2k_jupiter.jpg');
const saturnTexture = loader.load('img/Compressed/2k_saturn.jpg');

const skyBoxLoader = new THREE.CubeTextureLoader();
const skyBoxTexture = skyBoxLoader.load(['img/skybox/stars1.jpg', 'img/skybox/stars2.jpg', 'img/skybox/stars3.jpg', 'img/skybox/stars4.jpg', 'img/skybox/stars5.jpg', 'img/skybox/stars6.jpg']);
scene.background = skyBoxTexture;

let sizeScale = 100;
let distanceScale = 200000;
let distanceOffset = 700;

//---------------------------------------------------------------------------
//                                                             SUN
const sunGeometry = new THREE.SphereGeometry(696000 / sizeScale / 10, 80, 40);
// circumference = 136.973439697 or 4,370,006 km
//distance between sun and earth is 150000000 or 136.973439697*2.91333733333
const sunMaterial = new THREE.MeshBasicMaterial({
  color: 0xdddd00,
  map: sunTexture,
});
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.position.set(0, 0, 0);

//                                                             SUNLIGHT
const sunLight = new THREE.PointLight(0xffffff, 2, 0, 0);
sunLight.position.set(0, 0, 0);
//---------------------------------------------------------------------------
//                                                             MERCURY

const mercuryGeometry = new THREE.SphereGeometry(2439 / sizeScale, 80, 40);
const mercuryMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  map: mercuryTexture,
  transparent: true,
  opacity: 1,
});
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercury.position.set(57900000 / distanceScale + distanceOffset, 0, 0);

//                                                             MERCURY PARENT

const mercuryParentGeometry = new THREE.SphereGeometry(0);
const mercuryParentMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  transparent: true,
  opacity: 0,
});
const mercuryParent = new THREE.Mesh(mercuryParentGeometry, mercuryParentMaterial);

mercuryParent.position.set(0, 0, 0);
mercuryParent.add(mercury);

//---------------------------------------------------------------------------
//                                                             EARTH

const earthGeometry = new THREE.SphereGeometry(6387 / sizeScale, 80, 40);
const earthMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  map: earthTexture,
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.set(149600000 / distanceScale + distanceOffset, 0, 0);
//                                                             EARTH CLOUDS
const cloudGeometry = new THREE.SphereGeometry(6387 / sizeScale + 2, 80, 40);
const cloudMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  map: earthCloudsTexture,
  transparent: true,
  opacity: 0.3,
});
const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
clouds.position.set(149600000 / distanceScale + distanceOffset, 0, 0);

//                                                             EARTH PARENT

const earthParentGeometry = new THREE.SphereGeometry(0);
const earthParentMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  transparent: true,
  opacity: 0,
});
const earthParent = new THREE.Mesh(earthParentGeometry, earthParentMaterial);
earthParent.position.set(0, 0, 0);
earthParent.add(earth, clouds);

//---------------------------------------------------------------------------
//                                                             MOON
const moonGeometry = new THREE.SphereGeometry(1738 / sizeScale, 80, 40);
const moonMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  map: moonTexture,
});
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.position.set((3840000 / distanceScale) * 5, 0, 0);

const moonParentGeometry = new THREE.SphereGeometry(0);
const moonParentMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  transparent: true,
  opacity: 0,
});
const moonParent = new THREE.Mesh(moonParentGeometry, moonParentMaterial);
moonParent.position.set(0, 0, 0);
moonParent.rotation.y += 2;
moonParent.add(moon);
earth.add(moonParent);

//---------------------------------------------------------------------------
//                                                             VENUS

const venusGeometry = new THREE.SphereGeometry(6052 / sizeScale, 80, 40);
const venusMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  map: venusTexture,
});
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
venus.position.set(108200000 / distanceScale + distanceOffset, 0, 0);

//                                                             VENUS PARENT

const venusParentGeometry = new THREE.SphereGeometry(0);
const venusParentMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  transparent: true,
  opacity: 0,
});
const venusParent = new THREE.Mesh(venusParentGeometry, venusParentMaterial);
venusParent.position.set(0, 0, 0);
venusParent.add(venus);

//---------------------------------------------------------------------------
//                                                             MARS

const marsGeometry = new THREE.SphereGeometry(3393 / sizeScale, 80, 40);
const marsMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  map: marsTexture,
});
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
mars.position.set(228000000 / distanceScale + distanceOffset, 0, 0);

//                                                             MARS PARENT

const marsParentGeometry = new THREE.SphereGeometry(0);
const marsParentMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  transparent: true,
  opacity: 0,
});
const marsParent = new THREE.Mesh(marsParentGeometry, marsParentMaterial);
marsParent.position.set(0, 0, 0);
marsParent.add(mars);

//---------------------------------------------------------------------------
//                                                             JUPITER

const jupiterGeometry = new THREE.SphereGeometry(71398 / sizeScale / 10, 80, 40);
const jupiterMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  map: jupiterTexture,
});
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiter.position.set(779300000 / distanceScale / 2 + distanceOffset, 0, 0);

//                                                             JUPITER PARENT

const jupiterParentGeometry = new THREE.SphereGeometry(0);
const jupiterParentMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  transparent: true,
  opacity: 0,
});
const jupiterParent = new THREE.Mesh(jupiterParentGeometry, jupiterParentMaterial);
jupiterParent.position.set(0, 0, 0);
jupiterParent.add(jupiter);

//---------------------------------------------------------------------------
//                                                             SATURN

const saturnGeometry = new THREE.SphereGeometry(60000 / sizeScale / 10, 80, 40);
const saturnMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  map: saturnTexture,
});
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturn.position.set(1427000000 / distanceScale / 2 + distanceOffset, 0, 0);

//                                                             SATURN PARENT

const saturnParentGeometry = new THREE.SphereGeometry(0);
const saturnParentMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  transparent: true,
  opacity: 0,
});
const saturnParent = new THREE.Mesh(saturnParentGeometry, saturnParentMaterial);
saturnParent.position.set(0, 0, 0);
saturnParent.add(saturn);

// //                                                             Earth's 23.4 Tilt
// earth.rotation.z = 0.408407;
// clouds.rotation.z = 0.408407;
// moonParent.rotation.z = 0.408407;
//---------------------------------------------------------------------------
//                                                             HELPERS
const gridHelper = new THREE.PolarGridHelper(100000, 50, 100, 1000);
const sunLightHelper = new THREE.PointLightHelper(sunLight, 100);

//                                                             AMBIENT LIGHT
let ambient = new THREE.AmbientLight(0x222222, 2);
//---------------------------------------------------------------------------------------------------
//                                                             STARS

function getRandomColor() {
  var letters = '0123456789abcdef';
  var color = '#ffff';
  for (var i = 0; i < 2; i++) {
    color += letters[Math.floor(Math.random() * 4 + 12)];
  }
  return color;
}

// function addStar() {
//   const [x, y, z] = Array(3)
//     .fill()
//     // .map(() => MathUtils.randFloatSpread(1000000));
//     .map(() => Math.random()*10000);

//   const geometry = new THREE.SphereGeometry(Math.random() * 500 + 200);
//   const material = new THREE.MeshBasicMaterial({
//     color: getRandomColor(),
//   });
//   const star = new THREE.Mesh(geometry, material);

//   star.position.set(x, y, z);
//   scene.add(star);
// }

// Array(500).fill().forEach(addStar);

//                                                             ADD EVERYTHING TO THE SCENE
scene.add(
  sun,
  sunLight,
  ambient,
  // gridHelper,
  sunLightHelper,
  earthParent,
  mercuryParent,
  venusParent,
  marsParent,
  jupiterParent
);

//                                                             INITIAL ROTATIONS
// sun.rotation.y = Math.random() * Math.PI * 2;
// earthParent.rotation.y = Math.random() * Math.PI * 2;
// earth.rotation.y = Math.random() * Math.PI * 2;
// clouds.rotation.y = Math.random() * Math.PI * 2;
// moonParent.rotation.y = Math.random() * Math.PI * 2;
// moonParent.rotation.y = Math.random() * Math.PI * 2;
// mercuryParent.rotation.y = Math.random() * Math.PI * 2;
// mercury.rotation.y = Math.random() * Math.PI * 2;
// venusParent.rotation.y = Math.random() * Math.PI * 2;
// venus.rotation.y = Math.random() * Math.PI * 2;
// marsParent.rotation.y = Math.random() * Math.PI * 2;
// mars.rotation.y = Math.random() * Math.PI * 2;
// jupiterParent.rotation.y = Math.random() * Math.PI * 2;
// jupiter.rotation.y = Math.random() * Math.PI * 2;

var lastLoop = new Date();
//---------------------------------------------------------------------------
//                                                             ANIMATE
function animate() {
  var thisLoop = new Date();
  var fps = 1000 / (thisLoop - lastLoop);
  lastLoop = thisLoop;

  let hoursPerSecond = 24;
  //let daysPerSecond = 1/86400; Real time
  let sunRotationSpeed = (((Math.PI * 2) / 648) * hoursPerSecond) / fps;
  let earthRotationSpeed = (((Math.PI * 2) / 24) * hoursPerSecond) / fps;
  let earthOrbitSpeed = (((Math.PI * 2) / 8760) * hoursPerSecond) / fps;
  let mercuryRotationSpeed = (((Math.PI * 2) / 1416) * hoursPerSecond) / fps;
  let mercuryOrbitSpeed = (((Math.PI * 2) / 2112) * hoursPerSecond) / fps;
  let venusRotationSpeed = (((Math.PI * 2) / 5832) * hoursPerSecond) / fps;
  let venusOrbitSpeed = (((Math.PI * 2) / 5400) * hoursPerSecond) / fps;
  let marsRotationSpeed = (((Math.PI * 2) / 24.6) * hoursPerSecond) / fps;
  let marsOrbitSpeed = (((Math.PI * 2) / 16488) * hoursPerSecond) / fps;
  let jupiterRotationSpeed = (((Math.PI * 2) / 10) * hoursPerSecond) / fps;
  let jupiterOrbitSpeed = (((Math.PI * 2) / 103992) * hoursPerSecond) / fps;

  sun.rotation.y += sunRotationSpeed;
  earthParent.rotation.y += earthOrbitSpeed;
  earth.rotation.y += earthRotationSpeed;
  clouds.rotation.y += earthRotationSpeed;
  moonParent.rotation.y -= earthRotationSpeed;
  moonParent.rotation.y += sunRotationSpeed;
  mercuryParent.rotation.y += mercuryOrbitSpeed;
  mercury.rotation.y += mercuryRotationSpeed;
  venusParent.rotation.y += venusOrbitSpeed;
  venus.rotation.y += venusRotationSpeed;
  marsParent.rotation.y += marsOrbitSpeed;
  mars.rotation.y += marsRotationSpeed;
  jupiterParent.rotation.y += jupiterOrbitSpeed;
  jupiter.rotation.y += jupiterRotationSpeed;

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
