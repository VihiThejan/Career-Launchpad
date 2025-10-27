// Job related types

export interface Job {
  id: string;
  title: string;
  company: Company;
  description: string;
  requirements: string[];
  responsibilities: string[];
  location: string;
  locationType: LocationType;
  jobType: JobType;
  experienceLevel: ExperienceLevel;
  salary?: SalaryRange;
  skills: string[];
  benefits?: string[];
  applicationDeadline?: string;
  postedAt: string;
  updatedAt: string;
  status: JobStatus;
  applicationCount?: number;
  viewCount?: number;
  isBookmarked?: boolean;
  matchScore?: number; // 0-100
}

export interface Company {
  id: string;
  name: string;
  logo?: string;
  website?: string;
  description?: string;
  industry?: string;
  size?: string;
  location?: string;
}

export enum LocationType {
  REMOTE = 'remote',
  ONSITE = 'onsite',
  HYBRID = 'hybrid',
}

export enum JobType {
  FULL_TIME = 'full_time',
  PART_TIME = 'part_time',
  CONTRACT = 'contract',
  INTERNSHIP = 'internship',
  FREELANCE = 'freelance',
}

export enum ExperienceLevel {
  ENTRY = 'entry',
  JUNIOR = 'junior',
  MID = 'mid',
  SENIOR = 'senior',
  LEAD = 'lead',
  EXECUTIVE = 'executive',
}

export interface SalaryRange {
  min: number;
  max: number;
  currency: string;
  period: 'hourly' | 'monthly' | 'yearly';
}

export enum JobStatus {
  OPEN = 'open',
  CLOSED = 'closed',
  FILLED = 'filled',
  ON_HOLD = 'on_hold',
}

export interface JobApplication {
  id: string;
  jobId: string;
  job: Job;
  userId: string;
  resume: string;
  coverLetter?: string;
  answers?: ApplicationAnswer[];
  status: ApplicationStatus;
  appliedAt: string;
  updatedAt: string;
  notes?: string;
}

export interface ApplicationAnswer {
  questionId: string;
  question: string;
  answer: string;
}

export enum ApplicationStatus {
  DRAFT = 'draft',
  SUBMITTED = 'submitted',
  UNDER_REVIEW = 'under_review',
  SHORTLISTED = 'shortlisted',
  INTERVIEW_SCHEDULED = 'interview_scheduled',
  OFFER_EXTENDED = 'offer_extended',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  WITHDRAWN = 'withdrawn',
}

export interface Resume {
  id: string;
  userId: string;
  title: string;
  content: ResumeContent;
  templateId?: string;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ResumeContent {
  personalInfo: {
    fullName: string;
    email: string;
    phone?: string;
    location?: string;
    linkedIn?: string;
    github?: string;
    website?: string;
  };
  summary?: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  certifications?: Certification[];
  projects?: Project[];
  languages?: Language[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  startDate: string;
  endDate?: string;
}

export interface Language {
  name: string;
  proficiency: 'basic' | 'conversational' | 'fluent' | 'native';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
}

export interface JobSearchFilters {
  keywords?: string;
  location?: string;
  locationType?: LocationType[];
  jobType?: JobType[];
  experienceLevel?: ExperienceLevel[];
  salaryMin?: number;
  salaryMax?: number;
  skills?: string[];
  companySize?: string[];
  postedWithin?: number; // days
}
