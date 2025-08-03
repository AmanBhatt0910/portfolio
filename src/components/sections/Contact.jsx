'use client'

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { useState } from 'react';

function ContactSphere() {
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color="#22c55e" 
          roughness={0.2} 
          metalness={0.8}
          wireframe
          emissive="#22c55e"
          emissiveIntensity={0.1}
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
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message (you can implement a toast notification here)
    alert('Message sent successfully! I\'ll get back to you soon.');
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Me',
      description: 'Drop me a line anytime',
      value: 'aman.bhatt@example.com',
      href: 'mailto:aman.bhatt@example.com',
      color: 'from-primary to-emerald-400'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Call Me',
      description: 'Let\'s have a conversation',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
      color: 'from-secondary to-purple-400'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      title: 'LinkedIn',
      description: 'Connect professionally',
      value: 'linkedin.com/in/amanbhatt',
      href: 'https://linkedin.com/in/amanbhatt',
      color: 'from-accent to-blue-400'
    },
  ];

  const socialPlatforms = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/amanbhatt' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/amanbhatt' },
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com/amanbhatt' },
    { name: 'Discord', icon: '🎮', url: 'https://discord.com/users/amanbhatt' },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-dark">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <Canvas>
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} intensity={0.3} color="#22c55e" />
          <ContactSphere />
        </Canvas>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/3 rounded-full blur-3xl animate-float-reverse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-lg font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have an exciting project in mind? I'd love to hear about it! 
            Let's collaborate and bring your ideas to life.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect rounded-2xl p-6 text-center border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {method.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">
                {method.title}
              </h3>
              <p className="text-gray-400 mb-3">
                {method.description}
              </p>
              <p className="text-gray-200 font-medium">
                {method.value}
              </p>
            </motion.a>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl p-8 border border-primary/10"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 gradient-text">Send me a Message</h3>
              <p className="text-gray-400">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="Aman Bhatt"
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Your Email *
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="aman@example.com"
                  />
                </motion.div>
              </div>
              
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                  Subject *
                </label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  placeholder="Let's discuss a project opportunity"
                />
              </motion.div>
              
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Your Message *
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
                  placeholder="Hi Aman, I'd love to discuss a potential collaboration..."
                ></textarea>
              </motion.div>
              
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Availability Status */}
            <div className="glass-effect rounded-2xl p-6 border border-primary/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold gradient-text">Current Availability</h3>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse mr-2"></div>
                  <span className="text-primary font-medium">Available</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                I'm currently open to new opportunities and exciting projects. 
                Whether it's a full-time position, freelance work, or collaboration, 
                I'd love to hear from you!
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="glass-effect-secondary rounded-lg p-3">
                  <div className="text-primary font-semibold">Response Time</div>
                  <div className="text-gray-400">Within 24 hours</div>
                </div>
                <div className="glass-effect-secondary rounded-lg p-3">
                  <div className="text-secondary font-semibold">Preferred Contact</div>
                  <div className="text-gray-400">Email or LinkedIn</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-effect rounded-2xl p-6 border border-primary/10">
              <h3 className="text-xl font-bold mb-4 gradient-text">Follow Me</h3>
              <p className="text-gray-400 mb-6">
                Stay updated with my latest projects and tech insights across social platforms.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialPlatforms.map((platform, index) => (
                  <motion.a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center p-3 glass-effect-secondary rounded-lg border border-primary/5 hover:border-primary/20 transition-all duration-300"
                  >
                    <span className="text-2xl mr-3">{platform.icon}</span>
                    <span className="font-medium">{platform.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="glass-effect rounded-2xl p-6 border border-primary/10">
              <h3 className="text-xl font-bold mb-4 gradient-text">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                    🎓
                  </div>
                  <div>
                    <div className="font-medium">Education</div>
                    <div className="text-sm text-gray-400">BTech CSE, 4th Year</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center mr-3">
                    💼
                  </div>
                  <div>
                    <div className="font-medium">Specialization</div>
                    <div className="text-sm text-gray-400">Full Stack Development</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mr-3">
                    🌐
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-400">India (Remote Available)</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}