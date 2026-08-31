import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function WebParticles({ count = 150 }) {
  const pointsRef = useRef();
  const linesRef = useRef();
  
  // Create random positions for particles
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = [];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20; // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
      vel.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      });
    }
    return [pos, vel];
  }, [count]);

  // For connecting lines
  const lineGeometry = useMemo(() => new THREE.BufferGeometry(), []);

  useFrame((state) => {
    const positionsAttr = pointsRef.current.geometry.attributes.position.array;
    
    // Get mouse position in world space
    const mouseX = (state.mouse.x * state.viewport.width) / 2;
    const mouseY = (state.mouse.y * state.viewport.height) / 2;

    // Update particle positions
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Basic movement
      positionsAttr[i3] += velocities[i].x;
      positionsAttr[i3 + 1] += velocities[i].y;
      positionsAttr[i3 + 2] += velocities[i].z;

      // Wrap around bounds
      if (Math.abs(positionsAttr[i3]) > 15) positionsAttr[i3] *= -0.9;
      if (Math.abs(positionsAttr[i3 + 1]) > 15) positionsAttr[i3 + 1] *= -0.9;
      if (Math.abs(positionsAttr[i3 + 2]) > 10) positionsAttr[i3 + 2] *= -0.9;

      // Mouse attraction (web effect)
      const dx = mouseX - positionsAttr[i3];
      const dy = mouseY - positionsAttr[i3 + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 4) {
        positionsAttr[i3] += dx * 0.01;
        positionsAttr[i3 + 1] += dy * 0.01;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Draw lines between close particles
    const linePositions = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positionsAttr[i * 3] - positionsAttr[j * 3];
        const dy = positionsAttr[i * 3 + 1] - positionsAttr[j * 3 + 1];
        const dz = positionsAttr[i * 3 + 2] - positionsAttr[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < 2.5) {
          linePositions.push(
            positionsAttr[i * 3], positionsAttr[i * 3 + 1], positionsAttr[i * 3 + 2],
            positionsAttr[j * 3], positionsAttr[j * 3 + 1], positionsAttr[j * 3 + 2]
          );
        }
      }
    }
    
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#ff003c" transparent opacity={0.8} />
      </points>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#ff003c" transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}
