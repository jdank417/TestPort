'use client';

import { motion } from 'framer-motion';
import { Quote, Star, Award } from 'lucide-react';

const recommendations = [
  {
    id: 'kurt-levitan',
    text: "Jason worked with our Endpoint Systems Management team as a coop. He quickly integrated himself into the team and found several ways to add value. He helped solve a long running problem of automating and standardizing the names for Mac computers. He then switched platforms and coded a solution for a Windows issue. Jason is a strong team player, an inventive problem solver, and an excellent programmer. I am confident that he will add value to any organization he works for.",
    author: "Kurt Levitan",
    title: "Microsoft Endpoint Architect & Team Lead",
    company: "Harvard University",
    icon: <Quote className="w-6 h-6" />,
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'academic-recognition',
    text: "A computer science major with minors in data science, business analytics, applied mathematics, and computer networking, Jason Dank's pursuit of a wide variety of academic knowledge has also led him to be actively engaged in various organizations on campus. Jason serves on the Wentworth Student Government (WSG) as the Executive Vice President and Chair to the Board of Directors. He represents the student body serving on the universities' Information Technology Steering Committee (ITSC) and the School of Computing and Data Sciences (SCDS) AI task force. He is also the president and captain of the Wentworth Sailing Team, and during the summer, he competes in large yacht racing in Marblehead, MA. Jason is passionate about developing resources for artificial intelligence, specifically in fine-tuning AI modeling and application development. This has led to creating several active AI applications while at Wentworth, including a full-stack web application that enables customers to get real-time price data on items available at the campus grocery store via their cell phones. He also has two others that he has published in the Apple App store. Without the generous scholarship support he has received, Jason believes that the success he has achieved attending Wentworth would not have been possible.",
    author: "Academic Recognition",
    title: "Wentworth Institute of Technology",
    company: "Official Academic Profile",
    icon: <Award className="w-6 h-6" />,
    gradient: 'from-green-500 to-emerald-600'
  }
];

export default function Recommendations() {
  return (
    <section id="recommendations" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
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
            Recommendations
          </h2>
          <p className="font-body text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Testimonials from colleagues and academic recognition highlighting technical expertise, leadership, and professional impact.
          </p>
        </motion.div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {recommendations.map((rec, index) => (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50 h-full">
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${rec.gradient} text-white`}>
                    {rec.icon}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                  "{rec.text}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-gray-800 pt-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${rec.gradient} flex items-center justify-center text-white font-bold`}>
                      {rec.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-300">
                        {rec.author}
                      </h4>
                      <p className="text-gray-400 font-medium">
                        {rec.title}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {rec.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${rec.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
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
            Interested in working together or learning more about my experience?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-black font-semibold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
          >
            Get In Touch
            <Quote className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}