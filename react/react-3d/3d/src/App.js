import * as THREE from "three";
import React, { useState, useRef, useEffect } from "react";
import { OrbitControls } from "drei";
import { Canvas, useFrame } from "react-three-fiber";
import "./App.css";

const tempObject = new THREE.Object3D();

function Boxes() {
  const ref = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const grow = Math.sin(time / 1);
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
    let i = 0;
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        for (let z = 0; z < 10; z++) {
          const id = i++;
          tempObject.position.set(5 - x * grow, 5 - y * grow, 5 - z * grow);
          tempObject.updateMatrix();
          ref.current.setMatrixAt(id, tempObject.matrix);
        }
      }
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[null, null, 1000]}>
      <boxBufferGeometry attach="geometry" args={[0.7, 0.7, 0.7]} />
      <meshPhongMaterial attach="material" color="teal" />
    </instancedMesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight />
      <pointLight intensity={0.3} position={[0, 10, 4]} />
      <Boxes />
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
          near: 5,
          far: 20,
        }}
      >
        <Scene />
      </Canvas>
    </>
  );
}

export default App;
