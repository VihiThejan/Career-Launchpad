'use client';

import { TextareaHTMLAttributes, forwardRef, useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  maxLength?: number;
  showCount?: boolean;
  autoResize?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      maxLength,
      showCount = false,
      autoResize = false,
      className = '',
      id,
      disabled,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substring(2, 9)}`;
    const internalRef = useRef<HTMLTextAreaElement>(null);
    const [charCount, setCharCount] = useState(0);

    // Handle auto-resize
    useEffect(() => {
      if (autoResize && internalRef.current) {
        internalRef.current.style.height = 'auto';
        internalRef.current.style.height = `${internalRef.current.scrollHeight}px`;
      }
    }, [value, autoResize]);

    // Handle character count
    useEffect(() => {
      if (typeof value === 'string') {
        setCharCount(value.length);
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      onChange?.(e);
    };

    const baseStyles = 'block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed resize-vertical';

    const stateStyles = error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500';

    return (
      <div className={cn(fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref || internalRef}
          id={textareaId}
          className={cn(
            baseStyles,
            stateStyles,
            autoResize && 'resize-none',
            className
          )}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          onChange={handleChange}
          {...props}
        />

        <div className="flex items-center justify-between mt-1">
          <div className="flex-1">
            {error && <p className="text-sm text-red-600">{error}</p>}
            {helperText && !error && (
              <p className="text-sm text-gray-500">{helperText}</p>
            )}
          </div>

          {showCount && maxLength && (
            <p className={cn(
              'text-sm ml-2',
              charCount > maxLength ? 'text-red-600' : 'text-gray-500'
            )}>
              {charCount}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
