"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Eye, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PERSONAL } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Large gradient orb */}
        <motion.div
          className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, hsl(25 95% 53% / 0.4), transparent 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Secondary orb */}
        <motion.div
          className="absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full opacity-10 blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, hsl(25 95% 53% / 0.3), transparent 70%)",
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating geometric shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-accent/20"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 18}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-muted px-4 py-1.5 text-sm font-medium text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for opportunities
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {PERSONAL.name.split(" ")[0]}{" "}
          <span className="gradient-text">{PERSONAL.name.split(" ")[1]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl"
        >
          {PERSONAL.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground/80 sm:text-lg"
        >
          {PERSONAL.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button size="lg" asChild>
            <a href="#projects">
              <Eye className="h-5 w-5" />
              View Projects
            </a>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a href={PERSONAL.resumePath} download>
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              <Send className="h-5 w-5" />
              Contact Me
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          aria-label="Scroll to about section"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-accent transition-colors"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
