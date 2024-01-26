import { createConnection } from '../../db/mysql-connection';
import { UserRespository } from './user.respository';
import { User, UserRow } from './user.schema';

export class UserMysqlRepository implements UserRespository {
  async getAll(): Promise<User[]> {
    const connection = await createConnection();
    const [users] = await connection.query<UserRow[]>('SELECT * FROM users');

    return users;
  }

  async getById(id: number): Promise<User> {
    const connection = await createConnection();
    const [user] = await connection.query<UserRow[]>(
      'SELECT * FROM users WHERE id = ?',
      [id]
    );

    return user[0];
  }

  async create(input: Partial<User>) {
    const connection = await createConnection();
    const { username, client_id } = input;

    await connection.query(
      'INSERT INTO users (username, client_id, status) values (?,?,?)',
      [username, client_id, 1]
    );
  }

  async updateById(id: number, input: Partial<User>): Promise<void> {
    const connection = await createConnection();
    await connection.query('UPDATE users SET ? WHERE id = ?', [input, id]);
  }

  async deleteById(id: number) {
    const connection = await createConnection();

    await connection.query('DELETE FROM users WHERE id = ?', [id]);
  }
}
