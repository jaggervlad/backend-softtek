import { UserGetAllParams } from './user.get-params';
import { User } from './user.schema';

export interface UserRepository {
  getAll(query: UserGetAllParams): Promise<User[]>;
  getById(id: number): Promise<User>;
  create(payload: Partial<User>): Promise<void>;
  updateById(id: number, payload: Partial<User>): Promise<User>;
  deleteById(id: number): Promise<void>;
}

