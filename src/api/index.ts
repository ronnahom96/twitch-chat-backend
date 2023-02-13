import { Router } from 'express';
import message from './routes/message';

export default () => {
	const app = Router();
	message(app);

	return app
}