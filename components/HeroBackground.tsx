"use client";

import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const pointsRef = useRef<THREE.Points>(null);
  const [positions, setPositions] = useState<Float32Array | null>(null);

  useEffect(() => {
    const count = 1000;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    setPositions(arr);
  }, []); // Generates positions after component mounts

  if (!positions) return null; // Prevents errors during SSR

  return (
    <Canvas className="absolute left-0 top-0 z-[-1] h-full w-full">
      {/* Moving Stars */}
      <Points ref={pointsRef} positions={positions} stride={3}>
        <PointMaterial size={0.02} color="white" transparent opacity={0.8} />
      </Points>
    </Canvas>
  );
}
