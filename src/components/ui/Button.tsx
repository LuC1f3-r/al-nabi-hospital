import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  loading = false,
  className,
  disabled,
  ...props 
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-300 ease-out transform
    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    active:scale-95 hover:scale-105
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
      hover:from-pink-500 hover:via-purple-500 hover:to-blue-500
      text-white shadow-lg hover:shadow-xl
      before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r 
      before:from-blue-600 before:via-purple-600 before:to-pink-600 
      before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-100
    `,
    secondary: `
      glass glass-hover text-white border-white/20
    `,
    outline: `
      border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white
      hover:shadow-lg hover:shadow-blue-400/25
    `,
    ghost: `
      text-white hover:bg-white/10 hover:backdrop-blur-sm
    `
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;