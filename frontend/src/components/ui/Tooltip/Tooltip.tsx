'use client';

import { useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';

export interface TooltipProps {
  children: ReactNode;
  content: string | ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export const Tooltip = ({
  children,
  content,
  position = 'top',
  delay = 200,
  className = '',
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    const positions = {
      top: { x: rect.left + rect.width / 2, y: rect.top },
      bottom: { x: rect.left + rect.width / 2, y: rect.bottom },
      left: { x: rect.left, y: rect.top + rect.height / 2 },
      right: { x: rect.right, y: rect.top + rect.height / 2 },
    };

    setCoords(positions[position]);

    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsVisible(false);
  };

  const positionClasses = {
    top: '-translate-x-1/2 -translate-y-full mb-2',
    bottom: '-translate-x-1/2 mt-2',
    left: '-translate-x-full -translate-y-1/2 mr-2',
    right: 'translate-x-0 -translate-y-1/2 ml-2',
  };

  const arrowClasses = {
    top: 'bottom-[-4px] left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent',
    bottom: 'top-[-4px] left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent',
    left: 'right-[-4px] top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent',
    right: 'left-[-4px] top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent',
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        {children}
      </div>

      {isVisible && typeof window !== 'undefined' &&
        createPortal(
          <div
            className={cn(
              'absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg pointer-events-none animate-in fade-in',
              positionClasses[position],
              className
            )}
            style={{
              left: `${coords.x}px`,
              top: `${coords.y}px`,
            }}
          >
            {content}
            <div
              className={cn(
                'absolute w-0 h-0 border-4 border-gray-900',
                arrowClasses[position]
              )}
            />
          </div>,
          document.body
        )}
    </>
  );
};
