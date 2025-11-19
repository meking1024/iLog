import React from 'react';
import { BlogPost } from '../types';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Why I switched from VS Code to Neovim',
    excerpt: 'A journey into the terminal, lua config files, and unparalleled speed.',
    date: 'Oct 12, 2023',
    tags: ['Productivity', 'Tools'],
    readTime: '5 min'
  },
  {
    id: '2',
    title: 'Understanding Shaders in WebGL',
    excerpt: 'Breaking down the vertex and fragment shaders for absolute beginners.',
    date: 'Sep 28, 2023',
    tags: ['WebGL', 'Graphics', 'Tutorial'],
    readTime: '8 min'
  },
  {
    id: '3',
    title: 'The Aesthetic of Brutalism in Web Design',
    excerpt: 'Why ugly is the new beautiful, and how to implement it correctly.',
    date: 'Aug 15, 2023',
    tags: ['Design', 'CSS'],
    readTime: '4 min'
  }
];

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 px-4 bg-neo-yellow border-t-2 border-neo-black pattern-grid">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-neo-black text-white flex items-center justify-center font-black text-xl border-2 border-white shadow-hard">
                02
            </div>
            <h2 className="text-5xl font-black uppercase">Thought Stream</h2>
        </div>

        <div className="flex flex-col gap-6">
          {posts.map((post, index) => (
            <motion.article 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              key={post.id}
              className="group relative bg-white border-2 border-neo-black p-6 shadow-hard transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                <div className="flex-1">
                   <div className="flex gap-3 items-center mb-2 font-mono text-xs text-gray-500">
                      <span>{post.date}</span>
                      <span>//</span>
                      <span>{post.readTime}</span>
                   </div>
                   <h3 className="text-3xl font-bold mb-2 group-hover:text-neo-purple transition-colors">{post.title}</h3>
                   <p className="text-lg text-gray-800 mb-4 font-sans">{post.excerpt}</p>
                   
                   <div className="flex gap-2">
                      {post.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 border border-neo-black text-xs font-bold uppercase">
                              {tag}
                          </span>
                      ))}
                   </div>
                </div>

                <div className="md:self-center">
                    <button className="bg-neo-black text-white p-4 rounded-full group-hover:rotate-45 transition-transform duration-300">
                        <ArrowRight />
                    </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};