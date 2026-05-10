import { motion } from 'motion/react';
import { CirclePlay } from 'lucide-react';

export default function LiveStream() {
  return (
    <section id="live" className="py-24 relative overflow-hidden">
      {/* Decorative blurred blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-purple/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass border border-white/10 rounded-[40px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12"
        >
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Live Sundays 10AM & 12PM
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 leading-tight">Join the <br/>Experience <span className="text-gradient">Online</span></h2>
            <p className="text-white/60 text-lg mb-8 max-w-md">
              Can't make it in person? Engage with worship and the word from anywhere in the world.
            </p>
            <div className="flex gap-4">
              <button className="bg-brand-blue text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">
                Watch Live
              </button>
              <button className="glass px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
                Past Messages
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-video rounded-3xl overflow-hidden glass border border-white/20 shadow-2xl group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=2940&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Live Stream Thumbnail" />
              <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center group-hover:bg-brand-dark/20 transition-colors duration-500">
                <CirclePlay className="w-20 h-20 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
