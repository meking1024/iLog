import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-20 pb-10 px-4">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ 
        backgroundImage: 'radial-gradient(#121212 1px, transparent 1px)', 
        backgroundSize: '24px 24px' 
      }}></div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        <div className="lg:col-span-8 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-neo-yellow border-2 border-neo-black px-3 py-1 w-fit font-mono font-bold shadow-hard"
          >
            <Terminal size={16} />
            <span>HELLO_WORLD</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter">
            <motion.span 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="block"
            >
              CREATIVE
            </motion.span>
            <motion.span 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-neo-purple to-neo-blue"
              style={{ WebkitTextStroke: '2px #121212' }}
            >
              DEVELOPER
            </motion.span>
            <motion.span 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="block"
            >
              & ARTIST
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl font-mono max-w-2xl border-l-4 border-neo-pink pl-4 py-2 bg-white/50 backdrop-blur-sm"
          >
            Crafting digital experiences where code meets chaos. 
            Specializing in game dev, interactive web, and pixel art.
          </motion.p>
        </div>

        <div className="lg:col-span-4 relative hidden lg:block h-full min-h-[400px]">
           {/* Abstract Art Element */}
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute top-0 right-0 w-64 h-64 bg-neo-blue rounded-full border-2 border-neo-black mix-blend-multiply filter blur-xl opacity-50"
           />
           <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             className="absolute bottom-0 left-10 w-64 h-64 bg-neo-pink rounded-full border-2 border-neo-black mix-blend-multiply filter blur-xl opacity-50"
           />
           
           <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 12 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-80 bg-white border-2 border-neo-black shadow-hard flex items-center justify-center rotate-3"
           >
             <div className="text-center p-6">
               <div className="w-32 h-32 mx-auto bg-neo-black rounded-full mb-4 overflow-hidden border-2 border-neo-black">
                  <img src="https://picsum.photos/200/200" alt="Avatar" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
               </div>
               <h3 className="font-bold text-2xl">ALEX.DEV</h3>
               <p className="font-mono text-sm text-gray-500 mt-2">Level 24 Wizard</p>
             </div>
           </motion.div>
        </div>

      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-10 flex items-center gap-2 font-bold"
      >
        SCROLL TO EXPLORE <ArrowDownRight />
      </motion.div>
    </section>
  );
};