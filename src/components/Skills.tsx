import { motion } from 'motion/react';
import { fadeUpVariant } from '../utils/animations';

const skills = [
  'Next.js', 'Flutter', 'Firebase', 'Tailwind', 'React', 'Git', 'UI/UX'
];

export default function Skills() {
  return (
    <motion.section 
      id="skills" 
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="bg-[#f5f5f7] rounded-3xl p-8 w-full"
    >
      <h2 className="text-sm font-bold text-[#86868b] uppercase tracking-widest mb-4">
        Tech Stack
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-[#f5f5f7] rounded-full text-xs font-medium transition-colors hover:border-blue-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
