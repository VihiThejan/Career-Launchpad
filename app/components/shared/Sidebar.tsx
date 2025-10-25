import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  role: 'admin' | 'staff' | 'user';
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, children, role }) => {
  const getRoleColor = () => {
    switch (role) {
      case 'admin':
        return 'from-[#012169] to-[#1E3A8A]'; // UK Blue gradient
      case 'staff':
        return 'from-[#C8102E] to-[#DC2626]'; // UK Red gradient
      case 'user':
        return 'from-[#1E3A8A] to-[#3B82F6]'; // Light Blue gradient
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 
          border-r border-gray-200 dark:border-gray-700 z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header with role indicator */}
        <div className={`h-16 flex items-center justify-between px-6 bg-gradient-to-r ${getRoleColor()}`}>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-[#012169]">CL</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-sm">Career Launchpad</h1>
              <p className="text-white/80 text-xs capitalize">{role} Portal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-white hover:bg-white/10 rounded p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          {children}
        </nav>

        {/* Footer */}
        <div className="h-16 border-t border-gray-200 dark:border-gray-700 px-6 flex items-center">
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>System Online</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
