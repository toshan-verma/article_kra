import logger from '../utils/logger';
import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: Error, req: Request, res: Response): void => {
  logger.error({
    message: err.message,
    stack: err.stack,
    url: req.originalUrl,
    method: req.method,
    body: req.body,
  });

  res.status(500).json({ error: 'Internal Server Error' });
};

export default errorHandler;
