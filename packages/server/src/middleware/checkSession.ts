import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  const { session } = req;

  if (session && session.user) {
    res.send(session.user);
  }

  next();
};
