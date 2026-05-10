import { motion } from 'motion/react';
import { Target, Heart, Eye } from 'lucide-react';

export default function MissionVision() {
  const cards = [
    {
      title: "Our Mission",
      desc: "To win souls, disciple believers, and demonstrate the power of the Holy Spirit to our generation.",
      icon: <Target className="w-8 h-8 text-brand-purple" />,
      delay: 0.1
    },
    {
      title: "Our Vision",
      desc: "A mobilized church carrying the light of Christ to Addis Ababa, Torhailoch, and the ends of the earth.",
      icon: <Eye className="w-8 h-8 text-brand-blue" />,
      delay: 0.2
    },
    {
      title: "Our Founder",
      desc: "Pastor Endalk founded this ministry with a burning passion to see lives deeply transformed by Jesus and equipped for His kingdom.",
      icon: <Heart className="w-8 h-8 text-white" />,
      delay: 0.3
    }
  ];

  return (
    <section id="mission" className="py-32 relative bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl mb-6"
          >
            Vision & <span className="text-brand-purple">Leadership</span>
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto">More than a Sunday service, we are a movement of people radically abandoned to Jesus.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: card.delay, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-10 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-6 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-purple/30 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-2xl mb-4">{card.title}</h3>
              <p className="text-white/60 leading-relaxed font-light">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
