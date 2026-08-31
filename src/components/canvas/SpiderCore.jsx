import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';

export default function SpiderCore() {
  const meshRef = useRef();
  const wireframeRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.cos(t / 4) / 2;
      meshRef.current.rotation.y = Math.sin(t / 4) / 2;
      meshRef.current.rotation.z = Math.sin(t / 1.5) / 2;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = -Math.cos(t / 4) / 2;
      wireframeRef.current.rotation.y = -Math.sin(t / 4) / 2;
      wireframeRef.current.rotation.z = -Math.sin(t / 1.5) / 2;
    }
  });

  return (
    <group position={[0, 0, 0]} scale={1.5}>
      <Icosahedron ref={meshRef} args={[1, 4]}>
        <MeshDistortMaterial
          color="#0a0a0c"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Icosahedron>
      <Icosahedron ref={wireframeRef} args={[1.1, 2]}>
        <meshBasicMaterial color="#ff003c" wireframe transparent opacity={0.3} />
      </Icosahedron>
    </group>
  );
}
