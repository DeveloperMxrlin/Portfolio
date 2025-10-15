"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";

const particleCount = 5000;

function Particles({ mouse }) {
  const particlesRef = useRef(null);
  const [positions] = useState(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 150;
    }
    return arr;
  });

  const rotation = useRef({ x: 0, y: 0 });

  useFrame(({ clock }) => {
  const elapsedTime = clock.getElapsedTime();

  const targetX = -mouse.y * 0.2;
  const targetY = mouse.x * 0.2;

  rotation.current.x += (targetX - rotation.current.x) * 0.05; 
  rotation.current.y += (targetY - rotation.current.y) * 0.05;

  const baseSpeedX = 0.05;
  const baseSpeedY = 0.05;

  if (particlesRef.current) {
    particlesRef.current.rotation.x = rotation.current.x + baseSpeedX * elapsedTime;
    particlesRef.current.rotation.y = rotation.current.y + baseSpeedY * elapsedTime;
  }
});

  return (
    <Points ref={particlesRef} positions={positions} stride={3}>
      <PointMaterial color="#00ffff" size={0.05} sizeAttenuation />
    </Points>
  );
}

export default function ParticleBackground({ style }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 2], fov: 75 }} style={style} className="pointer-events-none z-0">
      <ambientLight />
      <Particles mouse={mouse} />
    </Canvas>
  );
}
