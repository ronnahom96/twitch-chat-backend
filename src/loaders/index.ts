import { Express } from 'express';
import config from 'config';
import mongoDbLoader, { DbConfig } from './mongoDb';
import socketIoLoader from './socketIo';

const dbConfig = config.get<DbConfig>('db');;

export default async (expressApp: Express) => {
    await mongoDbLoader(dbConfig);
    console.info('✌️ DB loaded and connected!');

    await socketIoLoader(expressApp);
    console.info('✌️ Socket Io loaded and connected!');
};
