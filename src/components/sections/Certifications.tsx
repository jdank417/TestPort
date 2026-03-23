'use client';

import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle } from 'lucide-react';

const certifications = [
  {
    id: 'jamf-protect',
    title: 'Jamf Certified Associate',
    subtitle: 'Jamf Protect',
    issuer: 'Jamf',
    date: '2025',
    description: 'Professional certification validating expertise in Jamf Protect endpoint security solutions, threat detection, and enterprise security management.',
    icon: <Shield className="w-8 h-8" />,
    gradient: 'from-blue-500 to-indigo-600',
    credlyId: '992f9097-6f64-4d9d-8e86-1091323b05ae'
  },
  {
    id: 'jamf-pro',
    title: 'Jamf Certified Associate',
    subtitle: 'Jamf Pro',
    issuer: 'Jamf',
    date: '2025',
    description: 'Professional certification demonstrating proficiency in Jamf Pro mobile device management, macOS administration, and enterprise endpoint management.',
    icon: <Award className="w-8 h-8" />,
    gradient: 'from-green-500 to-emerald-600',
    credlyId: 'e5fd2530-7870-4762-9f30-2c537853b165'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(30deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)`,
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
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Certifications
          </h2>
          <p className="font-body text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Professional certifications and credentials that validate technical expertise and knowledge in enterprise systems management.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50">
                {/* Certification Icon & Date */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${cert.gradient} text-white`}>
                    {cert.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-400 font-medium">{cert.issuer}</span>
                    <div className="text-sm text-gray-500">{cert.date}</div>
                  </div>
                </div>

                {/* Certification Title */}
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-xl text-gray-300 font-semibold">
                    {cert.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Verification Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                    Verified Credential
                  </span>
                </div>

                {/* Action Button */}
                <div className="flex gap-4">
                  <a
                    href={`https://www.credly.com/badges/${cert.credlyId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                  >
                    View Credential
                    <Award className="w-4 h-4" />
                  </a>
                </div>

                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg">
            Credentials verified through Credly digital badge platform
          </p>
        </motion.div>
      </div>
    </section>
  );
}