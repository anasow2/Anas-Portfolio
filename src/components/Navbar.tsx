import { motion } from 'motion/react';

export default function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 48; // h-12 = 48px
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight - 24;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 h-12 w-full border-b border-gray-100 flex items-center justify-between px-6 md:px-12 bg-white/80 backdrop-blur-md"
    >
      <span className="font-semibold text-lg tracking-tight">ANAS DEV</span>
      <div className="hidden md:flex gap-8 text-xs font-medium text-[#424245]">
        <a href="#work" onClick={(e) => scrollToSection(e, 'work')} className="hover:text-blue-600 cursor-pointer transition-colors">Work</a>
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-blue-600 cursor-pointer transition-colors">About</a>
        <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-blue-600 cursor-pointer transition-colors">Skills</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-blue-600 cursor-pointer transition-colors">Contact</a>
      </div>
      <a 
        href="#contact" 
        onClick={(e) => scrollToSection(e, 'contact')}
        className="md:hidden px-4 py-1 text-xs font-medium text-[#0071e3] border border-[#0071e3] rounded-full hover:bg-[#10b981] hover:text-white transition-all"
      >
        Contact
      </a>
    </motion.nav>
  );
}
