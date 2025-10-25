'use client';

import React, { useState } from 'react';
import Sidebar from '@/app/components/shared/Sidebar';
import Header from '@/app/components/shared/Header';
import NavItem from '@/app/components/shared/NavItem';
import StatCard from '@/app/components/shared/StatCard';
import { User, DashboardStats } from '@/app/types';

interface StaffDashboardProps {
  user: User;
  stats: DashboardStats;
}

const StaffDashboard: React.FC<StaffDashboardProps> = ({ user, stats }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-none">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} role="staff">
        <div className="space-y-1">
          <NavItem
            href="/staff/dashboard"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
            label="Dashboard"
            active
          />
          <NavItem
            href="/staff/reviews"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            }
            label="Application Reviews"
            badge={stats.pendingReviews}
          />
          <NavItem
            href="/staff/content"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            }
            label="Content Management"
          />
          <NavItem
            href="/staff/courses"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
            label="Course Library"
          />
          <NavItem
            href="/staff/users"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            label="User Support"
          />
          <NavItem
            href="/staff/reports"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
            label="Reports"
          />
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-gray-200 dark:border-gray-700" />

        {/* Help section */}
        <NavItem
          href="/staff/help"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          label="Help & Support"
        />
      </Sidebar>

      {/* Main content */}
      <div className="lg:ml-64">
        <Header user={user} onMenuClick={() => setSidebarOpen(true)} notifications={3} />

        <main className="p-6">
          {/* Page title */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Staff Dashboard
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Manage content, review applications, and support users.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Pending Reviews"
              value={stats.pendingReviews || 0}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              }
              color="red"
            />
            <StatCard
              title="Total Applications"
              value={stats.totalApplications || 0}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              trend={{ value: 15, isPositive: true }}
              color="blue"
            />
            <StatCard
              title="Active Courses"
              value={stats.totalCourses || 0}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
              color="green"
            />
            <StatCard
              title="Completion Rate"
              value={`${stats.completionRate || 0}%`}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              trend={{ value: 7, isPositive: true }}
              color="green"
            />
          </div>

          {/* Content sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pending reviews */}
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Pending Reviews</h2>
                <button className="text-sm text-[#C8102E] dark:text-red-400 hover:text-[#DC2626] dark:hover:text-red-300 font-medium transition-colors">
                  View All
                </button>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'John Doe', type: 'Application', time: '5m ago' },
                  { name: 'Jane Smith', type: 'Career Path', time: '12m ago' },
                  { name: 'Bob Wilson', type: 'Resume', time: '1h ago' },
                  { name: 'Alice Brown', type: 'Application', time: '2h ago' },
                ].map((review, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100/80 dark:hover:bg-gray-800/80 backdrop-blur-sm transition-all duration-200 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C8102E] to-[#DC2626] flex items-center justify-center text-white text-sm font-semibold shadow-md">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{review.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{review.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{review.time}</p>
                      <button className="px-3 py-1 bg-[#C8102E] text-white text-xs rounded-md hover:bg-[#DC2626] transition-colors shadow-sm">
                        Review
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent activity */}
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
                <button className="text-sm text-[#C8102E] dark:text-red-400 hover:text-[#DC2626] dark:hover:text-red-300 font-medium transition-colors">
                  View All
                </button>
              </div>
              <div className="space-y-3">
                {[
                  { action: 'Approved application for John Doe', time: '10m ago' },
                  { action: 'Updated course content: React Basics', time: '25m ago' },
                  { action: 'Responded to user inquiry', time: '1h ago' },
                  { action: 'Created new career path template', time: '3h ago' },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-100/80 dark:hover:bg-gray-800/80 backdrop-blur-sm transition-all duration-200">
                    <div className="w-2 h-2 rounded-full bg-[#C8102E] dark:bg-red-400 mt-2" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 dark:text-white">{activity.action}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="mt-6 bg-gradient-to-r from-[#C8102E] to-[#DC2626] rounded-xl shadow-lg p-6 text-white backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 text-left transition-all">
                <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <p className="font-semibold">Create New Course</p>
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 text-left transition-all">
                <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <p className="font-semibold">Review Applications</p>
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 text-left transition-all">
                <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="font-semibold">Generate Report</p>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StaffDashboard;
