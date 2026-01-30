export default function Badge({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '' 
}) {
  
  const variants = {
    default: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)]',
    primary: 'bg-blue-100 text-[var(--color-primary)]',
    success: 'bg-green-100 text-[var(--color-success)]',
    warning: 'bg-yellow-100 text-[var(--color-warning)]',
    error: 'bg-red-100 text-[var(--color-error)]',
    info: 'bg-blue-50 text-[var(--color-info)]'
  };
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base'
  };
  
  return (
    <span className={`
      inline-flex items-center 
      font-medium 
      rounded-full
      ${variants[variant]}
      ${sizes[size]}
      ${className}
    `}>
      {children}
    </span>
  );
}