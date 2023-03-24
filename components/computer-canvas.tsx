"use client";

import { Suspense, useEffect, useReducer, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import { CanvasLoader } from "./canvas-loader";
import { useDisplaySize } from "@/hooks/display-size";

const options = {
  xs() {
    return {
      position: [0, -1.5, -1],
      scale: 0.4,
    };
  },
  sm() {
    return {
      position: [0, -2.5, -1.5],
      scale: 0.6,
    };
  },
  md() {
    return this.sm();
  },

  lg() {
    return {
      position: [0, -2.5, -1.5],
      scale: 0.7,
    };
  },
  xl() {
    return this.lg();
  },
};

function useComputerOptions() {
  const display = useDisplaySize();

  if (!display) {
    return options.md();
  }
  return options[display]();
}

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const options = useComputerOptions();

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={options.scale}
        position={options.position}
        rotation={[-0.01, 0.05, -0.1]}
      />
    </mesh>
  );
};

export const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};
