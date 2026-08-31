import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function CitySkyline() {
  const count = 40;
  const meshRef = useRef();

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate random positions and scales for buildings
  const buildings = useMemo(() => {
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        x: (Math.random() - 0.5) * 40,
        y: (Math.random() * 5) - 5,
        z: -10 - (Math.random() * 20), // push them back
        scaleX: 1 + Math.random() * 2,
        scaleY: 5 + Math.random() * 15,
        scaleZ: 1 + Math.random() * 2,
      });
    }
    // Sort by z distance for better depth rendering
    return data.sort((a, b) => a.z - b.z);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      buildings.forEach((b, i) => {
        dummy.position.set(b.x, b.y, b.z);
        dummy.scale.set(b.scaleX, b.scaleY, b.scaleZ);
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <boxGeometry args={[1, 1, 1]} />
      {/* Dark buildings with a slight red specular highlight */}
      <meshStandardMaterial 
        color="#020202" 
        roughness={0.8} 
        metalness={0.2}
        emissive="#1a0005"
        emissiveIntensity={0.5}
      />
    </instancedMesh>
  );
}

export default function Scene({ scrollProgress }) {
  const cameraGroup = useRef();

  useFrame((state) => {
    // Parallax effect based on mouse
    const targetX = (state.mouse.x * 2);
    const targetY = (state.mouse.y * 2);

    // Smooth camera movement
    if (cameraGroup.current) {
      cameraGroup.current.position.x += (targetX - cameraGroup.current.position.x) * 0.05;
      cameraGroup.current.position.y += (targetY - cameraGroup.current.position.y) * 0.05;
      
      // Move camera forward based on scroll (cinematic journey)
      const scrollZ = scrollProgress * 10;
      cameraGroup.current.position.z = -scrollZ;
    }
  });

  return (
    <group ref={cameraGroup}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 10, 5]} intensity={0.5} color="#00f0ff" />
      <pointLight position={[0, -5, -5]} intensity={2} color="#ff003c" />
      
      <CitySkyline />
    </group>
  );
}
