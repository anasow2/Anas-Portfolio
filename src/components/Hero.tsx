import { motion } from 'motion/react';
import { fadeUpVariant, staggerContainer } from '../utils/animations';

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 48;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight - 24;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="flex-none pt-16 pb-12 text-center px-6 md:px-12 flex flex-col items-center justify-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <motion.p 
          variants={fadeUpVariant}
          className="text-xl md:text-2xl font-medium text-[#64748b] max-w-2xl mx-auto mb-8"
        >
          Developer & Builder of Digital Products
        </motion.p>
        
        <motion.div 
          variants={fadeUpVariant}
          className="flex justify-center gap-4"
        >
          <a 
            href="#work"
            onClick={(e) => scrollToSection(e, 'work')}
            className="px-6 py-2.5 bg-[#0a192f] text-white rounded-full font-medium hover:bg-[#112a4d] transition-colors text-sm"
          >
            View Projects
          </a>
          <a 
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-6 py-2.5 bg-transparent text-[#10b981] border border-[#10b981] rounded-full font-medium hover:bg-[#10b981] hover:text-white transition-all text-sm"
          >
            Contact
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
