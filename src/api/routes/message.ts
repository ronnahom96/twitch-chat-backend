import { Router, Request, Response } from 'express';
const route = Router();

export default (app: Router) => {
  app.use('/users', route);

  route.get('/message', (req: Request, res: Response) => {
    return res.json({ user: 'message' }).status(200);
  });
};
