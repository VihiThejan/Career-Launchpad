// Application-wide constants

export const APP_NAME = 'Career Launchpad';
export const APP_DESCRIPTION = 'AI-Powered IT Career Development Platform';

// Pagination
export const DEFAULT_PAGE_SIZE = 10;
export const MAX_PAGE_SIZE = 100;

// API
export const API_TIMEOUT = 30000; // 30 seconds
export const REQUEST_RETRY_COUNT = 3;

// File Upload
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
export const ALLOWED_DOCUMENT_TYPES = ['application/pdf', 'application/msword'];

// Date Formats
export const DATE_FORMAT = 'MM/DD/YYYY';
export const DATE_TIME_FORMAT = 'MM/DD/YYYY HH:mm';
export const TIME_FORMAT = 'HH:mm';

// Validation
export const MIN_PASSWORD_LENGTH = 8;
export const MAX_PASSWORD_LENGTH = 128;
export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 30;

// Toast Duration
export const TOAST_DURATION = 3000;
export const ERROR_TOAST_DURATION = 5000;

// Cache Keys
export const CACHE_KEYS = {
  USER: 'user',
  COURSES: 'courses',
  JOBS: 'jobs',
  MENTORS: 'mentors',
  ASSESSMENTS: 'assessments',
} as const;

// Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_PREFERENCES: 'user_preferences',
  THEME: 'theme',
  LANGUAGE: 'language',
} as const;

// Assessment
export const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Expert'] as const;
export const ASSESSMENT_DURATION = 30; // minutes

// Course
export const COURSE_DIFFICULTY = ['Beginner', 'Intermediate', 'Advanced'] as const;
export const COURSE_TYPES = ['Video', 'Article', 'Interactive', 'Project'] as const;

// Job
export const JOB_TYPES = ['Full-time', 'Part-time', 'Contract', 'Internship'] as const;
export const EXPERIENCE_LEVELS = ['Entry', 'Mid', 'Senior', 'Lead'] as const;

// Mentorship
export const SESSION_DURATIONS = [30, 45, 60, 90] as const; // minutes
export const MAX_SESSIONS_PER_WEEK = 5;

// Breakpoints (should match Tailwind config)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
