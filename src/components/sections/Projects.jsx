'use client'

import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment integration, cart system, and admin dashboard",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management system with real-time updates and team features",
    technologies: ["Next.js", "Spring Boot", "PostgreSQL", "WebSockets"],
    github: "#",
    demo: "#"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics platform for tracking social media metrics and engagement",
    technologies: ["React", "Express", "MongoDB", "Chart.js"],
    github: "#",
    demo: "#"
  },
  {
    title: "Fitness Tracker",
    description: "Mobile-first fitness application with workout plans and progress tracking",
    technologies: ["React Native", "Node.js", "Firebase", "Redux"],
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-dark-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and development projects
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-1/4 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-full blur-xl -z-10 animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-tl from-secondary/10 to-transparent border border-secondary/20 rounded-full blur-xl -z-10 animate-float-reverse"></div>
    </section>
  );
}