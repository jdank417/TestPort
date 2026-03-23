'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Brain, TrendingUp, Scan, Network, Server } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  impact: string;
  technologies: string[];
  icon: React.ReactNode;
  gradient: string;
  year: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 'sailing-ai-assistant',
    title: 'Fine-Tuning an AI Sailing Rules Assistant',
    description: 'Fine-tuned a Flan-T5 model for answering questions about sailing rules and interpreting racing scenarios. Trained on JSON data containing instructions, optional context, and expected outputs to create an assistant that can answer questions about sailing rules.',
    impact: 'Created specialized AI assistant for sailing community, demonstrating expertise in fine-tuning large language models for domain-specific applications',
    technologies: ['Flan-T5', 'Fine-tuning', 'NLP', 'Python', 'Machine Learning'],
    icon: <Brain className="w-8 h-8" />,
    gradient: 'from-blue-500 to-purple-600',
    year: '2024',
    category: 'AI Systems'
  },
  {
    id: 'wsl2-server-infrastructure',
    title: 'WSL2 Server Infrastructure with GPU Acceleration',
    description: 'Systematic transformation of an HP ZBook Fury laptop into a robust, always-on home server infrastructure. Solved critical challenges including WSL2\'s idle shutdown behavior, secure SSH-over-Tailscale connectivity, and GPU passthrough configuration for CUDA workloads.',
    impact: 'Built enterprise-grade home lab infrastructure enabling GPU-accelerated ML workloads with 99.9% uptime and secure remote access',
    technologies: ['WSL2', 'Windows', 'Ubuntu', 'CUDA', 'Tailscale', 'SSH'],
    icon: <Server className="w-8 h-8" />,
    gradient: 'from-indigo-500 to-purple-600',
    year: '2024',
    category: 'Infrastructure'
  },
  {
    id: 'bullbar-stock-ticker',
    title: 'BullBar — Real-Time Stock Ticker',
    description: 'Lightweight SwiftUI macOS utility that floats above all windows, displaying a fully customizable, always-on-top strip of real-time stock quotes via a secure Cloudflare Workers proxy to Financial Modeling Prep\'s batch API—no user credentials required.',
    impact: 'Published macOS app with 1000+ downloads, demonstrating native app development and API integration skills',
    technologies: ['Swift', 'macOS', 'CloudFlare', 'SwiftUI', 'Financial APIs'],
    icon: <TrendingUp className="w-8 h-8" />,
    gradient: 'from-green-500 to-emerald-600',
    year: '2024',
    category: 'Native Apps'
  },
  {
    id: 'bartender-gpt',
    title: 'Bartender-GPT',
    description: 'iOS app written in Swift and optimized for iPhone—with functionality also on iPad. This ongoing project is published on the App Store and continuously receives feature updates.',
    impact: 'Live iOS app on App Store with active user base, showcasing mobile development and product management capabilities',
    technologies: ['Swift', 'iOS', 'App Store', 'SwiftUI', 'Mobile Development'],
    icon: <Brain className="w-8 h-8" />,
    gradient: 'from-orange-500 to-red-600',
    year: '2024',
    category: 'Mobile Apps'
  },
  {
    id: 'stock-market-predictor',
    title: 'Deep Learning Stock Market Predictor',
    description: 'Implements a Convolutional Neural Network (CNN) and Long Short-Term Memory (LSTM) model to predict stock prices. Uses historical stock data with technical indicators to forecast future prices, demonstrating expertise in quantitative analysis and algorithmic trading strategies.',
    impact: 'Advanced ML system for financial prediction, directly applicable to private market investment platforms like Fidelity Private Shares',
    technologies: ['Python', 'LSTM', 'CNN', 'TensorFlow', 'Financial Modeling'],
    icon: <TrendingUp className="w-8 h-8" />,
    gradient: 'from-cyan-500 to-blue-600',
    year: '2023',
    category: 'FinTech ML'
  },
  {
    id: 'grocery-barcode-scanner',
    title: 'GroceryBarcodeScanner',
    description: 'A scalable microservice for scanning and categorizing thousands of retail products with machine learning integration. Built as a Flask web application with real-time barcode scanning capabilities.',
    impact: 'Production-ready microservice handling thousands of product lookups, demonstrating full-stack development and scalability design',
    technologies: ['Python', 'Flask', 'SQL', 'Machine Learning', 'Microservices'],
    icon: <Scan className="w-8 h-8" />,
    gradient: 'from-purple-500 to-pink-600',
    year: '2023',
    category: 'Web Applications'
  }
];

export default function Work() {
  return (
    <section id="work" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Selected Work
          </h2>
          <p className="font-body text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Building systems that solve real problems and create meaningful impact through thoughtful engineering and innovative design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50">
                {/* Project Icon & Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-400 font-medium">{project.category}</span>
                    <div className="text-sm text-gray-500">{project.year}</div>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Impact Statement */}
                <div className="bg-gray-800 rounded-lg p-4 mb-6 border-l-4 border-green-500">
                  <p className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-1">
                    Impact
                  </p>
                  <p className="text-white font-medium">
                    {project.impact}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <p className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wider">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-green-500 hover:text-green-400 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={`/projects/${project.id}`}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button className="flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-green-500 text-gray-300 hover:text-green-400 font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                </div>

                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 text-lg mb-8">
            Interested in seeing more detailed case studies?
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-green-500 hover:bg-green-500 text-green-500 hover:text-black font-semibold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}