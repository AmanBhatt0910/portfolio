'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0,transparent_70%)]" />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

      {/* Animated Intro Text */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-100"
      >
        Hi, I’m{' '}
        <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Aman
        </span>
        <br />
        I build <span className="text-indigo-400">beautiful web experiences.</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-4 text-gray-400 max-w-xl text-lg"
      >
        I’m a passionate developer who loves crafting modern, responsive, and
        user-focused digital products using React, Next.js, and Tailwind CSS.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-8 flex gap-4"
      >
        <Link
          href="#projects"
          className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-indigo-500/20"
        >
          View Projects <ArrowRight size={18} />
        </Link>

        <a
          href="/resume.pdf" // Replace with your actual resume path
          download
          className="flex items-center gap-2 border border-gray-600 hover:border-indigo-400 hover:text-indigo-400 text-gray-300 px-6 py-3 rounded-lg font-medium transition-all duration-300"
        >
          Resume <Download size={18} />
        </a>
      </motion.div>

      {/* Background Decorative Orbs */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-indigo-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>
    </section>
  );
}