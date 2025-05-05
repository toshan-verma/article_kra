import morgan from 'morgan';
import expressRequestId from 'express-request-id';
import logger from '../utils/logger';

const assignRequestId = expressRequestId({ setHeader: false });

morgan.token('id', (req) => req.id);

const requestLogger = [
  assignRequestId,
  morgan(':date[iso] :method :url :status :response-time ms :id', {
    stream: {
      write: (message) => {
        logger.info(message.trim());
      },
    },
  }),
];

export default requestLogger;
