import { Express } from 'express';
import config from 'config';
import mongoDbLoader, { DbConfig } from './mongoDb';
import socketIoLoader from './socketIo';
import dependencyInjectorLoader from './dependencyInjector';

const dbConfig = config.get<DbConfig>('db');;

export default async (expressApp: Express) => {
    const dataSource = await mongoDbLoader(dbConfig);
    console.info('✌️ DB loaded and connected!');

    const server = await socketIoLoader(expressApp);
    console.info('✌️ Socket Io loaded and connected!');

    dependencyInjectorLoader(dataSource)
    console.info('✌️ Dependency Injector loaded');

    return server;
};
