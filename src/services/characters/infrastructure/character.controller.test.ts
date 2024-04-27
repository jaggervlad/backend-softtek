import { Request, Response, NextFunction } from 'express';
import { CharacterController } from './character.controller';
import { characterService } from './character.service';
import {
  CHARACTERS_MOCK_DATA,
  DETAIL_CHARACTER_MOCK,
} from '../../../shared/mock/character-mock-data';

describe('CharacterController', () => {
  let characterController: CharacterController;
  let req: Request;
  let res: Response;
  let next: NextFunction;

  const mockCharacterService = {
    fetchAllCharacters: jest.fn(),
    fetchCharacterById: jest.fn(),
  };

  beforeEach(() => {
    characterController = new CharacterController();
    req = {} as Request;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    next = jest.fn() as NextFunction;

    jest
      .spyOn(characterService, 'fetchAllCharacters')
      .mockImplementation(mockCharacterService.fetchAllCharacters);
    jest
      .spyOn(characterService, 'fetchCharacterById')
      .mockImplementation(mockCharacterService.fetchCharacterById);
  });

  describe('getAllCharacters', () => {
    test('should return status 200 and data', async () => {
      const charactersData = CHARACTERS_MOCK_DATA;
      (characterService.fetchAllCharacters as jest.Mock).mockResolvedValue(
        charactersData
      );

      await characterController.getAllCharacters(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        ok: true,
        data: charactersData,
        error: null,
      });
    });

    test('should call next with error if service throws an error', async () => {
      const error = new Error('Test error');
      (characterService.fetchAllCharacters as jest.Mock).mockRejectedValue(
        error
      );

      await characterController.getAllCharacters(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe('getAllCharacterById', () => {
    test('should return status 200 and character data', async () => {
      req.params = { id: '1' };

      const characterData = DETAIL_CHARACTER_MOCK;
      (characterService.fetchCharacterById as jest.Mock).mockResolvedValue(
        characterData
      );

      await characterController.getAllCharacterById(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        ok: true,
        data: characterData,
        error: null,
      });
    });

    test('should call next with error if service throws an error', async () => {
      req.params = { id: '1' };

      const error = new Error('Test error');
      (characterService.fetchCharacterById as jest.Mock).mockRejectedValue(
        error
      );

      await characterController.getAllCharacterById(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
