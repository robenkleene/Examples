import React, { useState, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, useThree, extend, useFrame } from "react-three-fiber";
import { a, useSpring } from "react-spring/three";

import "./App.css";

extend({ OrbitControls });

function Cube(props) {
  const [isBig, setIsBig] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  const { size, x } = useSpring({
    size: isBig ? [2, 2, 2] : [1, 1, 1],
    x: isBig ? 2 : 0,
  });

  const color = isHovered ? "pink" : "salmon";

  return (
    <a.mesh
      {...props}
      ref={ref}
      scale={size}
      position-x={x}
      onClick={() => setIsBig(!isBig)}
      onPointerOver={() => setIsHovered(false)}
      onPointerOut={() => setIsHovered(true)}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 8, 6]} />
      <meshPhongMaterial
        flatShading={true}
        roughness={1}
        metalness={0.5}
        shininess={100}
        clearcoat={1}
        attach="material"
        color={color}
      />
    </a.mesh>
  );
}

function Plane() {
  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" color="blue" />
    </mesh>
  )
}

function Scene() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  return (
    <>
      <ambientLight />:
      <pointLight intensity={0.3} position={[0, 0, 3]} />
      <Cube rotation={[10, 10, 0]} position={[0, 0, 0]} />
      <Cube rotation={[10, 20, 0]} position={[2, 2, 0]} />
      <Plane />
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
