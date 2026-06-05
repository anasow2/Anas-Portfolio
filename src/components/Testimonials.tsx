import { motion } from 'motion/react';
import { fadeUpScaleVariant, staggerContainer, fadeUpVariant } from '../utils/animations';

const testimonials = [
  {
    id: 1,
    content: "Anas is an exceptional developer who consistently delivers high-quality code. His attention to detail and clean design principles perfectly matching our brand made a huge difference.",
    author: "Sarah Jenkins",
    role: "Product Manager",
    company: "TechFlow"
  },
  {
    id: 2,
    content: "Working with Anas was a breeze. He brought our complex ideas to life with an elegant, performant mobile application. Truly a master of both engineering and UX design.",
    author: "David Chen",
    role: "Founder",
    company: "Lumina Startups"
  },
  {
    id: 3,
    content: "One of the most reliable and forward-thinking builders I've had the pleasure of collaborating with. His code is as clean as his minimalist design approach.",
    author: "Elena Rodriguez",
    role: "CTO",
    company: "VentureTech"
  }
];

export default function Testimonials() {
  return (
    <section className="px-6 md:px-12 pb-12 max-w-[1400px] mx-auto">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mb-8 px-2"
      >
        <h2 className="text-sm font-bold text-[#64748b] uppercase tracking-widest mb-2">Feedback</h2>
        <h3 className="text-3xl font-bold tracking-tight text-[#0a192f]">What clients say.</h3>
      </motion.div>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-3 gap-6"
      >
        {testimonials.map((testimonial) => (
          <motion.div 
            key={testimonial.id}
            variants={fadeUpScaleVariant}
            className="flex flex-col justify-between bg-white border border-gray-200 shadow-sm rounded-3xl p-8 transition-all hover:bg-gray-100"
          >
            <p className="text-[#424245] leading-relaxed text-sm mb-8">
              &quot;{testimonial.content}&quot;
            </p>
            <div className="flex flex-col">
              <span className="text-[#0a192f] font-semibold text-sm tracking-tight">{testimonial.author}</span>
              <span className="text-[#64748b] text-xs font-medium">{testimonial.role}, {testimonial.company}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
