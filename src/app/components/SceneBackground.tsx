import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingShape({ position, type }: { position: [number, number, number], type: 'torus' | 'octahedron' }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2} position={position}>
      <mesh ref={meshRef}>
        {type === 'torus' ? (
          <torusGeometry args={[1, 0.4, 16, 100]} />
        ) : (
          <octahedronGeometry args={[1.5]} />
        )}
        <meshStandardMaterial color="#00ffff" wireframe transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

export function SceneBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        <FloatingShape position={[-5, 2, -5]} type="torus" />
        <FloatingShape position={[5, -3, -2]} type="octahedron" />
        <FloatingShape position={[-6, -4, -8]} type="octahedron" />
        <FloatingShape position={[6, 4, -10]} type="torus" />
        <FloatingShape position={[0, 0, -15]} type="torus" />
      </Canvas>
    </div>
  );
}
