# Frontend Folder Structure

## Overview
This document explains the organization and purpose of each directory in the Career Launchpad frontend application.

```
frontend/
├── public/                      # Static assets (images, fonts, icons)
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── (auth)/              # Auth route group
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── reset-password/
│   │   ├── (dashboard)/         # Protected dashboard routes
│   │   │   ├── dashboard/
│   │   │   ├── courses/
│   │   │   ├── assessments/
│   │   │   ├── jobs/
│   │   │   ├── mentors/
│   │   │   └── profile/
│   │   ├── admin/               # Admin panel routes
│   │   ├── api/                 # API routes
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles
│   │
│   ├── components/              # React components
│   │   ├── ui/                  # Reusable UI primitives
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   ├── Modal/
│   │   │   ├── Card/
│   │   │   ├── Badge/
│   │   │   ├── Select/
│   │   │   ├── Tabs/
│   │   │   └── Toast/
│   │   │
│   │   ├── layout/              # Layout components
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── Sidebar/
│   │   │   ├── Navigation/
│   │   │   └── MobileMenu/
│   │   │
│   │   ├── forms/               # Form components
│   │   │   ├── LoginForm/
│   │   │   ├── RegisterForm/
│   │   │   ├── ProfileForm/
│   │   │   └── AssessmentForm/
│   │   │
│   │   ├── shared/              # Shared complex components
│   │   │   ├── LoadingSpinner/
│   │   │   ├── ErrorBoundary/
│   │   │   ├── SEO/
│   │   │   ├── ProtectedRoute/
│   │   │   └── Pagination/
│   │   │
│   │   └── features/            # Feature-specific components
│   │       ├── auth/
│   │       │   ├── SocialLogin/
│   │       │   ├── PasswordStrength/
│   │       │   └── EmailVerification/
│   │       ├── dashboard/
│   │       │   ├── DashboardStats/
│   │       │   ├── ProgressChart/
│   │       │   ├── RecentActivity/
│   │       │   └── QuickActions/
│   │       ├── assessment/
│   │       │   ├── SkillsTest/
│   │       │   ├── ResultsView/
│   │       │   └── ProgressTracker/
│   │       ├── learning/
│   │       │   ├── CourseCard/
│   │       │   ├── RoadmapTimeline/
│   │       │   ├── ResourceLibrary/
│   │       │   └── VideoPlayer/
│   │       ├── jobs/
│   │       │   ├── JobCard/
│   │       │   ├── JobFilters/
│   │       │   ├── ApplicationTracker/
│   │       │   └── ResumeBuilder/
│   │       ├── profile/
│   │       │   ├── ProfileHeader/
│   │       │   ├── SkillsDisplay/
│   │       │   ├── CertificatesList/
│   │       │   └── ProjectsPortfolio/
│   │       ├── mentorship/
│   │       │   ├── MentorCard/
│   │       │   ├── BookingCalendar/
│   │       │   ├── ChatInterface/
│   │       │   └── SessionHistory/
│   │       └── admin/
│   │           ├── UserManagement/
│   │           ├── ContentManager/
│   │           └── AnalyticsDashboard/
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useUser.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useDebounce.ts
│   │   ├── useInfiniteScroll.ts
│   │   └── useMediaQuery.ts
│   │
│   ├── lib/                     # Third-party library configurations
│   │   ├── axios.ts             # Axios instance configuration
│   │   ├── reactQuery.ts        # React Query setup
│   │   └── validation.ts        # Zod schemas
│   │
│   ├── services/                # API service layer
│   │   ├── api/
│   │   │   ├── client.ts        # API client
│   │   │   └── endpoints.ts     # API endpoints
│   │   ├── auth.service.ts
│   │   ├── user.service.ts
│   │   ├── course.service.ts
│   │   ├── assessment.service.ts
│   │   ├── job.service.ts
│   │   └── mentor.service.ts
│   │
│   ├── store/                   # State management
│   │   ├── slices/              # Redux/Zustand slices
│   │   │   ├── authSlice.ts
│   │   │   ├── userSlice.ts
│   │   │   └── uiSlice.ts
│   │   └── index.ts             # Store configuration
│   │
│   ├── types/                   # TypeScript type definitions
│   │   ├── user.types.ts
│   │   ├── course.types.ts
│   │   ├── assessment.types.ts
│   │   ├── job.types.ts
│   │   ├── mentor.types.ts
│   │   └── api.types.ts
│   │
│   ├── utils/                   # Utility functions
│   │   ├── formatters.ts        # Date, currency, text formatters
│   │   ├── validators.ts        # Input validators
│   │   ├── helpers.ts           # General helper functions
│   │   └── constants.ts         # App-wide constants
│   │
│   ├── constants/               # Constant values
│   │   ├── routes.ts            # Route paths
│   │   ├── apiEndpoints.ts      # API endpoints
│   │   └── config.ts            # App configuration
│   │
│   └── styles/                  # Additional styles
│       ├── themes/              # Theme configurations
│       └── variables.css        # CSS variables
│
├── .env.local                   # Environment variables (local)
├── .env.example                 # Example environment variables
├── .eslintrc.json               # ESLint configuration
├── .prettierrc                  # Prettier configuration
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

## Directory Purposes

### `/public`
Static assets that don't need processing. Files here are served as-is and can be referenced from root `/`.

### `/src/app`
Next.js 14+ App Router pages. Uses file-system based routing. Route groups `(auth)` and `(dashboard)` organize routes without affecting URL structure.

### `/src/components`
All React components organized by type:
- **ui/**: Atomic, reusable components (buttons, inputs, cards)
- **layout/**: Page structure components (header, footer, sidebar)
- **forms/**: Form-specific components
- **shared/**: Complex shared components used across features
- **features/**: Domain-specific components grouped by feature

### `/src/hooks`
Custom React hooks for reusable stateful logic.

### `/src/lib`
Third-party library configurations and wrappers.

### `/src/services`
API communication layer. All HTTP requests are centralized here.

### `/src/store`
Global state management (Zustand or Redux Toolkit).

### `/src/types`
TypeScript interfaces and types for type safety.

### `/src/utils`
Pure utility functions for common operations.

### `/src/constants`
Application-wide constant values and configurations.

### `/src/styles`
Additional styling files, themes, and CSS variables.

## Naming Conventions

- **Components**: PascalCase (e.g., `Button.tsx`, `UserProfile.tsx`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useAuth.ts`, `useDebounce.ts`)
- **Services**: camelCase with '.service' suffix (e.g., `auth.service.ts`)
- **Types**: PascalCase with '.types' suffix (e.g., `User.types.ts`)
- **Utils**: camelCase (e.g., `formatters.ts`, `helpers.ts`)
- **Constants**: UPPER_SNAKE_CASE for values, camelCase for files

## Component Structure Example

Each component should follow this structure:

```typescript
// components/ui/Button/Button.tsx
import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css'; // or use Tailwind

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  isLoading?: boolean;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  isLoading,
  ...props 
}: ButtonProps) => {
  return (
    <button 
      className={`btn btn-${variant} btn-${size}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

// components/ui/Button/index.ts
export { Button } from './Button';
export type { ButtonProps } from './Button';
```

## Best Practices

1. **Colocation**: Keep related files close (component, styles, tests)
2. **Barrel Exports**: Use `index.ts` files for cleaner imports
3. **Separation of Concerns**: Keep business logic in services, not components
4. **Type Safety**: Define types for all props, API responses, and state
5. **Atomic Design**: Build small, reusable components first
6. **Single Responsibility**: Each component/function should do one thing well
