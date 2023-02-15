import { DataSource } from 'typeorm';
import { Message } from '../models/message';

let appDataSource!: DataSource;

export interface DbConfig {
    connectionUrl: string;
}

export const closeDBConnection = async (): Promise<void> => {
    if (appDataSource.isInitialized) {
        await appDataSource.destroy();
    }
}

export default async (dbConfig: DbConfig): Promise<DataSource> => {
    appDataSource = new DataSource({
        type: "mongodb",
        url: dbConfig.connectionUrl,
        useUnifiedTopology: true,
        synchronize: false,
        entities: [Message],
        subscribers: [],
        migrations: [],
    });

    await appDataSource.initialize();
    return appDataSource;
};
