'use client';

import { motion } from 'framer-motion';

export default function Card({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md',
  variant = 'default',
  ...props 
}) {
  
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const variants = {
    default: 'bg-white border border-[var(--color-neutral-200)]',
    elevated: 'bg-white shadow-intercom',
    bordered: 'bg-white border-2 border-[var(--color-neutral-200)]',
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      whileHover={hover ? { 
        y: -2,
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.06)',
        transition: { duration: 0.2 }
      } : {}}
      className={`
        rounded-xl
        transition-intercom
        ${variants[variant]}
        ${paddings[padding]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}