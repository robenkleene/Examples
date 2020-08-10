import React from "react";
import { Canvas } from "react-three-fiber";

import './App.css';

function Cube() {
  return (
    <mesh rotation={[10, 10, 0]} position={[0, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 1]} />
      <meshStandardMaterial attach="material" color="pink" />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight />:
      <pointLight intensity={0.3} position={[-1, 2, 4]} />
      <Cube />
    </>
  );
}

function App() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}

export default App;
