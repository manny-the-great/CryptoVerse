import React, { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-xl border border-border bg-surface/60 shadow-md backdrop-blur-md',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

export { Card };
