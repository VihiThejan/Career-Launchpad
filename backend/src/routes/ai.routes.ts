import { Router } from 'express';
import { body } from 'express-validator';
import { validate } from '../middleware/validator';
import { authenticate } from '../middleware/auth';
import { aiRateLimiter } from '../middleware/rateLimiter';
import {
  chatWithAI,
  analyzeResume,
  generateCoverLetter,
  getCareerAdvice,
  optimizeLinkedInProfile,
} from '../controllers/ai.controller';

const router = Router();

// All AI routes require authentication and have stricter rate limiting
router.use(authenticate);
router.use(aiRateLimiter);

router.post(
  '/chat',
  validate([body('message').notEmpty().withMessage('Message is required')]),
  chatWithAI
);

router.post(
  '/analyze-resume',
  validate([body('resumeText').notEmpty().withMessage('Resume text is required')]),
  analyzeResume
);

router.post(
  '/generate-cover-letter',
  validate([
    body('jobDescription').notEmpty().withMessage('Job description is required'),
    body('userProfile').notEmpty().withMessage('User profile is required'),
  ]),
  generateCoverLetter
);

router.post(
  '/career-advice',
  validate([body('question').notEmpty().withMessage('Question is required')]),
  getCareerAdvice
);

router.post(
  '/optimize-linkedin',
  validate([body('profileData').notEmpty().withMessage('Profile data is required')]),
  optimizeLinkedInProfile
);

export default router;
