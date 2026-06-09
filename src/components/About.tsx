import { motion } from 'motion/react';
import { fadeUpVariant } from '../utils/animations';

export default function About() {
  return (
    <motion.section 
      id="about" 
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="bg-[#f5f5f7] rounded-3xl p-8 flex-1 flex flex-col justify-center w-full"
    >
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-xl font-semibold text-[#1d1d1f]">About</h2>
      </div>
      <p className="text-[#424245] leading-relaxed text-sm">
        I specialize in building stunning Apps and Websites entirely through Vibe Coding and AI. I don't write traditional code; instead, I instruct advanced AI tools to engineer, design, and deploy high-performance applications from the ground up.
      </p>
    </motion.section>
  );
}
