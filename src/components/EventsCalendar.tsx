import { motion } from 'motion/react';
import { CalendarPlus } from 'lucide-react';

export default function EventsCalendar() {
  const events = [
    {
      date: "Oct 15",
      title: "Night of Worship",
      time: "7:00 PM - 9:00 PM",
      location: "Main Sanctuary"
    },
    {
      date: "Oct 22",
      title: "Next Steps Class",
      time: "11:30 AM",
      location: "Multi-Purpose Room"
    },
    {
      date: "Nov 05",
      title: "Youth Fall Retreat",
      time: "All Weekend",
      location: "Camp Hope"
    }
  ];

  return (
    <section id="events" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Upcoming <br /><span className="text-brand-purple">Events</span></h2>
            <p className="text-white/60 mb-8">Stay connected and don't miss out on what God is doing in our community.</p>
            <button className="glass border border-white/20 px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors w-full sm:w-auto text-center">
              Full Calendar
            </button>
          </motion.div>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-4">
          {events.map((evt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-white/10 transition-colors group cursor-pointer border border-white/5"
            >
              <div className="flex items-center gap-8 text-left w-full md:w-auto">
                <div className="flex flex-col items-center justify-center bg-brand-purple/10 text-brand-purple w-20 h-20 rounded-xl font-bold p-2 shrink-0">
                  <span className="text-sm uppercase tracking-wider">{evt.date.split(' ')[0]}</span>
                  <span className="text-2xl">{evt.date.split(' ')[1]}</span>
                </div>
                <div>
                  <h3 className="text-2xl mb-1 group-hover:text-brand-blue transition-colors">{evt.title}</h3>
                  <p className="text-white/50 text-sm">{evt.time} &bull; {evt.location}</p>
                </div>
              </div>
              
              <button className="hidden md:flex items-center gap-2 text-sm text-white/40 group-hover:text-white transition-colors mt-4 md:mt-0">
                <CalendarPlus size={18} /> Add to Cal
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
