import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Mission", href: "#mission" },
    { label: "Ministries", href: "#ministries" },
    { label: "Live", href: "#live" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "Give", href: "#give" },
  ];

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-blue via-brand-purple to-pink-500 z-[60] origin-left"
      />

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="text-2xl font-display font-bold tracking-tighter flex items-center gap-1">
            <span className="relative">
              GFC<span className="text-brand-blue">.</span>
            </span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleClick(link.href)}
                className="relative px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleClick('#give')}
              className="ml-4 bg-white text-brand-dark px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-blue hover:text-brand-dark transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/20"
            >
              Join Us
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white p-2 rounded-xl hover:bg-white/5 transition-colors" onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full glass border-t border-white/10 overflow-hidden md:hidden"
            >
              <div className="p-6 flex flex-col space-y-1">
                {navLinks.map((link, idx) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleClick(link.href)}
                    className="text-left text-lg font-medium text-white/80 hover:text-white px-4 py-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  onClick={() => handleClick('#give')}
                  className="mt-4 bg-white text-brand-dark px-6 py-3 rounded-xl text-lg font-bold text-center"
                >
                  Join Us
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
