import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: 'Failed to connect to the server. Please try again.' });
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0 mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Email</h4>
                      <a href="mailto:hello@johndoe.com" className="text-lg hover:text-primary transition-colors">hello@johndoe.com</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0 mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Phone</h4>
                      <p className="text-lg">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0 mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Location</h4>
                      <p className="text-lg">San Francisco, CA<br/>Available Remote</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 font-medium">Looking forward to hearing from you!</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 sm:p-10 rounded-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {status.error && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/50 text-red-400 text-sm">
                  {status.error}
                </div>
              )}

              {status.success && (
                <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/50 text-green-400 text-sm">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status.submitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send size={20} />
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
