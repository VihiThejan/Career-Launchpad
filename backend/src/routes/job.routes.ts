import { Router } from 'express';
import { body } from 'express-validator';
import { validate } from '../middleware/validator';
import { authenticate } from '../middleware/auth';
import {
  searchJobs,
  getJobById,
  getJobMatches,
  applyToJob,
  getApplications,
  updateApplicationStatus,
} from '../controllers/job.controller';

const router = Router();

// All job routes require authentication
router.use(authenticate);

router.get('/search', searchJobs);
router.get('/matches', getJobMatches);
router.get('/:id', getJobById);
router.post(
  '/:id/apply',
  validate([
    body('coverLetter').optional().trim(),
    body('resumeUrl').notEmpty().withMessage('Resume URL is required'),
  ]),
  applyToJob
);
router.get('/applications/me', getApplications);
router.put(
  '/applications/:id',
  validate([
    body('status')
      .isIn(['applied', 'interviewing', 'offer', 'rejected', 'withdrawn'])
      .withMessage('Invalid status'),
  ]),
  updateApplicationStatus
);

export default router;
