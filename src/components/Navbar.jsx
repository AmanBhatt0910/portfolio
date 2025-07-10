'use client'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-[var(--color-background)] bg-opacity-90 backdrop-blur border-b border-[var(--color-muted)]"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[var(--color-primary)]">Aman.dev</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#about" className="text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition">About</a>
          <a href="#skills" className="text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition">Skills</a>
          <a href="#projects" className="text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition">Projects</a>
          <a href="#contact" className="text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition">Contact</a>
        </div>
      </div>
    </motion.nav>
  )
}
