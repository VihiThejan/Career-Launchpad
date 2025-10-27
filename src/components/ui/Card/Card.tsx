import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  headerAction?: ReactNode;
  footer?: ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export const Card = ({
  children,
  title,
  subtitle,
  headerAction,
  footer,
  padding = 'md',
  className = '',
  hoverable = false,
  onClick,
}: CardProps) => {
  const paddingStyles = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };
  
  const baseStyles = 'bg-white rounded-lg border border-gray-200 shadow-sm';
  const hoverStyles = hoverable ? 'hover:shadow-md transition-shadow cursor-pointer' : '';
  const clickableStyles = onClick ? 'cursor-pointer' : '';
  
  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${clickableStyles} ${className}`}
      onClick={onClick}
    >
      {(title || subtitle || headerAction) && (
        <div className={`border-b border-gray-200 ${paddingStyles[padding]}`}>
          <div className="flex items-start justify-between">
            <div>
              {title && (
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              )}
              {subtitle && (
                <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
              )}
            </div>
            {headerAction && (
              <div className="ml-4 flex-shrink-0">{headerAction}</div>
            )}
          </div>
        </div>
      )}
      
      <div className={paddingStyles[padding]}>{children}</div>
      
      {footer && (
        <div className={`border-t border-gray-200 ${paddingStyles[padding]}`}>
          {footer}
        </div>
      )}
    </div>
  );
};
