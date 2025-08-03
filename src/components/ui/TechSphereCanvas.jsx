'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Center, Float } from '@react-three/drei';
import { useRef } from 'react';

function TechSphereContent() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  const techIcons = [
    { name: 'React', position: [2, 0, 0] },
    { name: 'NextJS', position: [-2, 0, 0] },
    { name: 'NodeJS', position: [0, 2, 0] },
    { name: 'MongoDB', position: [0, -2, 0] },
    { name: 'Express', position: [0, 0, 2] },
    { name: 'Spring', position: [0, 0, -2] },
    { name: 'Java', position: [1.4, 1.4, 0] },
    { name: 'Tailwind', position: [-1.4, -1.4, 0] },
  ];

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef}>
        <mesh>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial color="#1e293b" wireframe />
        </mesh>

        {techIcons.map((tech, index) => (
          <Text3D
            key={index}
            position={tech.position}
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.4}
            height={0.1}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            {tech.name}
            <meshStandardMaterial color="#0ea5e9" metalness={0.8} roughness={0.2} />
          </Text3D>
        ))}
      </group>
    </Float>
  );
}

export default function TechSphereCanvas() {
  return (
    <div className="w-full h-96">
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <TechSphereContent />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}
