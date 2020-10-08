
var width = window.innerWidth;
var height = window.innerHeight;

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

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Camera
camera.position.z = 5;

// Model
var geometry = new THREE.SphereGeometry(2, 32, 32);
var material = new THREE.ShaderMaterial({
  uniforms: uniforms,
  transparent: true,
  vertexShader: document.getElementById("vertexShader").textContent,
  fragmentShader: document.getElementById("fragmentShader").textContent,
});
var sphere = new THREE.Mesh(geometry, material);
// Rotate the sphere to a more interesting angle
sphere.rotation.z = Math.PI / 1.5;
scene.add(sphere);

function animate(timestamp) {
  requestAnimationFrame(animate);
  material.uniforms.time.value = timestamp * 0.6;
  renderer.render(scene, camera);
}
animate();

function handleResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", handleResize, false);