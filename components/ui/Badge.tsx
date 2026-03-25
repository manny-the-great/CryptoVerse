import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Badge({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border border-neutral-700/50 bg-neutral-900/50 px-3 py-1 text-xs font-semibold text-secondary backdrop-blur-sm',
        className
      )}
      {...props}
    />
  );
}
