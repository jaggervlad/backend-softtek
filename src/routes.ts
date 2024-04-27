import { Router } from 'express';
import { createCharacterRoutes } from './services/characters/infrastructure/character.route';
import { createUserRoutes } from './services/users/infrastructure/user.routes';

export const publicRoutes = () => {
  const publicRouter = Router();

  publicRouter.use('/users', createUserRoutes());
  publicRouter.use('/characters', createCharacterRoutes());

  return publicRouter;
};

