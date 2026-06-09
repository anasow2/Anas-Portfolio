import { motion } from 'motion/react';
import { fadeUpScaleVariant, staggerContainer } from '../utils/animations';

const projects = [
  {
    id: 1,
    title: 'Mobile App Development',
    category: 'Rapid Execution',
    description: 'Delivering modern, feature-rich mobile applications through efficient AI-driven development. Focused on beautiful UI and fluid user experiences without the traditional long development cycles.'
  },
  {
    id: 2,
    title: 'Web Platform Design',
    category: 'Modern UI/UX',
    description: 'Crafting responsive, highly performant web platforms. Leveraging generative AI tools to rapidly turn complex ideas into fully functional, polished, and ready-to-deploy digital products.'
  }
];

export default function Projects() {
  return (
    <section className="px-6 md:px-12 pb-12 max-w-[1400px] mx-auto">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            variants={fadeUpScaleVariant}
            className="group flex flex-col justify-center bg-[#f5f5f7] rounded-3xl p-8 transition-all hover:bg-gray-100 border border-transparent hover:border-gray-200 min-h-[220px]"
          >
            <h4 className="text-xs font-bold tracking-widest text-[#0071e3] uppercase mb-4">{project.category}</h4>
            <h3 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] mb-4">{project.title}</h3>
            <p className="text-[#424245] leading-relaxed text-base">
              {project.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
