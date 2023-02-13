// import { Pool } from 'pg'
import { DataSource } from 'typeorm';
import { Message } from '../messages/models/Message';

let appDataSource!: DataSource;

export const initializeConnection = async (): Promise<DataSource> => {
  appDataSource = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    username: process.env.POSTGRES_DB_USER,
    password: process.env.POSTGRES_DB_PASSWORD,
    database: process.env.POSTGRES_DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Message],
    subscribers: [],
    migrations: [],
  });

  await appDataSource.initialize();
  return appDataSource;
}

export const closeDBConnection = async (): Promise<void> => {
  if (appDataSource.isInitialized) {
    await appDataSource.destroy();
  }
}
