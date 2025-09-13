import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { personalInfo, education, certifications } from '../../constants/data';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../../hooks/useScrollAnimation';
import Card from '../ui/Card';

const About = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
              <span className="text-gray-900 dark:text-white">About </span>
              <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              Passionate about building scalable infrastructure and automating complex systems
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Personal Info */}
            <motion.div variants={fadeInUp}>
              <Card className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
                  My Journey
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  I'm a passionate DevOps engineer and cloud enthusiast with a strong foundation in backend development. 
                  My journey began with a curiosity about how systems work at scale, which led me to dive deep into 
                  cloud technologies, infrastructure automation, and modern DevOps practices.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  I specialize in building robust, scalable systems using cutting-edge technologies like Go, AWS, 
                  Docker, and Kubernetes. My approach combines technical excellence with a focus on automation, 
                  security, and performance optimization.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects Deployed</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Innovation</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Driven</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Education & Certifications */}
            <motion.div variants={fadeInUp} className="space-y-6">
              {/* Education */}
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-blue-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                </div>
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-200 dark:border-blue-800 pl-4 pb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-blue-600 dark:text-blue-400">{edu.field}</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <Calendar size={14} className="mr-1" />
                      {edu.period} • CGPA: {edu.cgpa}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{edu.description}</p>
                  </div>
                ))}
              </Card>

              {/* Certifications */}
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="text-purple-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Certifications</h3>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {cert.issuer} • {cert.year}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Community Involvement */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Community</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">daily.dev Top Reader</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">AUR Package Maintainer</span>
                    <span className="font-semibold text-purple-600 dark:text-purple-400">pom</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;