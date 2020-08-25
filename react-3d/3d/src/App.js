import React, { useState, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, useThree, extend, useFrame } from "react-three-fiber";
import { a, useSpring } from "react-spring/three"

import "./App.css";

extend({ OrbitControls });

function Cube(props) {
  const [isBig, setIsBig] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })

  const { size } = useSpring({
    size: isBig ? 2 : 1
  })

  const color = isHovered ? "pink" : "salmon";

  return (
    <a.mesh
      {...props}
      ref={ref}
      scale={[2, 2, 2]}
      onClick={() => setIsBig(!isBig)}
      onPointerOver={() => setIsHovered(false)}
      onPointerOut={() => setIsHovered(true)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={color} />
    </a.mesh>
  );
}

function Scene() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  return (
    <>
      <ambientLight />:
      <pointLight intensity={0.3} position={[-1, 2, 4]} />
      <Cube rotation={[10, 10, 0]} position={[0, 0, 0]} />
      <Cube rotation={[10, 20, 0]} position={[2, 2, 0]} />
      <orbitControls args={[camera, domElement]} />
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
