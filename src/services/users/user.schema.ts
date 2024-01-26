import { RowDataPacket } from 'mysql2';
import { z } from 'zod';

export const userSchema = z.object({
  username: z.string({ required_error: 'Nombre de usuario es requerido' }),
  client_id: z
    .number({ required_error: 'Apellido es requerido' })
    .positive({ message: 'Solo números positivos' })
    .int({ message: 'Solo números enteros' }),
});

export interface User {
  id: number;
  client_id: number;
  username: string;
  status: 0 | 1;
  created_at: Date;
  updated_at: Date;
}

export type UserRow = User & RowDataPacket;

export const validateUserInput = (body: any) => {
  return userSchema.parseAsync(body);
};

export const validatePartialUserInput = (body: any) => {
  return userSchema.partial().parseAsync(body);
};
