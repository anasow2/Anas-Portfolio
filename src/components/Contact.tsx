import { useState } from 'react';
import { motion } from 'motion/react';
import { fadeUpVariant } from '../utils/animations';
import { Check, Copy } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "anassalah818@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="contact" className="px-6 md:px-12 pb-24 max-w-[1400px] mx-auto">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="bg-[#1d1d1f] rounded-3xl p-12 text-center flex flex-col items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0071e3] to-blue-700"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Let's build something great.
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-lg mx-auto">
            I'm currently available for new projects or full-time roles. Let's talk.
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <a 
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-sm font-semibold text-[#1d1d1f] bg-white rounded-full hover:bg-gray-100 transition-all shadow-lg"
            >
              Email Me
            </a>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 min-w-[140px] text-sm font-semibold text-white border border-white/30 rounded-full hover:bg-white/10 transition-all shadow-sm"
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Email
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
