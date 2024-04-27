import { UserMysqlRepository } from './user.mysql.repository';
import { UserUseCase } from '../application/user.use-case';

export class UserService {
  private userUseCase: UserUseCase;

  constructor() {
    this.userUseCase = new UserUseCase(new UserMysqlRepository());
  }

  async getAll(query: any) {
    return await this.userUseCase.getAll(query);
  }

  async getById(id: number) {
    return await this.userUseCase.getById(id);
  }

  async create(data: any) {
    return await this.userUseCase.create(data);
  }

  async update(id: number, data: any) {
    return await this.userUseCase.update(id, data);
  }

  async delete(id: number) {
    return await this.userUseCase.delete(id);
  }
}
