// API endpoints

const API_VERSION = '/v1';

export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: `${API_VERSION}/auth/login`,
    REGISTER: `${API_VERSION}/auth/register`,
    LOGOUT: `${API_VERSION}/auth/logout`,
    REFRESH: `${API_VERSION}/auth/refresh`,
    VERIFY_EMAIL: `${API_VERSION}/auth/verify-email`,
    FORGOT_PASSWORD: `${API_VERSION}/auth/forgot-password`,
    RESET_PASSWORD: `${API_VERSION}/auth/reset-password`,
    GOOGLE_LOGIN: `${API_VERSION}/auth/google`,
    LINKEDIN_LOGIN: `${API_VERSION}/auth/linkedin`,
  },
  
  // User
  USER: {
    PROFILE: `${API_VERSION}/users/profile`,
    UPDATE_PROFILE: `${API_VERSION}/users/profile`,
    CHANGE_PASSWORD: `${API_VERSION}/users/change-password`,
    UPLOAD_AVATAR: `${API_VERSION}/users/avatar`,
    PREFERENCES: `${API_VERSION}/users/preferences`,
  },
  
  // Courses
  COURSES: {
    LIST: `${API_VERSION}/courses`,
    DETAIL: (id: string) => `${API_VERSION}/courses/${id}`,
    ENROLL: (id: string) => `${API_VERSION}/courses/${id}/enroll`,
    MY_COURSES: `${API_VERSION}/courses/my-courses`,
    PROGRESS: (id: string) => `${API_VERSION}/courses/${id}/progress`,
    COMPLETE: (id: string) => `${API_VERSION}/courses/${id}/complete`,
  },
  
  // Assessments
  ASSESSMENTS: {
    LIST: `${API_VERSION}/assessments`,
    DETAIL: (id: string) => `${API_VERSION}/assessments/${id}`,
    START: (id: string) => `${API_VERSION}/assessments/${id}/start`,
    SUBMIT: (id: string) => `${API_VERSION}/assessments/${id}/submit`,
    RESULTS: (id: string) => `${API_VERSION}/assessments/${id}/results`,
    SKILL_GAP: `${API_VERSION}/assessments/skill-gap`,
  },
  
  // Jobs
  JOBS: {
    LIST: `${API_VERSION}/jobs`,
    DETAIL: (id: string) => `${API_VERSION}/jobs/${id}`,
    APPLY: (id: string) => `${API_VERSION}/jobs/${id}/apply`,
    APPLICATIONS: `${API_VERSION}/jobs/applications`,
    RECOMMENDATIONS: `${API_VERSION}/jobs/recommendations`,
  },
  
  // Mentors
  MENTORS: {
    LIST: `${API_VERSION}/mentors`,
    DETAIL: (id: string) => `${API_VERSION}/mentors/${id}`,
    BOOK: (id: string) => `${API_VERSION}/mentors/${id}/book`,
    SESSIONS: `${API_VERSION}/mentors/sessions`,
    REVIEW: (id: string) => `${API_VERSION}/mentors/${id}/review`,
  },
  
  // Messages
  MESSAGES: {
    LIST: `${API_VERSION}/messages`,
    CONVERSATION: (id: string) => `${API_VERSION}/messages/conversations/${id}`,
    SEND: `${API_VERSION}/messages/send`,
    MARK_READ: (id: string) => `${API_VERSION}/messages/${id}/read`,
  },
  
  // Learning Path
  LEARNING_PATH: {
    GET: `${API_VERSION}/learning-path`,
    UPDATE: `${API_VERSION}/learning-path`,
    RECOMMENDATIONS: `${API_VERSION}/learning-path/recommendations`,
  },
  
  // Resources
  RESOURCES: {
    LIST: `${API_VERSION}/resources`,
    DETAIL: (id: string) => `${API_VERSION}/resources/${id}`,
    BOOKMARK: (id: string) => `${API_VERSION}/resources/${id}/bookmark`,
  },
  
  // Notifications
  NOTIFICATIONS: {
    LIST: `${API_VERSION}/notifications`,
    MARK_READ: (id: string) => `${API_VERSION}/notifications/${id}/read`,
    MARK_ALL_READ: `${API_VERSION}/notifications/read-all`,
    PREFERENCES: `${API_VERSION}/notifications/preferences`,
  },
  
  // Admin
  ADMIN: {
    USERS: `${API_VERSION}/admin/users`,
    USER_DETAIL: (id: string) => `${API_VERSION}/admin/users/${id}`,
    COURSES: `${API_VERSION}/admin/courses`,
    JOBS: `${API_VERSION}/admin/jobs`,
    ANALYTICS: `${API_VERSION}/admin/analytics`,
  },
  
  // AI Features
  AI: {
    CHAT: `${API_VERSION}/ai/chat`,
    RECOMMENDATIONS: `${API_VERSION}/ai/recommendations`,
    RESUME_ANALYZE: `${API_VERSION}/ai/resume-analyze`,
    INTERVIEW_PREP: `${API_VERSION}/ai/interview-prep`,
  },
} as const;
