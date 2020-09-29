import * as THREE from "three";
import React, { useState, useRef, useEffect } from "react";
import { OrbitControls } from "drei";
import { Canvas, useFrame } from "react-three-fiber";
import "./App.css";

function Plant() {
  const ref = useRef();
  return (

    );
}

function Scene() {
  return (
    <>
      <ambientLight />
      <pointLight intensity={0.3} position={[0, 10, 4]} />
      <Plant />
      <OrbitControls />
    </>
  );
}

function App() {
  return (
    <>
      <Canvas
        camera={{
          position: [0, 0, 15],
          near: 1,
          far: 20,
        }}
      >
        <Scene />
      </Canvas>
    </>
  );
}

export default App;
