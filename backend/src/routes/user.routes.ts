import { Router } from 'express';
import { body } from 'express-validator';
import { validate } from '../middleware/validator';
import { authenticate } from '../middleware/auth';
import {
  getProfile,
  updateProfile,
  uploadResume,
  deleteResume,
  addSkill,
  removeSkill,
  updateSkillProficiency,
} from '../controllers/user.controller';

const router = Router();

// All user routes require authentication
router.use(authenticate);

// Profile routes
router.get('/profile', getProfile);
router.put(
  '/profile',
  validate([
    body('name').optional().trim().notEmpty(),
    body('headline').optional().trim(),
    body('bio').optional().trim(),
    body('location').optional().trim(),
  ]),
  updateProfile
);

// Resume routes
router.post('/resume', uploadResume);
router.delete('/resume', deleteResume);

// Skills routes
router.post(
  '/skills',
  validate([
    body('skillId').notEmpty().withMessage('Skill ID is required'),
    body('proficiency')
      .isInt({ min: 1, max: 5 })
      .withMessage('Proficiency must be between 1 and 5'),
  ]),
  addSkill
);
router.delete('/skills/:skillId', removeSkill);
router.put(
  '/skills/:skillId',
  validate([
    body('proficiency')
      .isInt({ min: 1, max: 5 })
      .withMessage('Proficiency must be between 1 and 5'),
  ]),
  updateSkillProficiency
);

export default router;
