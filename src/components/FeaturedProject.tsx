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
      className="bg-[#f5f5f7] rounded-3xl p-0 overflow-hidden flex flex-col md:flex-row relative group cursor-pointer w-full flex-1 border border-transparent hover:border-gray-200 transition-all"
    >
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center z-10">
        <span className="text-[#0071e3] font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
          FEATURED APP <span className="text-gray-400">•</span> BUILT BY ANAS DEV
        </span>
        <div className="flex items-center gap-5 mb-5">
          <div className="w-16 h-16 rounded-[18px] shadow-sm bg-white border border-gray-100 flex items-center justify-center p-2 shrink-0">
            <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 50 55 C 50 45, 65 45, 65 55" stroke="#54dcb2" strokeWidth="6" strokeLinecap="round" />
              <path d="M 76 38 C 76 20, 48 18, 48 35 C 48 48, 68 52, 75 60" stroke="#102f54" strokeWidth="12" strokeLinecap="round" />
              <path d="M 45 58 L 38 88 C 36 96, 42 100, 50 100 L 75 100 C 83 100, 85 96, 85 88 L 85 64" stroke="#54dcb2" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 48 78 L 58 90 L 90 50" stroke="#54dcb2" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-[#1d1d1f] text-3xl md:text-4xl font-bold tracking-tight">Sahal Marketplace</h3>
        </div>
        <p className="text-[#424245] text-base leading-relaxed mb-6">
          A robust e-commerce ecosystem built for local vendors. High-performance mobile experience with real-time sync.
        </p>
        <div className="flex gap-2">
          {['Flutter', 'Firebase', 'Stripe'].map((tech) => (
            <span key={tech} className="text-[10px] px-2 py-1 bg-white text-gray-600 font-medium rounded shadow-sm border border-gray-100">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row mt-8 z-20 relative">
          <a href="#" className="flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all bg-[#1d1d1f] border border-transparent rounded-xl hover:bg-[#000000] shadow-sm">
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.66-.78 2.53-.1 3.98 1.15 4.81 2.37-2.05 1.25-1.74 4.02.51 5.03-.49 1.43-1.25 2.75-2.21 3.92-.78 1.05-1.42 1.9-1.85 1.63zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.3 2.31-1.92 4.16-3.74 4.25z"/></svg>
            App Store
          </a>
          <a href="#" className="flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all bg-[#1d1d1f] border border-transparent rounded-xl hover:bg-[#000000] shadow-sm">
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor"><path d="M5.4 2.8C5.07 3.12 4.9 3.6 4.9 4.27v15.4c0 .66.17 1.15.5 1.48l.06.06 8.5-8.6v-.2l-8.5-8.6-.06.06zm9.4 9.4 2.8 2.85-8.77 5.1c-.84.49-1.5.08-1.5-.9V4.68c0-.98.66-1.39 1.5-.9l8.72 5.1-2.75 2.72v.2zm3.33-3.37L15 6l2.35-2.35 4.81 2.7c1.37.8 1.37 2.1 0 2.9l-4.8 2.7L15 9.6l3.13-3.17z"/></svg>
            Google Play
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative flex items-center justify-center min-h-[350px] p-6 lg:bg-gradient-to-br lg:from-blue-50 lg:to-blue-100/50">
        <img 
          src="https://lh3.googleusercontent.com/d/1JgcDJuijsRGjHTmO7zSZQbVSCTqXvUGH" 
          alt="Sahal Marketplace preview"
          className="max-h-[320px] w-auto rounded-2xl shadow-xl rotate-6 transform md:group-hover:rotate-3 transition-transform duration-700 border-4 border-white"
          referrerPolicy="no-referrer"
        />
      </div>
      {/* Background Glow */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-400/10 blur-[80px] rounded-full pointer-events-none"></div>
    </motion.section>
  );
}
