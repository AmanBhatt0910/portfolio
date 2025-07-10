'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 pt-32 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[var(--color-primary)]">
          Hello, I'm Aman
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[var(--color-foreground)] max-w-2xl mx-auto">
          Full Stack Developer • MERN & Spring Boot Specialist • Passionate about UI/UX & 3D Web
        </p>
        <a
          href="#projects"
          className="inline-block mt-8 px-6 py-3 bg-[var(--color-primary)] text-white rounded-xl hover:bg-[var(--color-accent)] transition"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  )
}
