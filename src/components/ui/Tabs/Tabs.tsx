'use client';

import { useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface Tab {
  id: string;
  label: string;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
  variant?: 'default' | 'pills' | 'underline';
}

export const Tabs = ({
  tabs,
  defaultTab,
  onChange,
  className = '',
  variant = 'default',
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string, disabled?: boolean) => {
    if (disabled) return;
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  const baseTabStyles = 'px-4 py-2 font-medium transition-colors cursor-pointer';
  
  const variantStyles = {
    default: {
      tab: 'border-b-2',
      active: 'border-blue-600 text-blue-600',
      inactive: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
      disabled: 'text-gray-300 cursor-not-allowed',
      container: 'border-b border-gray-200',
    },
    pills: {
      tab: 'rounded-lg',
      active: 'bg-blue-600 text-white',
      inactive: 'text-gray-700 hover:bg-gray-100',
      disabled: 'text-gray-300 cursor-not-allowed',
      container: 'bg-gray-50 rounded-lg p-1',
    },
    underline: {
      tab: 'border-b-2',
      active: 'border-blue-600 text-blue-600',
      inactive: 'border-transparent text-gray-600 hover:text-gray-900',
      disabled: 'text-gray-300 cursor-not-allowed',
      container: '',
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className={cn('w-full', className)}>
      {/* Tab List */}
      <div className={cn('flex gap-2', styles.container)}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const tabClassName = cn(
            baseTabStyles,
            styles.tab,
            isActive ? styles.active : styles.inactive,
            tab.disabled && styles.disabled
          );

          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id, tab.disabled)}
              className={tabClassName}
              disabled={tab.disabled}
              role="tab"
              aria-selected={isActive}
              aria-disabled={tab.disabled}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="mt-4" role="tabpanel">
        {activeContent}
      </div>
    </div>
  );
};
