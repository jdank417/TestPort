'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp, Users, Server, Code2 } from 'lucide-react';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'current' | 'past';
  description: string;
  achievements: string[];
  technologies?: string[];
  icon: React.ReactNode;
  gradient: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 'fidelity',
    title: 'Full Stack Software Engineer',
    company: 'Fidelity Investments',
    location: 'Merrimack, NH',
    period: 'Apr 2026 - Present',
    type: 'current',
    description: 'Building full-stack applications for the Fidelity Private Shares platform, developing scalable solutions for private market investments serving institutional and high-net-worth clients.',
    achievements: [
      'Developing scalable solutions for private market investments',
      'Building full-stack applications using modern web technologies',
      'Enhancing user experience for private equity and venture capital transactions',
      'Collaborating with cross-functional teams to deliver high-quality financial technology solutions'
    ],
    technologies: ['React', 'Node.js', 'Java', 'Spring Boot', 'Financial Technology', 'Private Markets'],
    icon: <Code2 className="w-6 h-6" />,
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 'harvard-it-recent',
    title: 'Endpoint Systems Engineer Intern',
    company: 'Harvard University',
    location: 'Cambridge, MA',
    period: 'Aug 2025 - Mar 2026',
    type: 'past',
    description: 'Continued advanced work on Harvard University Endpoint Solutions team, focusing on enterprise-scale system administration and automation.',
    achievements: [
      'Continued development of enterprise endpoint management solutions',
      'Advanced shell scripting and automation projects',
      'Agile project management for IT infrastructure initiatives',
      'Jamf and SCCM system administration at university scale'
    ],
    technologies: ['Shell Scripting', 'Agile Project Management', 'Jamf', 'SCCM', 'Enterprise IT'],
    icon: <Server className="w-6 h-6" />,
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'mouthwatchers',
    title: 'IT Services Consultant',
    company: 'MouthWatchers',
    location: 'Beverly, MA',
    period: 'Jun 2025 - Aug 2025',
    type: 'past',
    description: 'Contracted to audit all technical aspects of the company and engineer a complete migration from Network Solutions to Google for all company email services and hosting.',
    achievements: [
      'Conducted comprehensive technical audit of company infrastructure',
      'Engineered seamless migration with only 15 minutes of downtime',
      'Migrated email services and hosting to Google platform',
      'Provided post-launch support and optimization'
    ],
    technologies: ['DevOps', 'Google Workspace', 'Email Migration', 'Infrastructure Audit'],
    icon: <Server className="w-6 h-6" />,
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'wicked-pickleball',
    title: 'Technical Program and Operations Manager',
    company: 'Wicked Pickleball',
    location: 'Boston, MA',
    period: 'May 2025 - Aug 2025',
    type: 'past',
    description: 'Managed team of sales and marketing specialists, oversaw contractor relationships, and served as lead engineer for testing and development of MVPs for new platforms.',
    achievements: [
      'Managed cross-functional team of sales and marketing specialists',
      'Oversaw contractor relationships and project delivery',
      'Led engineering for MVP development and testing',
      'Drove business initiatives through technical leadership'
    ],
    technologies: ['Agile Project Management', 'Team Leadership', 'MVP Development', 'Cross-functional Management'],
    icon: <Users className="w-6 h-6" />,
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    id: 'harvard-it-initial',
    title: 'Endpoint Systems Engineer Intern',
    company: 'Harvard University',
    location: 'Cambridge, MA',
    period: 'Jan 2025 - Apr 2025',
    type: 'past',
    description: 'Designed and implemented custom monitoring applications, developed Mac device renaming solution used across Harvard departments, and rewrote comprehensive imaging documentation.',
    achievements: [
      'Designed custom monitoring applications for multiple platforms',
      'Developed Mac device renaming solution deployed university-wide',
      'Rewrote comprehensive imaging documentation improving technician onboarding',
      'Automated workflows with PowerShell and Unix scripting',
      'Earned Jamf certifications and contributed to cloud printing infrastructure'
    ],
    technologies: ['Shell Scripting', 'Linux', 'Jamf', 'System Administration', 'Jira Align', 'PowerShell'],
    icon: <Server className="w-6 h-6" />,
    gradient: 'from-indigo-500 to-purple-600'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
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
            Experience
          </h2>
          <p className="font-body text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A journey of building impactful systems, leading teams, and creating meaningful change through technology and leadership.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 opacity-30" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative flex items-start gap-8"
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${experience.gradient} flex items-center justify-center text-white shadow-lg`}>
                    {experience.icon}
                  </div>
                  {experience.type === 'current' && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-black/50">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-lg text-green-400 font-semibold">
                        {experience.company}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end text-sm text-gray-400 mt-2 sm:mt-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  {experience.technologies && (
                    <div>
                      <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-green-500 hover:text-green-400 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
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
            Want to learn more about my professional journey?
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-black font-semibold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
            Download Resume
            <Calendar className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}