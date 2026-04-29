import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { FiGithub as Github } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A modern, high-performance e-commerce platform built with Next.js and Stripe integration. Features a customized headless CMS, lightning-fast search, and an intuitive admin dashboard.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe', 'Sanity.io'],
    live: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Fintech Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'An interactive financial dashboard providing real-time analytics, predictive modeling, and customizable reporting. Designed with a focus on data visualization clarity.',
    tech: ['React', 'Framer Motion', 'Recharts', 'Tailwind'],
    live: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'AI Content Generator',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A SaaS platform utilizing OpenAI API to generate marketing copy, blog posts, and social media content. Includes rich text editing and collaboration tools.',
    tech: ['Vue 3', 'Node.js', 'Express', 'OpenAI', 'MongoDB'],
    live: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Social Network App',
    category: 'Mobile First',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A mobile-first social networking application focusing on connecting local communities. Features real-time messaging, event planning, and location-based discovery.',
    tech: ['React Native', 'Firebase', 'Redux', 'Styled Components'],
    live: '#',
    github: '#'
  }
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected <span className="text-gradient">Work</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
          <p className="text-gray-400 max-w-md mt-6 md:mt-0">
            A showcase of my recent projects, highlighting my expertise in crafting scalable and visually stunning web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              layoutId={`card-${project.id}`}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer rounded-3xl overflow-hidden glass border border-white/5 relative"
            >
              <div className="h-64 sm:h-80 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <motion.img 
                  layoutId={`image-${project.id}`}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Hover overlay content */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm">
                  <span className="px-6 py-3 rounded-full bg-white text-black font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Case Study
                  </span>
                </div>
              </div>
              
              <motion.div layoutId={`content-${project.id}`} className="p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-500">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedId(null)}
            >
              {projects.map(project => project.id === selectedId && (
                <motion.div
                  layoutId={`card-${project.id}`}
                  key={`modal-${project.id}`}
                  className="w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
                    onClick={() => setSelectedId(null)}
                  >
                    <X size={24} />
                  </button>

                  <div className="h-64 sm:h-96 relative">
                    <motion.img 
                      layoutId={`image-${project.id}`}
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>

                  <motion.div layoutId={`content-${project.id}`} className="p-8 sm:p-12">
                    <span className="text-sm font-bold uppercase tracking-wider text-primary mb-2 block">{project.category}</span>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">{project.title}</h2>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                      <a href={project.live} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold transition-colors">
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                      <a href={project.github} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors">
                        <Github size={18} />
                        Source Code
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
