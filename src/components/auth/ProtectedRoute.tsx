'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/store';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  redirectTo?: string;
}

export const ProtectedRoute = ({
  children,
  requireAuth = true,
  redirectTo = '/login',
}: ProtectedRouteProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (requireAuth && !isAuthenticated) {
      // Save the current path to redirect back after login
      const returnUrl = encodeURIComponent(pathname);
      router.push(`${redirectTo}?returnUrl=${returnUrl}`);
    }
  }, [isAuthenticated, requireAuth, router, redirectTo, pathname]);

  // If not authenticated and auth is required, don't render children
  if (requireAuth && !isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};
