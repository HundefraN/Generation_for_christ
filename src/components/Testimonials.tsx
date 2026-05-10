import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sara Tesfaye",
    role: "Youth Member",
    text: "GFC completely transformed my walk with God. The youth ministry gave me a family and accountability I never knew I needed. My life has never been the same!",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&h=200&fit=crop",
    rating: 5,
  },
  {
    name: "Dawit Mengistu",
    role: "Worship Team Lead",
    text: "Serving in the worship team has been the greatest honor. The culture of excellence and authentic worship here is unlike anything else. God is truly in this house.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop",
    rating: 5,
  },
  {
    name: "Hanna Bekele",
    role: "Cell Group Leader",
    text: "Through GFC's cell groups, I discovered my calling as a leader. The discipleship and mentorship programs are powerful and life-changing.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop",
    rating: 5,
  },
  {
    name: "Abel Tadesse",
    role: "New Member",
    text: "I walked into GFC broken and empty. The love and warmth of this community helped me find Jesus in a real way. I'm forever grateful for this church family.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex(p => (p - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex(p => (p + 1) % testimonials.length);
  };

  const t = testimonials[currentIndex];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -100 : 100, opacity: 0 }),
  };

  return (
    <section className="py-32 relative bg-brand-dark overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-display font-bold">
            Real <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Hear from people whose lives have been radically changed through this community.
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="glass-card p-8 md:p-14 text-center"
              >
                <Quote className="w-10 h-10 text-brand-purple/40 mx-auto mb-6" />

                <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-8 max-w-3xl mx-auto italic">
                  "{t.text}"
                </p>

                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-brand-purple/30 shadow-lg"
                  />
                  <div className="text-left">
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-sm text-brand-blue/80">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-8 bg-brand-blue'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
