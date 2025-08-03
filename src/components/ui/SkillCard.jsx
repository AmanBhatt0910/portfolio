import { motion } from 'framer-motion';

export default function SkillCard({ title, skills, color }) {
  return (
    <motion.div 
      className="skill-card card-3d"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
      }}
    >
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${color} mr-2`}></span>
        {title}
      </h3>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-dark-700 rounded-full h-2.5">
              <motion.div 
                className={`h-2.5 rounded-full bg-gradient-to-r ${color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}