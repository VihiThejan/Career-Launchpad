'use client';

import { useState } from 'react';
import AdminDashboard from '@/app/components/dashboard/AdminDashboard';
import StaffDashboard from '@/app/components/dashboard/StaffDashboard';
import UserDashboard from '@/app/components/user/UserDashboard';
import ThemeToggle from '@/app/components/shared/ThemeToggle';
import { User, DashboardStats, UserRole } from '@/app/types';

export default function Home() {
  const [activeRole, setActiveRole] = useState<UserRole>(UserRole.USER);

  // Mock users for each role
  const users: Record<UserRole, User> = {
    [UserRole.USER]: {
      id: '1',
      email: 'john.user@example.com',
      name: 'John User',
      role: UserRole.USER,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    [UserRole.STAFF]: {
      id: '2',
      email: 'jane.staff@example.com',
      name: 'Jane Staff',
      role: UserRole.STAFF,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    [UserRole.ADMIN]: {
      id: '3',
      email: 'admin@example.com',
      name: 'Admin User',
      role: UserRole.ADMIN,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  };

  // Mock stats for each role
  const stats: Record<UserRole, DashboardStats> = {
    [UserRole.USER]: {
      careerPaths: 3,
      totalCourses: 8,
      completionRate: 65,
      totalApplications: 12,
    },
    [UserRole.STAFF]: {
      pendingReviews: 8,
      totalApplications: 342,
      totalCourses: 56,
      completionRate: 78,
    },
    [UserRole.ADMIN]: {
      totalUsers: 1234,
      activeUsers: 567,
      careerPaths: 89,
      aiInteractions: 4521,
      pendingReviews: 12,
      totalCourses: 156,
    },
  };

  // Render appropriate dashboard based on active role
  const renderDashboard = () => {
    const currentUser = users[activeRole];
    const currentStats = stats[activeRole];

    switch (activeRole) {
      case UserRole.ADMIN:
        return <AdminDashboard user={currentUser} stats={currentStats} />;
      case UserRole.STAFF:
        return <StaffDashboard user={currentUser} stats={currentStats} />;
      case UserRole.USER:
        return <UserDashboard user={currentUser} stats={currentStats} />;
      default:
        return <UserDashboard user={currentUser} stats={currentStats} />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Role switcher - Fixed at top */}
      <div className="fixed top-4 right-4 z-[100] bg-white dark:bg-gray-800 rounded-lg shadow-xl border-2 border-gray-200 dark:border-gray-700 p-4">
        <div className="mb-3">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
            🎭 Demo Mode - Switch Roles
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            View different dashboards
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <button
            onClick={() => setActiveRole(UserRole.USER)}
            className={`
              px-4 py-2 rounded-lg font-semibold text-sm transition-all
              ${
                activeRole === UserRole.USER
                  ? 'bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }
            `}
          >
            👤 User View
          </button>
          <button
            onClick={() => setActiveRole(UserRole.STAFF)}
            className={`
              px-4 py-2 rounded-lg font-semibold text-sm transition-all
              ${
                activeRole === UserRole.STAFF
                  ? 'bg-gradient-to-r from-[#C8102E] to-[#DC2626] text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }
            `}
          >
            👥 Staff View
          </button>
          <button
            onClick={() => setActiveRole(UserRole.ADMIN)}
            className={`
              px-4 py-2 rounded-lg font-semibold text-sm transition-all
              ${
                activeRole === UserRole.ADMIN
                  ? 'bg-gradient-to-r from-[#012169] to-[#1E3A8A] text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }
            `}
          >
            🔐 Admin View
          </button>
        </div>
      </div>

      {/* Dashboard content */}
      {renderDashboard()}
    </div>
  );
}
