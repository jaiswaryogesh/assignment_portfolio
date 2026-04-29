import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Palette, Zap, MonitorSmartphone } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', icon: <Code2 size={24} />, desc: 'React, Vue, Next.js, TypeScript' },
  { name: 'UI/UX Design', icon: <Palette size={24} />, desc: 'Figma, Tailwind, Framer Motion' },
  { name: 'Performance Optimization', icon: <Zap size={24} />, desc: 'Lighthouse 100, Web Vitals' },
  { name: 'Responsive Design', icon: <MonitorSmartphone size={24} />, desc: 'Mobile-first, Adaptive Layouts' },
];

const techStack = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'MongoDB', 'GraphQL', 'Figma'];

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div style={{ y, opacity }} className="max-w-4xl mx-auto">
          
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Designing with <span className="text-gradient">Purpose</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-8"></div>
            <p className="text-lg text-gray-400 leading-relaxed">
              I blend creative design with technical excellence to build web experiences that leave a lasting impression. 
              My approach focuses on clean code, intuitive user interfaces, and smooth animations that elevate the overall user journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-400 text-sm">{skill.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="glass p-8 rounded-3xl text-center">
            <h3 className="text-xl font-semibold mb-6">Core Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 cursor-default transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
