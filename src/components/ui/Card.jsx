'use client';

import { motion } from 'framer-motion';

export default function Card({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md',
  ...props 
}) {
  
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    none: 'p-0'
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`
        bg-white 
        rounded-xl 
        shadow-sm 
        border border-[var(--color-neutral-200)]
        ${hover ? 'hover:shadow-lg transition-shadow duration-200' : ''}
        ${paddings[padding]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}