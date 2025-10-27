// Application routes

export const ROUTES = {
  // Public routes
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  PRICING: '/pricing',
  
  // Auth routes
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  VERIFY_EMAIL: '/verify-email',
  
  // Dashboard routes
  DASHBOARD: '/dashboard',
  DASHBOARD_HOME: '/dashboard/home',
  
  // Profile routes
  PROFILE: '/profile',
  PROFILE_EDIT: '/profile/edit',
  PROFILE_SETTINGS: '/profile/settings',
  
  // Learning routes
  COURSES: '/courses',
  COURSE_DETAIL: (id: string) => `/courses/${id}`,
  MY_COURSES: '/my-courses',
  LEARNING_PATH: '/learning-path',
  RESOURCES: '/resources',
  
  // Assessment routes
  ASSESSMENTS: '/assessments',
  ASSESSMENT_DETAIL: (id: string) => `/assessments/${id}`,
  ASSESSMENT_RESULTS: '/assessments/results',
  SKILL_GAP: '/assessments/skill-gap',
  
  // Jobs routes
  JOBS: '/jobs',
  JOB_DETAIL: (id: string) => `/jobs/${id}`,
  MY_APPLICATIONS: '/applications',
  RESUME_BUILDER: '/resume-builder',
  
  // Mentorship routes
  MENTORS: '/mentors',
  MENTOR_DETAIL: (id: string) => `/mentors/${id}`,
  MY_SESSIONS: '/sessions',
  MESSAGES: '/messages',
  
  // Admin routes
  ADMIN: '/admin',
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_USERS: '/admin/users',
  ADMIN_COURSES: '/admin/courses',
  ADMIN_JOBS: '/admin/jobs',
  ADMIN_ANALYTICS: '/admin/analytics',
  
  // Other
  NOTIFICATIONS: '/notifications',
  HELP: '/help',
  PRIVACY: '/privacy',
  TERMS: '/terms',
} as const;

// Route groups for access control
export const PUBLIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.ABOUT,
  ROUTES.CONTACT,
  ROUTES.PRICING,
  ROUTES.LOGIN,
  ROUTES.REGISTER,
  ROUTES.FORGOT_PASSWORD,
  ROUTES.RESET_PASSWORD,
  ROUTES.VERIFY_EMAIL,
];

export const PROTECTED_ROUTES = [
  ROUTES.DASHBOARD,
  ROUTES.PROFILE,
  ROUTES.MY_COURSES,
  ROUTES.MY_APPLICATIONS,
  ROUTES.MY_SESSIONS,
  ROUTES.MESSAGES,
];

export const ADMIN_ROUTES = [
  ROUTES.ADMIN,
  ROUTES.ADMIN_DASHBOARD,
  ROUTES.ADMIN_USERS,
  ROUTES.ADMIN_COURSES,
  ROUTES.ADMIN_JOBS,
  ROUTES.ADMIN_ANALYTICS,
];
