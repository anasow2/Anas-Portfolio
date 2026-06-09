import { motion } from 'motion/react';
import { fadeUpScaleVariant, staggerContainer } from '../utils/animations';

const projects = [
  {
    id: 1,
    title: 'Finance Tracker',
    category: 'React App',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Task Management',
    category: 'Next.js & Firestore',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2069&auto=format&fit=crop',
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
            className="group flex flex-col bg-[#f5f5f7] rounded-3xl p-6 transition-all hover:bg-gray-100 cursor-pointer"
          >
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm mb-6 border border-gray-100">
              <div className="aspect-[16/9] w-full relative overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="px-2">
              <h4 className="text-xs font-bold tracking-widest text-[#86868b] uppercase mb-1">{project.category}</h4>
              <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] group-hover:text-blue-600 transition-colors">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
