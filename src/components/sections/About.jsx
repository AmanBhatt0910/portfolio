'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 max-w-6xl mx-auto text-gray-300"
    >
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        About{' '}
        <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Me
        </span>
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-indigo-500/30 shadow-xl shadow-indigo-500/20"
        >
          <Image
            src="/profile-pic.jpg" // <- replace this with your actual image path
            alt="Aman"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 blur-xl"></div>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 backdrop-blur-md bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8 shadow-lg shadow-slate-900/20"
        >
          <p className="text-gray-400 leading-relaxed mb-4">
            Hey there 👋 I’m <span className="text-gray-100 font-medium">Aman</span>,
            a passionate developer who loves creating sleek, performant, and
            user-centered web applications.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            I specialize in <span className="text-indigo-400">React</span>,{' '}
            <span className="text-cyan-400">Next.js</span>, and{' '}
            <span className="text-indigo-400">Tailwind CSS</span>, and I enjoy turning
            ideas into interactive, scalable digital products.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Beyond coding, I’m constantly learning new technologies, contributing to open
            source, and exploring the intersection of design and development.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="text-gray-400 hover:text-indigo-400 transition-all"
            >
              <i className="fa-brands fa-github text-xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="text-gray-400 hover:text-indigo-400 transition-all"
            >
              <i className="fa-brands fa-linkedin text-xl"></i>
            </a>
            <a
              href="mailto:youremail@example.com"
              className="text-gray-400 hover:text-indigo-400 transition-all"
            >
              <i className="fa-solid fa-envelope text-xl"></i>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute -bottom-20 left-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full"></div>
    </section>
  );
}