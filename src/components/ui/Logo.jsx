export default function Logo({ size = 'md', showText = true, className = '' }) {
  
  const sizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16'
  };
  
  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${sizes[size]} aspect-square bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-lg flex items-center justify-center shadow-lg`}>
        <span className="text-white font-bold text-lg">P</span>
      </div>
      
      {showText && (
        <span className={`font-bold ${textSizes[size]} bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] bg-clip-text text-transparent`}>
          PulsAI
        </span>
      )}
    </div>
  );
}