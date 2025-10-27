// Course related types

export interface Course {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  thumbnail: string;
  instructor: Instructor;
  category: string;
  tags: string[];
  difficulty: CourseDifficulty;
  duration: number; // in minutes
  modules: CourseModule[];
  rating: number;
  reviewCount: number;
  enrollmentCount: number;
  price: number;
  isPremium: boolean;
  isEnrolled?: boolean;
  progress?: number;
  createdAt: string;
  updatedAt: string;
}

export enum CourseDifficulty {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
}

export interface Instructor {
  id: string;
  name: string;
  title?: string;
  avatar?: string;
  bio?: string;
  rating?: number;
}

export interface CourseModule {
  id: string;
  title: string;
  description?: string;
  order: number;
  duration: number;
  lessons: Lesson[];
  isCompleted?: boolean;
  isLocked?: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  description?: string;
  type: LessonType;
  duration: number;
  content: string;
  resources?: Resource[];
  isCompleted?: boolean;
  order: number;
}

export enum LessonType {
  VIDEO = 'video',
  ARTICLE = 'article',
  QUIZ = 'quiz',
  EXERCISE = 'exercise',
  PROJECT = 'project',
}

export interface Resource {
  id: string;
  title: string;
  type: ResourceType;
  url: string;
  size?: number;
}

export enum ResourceType {
  PDF = 'pdf',
  VIDEO = 'video',
  LINK = 'link',
  CODE = 'code',
  DOCUMENT = 'document',
}

export interface CourseProgress {
  courseId: string;
  userId: string;
  progress: number; // 0-100
  completedLessons: string[];
  lastAccessedLesson?: string;
  startedAt: string;
  completedAt?: string;
  certificateUrl?: string;
}

export interface CourseEnrollment {
  id: string;
  courseId: string;
  userId: string;
  enrolledAt: string;
  expiresAt?: string;
  status: EnrollmentStatus;
}

export enum EnrollmentStatus {
  ACTIVE = 'active',
  COMPLETED = 'completed',
  EXPIRED = 'expired',
  CANCELLED = 'cancelled',
}

export interface CourseReview {
  id: string;
  courseId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment?: string;
  createdAt: string;
  helpful?: number;
}

export interface LearningPath {
  id: string;
  userId: string;
  title: string;
  description: string;
  goals: string[];
  courses: Course[];
  milestones: Milestone[];
  progress: number;
  estimatedDuration: number;
  createdAt: string;
  updatedAt: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  targetDate: string;
  isCompleted: boolean;
  completedAt?: string;
}
