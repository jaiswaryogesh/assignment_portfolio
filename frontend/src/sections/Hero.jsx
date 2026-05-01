import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Animated Gradient blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-[30%] right-[20%] w-72 h-72 bg-accent/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-[40%] w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="text-sm font-medium text-gray-300">Available for new opportunities</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
        >
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital</span> <br className="hidden md:block" />
          Experiences
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
        >
          I'm a senior frontend engineer & UI designer specializing in building premium, responsive, and highly interactive web applications.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a 
            href="#projects" 
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            View Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="/resume.pdf" 
            download="Yogesh_Jaiswal_Resume.pdf"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            Resume
            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-gray-500 mb-2 tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
