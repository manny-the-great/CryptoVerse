import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 overflow-hidden',
          {
            'bg-primary text-background hover:opacity-90 hover:shadow-lg': variant === 'primary',
            'bg-surface border border-border text-primary hover:bg-neutral-900 transition-colors': variant === 'secondary',
            'border border-border bg-transparent hover:bg-neutral-900 text-primary transition-colors': variant === 'outline',
            'hover:bg-neutral-900 text-primary transition-colors': variant === 'ghost',
            'h-9 px-4 py-2': size === 'sm',
            'h-11 px-6': size === 'md',
            'h-12 px-8 text-base': size === 'lg',
            'h-9 w-9': size === 'icon',
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
