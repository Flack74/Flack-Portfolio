import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, Server, Cloud } from 'lucide-react';
import { projects } from '../../constants/data';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../../hooks/useScrollAnimation';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Backend/DevOps': return <Server size={20} />;
      case 'Full-Stack/DevOps': return <Code size={20} />;
      case 'Full-Stack': return <Code size={20} />;
      case 'DevOps/Infrastructure': return <Cloud size={20} />;
      default: return <Code size={20} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 flex flex-col" style={{ height: 'fit-content' }}>
        {/* Project Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            {getCategoryIcon(project.category)}
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{project.category}</span>
          </div>
          <div className="flex space-x-2">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
            </motion.a>
            {project.liveUrl !== '#' && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Project Title & Description */}
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {isExpanded ? project.longDescription : project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, isExpanded ? project.technologies.length : 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
            >
              {tech}
            </span>
          ))}
          {!isExpanded && project.technologies.length > 4 && (
            <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Highlights */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4"
          >
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              {project.features.slice(0, 4).map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Deployment: </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{project.deployment}</span>
            </div>
          </motion.div>
        )}

        {/* Expand Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-auto"
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
        </Button>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, controls] = useScrollAnimation();
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
              <span className="text-gray-900 dark:text-white">Featured </span>
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              A showcase of my work in DevOps, cloud infrastructure, and full-stack development
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center mb-8 sm:mb-12 px-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 sm:px-6 py-2 sm:py-3 m-1 sm:m-2 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                  filter === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA Section */}
          <motion.div variants={fadeInUp} className="text-center mt-16">
            <Card className="p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Want to see more?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Check out my GitHub for more projects and contributions to open source
              </p>
              <Button
                href="https://github.com/Flack74"
                target="_blank"
                variant="primary"
                size="lg"
              >
                <Github className="mr-2" size={20} />
                View GitHub Profile
              </Button>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;