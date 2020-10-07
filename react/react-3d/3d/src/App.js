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
  return <primitive ref={ref} object={gltf.scene} position={[0, 0, 0]} />;
}

function Scene() {
  return (
    <>
      <ambientLight />
      <pointLight intensity={0.3} position={[0, 10, 4]} />
      <Suspense fallback={null}>
        <Plant />
      </Suspense>
      <OrbitControls />
    </>
  );
}

function App() {
  return (
    <>
      <Canvas>
        <Scene />
      </Canvas>
    </>
  );
}

export default App;
