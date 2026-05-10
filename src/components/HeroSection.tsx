import { motion } from 'motion/react';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-brand-dark/80 z-10" />
      <img 
        src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2973&auto=format&fit=crop" 
        alt="Church Worship" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-mesh opacity-60 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-purple/30"
        >
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
          <span className="text-xs uppercase tracking-widest font-medium text-brand-blue">Revival is here</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl max-w-5xl leading-[1.1] mb-8"
        >
          Awakening a <br />
          <span className="text-gradient">Generation</span> for Christ.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 font-light"
        >
          We exist to encounter God's presence, equip believers, and transform the world through the radical love of Jesus in Addis Ababa and beyond.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <button className="bg-white text-brand-dark px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-white/10">
            Plan a Visit <ArrowRight size={20} />
          </button>
          
          <button className="glass px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
            <Play size={18} className="text-brand-blue" /> Watch Latest Message
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/40 uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-white/40" />
        </motion.div>
      </motion.div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/20 blur-[120px] rounded-full z-0 mix-blend-screen pointer-events-none" />
    </section>
  );
}
