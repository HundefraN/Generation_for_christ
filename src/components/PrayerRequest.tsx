import { motion } from 'motion/react';
import { useState } from 'react';
import { Send, Heart, CheckCircle } from 'lucide-react';

export default function PrayerRequest() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [request, setRequest] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!request.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setRequest('');
      setIsAnonymous(false);
    }, 5000);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#0d0618] to-brand-dark" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/8 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-purple to-pink-500 flex items-center justify-center shadow-lg shadow-brand-purple/20">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold text-brand-purple">We're Here For You</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl mb-6 font-display font-bold">
              Submit a <br /><span className="text-gradient">Prayer Request</span>
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-md leading-relaxed">
              Whatever you're going through, you don't have to face it alone. Our prayer team 
              is committed to lifting your needs before God every single day.
            </p>

            <div className="space-y-4">
              {[
                'Every request is prayed over by our dedicated prayer team',
                'Requests are kept strictly confidential',
                'You can submit anonymously if you prefer',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={18} className="text-brand-blue shrink-0" />
                  <span className="text-white/60 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-purple/30"
                >
                  <Heart className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">Request Received</h3>
                <p className="text-white/50">Our prayer warriors are covering you in prayer. God hears you and He is faithful.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-6">
                {!isAnonymous && (
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Your Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-purple/50 focus:ring-2 focus:ring-brand-purple/20 transition-all font-medium"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Your Prayer Request</label>
                  <textarea
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                    placeholder="Share what's on your heart..."
                    rows={5}
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-purple/50 focus:ring-2 focus:ring-brand-purple/20 transition-all resize-none font-medium"
                  />
                </div>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={() => setIsAnonymous(!isAnonymous)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-md border-2 transition-all ${isAnonymous ? 'bg-brand-purple border-brand-purple' : 'border-white/20 group-hover:border-white/40'}`}>
                      {isAnonymous && <CheckCircle size={16} className="text-white" />}
                    </div>
                  </div>
                  <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">Submit anonymously</span>
                </label>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-purple to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-lg shadow-brand-purple/20"
                >
                  <Send size={18} />
                  Submit Prayer Request
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
