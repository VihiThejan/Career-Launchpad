# Quick Start Guide - Career Launchpad Frontend

## 🎯 Overview

This guide will help you start developing the Career Launchpad frontend quickly.

## ✅ What's Already Set Up

### 1. Next.js Project Structure
- ✅ Next.js 14+ with App Router
- ✅ TypeScript configuration
- ✅ Tailwind CSS
- ✅ ESLint
- ✅ React Compiler support

### 2. Folder Structure
```
src/
├── app/                # Next.js pages (add your routes here)
├── components/         # React components organized by type
│   ├── ui/            # Base UI components (Button, Input, Card)
│   ├── layout/        # Layout components
│   ├── forms/         # Form components
│   ├── shared/        # Shared complex components
│   └── features/      # Feature-specific components
├── constants/         # Constants (routes, API endpoints, config)
├── types/            # TypeScript type definitions
├── utils/            # Utility functions (formatters, validators, helpers)
├── services/         # API service layer (to be implemented)
├── hooks/            # Custom React hooks (to be implemented)
├── store/            # State management (to be implemented)
└── lib/              # Third-party configurations (to be implemented)
```

### 3. Ready-to-Use Resources

#### Constants
- `src/constants/config.ts` - App configuration
- `src/constants/routes.ts` - Route definitions
- `src/constants/apiEndpoints.ts` - API endpoint mappings

#### TypeScript Types
- `src/types/user.types.ts` - User and authentication types
- `src/types/course.types.ts` - Course and learning types
- `src/types/assessment.types.ts` - Assessment types
- `src/types/job.types.ts` - Job and application types

#### Utilities
- `src/utils/formatters.ts` - Date, currency, text formatting
- `src/utils/validators.ts` - Input validation functions
- `src/utils/helpers.ts` - General helper functions

#### UI Components
- `src/components/ui/Button/` - Button component
- `src/components/ui/Input/` - Input component
- `src/components/ui/Card/` - Card component

## 🚀 Next Steps

### Phase 1: Complete Basic Setup (Week 1)

#### 1.1 Install Additional Dependencies
```bash
cd frontend

# State management
npm install zustand

# Data fetching
npm install @tanstack/react-query

# Forms
npm install react-hook-form zod @hookform/resolvers

# HTTP client
npm install axios

# UI utilities
npm install clsx tailwind-merge

# Icons
npm install lucide-react

# Charts
npm install recharts

# Animations
npm install framer-motion

# Date utilities
npm install date-fns
```

#### 1.2 Create Environment File
```bash
cp .env.example .env.local
```

Edit `.env.local` with your local settings.

#### 1.3 Set Up API Client
Create `src/lib/axios.ts`:
```typescript
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for auth token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### Phase 2: Build Core Components (Week 2-3)

#### 2.1 Complete UI Component Library
Build remaining components in `src/components/ui/`:
- Modal
- Toast/Notification
- Select/Dropdown
- Badge
- Tabs
- Tooltip
- Progress Bar
- Loading Spinner

#### 2.2 Create Layout Components
Build in `src/components/layout/`:
- Header with navigation
- Footer
- Sidebar for dashboard
- Mobile menu

### Phase 3: Authentication (Week 3-4)

#### 3.1 Create Auth Pages
In `src/app/(auth)/`:
- `login/page.tsx`
- `register/page.tsx`
- `forgot-password/page.tsx`
- `reset-password/page.tsx`

#### 3.2 Implement Auth Service
Create `src/services/auth.service.ts`

#### 3.3 Set Up Protected Routes
Create `src/components/shared/ProtectedRoute/`

### Phase 4: Dashboard (Week 5)

#### 4.1 Create Dashboard Layout
`src/app/(dashboard)/layout.tsx`

#### 4.2 Build Dashboard Components
In `src/components/features/dashboard/`:
- DashboardStats
- ProgressChart
- RecentActivity
- QuickActions

### Phase 5: Feature Modules (Weeks 6-12)

Build out each feature module:
1. **Learning Module** - Courses, learning paths
2. **Assessment Module** - Skills tests, results
3. **Jobs Module** - Job listings, applications
4. **Profile Module** - User profile, settings
5. **Mentorship Module** - Mentor directory, sessions

## 🛠️ Development Workflow

### 1. Create a New Feature

```bash
# Create feature branch
git checkout -b feature/user-authentication

# Create component
mkdir -p src/components/features/auth/LoginForm
touch src/components/features/auth/LoginForm/LoginForm.tsx
touch src/components/features/auth/LoginForm/index.ts

# Work on your feature
# ...

# Commit and push
git add .
git commit -m "feat: add login form component"
git push origin feature/user-authentication
```

### 2. Component Development Pattern

```typescript
// 1. Define types
interface MyComponentProps {
  title: string;
  onAction: () => void;
}

// 2. Create component
export const MyComponent = ({ title, onAction }: MyComponentProps) => {
  // 3. Add state/hooks if needed
  const [isLoading, setIsLoading] = useState(false);
  
  // 4. Add event handlers
  const handleAction = async () => {
    setIsLoading(true);
    await onAction();
    setIsLoading(false);
  };
  
  // 5. Return JSX
  return (
    <div>
      <h2>{title}</h2>
      <Button onClick={handleAction} isLoading={isLoading}>
        Action
      </Button>
    </div>
  );
};
```

### 3. Using Constants and Types

```typescript
import { ROUTES } from '@/constants/routes';
import { API_ENDPOINTS } from '@/constants/apiEndpoints';
import { User } from '@/types/user.types';
import { formatDate } from '@/utils/formatters';

// Use in your components
<Link href={ROUTES.DASHBOARD}>Dashboard</Link>
```

## 📚 Useful Commands

```bash
# Development
npm run dev                 # Start dev server

# Code quality
npm run lint                # Check for linting errors
npm run lint:fix            # Fix linting errors

# Type checking
npx tsc --noEmit           # Check TypeScript types

# Build
npm run build              # Build for production
npm run start              # Start production server
```

## 🎨 Styling Guidelines

### Using Tailwind CSS

```typescript
// Inline classes
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
  Click me
</button>

// Dynamic classes with clsx
import clsx from 'clsx';

const buttonClass = clsx(
  'px-4 py-2 rounded-lg',
  isPrimary ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800',
  isDisabled && 'opacity-50 cursor-not-allowed'
);
```

## 🔍 Debugging Tips

1. **Console Logging**: Use `console.log()` for quick debugging
2. **React DevTools**: Install React DevTools browser extension
3. **Network Tab**: Check API calls in browser DevTools
4. **VS Code Debugger**: Set breakpoints and debug

## 📖 Reference Documentation

- **Checklist**: See `../FRONTEND_CHECKLIST.md` for complete feature list
- **Structure**: See `FOLDER_STRUCTURE.md` for detailed architecture
- **Main README**: See `README.md` for comprehensive information

## 💡 Tips

1. **Start Small**: Begin with one feature at a time
2. **Reuse Components**: Use existing UI components before creating new ones
3. **Type Everything**: Always define TypeScript types/interfaces
4. **Test Early**: Test components as you build them
5. **Follow Patterns**: Follow the established patterns in existing code
6. **Commit Often**: Make small, frequent commits

## 🆘 Getting Help

- Check the documentation files in this directory
- Review existing component implementations
- Search Next.js and React documentation
- Ask team members for guidance

## 🎯 Priority Features to Build First

1. ✅ **Authentication** (Week 3-4)
   - Login page
   - Registration page
   - Protected routes

2. ✅ **Dashboard** (Week 5)
   - Dashboard home page
   - Basic statistics
   - Navigation

3. ✅ **Profile** (Week 6)
   - View profile
   - Edit profile
   - Settings

4. ✅ **Courses** (Week 7-8)
   - Course listing
   - Course details
   - Enrollment

Good luck with development! 🚀
