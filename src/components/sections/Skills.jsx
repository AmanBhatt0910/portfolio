'use client'

import { motion } from 'framer-motion';
console.log(motion);
import SkillCard from '../ui/SkillCard';
import dynamic from 'next/dynamic';
const TechSphereCanvas = dynamic(() => import('../ui/TechSphereCanvas'), { ssr: false });

const frontendSkills = [
  { name: 'React', level: 95 },
  { name: 'Next.js', level: 90 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Redux', level: 85 },
  { name: 'TypeScript', level: 88 },
];

const backendSkills = [
  { name: 'Node.js', level: 90 },
  { name: 'Express', level: 88 },
  { name: 'Spring Boot', level: 85 },
  { name: 'MongoDB', level: 87 },
  { name: 'MySQL', level: 83 },
];

const toolsSkills = [
  { name: 'Git', level: 92 },
  { name: 'Docker', level: 80 },
  { name: 'VS Code', level: 95 },
  { name: 'Postman', level: 88 },
  { name: 'Figma', level: 75 },
];

const languages = [
  { name: 'JavaScript', level: 95 },
  { name: 'Java', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'HTML/CSS', level: 98 },
  { name: 'SQL', level: 88 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Expertise in modern technologies across the full stack development spectrum
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard title="Frontend" skills={frontendSkills} color="from-primary to-cyan-400" />
            <SkillCard title="Backend" skills={backendSkills} color="from-secondary to-purple-400" />
            <SkillCard title="Tools" skills={toolsSkills} color="from-emerald-500 to-teal-300" />
            <SkillCard title="Languages" skills={languages} color="from-amber-500 to-yellow-300" />
          </div>
          
          <div className="flex items-center justify-center">
            <TechSphereCanvas />
          </div>
        </div>
      </div>
      
      {/* Floating islands */}
      <div className="absolute top-20 left-10 -z-10">
        <div className="w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl transform rotate-12 animate-float"></div>
      </div>
      
      <div className="absolute bottom-10 right-10 -z-10">
        <div className="w-32 h-32 bg-gradient-to-tr from-secondary/10 to-transparent border border-secondary/20 rounded-xl transform -rotate-6 animate-float-reverse"></div>
      </div>
    </section>
  );
}