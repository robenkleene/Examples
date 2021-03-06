import * as THREE from "three";
import React, { useState, useRef, useEffect, Suspense } from "react";
import { OrbitControls } from "drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import "./App.css";

function Plant() {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, "/scene.gltf");
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  return <primitive position={[0, -1.2, 0]} ref={ref} object={gltf.scene} />;
}

function Scene() {
  return (
    <>
      <ambientLight />
      <pointLight intensity={0.3} position={[0, 10, 4]} />
      <Suspense fallback={null}>
        <Plant />
      </Suspense>
      {/* <OrbitControls /> */}
    </>
  );
}

function App() {
  return (
    <>
      <h1>Plant</h1>
      <Canvas camera={{
        position: [0,0,2],
      }} style={{ height: "40vh" }}>
        <Scene />
      </Canvas>
      <main>
        <h3>You can buy a plant</h3>
        <button>Buy Plant</button>
      </main>
    </>
  );
}

export default App;
