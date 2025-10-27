'use client';

import { cn } from '@/lib/utils';

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
}

export const LoadingSpinner = ({
  size = 'md',
  className = '',
  text,
}: LoadingSpinnerProps) => {
  const sizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  return (
    <div className={cn('flex flex-col items-center justify-center gap-2', className)}>
      <div
        className={cn(
          'animate-spin rounded-full border-4 border-gray-200 border-t-blue-600',
          sizeStyles[size]
        )}
        role="status"
        aria-label="Loading"
      />
      {text && <p className="text-sm text-gray-600">{text}</p>}
    </div>
  );
};
