import "reflect-metadata";

import express from 'express';
import config from 'config';
import { DEFAULT_SERVER_PORT } from './common/constants';

async function startServer() {
    const app = express();
    const port: number = config.get<number>('server.port') || DEFAULT_SERVER_PORT;
    await require('./loaders').default(app);

    app.listen(port, () => {
        console.info(`
      ################################################
      🛡️  Server listening on port: ${port} 🛡️
      ################################################
    `);
    }).on('error', err => {
        console.error(err);
        process.exit(1);
    });
}

startServer();
