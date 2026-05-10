import { motion } from 'motion/react';
import { HeartHandshake } from 'lucide-react';

export default function Donation() {
  return (
    <section id="give" className="py-32 relative overflow-hidden bg-[#06020c]">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik02MCAwaS0wdjYwaDBWMHptLTMwIDBoLTB2NjBoMFYwem0tMzAgMGgtMHY2MGgwVjB6TTAgMzBoNjB2LTBoLTYwdjB6TTAgNjBoNjB2LTBoLTYwdjB6TTAgMGg2MHYtMGgtNjB2MHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] z-0" 
        style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black, transparent)', maskImage: 'linear-gradient(to bottom, transparent, black, transparent)' }}
      />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-16 border-brand-blue/20"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-purple rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(0,240,255,0.4)]">
            <HeartHandshake className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6">Invest in <span className="text-gradient">Eternity</span></h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Your generosity accelerates the gospel. Partner with us to build the church and reach the broken.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {['$50', '$100', '$250', 'Custom'].map((amount) => (
              <button 
                key={amount}
                className="px-6 py-3 rounded-xl border border-white/10 hover:border-brand-blue hover:bg-brand-blue/10 transition-all font-medium text-lg"
              >
                {amount}
              </button>
            ))}
          </div>

          <button className="w-full sm:w-auto bg-white text-brand-dark px-12 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
            Give Now
          </button>
          
          <p className="mt-8 text-xs text-white/40 max-w-sm mx-auto">Secure encryption provided by Stripe. All transactions are tax-deductible.</p>
        </motion.div>
      </div>
    </section>
  );
}
