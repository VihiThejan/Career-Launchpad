'use client';

import { useState } from 'react';
import { Rocket, Check } from 'lucide-react';
import Link from 'next/link';

interface OnboardingLayoutProps {
  children: React.ReactNode;
}

const steps = [
  { id: 1, name: 'Personal Info', description: 'Tell us about yourself' },
  { id: 2, name: 'Education', description: 'Your educational background' },
  { id: 3, name: 'Experience', description: 'Your work history' },
  { id: 4, name: 'Skills', description: 'Your technical skills' },
  { id: 5, name: 'Goals', description: 'Your career aspirations' },
];

export default function OnboardingLayout({ children }: OnboardingLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2">
            <Rocket className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">
              Career Launchpad
            </span>
          </Link>
          <Link
            href="/dashboard"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Skip for now
          </Link>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">{children}</div>
      </div>
    </div>
  );
}
