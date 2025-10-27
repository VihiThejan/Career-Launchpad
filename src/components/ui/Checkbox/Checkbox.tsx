'use client';

import { InputHTMLAttributes, forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode;
  error?: string;
  helperText?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, helperText, className = '', id, disabled, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;

    return (
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className={cn(
              'w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
              error && 'border-red-500 focus:ring-red-500',
              className
            )}
            disabled={disabled}
            {...props}
          />
        </div>

        {(label || helperText || error) && (
          <div className="ml-3 text-sm">
            {label && (
              <label
                htmlFor={checkboxId}
                className={cn(
                  'font-medium',
                  disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 cursor-pointer'
                )}
              >
                {label}
              </label>
            )}

            {error && <p className="text-red-600 mt-1">{error}</p>}

            {helperText && !error && (
              <p className="text-gray-500 mt-1">{helperText}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
