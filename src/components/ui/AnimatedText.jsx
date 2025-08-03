import { motion } from 'framer-motion';

export default function AnimatedText({ text }) {
  return (
    <div className="inline-block">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}