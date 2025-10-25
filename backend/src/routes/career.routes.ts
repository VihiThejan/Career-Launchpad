import { Router } from 'express';
import { body } from 'express-validator';
import { validate } from '../middleware/validator';
import { authenticate } from '../middleware/auth';
import {
  submitAssessment,
  getCareerPaths,
  getCareerPathById,
  generateCareerPath,
  updatePathProgress,
} from '../controllers/career.controller';

const router = Router();

// All career routes require authentication
router.use(authenticate);

// Assessment routes
router.post(
  '/assessment',
  validate([
    body('skills').isArray().withMessage('Skills array is required'),
    body('interests').isArray().withMessage('Interests array is required'),
    body('goals').notEmpty().withMessage('Career goals are required'),
  ]),
  submitAssessment
);

// Career path routes
router.get('/paths', getCareerPaths);
router.get('/paths/:id', getCareerPathById);
router.post('/paths/generate', generateCareerPath);
router.put(
  '/paths/:id/progress',
  validate([
    body('stepId').notEmpty().withMessage('Step ID is required'),
    body('completed').isBoolean().withMessage('Completed status is required'),
  ]),
  updatePathProgress
);

export default router;
