import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, ProjectCategory } from '../types';
import { Gamepad2, Camera, Palette, ExternalLink } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'Neon Racer',
    description: 'A cyberpunk endless runner built with Unity and C#.',
    coverUrl: 'https://picsum.photos/600/400?random=1',
    tags: ['Unity', 'C#', '3D Modeling'],
    category: ProjectCategory.GAME
  },
  {
    id: '2',
    title: 'Urban Decay',
    description: 'Street photography series capturing the silence of the city.',
    coverUrl: 'https://picsum.photos/600/400?random=2',
    tags: ['Analog', '35mm', 'B&W'],
    category: ProjectCategory.PHOTO
  },
  {
    id: '3',
    title: 'Glitch Face',
    description: 'Generative art portraits created with p5.js.',
    coverUrl: 'https://picsum.photos/600/400?random=3',
    tags: ['p5.js', 'Generative', 'WebGL'],
    category: ProjectCategory.ART
  },
  {
    id: '4',
    title: 'Void Crawler',
    description: '2D Metroidvania with hand-drawn pixel art animation.',
    coverUrl: 'https://picsum.photos/600/400?random=4',
    tags: ['Godot', 'Pixel Art', 'GDScript'],
    category: ProjectCategory.GAME
  },
   {
    id: '5',
    title: 'Abstract Mind',
    description: 'Digital painting exploring mental landscapes.',
    coverUrl: 'https://picsum.photos/600/400?random=5',
    tags: ['Procreate', 'Illustration'],
    category: ProjectCategory.ART
  },
];

const CategoryIcon = ({ category }: { category: ProjectCategory }) => {
  switch (category) {
    case ProjectCategory.GAME: return <Gamepad2 size={16} />;
    case ProjectCategory.PHOTO: return <Camera size={16} />;
    case ProjectCategory.ART: return <Palette size={16} />;
  }
};

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 px-4 border-t-2 border-neo-black bg-white relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neo-purple via-neo-pink to-neo-yellow"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
              Selected <span className="text-stroke-neo text-transparent bg-clip-text bg-neo-black" style={{ WebkitTextStroke: '1px black', color: 'transparent' }}>Works</span>
            </h2>
            <p className="font-mono text-gray-600">A collection of experiments and full releases.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {(['All', ...Object.values(ProjectCategory)] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 border-2 border-neo-black font-bold text-sm uppercase transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-none ${
                  filter === cat ? 'bg-neo-black text-white' : 'bg-white hover:bg-neo-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group bg-white border-2 border-neo-black p-3 shadow-hard hover:shadow-hard-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-video w-full overflow-hidden border-2 border-neo-black mb-4">
                  <img 
                    src={project.coverUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="flex items-center gap-2 bg-white border border-neo-black px-2 py-1 text-xs font-bold uppercase shadow-sm">
                      <CategoryIcon category={project.category} />
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold font-sans leading-none">{project.title}</h3>
                  <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <p className="text-sm font-mono text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold bg-neo-bg px-2 py-1 border border-neo-black">
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};