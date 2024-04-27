import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express';

import { errorMiddleware } from './middlewares/error.handler';
import { publicRoutes } from './routes';

import YAML from 'yamljs';
const swaggerDocument = YAML.load('./swagger.yaml');

export const createApp = (prefix: string) => {
  const app = express();

  // Middlawares
  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  app.use(morgan('dev'));

  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

  // Routes
  app.use(prefix, publicRoutes());

  // Handle Error Middleware
  app.use(errorMiddleware);

  return app;
};

