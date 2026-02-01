'use client';

import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon,
  iconPosition = 'left',
  isLoading = false,
  disabled = false,
  type = 'button',
  onClick,
  fullWidth = false,
  ...props 
}) {
  
  const baseStyles = "font-medium rounded-lg transition-intercom inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-sm hover:shadow-md focus:ring-[var(--color-primary)]",
    secondary: "bg-[var(--color-secondary)] text-[var(--color-neutral-900)] hover:bg-[var(--color-secondary-dark)] shadow-sm hover:shadow-md focus:ring-[var(--color-secondary)]",
    outline: "border-2 border-[var(--color-neutral-300)] text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-50)] hover:border-[var(--color-neutral-400)] focus:ring-[var(--color-neutral-300)]",
    ghost: "text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)] focus:ring-[var(--color-neutral-300)]",
    danger: "bg-[var(--color-error)] text-white hover:bg-red-600 shadow-sm hover:shadow-md focus:ring-[var(--color-error)]"
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-6 py-3 text-base font-semibold"
  };
  
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Chargement...
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon size={18} strokeWidth={2.5} />}
          {children}
          {Icon && iconPosition === 'right' && <Icon size={18} strokeWidth={2.5} />}
        </>
      )}
    </motion.button>
  );
}