'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { useState } from 'react';

function ContactSphere() {
  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color="#6366f1"
          roughness={0.25}
          metalness={0.85}
          wireframe
          emissive="#06b6d4"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);

    alert("Message sent successfully! I'll get back to you soon.");
  };

  const contactMethods = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Email Me',
      description: 'Drop me a line anytime',
      value: 'aman.bhatt@example.com',
      href: 'mailto:aman.bhatt@example.com',
      color: 'from-indigo-500 to-cyan-400',
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: 'Call Me',
      description: "Let's have a conversation",
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
      color: 'from-cyan-500 to-indigo-400',
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      title: 'LinkedIn',
      description: 'Connect professionally',
      value: 'linkedin.com/in/amanbhatt',
      href: 'https://linkedin.com/in/amanbhatt',
      color: 'from-indigo-400 to-cyan-400',
    },
  ];

  const socialPlatforms = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/amanbhatt' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/amanbhatt' },
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com/amanbhatt' },
    { name: 'Discord', icon: '🎮', url: 'https://discord.com/users/amanbhatt' },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0a0b0f] text-gray-300 py-24">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas>
          <Stars radius={100} depth={50} count={2000} factor={4} fade speed={1} />
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#06b6d4" />
          <ContactSphere />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have an exciting project in mind? I’d love to hear about it! Let’s collaborate and bring your ideas to life.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {contactMethods.map((method, i) => (
            <motion.a
              key={i}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/40 hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-lg"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center mx-auto mb-4`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold text-indigo-400">{method.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{method.description}</p>
              <p className="text-gray-200 text-sm mt-2">{method.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto bg-slate-900/40 border border-slate-700/40 rounded-2xl p-8 backdrop-blur-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-slate-800/50 border border-slate-700/50 px-4 py-3 rounded-lg w-full text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                name="email"
                placeholder="Your Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-slate-800/50 border border-slate-700/50 px-4 py-3 rounded-lg w-full text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-slate-800/50 border border-slate-700/50 px-4 py-3 rounded-lg w-full text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-slate-800/50 border border-slate-700/50 px-4 py-3 rounded-lg w-full text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-400/30 transition-all"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-8 mt-16 text-2xl"
        >
          {socialPlatforms.map((platform, i) => (
            <motion.a
              key={i}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              {platform.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}