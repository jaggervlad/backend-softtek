import { NextFunction, Request, Response } from 'express';
import {
  validatePartialUserInput,
  validateUserInput,
} from '../domain/user.schema';
import { UserService } from './user.service';

export class UserController {
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = req.query;
      const users = await this.userService.getAll(query);

      return res.status(200).json({
        ok: true,
        error: null,
        data: users,
      });
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = +req.params.id;
      const user = await this.userService.getById(id);

      return res.status(200).json({
        ok: true,
        error: null,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body;
      const data = await validateUserInput(body);

      await this.userService.create(data);

      return res.status(200).json({
        ok: true,
        error: null,
        data: 'Usuario creado correctamente',
      });
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = +req.params.id;
      const body = req.body;

      const data = await validatePartialUserInput(body);

      const user = await this.userService.update(id, data);

      return res.status(200).json({
        ok: true,
        error: null,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = +req.params.id;
      await this.userService.delete(id);

      return res.status(200).json({
        ok: true,
        error: null,
        data: 'Usuario eliminado correctamente',
      });
    } catch (error) {
      return res.status(500).json({
        ok: false,
        error: 'Algo salio mal',
        data: null,
      });
    }
  };
}

export const userController = new UserController(new UserService());

