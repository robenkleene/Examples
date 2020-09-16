import React, { useState, useRef, Suspense } from "react";
import { OrbitControls, Torus } from "drei";
import { TextureLoader } from "three"
import { Canvas, useThree, extend, useFrame, useLoader } from "react-three-fiber";
import { a, useSpring } from "react-spring/three";
import { ControlsProvider, Controls, useControl } from "react-three-gui";
import imageUrl from "./logo.png";
import bumpUrl from "./logo.jpg";
import "./App.css";

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
  const texture = useLoader(TextureLoader, imageUrl);
  const bump = useLoader(TextureLoader, bumpUrl);

  const color = isHovered ? "pink" : "salmon";

  return (
    <a.mesh
      {...props}
      ref={ref}
      scale={size}
      position-x={x}
      castShadow={true}
      receiveShadow={true}
      onClick={() => setIsBig(!isBig)}
      onPointerOver={() => setIsHovered(false)}
      onPointerOut={() => setIsHovered(true)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1, 20, 20, 20]} />
      <meshPhongMaterial
        map={texture}
        color="teal"
        displacementMap={bump}
        displacementScale={0.1}
        flatShading={true}
        roughness={1}
        metalness={0.5}
        shininess={100}
        clearcoat={1}
        attach="material"
      />
    </a.mesh>
  );
}

function Plane() {
  return (
    <mesh
      receiveShadow={true}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2, -5]}
    >
      <planeBufferGeometry attach="geometry" args={[20, 20]} />
      <meshPhongMaterial attach="material" color="#d3d3d3" />
    </mesh>
  );
}

function Scene() {
  const positionX = useControl("Position X", {
    type: "number",
    max: 10,
    min: -10,
  });
  const color = useControl("Torus Color", {
    type: "color",
    value: "gold"
  });

  return (
    <>
      <ambientLight />
      <spotLight castShadow={true} intensity={0.3} position={[0, 10, 4]} />
      <Suspense fallback={null}>
        <Cube rotation={[10, 10, 0]} position={[positionX, 0, 0]} />
      </Suspense>
      <Suspense fallback={null}>
        <Cube rotation={[10, 20, 0]} position={[2, 2, 0]} />
      </Suspense>
      <Torus args={[1, 0.2, 10, 20]} position={[-2, 1, -1]}>
        <meshPhongMaterial
          roughness={1}
          metalness={0.5}
          shininess={100}
          attach="material"
          color={color}
        />
      </Torus>
      <Plane />
      <OrbitControls />
    </>
  );
}

function App() {
  return (
    <ControlsProvider>
      <Canvas shadowMap={true}>
        <Scene />
      </Canvas>
      <Controls />
    </ControlsProvider>
  );
}

export default App;
