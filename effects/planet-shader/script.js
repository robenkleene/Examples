var scene,
  camera,
  renderer,
  width = window.innerWidth,
  height = window.innerHeight,
  material,
  video;
var colormap = new THREE.TextureLoader().load(
  "https://raw.githubusercontent.com/pizza3/asset/master/color.png"
);
var color = new THREE.TextureLoader().load(
  "https://raw.githubusercontent.com/pizza3/asset/master/noise2.jpg"
);
var noi = new THREE.TextureLoader().load(
  "https://raw.githubusercontent.com/pizza3/asset/master/fluid.jpg"
);
var uniforms = {
  time: {
    type: "f",
    value: 10.0,
  },
  resolution: {
    value: new THREE.Vector2(width, height),
  },
  color: { type: "f", value: color },
  colormap: { type: "f", value: colormap },
  noiseTex: { type: "f", value: noi },
};
function init() {
  createScene();
  createLights();
  plane();
  animate();
}
function createScene() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  renderer = new THREE.WebGLRenderer();
  renderer.antialias = true;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.interpolateneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputEncoding = THREE.sRGBEncoding;
  document.getElementById("world").appendChild(renderer.domElement);
}
function createLights() {
  const hemislight = new THREE.HemisphereLight();
  hemislight.intensity = 0.2;
  scene.add(hemislight);
  const pointlight = new THREE.PointLight();
  pointlight.distance = 1000;
  pointlight.intensity = 0.7;
  pointlight.position.set(30, 70, 20);
  scene.add(pointlight);
}
function plane() {
  var planegeometry = new THREE.PlaneGeometry(5, 5, 32);
  var spheregeometry = new THREE.SphereGeometry(2, 32, 32);
  material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    transparent: true,
    vertexShader: document.getElementById("vertexShader").textContent,
    fragmentShader: document.getElementById("fragmentShader").textContent,
  });
  var plane = new THREE.Mesh(spheregeometry, material);
  plane.rotation.z = Math.PI / 1.5;
  scene.add(plane);
}
function handleResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
function animate(delta) {
  requestAnimationFrame(animate);
  material.uniforms.time.value = delta * 0.6;
  renderer.render(scene, camera);
}
init();
window.addEventListener("resize", handleResize, false);
