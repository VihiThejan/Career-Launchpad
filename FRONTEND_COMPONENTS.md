# Frontend Components Documentation

## Overview

The Career Launchpad frontend is built with **Next.js 16**, **React 19**, and **TypeScript**, featuring a modern, role-based dashboard system with **UK flag color theme**.

## 🎨 Design System

### Color Palette (UK Flag Theme)

```css
/* Primary Colors */
UK Blue:     #012169  (Primary dark blue)
UK Red:      #C8102E  (Primary red)
UK White:    #FFFFFF  (Base white)

/* Light Variations */
Light Blue:  #E8EBF4  (Background blue)
Light Red:   #FEE6EB  (Background red)

/* Accent Colors */
Accent Blue: #1E3A8A  (Interactive elements)
Accent Red:  #DC2626  (Alerts & Staff)
Info Blue:   #3B82F6  (User theme)

/* Neutral Grays */
Gray 50:     #F9FAFB  (Background)
Gray 100:    #F3F4F6  (Cards)
Gray 200:    #E5E7EB  (Borders)
Gray 600:    #4B5563  (Text secondary)
Gray 900:    #111827  (Text primary)
```

## 🏗️ Architecture

### Component Structure

```
app/
├── components/
│   ├── dashboard/
│   │   ├── AdminDashboard.tsx      ✅ Full admin controls
│   │   ├── StaffDashboard.tsx      ✅ Content & review management
│   │   └── UserDashboard.tsx       ✅ Personal career management
│   │
│   ├── shared/
│   │   ├── Sidebar.tsx             ✅ Role-based navigation
│   │   ├── Header.tsx              ✅ Top bar with user info
│   │   ├── NavItem.tsx             ✅ Navigation link component
│   │   └── StatCard.tsx            ✅ Dashboard statistics
│   │
│   └── user/
│       └── UserDashboard.tsx       ✅ User-specific features
│
├── types/
│   └── index.ts                    ✅ TypeScript definitions
│
└── globals.css                     ✅ UK theme styles
```

## 👥 Role-Based Access

### 1. **User Role** (Light Blue Theme)
- **Color**: `#1E3A8A` → `#3B82F6` gradient
- **Access**:
  - Personal dashboard
  - Career path management
  - Learning & courses
  - Job opportunities
  - AI career advisor
  - Application tracking
  - Profile management

### 2. **Staff Role** (Red Theme)
- **Color**: `#C8102E` → `#DC2626` gradient
- **Access**:
  - Same as Admin Dashboard layout
  - Application reviews
  - Content management
  - Course library management
  - User support
  - Reports generation
  - **Limited**: No system settings, no user deletion

### 3. **Admin Role** (Dark Blue Theme)
- **Color**: `#012169` → `#1E3A8A` gradient
- **Access**:
  - Full system control
  - User management (CRUD)
  - Content management
  - Career path templates
  - Analytics & reports
  - AI configuration
  - System settings
  - Help & support

## 📦 Main Components

### AdminDashboard Component

**Features:**
- User management with pending reviews badge
- System-wide statistics
- Recent user activity
- System activity logs
- Full administrative controls

**Usage:**
```tsx
import AdminDashboard from '@/app/components/dashboard/AdminDashboard';
import { User, DashboardStats } from '@/app/types';

const user: User = {
  id: '1',
  email: 'admin@example.com',
  name: 'Admin User',
  role: 'admin',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const stats: DashboardStats = {
  totalUsers: 1234,
  activeUsers: 567,
  careerPaths: 89,
  aiInteractions: 4521,
  pendingReviews: 12,
};

<AdminDashboard user={user} stats={stats} />
```

### StaffDashboard Component

**Features:**
- Pending reviews with priority queue
- Application management
- Content creation tools
- Course library access
- Quick action buttons
- Recent activity tracking

**Usage:**
```tsx
import StaffDashboard from '@/app/components/dashboard/StaffDashboard';

const stats: DashboardStats = {
  pendingReviews: 8,
  totalApplications: 342,
  totalCourses: 56,
  completionRate: 78,
};

<StaffDashboard user={staffUser} stats={stats} />
```

### UserDashboard Component

**Features:**
- Personalized welcome banner
- Learning progress tracking
- AI career advisor integration
- Job recommendations with match %
- Application status overview
- Course continuation cards

**Usage:**
```tsx
import UserDashboard from '@/app/components/user/UserDashboard';

const stats: DashboardStats = {
  careerPaths: 3,
  totalCourses: 8,
  completionRate: 65,
  totalApplications: 12,
};

<UserDashboard user={regularUser} stats={stats} />
```

## 🧩 Shared Components

### Sidebar Component

**Props:**
- `isOpen` (boolean): Mobile sidebar state
- `onClose` (function): Close handler
- `children` (ReactNode): Navigation items
- `role` ('admin' | 'staff' | 'user'): Role-based styling

**Features:**
- Role-specific color gradients
- Mobile-responsive with overlay
- Logo with role indicator
- System status indicator

### Header Component

**Props:**
- `user` (User): Current user data
- `onMenuClick` (function): Mobile menu toggle
- `notifications` (number): Badge count

**Features:**
- Search bar (desktop)
- Notification bell with badge
- User profile with role badge
- Responsive design

### NavItem Component

**Props:**
- `href` (string): Navigation link
- `icon` (ReactNode): SVG icon
- `label` (string): Link text
- `badge` (string | number): Optional badge
- `active` (boolean): Current page indicator

### StatCard Component

**Props:**
- `title` (string): Card title
- `value` (string | number): Main statistic
- `icon` (ReactNode): SVG icon
- `trend` (object): Optional trend data
- `color` ('blue' | 'red' | 'green' | 'yellow'): Theme color

## 🎯 Key Features

### 1. **Role-Based UI**
Each role has unique:
- Color scheme (UK flag colors)
- Navigation items
- Dashboard statistics
- Quick actions
- Access permissions

### 2. **Responsive Design**
- Mobile-first approach
- Collapsible sidebar
- Adaptive grid layouts
- Touch-friendly interactions

### 3. **Modern UI/UX**
- Smooth transitions
- Hover effects
- Loading states
- Empty states
- Error handling

### 4. **Accessibility**
- ARIA labels
- Keyboard navigation
- Screen reader support
- High contrast mode
- Focus indicators

## 🚀 Usage Examples

### Example 1: Admin Dashboard Page

```tsx
// app/(admin)/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import AdminDashboard from '@/app/components/dashboard/AdminDashboard';
import { User, DashboardStats } from '@/app/types';

export default function AdminDashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [stats, setStats] = useState<DashboardStats>({});

  useEffect(() => {
    // Fetch user data
    fetch('/api/v1/users/profile')
      .then(res => res.json())
      .then(data => setUser(data.data));

    // Fetch dashboard stats
    fetch('/api/v1/admin/stats')
      .then(res => res.json())
      .then(data => setStats(data.data));
  }, []);

  if (!user) return <div>Loading...</div>;

  return <AdminDashboard user={user} stats={stats} />;
}
```

### Example 2: Custom Navigation

```tsx
import NavItem from '@/app/components/shared/NavItem';

<div className="space-y-1">
  <NavItem
    href="/dashboard"
    icon={<DashboardIcon />}
    label="Dashboard"
    active
  />
  <NavItem
    href="/messages"
    icon={<MessageIcon />}
    label="Messages"
    badge={5}
  />
</div>
```

### Example 3: Custom Stat Cards

```tsx
import StatCard from '@/app/components/shared/StatCard';

<div className="grid grid-cols-4 gap-6">
  <StatCard
    title="Total Revenue"
    value="£45,231"
    icon={<CurrencyIcon />}
    trend={{ value: 12, isPositive: true }}
    color="green"
  />
</div>
```

## 🔧 Customization

### Changing Theme Colors

Edit `app/globals.css`:

```css
:root {
  --uk-blue: #012169;      /* Change primary blue */
  --uk-red: #C8102E;       /* Change primary red */
  --light-blue: #E8EBF4;   /* Change light backgrounds */
}
```

### Adding New Roles

1. Update `app/types/index.ts`:
```typescript
export enum UserRole {
  USER = 'user',
  STAFF = 'staff',
  ADMIN = 'admin',
  MANAGER = 'manager',  // New role
}
```

2. Add permissions:
```typescript
export const rolePermissions: Record<UserRole, Permission> = {
  // ... existing roles
  [UserRole.MANAGER]: {
    canView: true,
    canCreate: true,
    canEdit: true,
    canDelete: false,
    canManageContent: true,
  },
};
```

3. Create dashboard component:
```tsx
// app/components/dashboard/ManagerDashboard.tsx
```

## 📱 Responsive Breakpoints

```
Mobile:   < 768px
Tablet:   768px - 1024px
Desktop:  > 1024px

Sidebar:  Hidden < 1024px
         Visible >= 1024px
```

## 🎨 Icon System

All icons use **Heroicons** (Outline style):
- Consistent 24x24px size
- Stroke width: 2
- Color inherits from parent

## 🔐 Security Considerations

1. **Client-side role checks** are for UI only
2. **Always validate** on the backend
3. Use **JWT tokens** for authentication
4. Implement **route protection** middleware

## 📊 Performance Tips

1. Use `'use client'` only when needed
2. Lazy load dashboard components
3. Implement infinite scroll for lists
4. Cache API responses
5. Optimize images with Next.js Image

## 🧪 Testing

```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom

# Run tests
npm test
```

## 📝 Best Practices

1. **Consistent naming**: Use PascalCase for components
2. **Type safety**: Always define TypeScript interfaces
3. **Reusability**: Extract common patterns into shared components
4. **Accessibility**: Add ARIA labels and keyboard support
5. **Performance**: Use React.memo for expensive components

## 🎯 Next Steps

1. ✅ Create authentication pages (login, register)
2. ✅ Implement API integration hooks
3. ✅ Add loading and error states
4. ✅ Create form components
5. ✅ Add data tables with sorting/filtering
6. ✅ Implement real-time notifications
7. ✅ Add dark mode toggle
8. ✅ Create mobile navigation drawer

---

**Built with ❤️ using Next.js, React, and TypeScript**
