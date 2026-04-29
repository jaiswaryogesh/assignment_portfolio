import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-tighter z-50 relative group">
          <span className="text-white">Y</span>
          <span className="text-primary group-hover:text-accent transition-colors duration-300">Jai</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <a
            href="#contact"
            className="ml-4 px-5 py-2 text-sm font-semibold rounded-full bg-white/10 hover:bg-white/20 border border-white/5 transition-all hover:scale-105 active:scale-95"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
              animate={{ opacity: 1, clipPath: 'circle(150% at top right)' }}
              exit={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="fixed inset-0 bg-background/95 backdrop-blur-xl flex flex-col justify-center items-center z-40"
            >
              <nav className="flex flex-col items-center space-y-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="text-3xl font-bold text-gray-300 hover:text-white"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-10 flex space-x-6"
              >
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Github size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Mail size={24} /></a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
