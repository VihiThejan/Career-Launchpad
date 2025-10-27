'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { useUIStore } from '@/store';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/Button';

export const MobileMenu = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useUIStore();
  const { isAuthenticated } = useAuth();

  if (!isMobileMenuOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 md:hidden"
        onClick={toggleMobileMenu}
      />

      {/* Menu Panel */}
      <div className="fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl z-50 md:hidden overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-2">
          <Link
            href="/courses"
            onClick={toggleMobileMenu}
            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/jobs"
            onClick={toggleMobileMenu}
            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
          >
            Jobs
          </Link>
          <Link
            href="/mentors"
            onClick={toggleMobileMenu}
            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
          >
            Mentors
          </Link>
          <Link
            href="/assessments"
            onClick={toggleMobileMenu}
            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
          >
            Assessments
          </Link>

          {isAuthenticated ? (
            <>
              <div className="border-t border-gray-200 my-4" />
              <Link
                href="/dashboard"
                onClick={toggleMobileMenu}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/profile"
                onClick={toggleMobileMenu}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                Profile
              </Link>
              <Link
                href="/settings"
                onClick={toggleMobileMenu}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                Settings
              </Link>
            </>
          ) : (
            <>
              <div className="border-t border-gray-200 my-4" />
              <Link href="/login" onClick={toggleMobileMenu}>
                <Button variant="ghost" className="w-full justify-start">
                  Login
                </Button>
              </Link>
              <Link href="/register" onClick={toggleMobileMenu}>
                <Button variant="primary" className="w-full">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </>
  );
};
