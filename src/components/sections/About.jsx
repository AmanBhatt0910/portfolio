'use client'

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function AboutCube() {
  return (
    <mesh castShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color="#8b5cf6" 
        roughness={0.2} 
        metalness={0.8}
        wireframe
      />
    </mesh>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background and expertise
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              <Float speed={1} rotationIntensity={0.2} floatIntensity={1}>
                <AboutCube />
              </Float>
              <Environment preset="apartment" />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            </Canvas>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Passionate Full Stack Developer
            </h3>
            <p className="text-gray-300 mb-6">
              I specialize in building robust, scalable web applications using modern technologies. 
              With expertise in both MERN stack and Spring Boot, I create solutions that bridge the 
              gap between innovative design and technical excellence.
            </p>
            <p className="text-gray-300 mb-6">
              My approach combines creativity with technical precision to deliver applications 
              that not only look stunning but also perform exceptionally well under any conditions.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
                <span>20+ Projects</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
                <span>Full Stack Development</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
                <span>Responsive Design</span>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-3 gradient-bg rounded-lg font-medium shadow-lg hover:shadow-primary transition-all"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-tr from-primary/10 to-transparent border border-primary/20 rounded-xl transform rotate-12 blur-sm"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-tl from-secondary/10 to-transparent border border-secondary/20 rounded-xl transform -rotate-6 blur-sm"></div>
    </section>
  );
}