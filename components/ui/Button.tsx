import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-primary text-background hover:bg-neutral-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]': variant === 'primary',
            'bg-surface border border-neutral-800 text-primary hover:bg-neutral-800': variant === 'secondary',
            'border border-neutral-700 bg-neutral-900/50 hover:bg-neutral-800 text-primary': variant === 'outline',
            'hover:bg-neutral-900 text-primary': variant === 'ghost',
            'h-9 px-4 py-2': size === 'sm',
            'h-11 px-6': size === 'md',
            'h-12 px-8 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
