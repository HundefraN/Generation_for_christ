import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

export default function ContactLocation() {
  return (
    <section id="contact" className="py-32 relative bg-brand-dark">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-4">
            Visit <span className="text-brand-blue">Us</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            We'd love to meet you! Come experience the warmth of our community in person.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card overflow-hidden relative group"
          >
            <div className="aspect-[16/10] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnMDAuMCJOIDM4wrA0MicwMC4wIkU!5e0!3m2!1sen!2set!4v1600000000000!5m2!1sen!2set"
                className="absolute inset-0 w-full h-full border-0 opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Church Location"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent pointer-events-none" />
              
              {/* Floating location pin */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center">
                  <MapPin size={18} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Torhailoch, Addis Ababa</p>
                  <p className="text-xs text-white/50">Ethiopia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: MapPin,
                title: "Address",
                lines: ["Torhailoch Area", "Addis Ababa, Ethiopia"],
                color: "from-brand-blue to-cyan-400",
              },
              {
                icon: Clock,
                title: "Service Times",
                lines: ["Sunday: 10:00 AM & 12:00 PM", "Wednesday: 7:00 PM"],
                color: "from-brand-purple to-violet-400",
              },
              {
                icon: Phone,
                title: "Phone",
                lines: ["+251 911 123 456"],
                color: "from-pink-500 to-rose-400",
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["info@gfc.church"],
                color: "from-amber-500 to-yellow-400",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-5 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors group cursor-pointer border border-white/5"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 text-sm">{item.title}</h4>
                  {item.lines.map((line, i) => (
                    <p key={i} className="text-white/50 text-sm">{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Directions Button */}
            <motion.a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full flex items-center justify-center gap-2 bg-brand-blue text-brand-dark py-4 rounded-2xl font-bold hover:bg-white transition-colors"
            >
              <Navigation size={18} />
              Get Directions
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
