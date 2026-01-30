'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function Input({
  label,
  type = 'text',
  placeholder,
  icon: Icon,
  error,
  value,
  onChange,
  required = false,
  className = '',
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;
  
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-1.5">
          {label} {required && <span className="text-[var(--color-error)]">*</span>}
        </label>
      )}
      
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-neutral-500)]">
            <Icon size={20} />
          </div>
        )}
        
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-2.5 
            ${Icon ? 'pl-11' : 'pl-4'} 
            ${isPassword ? 'pr-11' : 'pr-4'}
            border-2 rounded-lg
            bg-white
            text-[var(--color-neutral-900)]
            placeholder:text-[var(--color-neutral-400)]
            transition-all duration-200
            ${error 
              ? 'border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-2 focus:ring-red-200' 
              : isFocused 
                ? 'border-[var(--color-primary)] ring-2 ring-blue-200' 
                : 'border-[var(--color-neutral-200)] hover:border-[var(--color-neutral-300)]'
            }
            outline-none
            ${className}
          `}
          {...props}
        />
        
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-neutral-500)] hover:text-[var(--color-neutral-700)] transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      
      {error && (
        <p className="mt-1.5 text-sm text-[var(--color-error)] flex items-center gap-1">
          <span className="font-medium">⚠</span> {error}
        </p>
      )}
    </div>
  );
}