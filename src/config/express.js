import express from 'express';
import cors from 'cors';

import indexRoutes from '../routes/indexRoutes.js';
import userRoutes from '../routes/userRoutes.js';
import formRoutes from '../routes/formRoutes.js';

const configureExpress = function () {
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  // Routes
  app.use('/api/', indexRoutes);
  app.use('/api/user', userRoutes);
  app.use('/api/form', formRoutes);

  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

  return app;
}

export default configureExpress;