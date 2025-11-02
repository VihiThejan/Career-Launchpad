import { Rocket } from 'lucide-react';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mb-8">
          <Rocket className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">
            Career Launchpad
          </span>
        </Link>

        {/* Main Content */}
        <div className="flex items-center justify-center min-h-[calc(100vh-12rem)]">
          {children}
        </div>
      </div>
    </div>
  );
}
