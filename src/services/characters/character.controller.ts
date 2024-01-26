import { NextFunction, Request, Response } from 'express';
import { characterService } from './character.service';

export class CharacterController {
  getAllCharacters = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await characterService.fetchAllCharacters();

      res.status(200).json({
        ok: true,
        data: data,
        error: null,
      });
    } catch (error) {
      next(error);
    }
  };
  getAllCharacterById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;

      const character = await characterService.fetchCharacterById(id);

      res.status(200).json({
        ok: true,
        data: character,
        error: null,
      });
    } catch (error) {
      next(error);
    }
  };
}

export const characterController = new CharacterController();
