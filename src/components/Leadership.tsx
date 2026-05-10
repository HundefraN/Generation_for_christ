import { motion } from 'motion/react';
import { Instagram, Twitter } from 'lucide-react';

const leaders = [
  {
    name: "Pastor Endalk",
    role: "Senior Pastor & Founder",
    bio: "A visionary leader passionate about transforming lives through the gospel and building a community of radical believers.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sister Meron",
    role: "Worship Director",
    bio: "Leading the congregation into deep encounters through prophetic worship and anointed music ministry.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Brother Yonas",
    role: "Youth Pastor",
    bio: "Igniting the next generation with a fire for Jesus through creative ministry and authentic discipleship.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sister Ruth",
    role: "Outreach Coordinator",
    bio: "Leading the charge to serve the marginalized and demonstrate God's love through practical action in Addis Ababa.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  },
];

export default function Leadership() {
  return (
    <section className="py-32 relative bg-[#0a0512]">
      {/* Decorative */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-brand-purple/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-purple/20 text-xs uppercase tracking-widest font-medium text-brand-purple mb-6">
            Meet the Team
          </span>
          <h2 className="text-4xl md:text-6xl mb-4">
            Our <span className="text-brand-purple">Leadership</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Spirit-filled leaders dedicated to shepherding, equipping, and empowering the body of Christ.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[3/4]">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Social links on hover */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                    <Instagram size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                    <Twitter size={16} />
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-1 group-hover:text-brand-blue transition-colors">{leader.name}</h3>
              <p className="text-brand-purple text-sm font-medium mb-3">{leader.role}</p>
              <p className="text-white/40 text-sm leading-relaxed">{leader.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
