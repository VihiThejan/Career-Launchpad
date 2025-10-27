'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  BookOpen,
  Briefcase,
  Users,
  ClipboardList,
  MessageSquare,
  FileText,
  Settings,
  Award,
  TrendingUp,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/store';

interface SidebarItem {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
}

const sidebarItems: SidebarItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: Home },
  { label: 'Courses', href: '/dashboard/courses', icon: BookOpen },
  { label: 'Jobs', href: '/dashboard/jobs', icon: Briefcase },
  { label: 'Mentors', href: '/dashboard/mentors', icon: Users },
  { label: 'Assessments', href: '/dashboard/assessments', icon: ClipboardList },
  { label: 'Messages', href: '/dashboard/messages', icon: MessageSquare, badge: 3 },
  { label: 'Resume', href: '/dashboard/resume', icon: FileText },
  { label: 'Skills', href: '/dashboard/skills', icon: Award },
  { label: 'Progress', href: '/dashboard/progress', icon: TrendingUp },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const { isSidebarOpen, toggleSidebar } = useUIStore();

  return (
    <>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 z-40 transition-transform duration-300 overflow-y-auto',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <nav className="p-4 space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all',
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="flex-1">{item.label}</span>
                {item.badge !== undefined && (
                  <span className="px-2 py-0.5 text-xs font-semibold bg-red-500 text-white rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Progress Card */}
        <div className="m-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
          <h4 className="font-semibold text-gray-900 mb-2">Learning Progress</h4>
          <p className="text-sm text-gray-600 mb-3">
            You're 65% through your learning path!
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }} />
          </div>
          <p className="text-xs text-gray-500 mt-2">13 of 20 courses completed</p>
        </div>
      </aside>
    </>
  );
};
