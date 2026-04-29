import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Frontend Engineer',
    company: 'TechVision Inc.',
    period: '2022 - Present',
    description: 'Lead the frontend architecture for the flagship enterprise SaaS product. Improved application performance by 40% and implemented a comprehensive design system used across 5 internal teams.',
    skills: ['React', 'TypeScript', 'Tailwind', 'Redux Toolkit']
  },
  {
    role: 'UI/UX Designer & Developer',
    company: 'Creative Digital Agency',
    period: '2019 - 2022',
    description: 'Designed and developed bespoke web applications for high-profile clients. Bridge the gap between design and engineering, ensuring pixel-perfect implementation of complex Figma designs.',
    skills: ['Vue.js', 'Figma', 'Framer Motion', 'SASS']
  },
  {
    role: 'Frontend Web Developer',
    company: 'StartupHub',
    period: '2017 - 2019',
    description: 'Built MVP platforms for early-stage startups. Rapidly prototyped ideas and iterated based on user feedback, establishing strong foundations for scalable web architecture.',
    skills: ['JavaScript', 'React', 'CSS3', 'HTML5']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative bg-black/20">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Timeline Dot */}
                <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10"></div>

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass-card p-8 rounded-3xl group hover:border-primary/50 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                      <span className="flex items-center text-sm text-primary bg-primary/10 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-400 mb-4 font-medium">
                      <Briefcase size={16} className="mr-2" />
                      {exp.company}
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <span key={skill} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
