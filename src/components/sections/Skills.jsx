'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/data/siteData';

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-12 max-w-6xl mx-auto text-gray-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Skills & Technologies
        </span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {skillsData.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="backdrop-blur-md bg-slate-900/40 border border-slate-700/50 rounded-2xl p-6 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-indigo-400 mb-6 text-center">
              {group.category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
              {group.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="text-4xl">{skill.icon}</div>
                  <p className="text-sm text-gray-400">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute -bottom-32 right-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full"></div>
    </section>
  );
}