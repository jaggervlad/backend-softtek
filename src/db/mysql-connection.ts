import mysql from 'mysql2/promise';

let connectionIntance: mysql.Pool | null = null;

export async function createConnection() {
  if (!connectionIntance) {
    connectionIntance = mysql.createPool(process.env.DATABASE_URL as string);
  }

  return connectionIntance;
}
