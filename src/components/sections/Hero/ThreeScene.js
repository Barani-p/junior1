"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = ({ customRef }) => {
  const { scene } = useGLTF("/models/model.glb");
  return <primitive object={scene} scale={0.8} ref={customRef} />;
};

const ThreeScene = ({ customRef }) => {
  return (
    <Canvas style={{ height: "500px", width: "200px", top: "60px" }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[50, 10, 20]} />

      <Suspense fallback={null}>
        <Model customRef={customRef} />
      </Suspense>

      <perspectiveCamera
        makeDefault
        position={[3, 0, 10]}
        fov={45}
        near={0.1}
        far={10000}
      />
    </Canvas>
  );
};

export default ThreeScene;
