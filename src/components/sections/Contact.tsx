'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowUpRight, Github } from 'lucide-react';

export default function Contact() {

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-hero text-display font-black text-white mb-8 leading-tight tracking-tight">
            LET'S BUILD SOMETHING
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 font-display italic">
              Meaningful
            </span>
          </h2>
          <p className="font-body text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to create impactful technology together? I'm always interested in discussing new opportunities, innovative projects, and meaningful collaborations.
          </p>
        </motion.div>

        {/* Contact Methods - Centered Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h3 className="font-display text-subhead font-bold text-white mb-6">Get In Touch</h3>
            <p className="font-editorial text-large text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Ready to collaborate, discuss opportunities, or just connect? Reach out through any of these channels.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.a
              href="mailto:jasondank@yahoo.com"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-6 p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 group text-center"
            >
              <div className="p-4 bg-green-500/20 rounded-2xl text-green-400 group-hover:bg-green-500/30 transition-colors duration-300">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-white font-heading text-xl font-semibold mb-2">Email</h4>
                <p className="text-gray-400 group-hover:text-green-400 transition-colors duration-300 font-editorial">
                  jasondank@yahoo.com
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/jason-dank"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-6 p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group text-center"
            >
              <div className="p-4 bg-blue-500/20 rounded-2xl text-blue-400 group-hover:bg-blue-500/30 transition-colors duration-300">
                <Linkedin className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-white font-heading text-xl font-semibold mb-2">LinkedIn</h4>
                <p className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300 font-editorial">
                  Professional Network
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
            </motion.a>

            <motion.a
              href="https://github.com/jdank417"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-6 p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group text-center"
            >
              <div className="p-4 bg-purple-500/20 rounded-2xl text-purple-400 group-hover:bg-purple-500/30 transition-colors duration-300">
                <Github className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-white font-heading text-xl font-semibold mb-2">GitHub</h4>
                <p className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300 font-editorial">
                  Code & Projects
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
            </motion.a>
          </div>

          {/* Quick Info */}
          <div className="flex justify-center">
            <div className="flex items-center gap-12 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-center">
                <h4 className="text-white font-heading font-semibold mb-1">Location</h4>
                <p className="text-gray-400 font-editorial">Boston</p>
              </div>
              <div className="w-px h-8 bg-gray-700"></div>
              <div className="text-center">
                <h4 className="text-white font-heading font-semibold mb-1">Status</h4>
                <p className="text-blue-400 font-editorial">Employed at Fidelity</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 border-t border-gray-800"
        >
          <p className="text-gray-400 mb-4">
            © 2026 Jason Dank. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-gray-500 text-sm">
            Designed and developed with attention to detail and a focus on user experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}