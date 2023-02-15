import { Message } from '@/interfaces/message';
import MessageService from '@/services/message';
import { Router, Request, Response } from 'express';
import { Container } from 'typedi';

const route = Router();

export default (app: Router) => {
  app.use('/users', route);

  route.get('/message', (req: Request, res: Response) => {
    return res.json({ user: 'message' }).status(200);
  });

  route.post('/message', (req: Request, res: Response) => {
    const message: Message = req.body;
    const messageServiceInstance = Container.get(MessageService);
    messageServiceInstance.addMessage(message);

    return res.json({ user: 'message' }).status(200);
  });
};
