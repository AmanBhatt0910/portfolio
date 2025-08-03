'use client'

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';
import AnimatedText from '../ui/AnimatedText';

function HeroSphere() {
  return (
    <mesh>
      <icosahedronGeometry args={[1.5, 2]} />
      <meshStandardMaterial 
        color="#0ea5e9" 
        roughness={0.3} 
        metalness={0.8} 
        wireframe
      />
    </mesh>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full md:w-1/2 z-10 p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">
              <AnimatedText text="Full Stack Developer" />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-lg">
            Building modern web applications with <span className="text-primary">MERN</span> & <span className="text-secondary">Spring Boot</span>
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 gradient-bg rounded-lg font-medium shadow-lg hover:shadow-primary transition-all"
            >
              View Projects
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-transparent border-2 border-primary rounded-lg font-medium hover:bg-primary/10 transition-all"
            >
              Download CV
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      <div className="w-full md:w-1/2 flex justify-center relative h-[500px]">
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <HeroSphere />
          </Float>
          <Environment preset="city" />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={1.5} 
          />
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade />
        </Canvas>
      </div>
      
      {/* Floating particles */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-primary rounded-full"
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </section>
  );
}