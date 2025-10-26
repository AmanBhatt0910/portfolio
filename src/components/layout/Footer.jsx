'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const socials = [
    { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/amanbhatt' },
    { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://linkedin.com/in/amanbhatt' },
    { name: 'Twitter', icon: <FaTwitter />, href: 'https://twitter.com/amanbhatt' },
    { name: 'Instagram', icon: <FaInstagram />, href: 'https://instagram.com/amanbhatt' },
  ];

  return (
    <footer className="relative bg-dark border-t border-primary/10 py-12 overflow-hidden">
      {/* Background gradient blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[400px] bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
        {/* Name and Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-3 gradient-text">Aman Bhatt</h2>
          <p className="text-gray-400 max-w-lg mx-auto text-base">
            Building seamless digital experiences through creativity, design, and code.
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-primary transition-all duration-300 text-2xl"
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-700/50 max-w-3xl mx-auto"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-sm text-gray-500"
        >
          <p>
            © {new Date().getFullYear()} <span className="text-gray-300 font-semibold">Aman Bhatt</span>. 
            All rights reserved.
          </p>
          <p className="mt-1">
            Designed & Built with 💚 using <span className="text-primary font-semibold">Next.js</span> &{' '}
            <span className="text-secondary font-semibold">Tailwind CSS</span>.
          </p>
        </motion.div>

        {/* Floating Glow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] bg-primary/20 blur-3xl opacity-30"></div>
      </div>
    </footer>
  );
}