import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../constants/data';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../../hooks/useScrollAnimation';
import Card from '../ui/Card';

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className="text-2xl mr-2">{skill.icon}</span>
          <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, controls] = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState(Object.keys(skills)[0]);

  const categories = Object.keys(skills);

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20">
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
              <span className="text-gray-900 dark:text-white">Technical </span>
              <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              Technologies and tools I use to build scalable, secure, and efficient systems
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center mb-8 sm:mb-12 px-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 m-1 sm:m-2 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={fadeInUp}>
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                {activeCategory}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {skills[activeCategory].map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Skills Overview */}
          <motion.div variants={fadeInUp} className="mt-12">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="text-3xl mb-4">☁️</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Cloud Native</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  AWS services, containerization, and microservices architecture
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-3xl mb-4">🔄</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">CI/CD</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Automated deployment pipelines with GitHub Actions and Jenkins
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-3xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Infrastructure</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Infrastructure as Code with Terraform and configuration management
                </p>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;