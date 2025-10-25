import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import {
  getCourseRecommendations,
  getCourseById,
  trackCourseProgress,
  getLearningPath,
} from '../controllers/learning.controller';

const router = Router();

// All learning routes require authentication
router.use(authenticate);

router.get('/courses/recommendations', getCourseRecommendations);
router.get('/courses/:id', getCourseById);
router.post('/courses/:id/progress', trackCourseProgress);
router.get('/learning-path', getLearningPath);

export default router;
