'use client';

import React, { useState } from 'react';
import Sidebar from '@/app/components/shared/Sidebar';
import Header from '@/app/components/shared/Header';
import NavItem from '@/app/components/shared/NavItem';
import StatCard from '@/app/components/shared/StatCard';
import { User, DashboardStats } from '@/app/types';

interface UserDashboardProps {
  user: User;
  stats: DashboardStats;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ user, stats }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} role="user">
        <div className="space-y-1">
          <NavItem
            href="/dashboard"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
            label="Dashboard"
            active
          />
          <NavItem
            href="/career-path"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            }
            label="My Career Path"
          />
          <NavItem
            href="/learning"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
            label="Learning & Courses"
          />
          <NavItem
            href="/jobs"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            label="Job Opportunities"
          />
          <NavItem
            href="/ai-assistant"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            }
            label="AI Career Advisor"
          />
          <NavItem
            href="/applications"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
            label="My Applications"
            badge={5}
          />
          <NavItem
            href="/profile"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
            label="My Profile"
          />
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-gray-200 dark:border-gray-700" />

        {/* Help section */}
        <NavItem
          href="/help"
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
        <Header user={user} onMenuClick={() => setSidebarOpen(true)} notifications={2} />

        <main className="p-6">
          {/* Welcome banner */}
          <div className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] rounded-xl shadow-lg p-8 mb-6 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}! 👋</h1>
                <p className="text-blue-100">
                  Continue your journey to achieving your career goals
                </p>
              </div>
              <button className="bg-white text-[#1E3A8A] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md">
                Take Assessment
              </button>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Career Paths"
              value={stats.careerPaths || 0}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              }
              color="blue"
            />
            <StatCard
              title="Courses Enrolled"
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
              trend={{ value: 12, isPositive: true }}
              color="green"
            />
            <StatCard
              title="Job Applications"
              value={stats.totalApplications || 0}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              color="yellow"
            />
          </div>

          {/* Content sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Continue learning */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Continue Learning</h2>
                <button className="text-sm text-[#1E3A8A] hover:text-[#3B82F6] font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {[
                  { course: 'React Development', progress: 75, time: '2h left' },
                  { course: 'Python for Data Science', progress: 45, time: '5h left' },
                  { course: 'UI/UX Design Basics', progress: 90, time: '30m left' },
                ].map((course, i) => (
                  <div key={i} className="p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center text-white">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{course.course}</p>
                          <p className="text-sm text-gray-500">{course.time}</p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-[#1E3A8A] text-white text-sm rounded-lg hover:bg-[#3B82F6] transition-colors">
                        Continue
                      </button>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] h-2 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1 text-right">{course.progress}% complete</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Career Advisor */}
            <div className="bg-gradient-to-br from-[#012169] to-[#1E3A8A] rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold">AI Career Advisor</h2>
              </div>
              <p className="text-sm text-blue-100 mb-4">
                Get personalized career guidance, resume analysis, and interview preparation tips powered by AI.
              </p>
              <button className="w-full bg-white text-[#012169] py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Chat with AI
              </button>
              <div className="mt-4 space-y-2">
                <button className="w-full text-left p-3 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors">
                  📄 Analyze my resume
                </button>
                <button className="w-full text-left p-3 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors">
                  💼 Generate cover letter
                </button>
                <button className="w-full text-left p-3 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors">
                  🎯 Career path recommendations
                </button>
              </div>
            </div>
          </div>

          {/* Recommended jobs */}
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recommended Jobs</h2>
              <button className="text-sm text-[#1E3A8A] hover:text-[#3B82F6] font-medium">
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Senior React Developer', company: 'Tech Corp', location: 'Remote', salary: '$80k-$120k', match: 95 },
                { title: 'Full Stack Engineer', company: 'StartupXYZ', location: 'London, UK', salary: '$70k-$100k', match: 88 },
                { title: 'Frontend Lead', company: 'Digital Agency', location: 'Manchester, UK', salary: '$90k-$130k', match: 92 },
              ].map((job, i) => (
                <div key={i} className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center text-white font-bold">
                      {job.company[0]}
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-semibold">
                      {job.match}% match
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{job.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{job.company}</p>
                  <p className="text-xs text-gray-500 mb-2">{job.location}</p>
                  <p className="text-sm font-semibold text-[#1E3A8A] mb-3">{job.salary}</p>
                  <button className="w-full px-4 py-2 bg-[#1E3A8A] text-white text-sm rounded-lg hover:bg-[#3B82F6] transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
