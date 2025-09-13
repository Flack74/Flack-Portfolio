import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  glass = false,
  ...props 
}) => {
  const baseClasses = 'rounded-xl border transition-all duration-300';
  const glassClasses = glass ? 'glass-effect' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700';
  const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1' : '';
  
  const classes = `${baseClasses} ${glassClasses} ${hoverClasses} ${className}`;
  
  return (
    <motion.div
      className={classes}
      whileHover={hover ? { y: -4, scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;