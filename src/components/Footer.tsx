export default function Footer() {
  return (
    <footer className="h-16 px-6 md:px-12 border-t border-gray-100 flex items-center justify-between text-[#64748b] text-[11px] uppercase tracking-wider bg-white">
      <div>© {new Date().getFullYear()} Anas • Made with precision</div>
      <div className="hidden md:flex gap-8">
        <a href="https://github.com/anasow2" target="_blank" rel="noopener noreferrer" className="hover:text-[#0a192f] cursor-pointer transition-colors">GitHub</a>
        <a href="https://linkedin.com/in/anas-salah-66244a234" target="_blank" rel="noopener noreferrer" className="hover:text-[#0a192f] cursor-pointer transition-colors">LinkedIn</a>
        <span className="text-[#0a192f] font-bold lowercase">anassalah818@gmail.com</span>
      </div>
    </footer>
  );
}
