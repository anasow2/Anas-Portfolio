import { motion } from 'motion/react';
import { fadeUpScaleVariant } from '../utils/animations';

export default function FeaturedProject() {
  return (
    <motion.section 
      id="work" 
      variants={fadeUpScaleVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="bg-[#0a192f] rounded-3xl p-0 overflow-hidden flex flex-col md:flex-row relative group cursor-pointer w-full flex-1"
    >
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center z-10">
        <span className="text-[#10b981] font-bold text-xs uppercase tracking-widest mb-2">Featured Project</span>
        <h3 className="text-white text-3xl md:text-4xl font-bold mb-4 tracking-tight">Sahal Marketplace</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          A robust e-commerce ecosystem built for local vendors. High-performance mobile experience with real-time sync.
        </p>
        <div className="flex gap-2">
          {['Flutter', 'Firebase', 'Stripe'].map((tech) => (
            <span key={tech} className="text-[10px] px-2 py-1 bg-white/10 text-white/80 rounded border border-white/10">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 relative flex items-center justify-center min-h-[350px]">
        {/* Stylized UI Mockup */}
        <div className="w-48 h-96 bg-gradient-to-br from-gray-800 to-black rounded-[2rem] border-[4px] border-gray-700 shadow-2xl overflow-hidden relative rotate-6 transform translate-x-8 md:group-hover:rotate-3 transition-transform duration-700">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-xl"></div>
           <div className="p-4 mt-8 flex flex-col gap-3">
              <div className="h-4 w-2/3 bg-gray-700 rounded"></div>
              <div className="grid grid-cols-2 gap-2">
                 <div className="h-20 bg-gray-800 rounded-lg"></div>
                 <div className="h-20 bg-gray-800 rounded-lg"></div>
                 <div className="h-20 bg-gray-800 rounded-lg"></div>
                 <div className="h-20 bg-gray-800 rounded-lg"></div>
              </div>
              <div className="h-12 w-full bg-[#0a192f] rounded-full mt-4"></div>
           </div>
        </div>
      </div>
      {/* Background Glow */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#10b981]/20 blur-[100px] rounded-full pointer-events-none"></div>
    </motion.section>
  );
}
