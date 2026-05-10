import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function MinistriesBento() {
  return (
    <section id="ministries" className="py-24 relative bg-[#0a0512]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl mb-4">Our <span className="text-brand-blue">Ministries</span></h2>
            <p className="text-white/60">Find your tribe. Grow together.</p>
          </div>
          <button className="text-sm font-bold uppercase tracking-wider text-brand-blue hover:text-white transition-colors flex items-center gap-2">
            View All <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Youth - Large Feature */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 glass-card relative group overflow-hidden cursor-pointer"
          >
            <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2970&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 group-hover:scale-105" alt="Youth Ministry" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
            <div className="absolute bottom-0 p-8 w-full">
              <span className="px-3 py-1 bg-brand-blue/20 text-brand-blue border border-brand-blue/30 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Next Gen</span>
              <h3 className="text-4xl mb-2">GFC Youth</h3>
              <p className="text-white/80 max-w-md">Raising up a fearless generation equipped to lead. Middle & High School students meet Wednesdays at 7PM.</p>
            </div>
          </motion.div>

          {/* Worship */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card relative group overflow-hidden cursor-pointer"
          >
            <img src="https://images.unsplash.com/photo-1493225457124-a1a2a5f5f4b0?q=80&w=2940&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" alt="Worship Team" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent" />
            <div className="absolute bottom-0 p-8 w-full">
              <h3 className="text-2xl mb-2">Worship</h3>
              <p className="text-white/60 text-sm">Join the team creating sound that shifts atmospheres.</p>
            </div>
          </motion.div>

          {/* Outreach */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card relative group overflow-hidden cursor-pointer bg-gradient-to-br from-brand-purple/20 to-transparent"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593113512630-f6551b9d45e4?q=80&w=2940&auto=format&fit=crop')] bg-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-0 p-8 w-full">
              <h3 className="text-2xl mb-2">City Outreach</h3>
              <p className="text-white/60 text-sm">Serving the marginalized and bringing light to the city.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
