'use client'

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';
import AnimatedText from '../ui/AnimatedText';

function HeroSphere() {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh>
        <icosahedronGeometry args={[1.8, 2]} />
        <meshStandardMaterial 
          color="#22c55e" 
          roughness={0.2} 
          metalness={0.9} 
          wireframe
          emissive="#22c55e"
          emissiveIntensity={0.1}
        />
      </mesh>
      {/* Inner glow sphere */}
      <mesh>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial 
          color="#a855f7" 
          roughness={0.3} 
          metalness={0.7} 
          wireframe
          emissive="#a855f7"
          emissiveIntensity={0.05}
        />
      </mesh>
    </Float>
  );
}

export default function Hero() {
  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
    { name: 'Email', icon: '📧', url: 'mailto:aman@example.com' },
  ];

  return (
    <section id="hero" className="min-h-screen flex flex-col lg:flex-row items-center justify-center pt-20 px-4 md:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-primary/20 shape-diamond animate-float"></div>
        <div className="absolute bottom-32 left-16 w-12 h-12 bg-secondary/10 shape-hexagon animate-float-reverse"></div>
      </div>
      
      <div className="w-full lg:w-1/2 z-10 p-8 lg:pr-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-primary/20 mb-6"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2"></div>
            <span className="text-sm text-gray-300">Available for opportunities</span>
          </motion.div>

          <h1 className="text-responsive-xl font-bold mb-6 leading-tight">
            <span className="text-gray-100">Hello, I'm</span><br />
            <span className="gradient-text">
              <AnimatedText text="Aman Bhatt" />
            </span>
          </h1>
          
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-responsive-lg text-gray-300 mb-4"
          >
            Full Stack Developer & <span className="gradient-text-secondary">BTech CSE Student</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-responsive-md text-gray-400 mb-8 max-w-lg leading-relaxed"
          >
            4th year BTech CSE student passionate about building modern web applications with{' '}
            <span className="text-primary font-semibold">MERN Stack</span> and{' '}
            <span className="text-secondary font-semibold">Spring Boot</span>. 
            Turning ideas into scalable digital solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary flex items-center gap-2"
            >
              <span>View My Work</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex items-center gap-4"
          >
            <span className="text-gray-400 text-sm">Connect with me:</span>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-effect border border-primary/20 flex items-center justify-center text-lg hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="w-full lg:w-1/2 flex justify-center relative h-[600px] mt-8 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-full"
        >
          <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
            <ambientLight intensity={0.3} />
            <spotLight position={[15, 15, 15]} angle={0.2} penumbra={1} intensity={2} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
            <HeroSphere />
            <Environment preset="night" />
            <OrbitControls 
              enableZoom={false} 
              autoRotate 
              autoRotateSpeed={0.8}
              enablePan={false}
            />
            <Stars radius={150} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
          </Canvas>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}