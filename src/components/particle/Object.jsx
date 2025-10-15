"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";

const particleCount = 2000;

function ParticleSphere() {
  const particlesRef = useRef(null);

  // Partikelpositionen auf einer Sphere generieren
  const [positions] = useState(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      const radius = 1; // Radius der Sphere
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      arr[i * 3] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;
    }
    return arr;
  });


  // Animation
  useFrame(({ clock }) => {

    if (particlesRef.current) {    
      
      const elapsedTime = clock.getElapsedTime();

      particlesRef.current.rotation.x = elapsedTime * 0.1;
      particlesRef.current.rotation.y = elapsedTime * 0.1;
    }
  });

  return (
    <Points ref={particlesRef} positions={positions} stride={3}>
      <PointMaterial color="white" size={0.02} sizeAttenuation />
    </Points>
  );
}

export default function Sphere({ style }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 2], fov: 75 }}
      style={style}
    >
      <ambientLight intensity={0.5} />
      <ParticleSphere />
    </Canvas>
  );
}
