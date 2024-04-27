import { knex } from '../../../db/mysql-connection';
import { UserGetAllParams } from '../domain/user.get-params';
import { UserRepository } from '../domain/user.repository';
import { User } from '../domain/user.schema';

export class UserMysqlRepository implements UserRepository {
  async getAll(queryParams: UserGetAllParams): Promise<User[]> {
    const users = await knex
      .select('*')
      .from('users')
      .where((qb: any) => {
        if (queryParams?.search) {
          qb.where('name', 'like', `%${queryParams?.search}%`);
          qb.orWhere('username', 'like', `%${queryParams?.search}%`);
        }

        if (queryParams?.startDate && queryParams?.endDate) {
          qb.whereBetween('created_at', [
            queryParams?.startDate,
            queryParams?.endDate,
          ]);
        }
      });

    return users;
  }

  async getById(id: number): Promise<User> {
    const user = await knex.select('*').from('users').where('id', id).first();

    return user;
  }

  async create(input: Partial<User>) {
    await knex('users').insert({
      username: input.username,
      name: input.name,
      status: 1,
    });
  }

  async updateById(id: number, input: Partial<User>): Promise<User> {
    await knex('users').where('id', id).update(input);

    const user = await knex.select('*').from('users').where('id', id).first();

    return user;
  }

  async deleteById(id: number) {
    await knex('users').where('id', id).delete();
  }
}

