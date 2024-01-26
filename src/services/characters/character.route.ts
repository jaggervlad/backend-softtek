import { Router } from 'express';
import { characterController } from './character.controller';

export const createCharacterRoutes = () => {
  const router = Router();

  router.get('/', characterController.getAllCharacters);
  router.get('/:id', characterController.getAllCharacterById);

  return router;
};
