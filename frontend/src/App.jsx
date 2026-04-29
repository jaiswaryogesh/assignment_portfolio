import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-background text-foreground min-h-screen selection:bg-accent/30">
      <AnimatePresence>
        {loading && (
          <motion.div 
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          >
            <div className="flex flex-col items-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-16 h-16 border-4 border-primary border-t-accent rounded-full mb-4"
              />
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
              >
                LOADING
              </motion.h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </main>
          
          <footer className="py-8 text-center text-gray-500 border-t border-white/5">
            <p>© {new Date().getFullYear()} John Doe. Crafted with React & Framer Motion.</p>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

export default App;
