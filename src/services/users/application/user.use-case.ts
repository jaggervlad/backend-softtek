import { UserRepository } from '../domain/user.repository';

export class UserUseCase {
  constructor(private userRepository: UserRepository) {}

  async getAll(query: any) {
    try {
      const users = await this.userRepository.getAll(query);

      return users;
    } catch (error) {
      throw new Error('Error obteniendo usuarios');
    }
  }

  async getById(id: number) {
    try {
      const user = await this.userRepository.getById(id);

      return user;
    } catch (error) {
      throw new Error(`Error obteniendo usuarios ${id}`);
    }
  }

  async create(data: any) {
    try {
      const newUser = this.userRepository.create(data);

      return newUser;
    } catch (error) {
      throw new Error('Error creando usuario');
    }
  }

  async update(id: number, data: any) {
    try {
      const user = await this.userRepository.updateById(id, data);

      return user;
    } catch (error) {
      throw new Error(`Error actualizando usuario ${id}`);
    }
  }

  async delete(id: number) {
    try {
      await this.userRepository.deleteById(id);

      return true;
    } catch (error) {
      throw new Error(`Error eliminando usuario ${id}`);
    }
  }
}
