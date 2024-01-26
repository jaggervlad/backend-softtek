import { Router } from 'express';
import { createUserRoutes } from './services/users';
import { createCharacterRoutes } from './services/characters/character.route';

export const publicRoutes = () => {
  const publicRouter = Router();

  publicRouter.use('/users', createUserRoutes());
  publicRouter.use('/characters', createCharacterRoutes());

  return publicRouter;
};
