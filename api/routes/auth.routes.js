import express from 'express';
import { signup, test } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.get('/test', test);

export default router;
