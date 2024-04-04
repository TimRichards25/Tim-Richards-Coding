const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

const divs = Array.from(document.querySelectorAll('.projects_card'));
const parent = document.querySelector('.projects_container');

divs.sort(() => Math.random() - 0.5);

divs.forEach((div) => {
  parent.appendChild(div);
});

function fractalTreeClicked() {
  window.location.href = './Projects 1/Fractal Tree/index.html';
}
function particlesClicked() {
  window.location.href = './Projects 1/Particles/index.html';
}
function additiveSineWavesClicked() {
  window.location.href = './Projects 1/Additive Sine Waves/index.html';
}
function fireworksClicked() {
  window.location.href = './Projects 1/Fireworks/index.html';
}
function fractalTree2Clicked() {
  window.location.href = './Projects 1/Fractal Tree OOP/index.html';
}
function flowFieldClicked() {
  window.location.href = './Projects 1/FlowField/index.html';
}
function raycastingClicked() {
  window.location.href = './Projects 1/2D Raycasting/index.html';
}
function superShapesClicked() {
  window.location.href = './Projects 1/2D SuperShapes/index.html';
}
function pendulumClicked() {
  window.location.href = './Projects 1/Pendulum/index.html';
}
function fancyPendulumClicked() {
  window.location.href = './Projects 1/Pendulum OOP/index.html';
}
function mazeGeneratorClicked() {
  window.location.href = './Projects 1/Maze Generator/index.html';
}
function stringClicked() {
  window.location.href = './Projects 2/String/index.html';
}
function solarSystemClicked() {
  window.location.href = './Projects 2/Solar System/index.html';
}
function analogueClockClicked() {
  window.location.href = './Projects 1/Analogue Clock/index.html';
}
function barclockClicked() {
  window.location.href = './Projects 1/Bar Clock/index.html';
}
function snowClicked() {
  window.location.href = './Projects 1/Snow/index.html';
}
function sineWaveClicked() {
  window.location.href = './Projects 1/Sine Wave/index.html';
}
function flockingSimulationClicked() {
  window.location.href = './Projects 1/Flocking Simulation/index.html';
}
function springClicked() {
  window.location.href = './Projects 2/Spring/index.html';
}
function perlinNoiseGraphClicked() {
  window.location.href = './Projects 1/Perlin Noise Graph/index.html';
}
function sineElasticClicked() {
  window.location.href = './Projects 1/Sine Spring/index.html';
}
function gameOfLifeClicked() {
  window.location.href = './Projects 1/Game of Life/index.html';
}
function asteroidsClicked() {
  window.location.href = './Projects 2/Asteroids/index.html';
}
function asciiMirrorClicked() {
  window.location.href = './Projects 2/ASCII Mirror/index.html';
}
