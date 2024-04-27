import mysql from 'mysql2/promise';
import { DATABASE_URL } from '../shared/contants';

let connectionIntance: mysql.Pool | null = null;

export async function createConnection() {
  if (!connectionIntance) {
    connectionIntance = mysql.createPool(DATABASE_URL as string);
  }

  return connectionIntance;
}

export const knex = require('knex')({
  client: 'mysql2',
  connection: DATABASE_URL,
});
