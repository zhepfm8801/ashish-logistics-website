import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((
  {
    variant = 'primary',
    size = 'md',
    children,
    isLoading = false,
    icon,
    iconPosition = 'left',
    className,
    disabled,
    ...props
  },
  ref
) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap';
  
  const variants = {
    primary: 'bg-accent text-white hover:bg-amber-600 active:scale-95 shadow-lg hover:shadow-xl',
    secondary: 'bg-primary-900 text-white hover:bg-primary-800 active:scale-95 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white active:scale-95',
    ghost: 'text-accent hover:bg-accent/10 active:scale-95',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledStyles = disabled || isLoading ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        disabledStyles,
        className
      )}
      {...props}
    >
      {isLoading ? (
        <>
          <div className="animate-spin">⏳</div>
          {children}
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && icon}
          {children}
          {icon && iconPosition === 'right' && icon}
        </>
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
