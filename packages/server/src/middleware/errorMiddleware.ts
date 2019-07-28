import { ErrorRequestHandler } from "express";

const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err);

  res.send(err);
};

export default errorMiddleware;
