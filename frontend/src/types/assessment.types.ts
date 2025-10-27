// Assessment related types

export interface Assessment {
  id: string;
  title: string;
  description: string;
  type: AssessmentType;
  category: string;
  difficulty: string;
  duration: number; // in minutes
  questions: Question[];
  passingScore: number;
  totalPoints: number;
  attempts?: number;
  maxAttempts?: number;
  createdAt: string;
}

export enum AssessmentType {
  SKILL_TEST = 'skill_test',
  PERSONALITY = 'personality',
  APTITUDE = 'aptitude',
  TECHNICAL = 'technical',
  CODING_CHALLENGE = 'coding_challenge',
}

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  options?: Option[];
  correctAnswer?: string | string[];
  points: number;
  explanation?: string;
  codeSnippet?: string;
  language?: string;
}

export enum QuestionType {
  MULTIPLE_CHOICE = 'multiple_choice',
  MULTIPLE_SELECT = 'multiple_select',
  TRUE_FALSE = 'true_false',
  SHORT_ANSWER = 'short_answer',
  CODING = 'coding',
  RATING = 'rating',
}

export interface Option {
  id: string;
  text: string;
  isCorrect?: boolean;
}

export interface AssessmentAttempt {
  id: string;
  assessmentId: string;
  userId: string;
  startedAt: string;
  completedAt?: string;
  status: AttemptStatus;
  answers: Answer[];
  score?: number;
  percentage?: number;
  passed?: boolean;
  timeSpent?: number;
}

export enum AttemptStatus {
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  ABANDONED = 'abandoned',
}

export interface Answer {
  questionId: string;
  answer: string | string[];
  isCorrect?: boolean;
  pointsEarned?: number;
}

export interface AssessmentResult {
  id: string;
  attemptId: string;
  assessmentId: string;
  userId: string;
  score: number;
  percentage: number;
  passed: boolean;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  strengths: string[];
  weaknesses: string[];
  recommendations: Recommendation[];
  certificateUrl?: string;
  completedAt: string;
}

export interface Recommendation {
  id: string;
  type: 'course' | 'resource' | 'skill';
  title: string;
  description: string;
  url?: string;
  priority: 'high' | 'medium' | 'low';
}

export interface SkillGapAnalysis {
  userId: string;
  targetRole: string;
  currentSkills: SkillAssessment[];
  requiredSkills: SkillAssessment[];
  skillGaps: SkillGap[];
  overallReadiness: number; // 0-100
  recommendations: Recommendation[];
  learningPath?: string;
  estimatedTime: number; // in hours
}

export interface SkillAssessment {
  skillId: string;
  skillName: string;
  currentLevel: number; // 0-100
  requiredLevel?: number;
  verified?: boolean;
}

export interface SkillGap {
  skillId: string;
  skillName: string;
  currentLevel: number;
  requiredLevel: number;
  gap: number;
  priority: 'high' | 'medium' | 'low';
  recommendedCourses?: string[];
}
