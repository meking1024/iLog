import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-start">
        
        {/* Logo */}
        <motion.a 
          href="#"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-auto bg-white border-2 border-neo-black px-4 py-2 shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 flex items-center gap-2 group"
        >
          <Code2 className="w-6 h-6 group-hover:text-neo-purple transition-colors" />
          <span className="font-bold font-mono text-lg tracking-tighter">DEV.XY</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 pointer-events-auto">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border-2 border-neo-black px-6 py-2 font-bold hover:bg-neo-yellow shadow-hard hover:shadow-hard-hover hover:-translate-y-1 transition-all duration-200"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden pointer-events-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white border-2 border-neo-black p-2 shadow-hard active:translate-y-1 active:shadow-none transition-all"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-neo-bg z-50 flex flex-col items-center justify-center gap-8 pointer-events-auto md:hidden"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 bg-white border-2 border-neo-black p-2 shadow-hard"
            >
              <X />
            </button>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black font-sans hover:text-neo-purple hover:italic transition-all"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};