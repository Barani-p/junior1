"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { forwardRef, Suspense } from "react";

const Model = forwardRef((props, ref) => {
  const { scene } = useGLTF("/models/model.glb");
  return <primitive object={scene} scale={0.8} ref={ref} />;
});

const ThreeScene = forwardRef((props, ref) => {
  return (
    <Canvas style={{ height: "500px",width:"200px",top:"60px" }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[50, 10, 20]} />
      <Suspense fallback={null}>
        <Model ref={ref} />
      </Suspense>
      <OrbitControls enableZoom={false} />
      <perspectiveCamera fov={45} near={.1} far={10000} makeDefault position={[3,0,10]}/>
    </Canvas>
  );
});

export default ThreeScene;