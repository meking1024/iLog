import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { MouseIcon } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <div className="min-h-screen cursor-none selection:bg-neo-pink selection:text-white">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 border-2 border-neo-black rounded-full pointer-events-none z-50 hidden md:block"
        animate={{ x: cursorPosition.x - 12, y: cursorPosition.y - 12 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      >
        <div className="w-1.5 h-1.5 bg-neo-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-neo-black origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="relative">
        <Hero />
        <Portfolio />
        <Blog />
        <Contact />
      </main>

      <div className="fixed bottom-8 right-8 z-40 hidden lg:block">
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="bg-white border-2 border-neo-black p-3 shadow-hard rounded-full"
        >
          <MouseIcon className="w-6 h-6" />
        </motion.div>
      </div>
    </div>
  );
}