'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Suspense } from 'react'

function Sphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color="#c24e28" wireframe />
    </mesh>
  )
}

export default function Scene3D() {
  return (
    <div className="absolute top-0 left-0 w-full h-screen z-0">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Sphere />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  )
}
