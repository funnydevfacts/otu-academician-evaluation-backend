import express from 'express';

import { createUser, getUser } from '../controllers/userController.js';

const router = express.Router();

router.route('/')
  .get(getUser)
  .post(createUser);

export default router;