// User roles
export enum UserRole {
  USER = 'user',
  STAFF = 'staff',
  ADMIN = 'admin'
}

// User interface
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Dashboard stats
export interface DashboardStats {
  totalUsers?: number;
  activeUsers?: number;
  totalCourses?: number;
  completionRate?: number;
  totalApplications?: number;
  pendingReviews?: number;
  careerPaths?: number;
  aiInteractions?: number;
}

// Permission interface
export interface Permission {
  canView: boolean;
  canCreate: boolean;
  canEdit: boolean;
  canDelete: boolean;
  canManageUsers?: boolean;
  canManageContent?: boolean;
  canAccessReports?: boolean;
  canAccessAI?: boolean;
}

// Role permissions mapping
export const rolePermissions: Record<UserRole, Permission> = {
  [UserRole.USER]: {
    canView: true,
    canCreate: true,
    canEdit: true,
    canDelete: false,
    canAccessAI: true,
  },
  [UserRole.STAFF]: {
    canView: true,
    canCreate: true,
    canEdit: true,
    canDelete: false,
    canManageContent: true,
    canAccessReports: true,
    canAccessAI: true,
  },
  [UserRole.ADMIN]: {
    canView: true,
    canCreate: true,
    canEdit: true,
    canDelete: true,
    canManageUsers: true,
    canManageContent: true,
    canAccessReports: true,
    canAccessAI: true,
  },
};

// Navigation item
export interface NavItem {
  label: string;
  href: string;
  icon: string;
  requiredPermission?: keyof Permission;
  badge?: string | number;
}
