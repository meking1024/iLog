import React from 'react';
import { Github, Twitter, Mail, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-neo-black text-neo-bg py-24 px-4 border-t-2 border-neo-bg relative overflow-hidden">
      
      {/* Background text */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
          <div className="whitespace-nowrap text-[20rem] font-black leading-none text-gray-800 absolute -top-20 -left-20">
              CONTACT
          </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
                LET'S <span className="text-neo-pink">BUILD</span> <br/>
                SOMETHING <span className="text-neo-blue">COOL</span>
            </h2>
            <p className="font-mono text-xl text-gray-400 max-w-xl mx-auto">
                Available for freelance work and collaborations. Drop me a line if you want to talk code, art, or games.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.a 
                whileHover={{ scale: 1.02, rotate: 1 }}
                href="mailto:hello@example.com"
                className="bg-neo-bg text-neo-black p-8 border-4 border-transparent hover:border-neo-purple transition-all flex flex-col justify-between min-h-[200px] group"
            >
                <Mail size={48} className="mb-4 group-hover:text-neo-purple" />
                <div>
                    <h3 className="font-bold text-2xl">Email Me</h3>
                    <p className="font-mono">hello@alex.dev</p>
                </div>
            </motion.a>

            <div className="grid grid-rows-3 gap-4">
                 <SocialCard icon={<Github />} label="GitHub" handle="@alexdev" color="hover:bg-gray-800 hover:text-white" />
                 <SocialCard icon={<Twitter />} label="Twitter" handle="@alex_codes" color="hover:bg-[#1DA1F2] hover:text-white" />
                 <SocialCard icon={<Linkedin />} label="LinkedIn" handle="/in/alexdev" color="hover:bg-[#0A66C2] hover:text-white" />
            </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center font-mono text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Alex Dev. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <span>REACT</span>
                <span>TAILWIND</span>
                <span>FRAMER</span>
            </div>
        </div>
      </div>
    </section>
  );
};

const SocialCard = ({ icon, label, handle, color }: { icon: React.ReactNode, label: string, handle: string, color: string }) => (
    <a href="#" className={`bg-white text-neo-black p-4 flex items-center justify-between border-2 border-transparent hover:border-neo-bg transition-all ${color}`}>
        <div className="flex items-center gap-4">
            {icon}
            <span className="font-bold text-lg">{label}</span>
        </div>
        <span className="font-mono">{handle}</span>
    </a>
);