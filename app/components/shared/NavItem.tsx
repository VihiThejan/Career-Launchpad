import React from 'react';
import Link from 'next/link';

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  badge?: string | number;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, label, badge, active = false }) => {
  return (
    <Link
      href={href}
      className={`
        flex items-center justify-between px-4 py-3 rounded-lg mb-1
        transition-all duration-200 group
        ${
          active
            ? 'bg-[#012169] text-white shadow-md'
            : 'text-gray-700 dark:text-gray-300 hover:bg-[#E8EBF4] dark:hover:bg-gray-700'
        }
      `}
    >
      <div className="flex items-center space-x-3">
        <span className={active ? 'text-white' : 'text-gray-500 group-hover:text-[#012169] dark:group-hover:text-white'}>
          {icon}
        </span>
        <span className="font-medium text-sm">{label}</span>
      </div>
      {badge && (
        <span
          className={`
            px-2 py-0.5 text-xs rounded-full font-semibold
            ${active ? 'bg-white text-[#012169]' : 'bg-[#C8102E] text-white'}
          `}
        >
          {badge}
        </span>
      )}
    </Link>
  );
};

export default NavItem;
