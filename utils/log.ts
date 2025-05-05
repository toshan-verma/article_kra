import wLogger from './logger';

const logger:any = {};
logger.info = (...msg) => {
    wLogger.log('info', 'API_REQUEST', ...msg);
};

logger.apiRequest = (...msg) => {
    wLogger.log('info', 'API_REQUEST', ...msg);
};


logger.apiError = (...msg) => {
    wLogger.log('error', 'API_ERROR', ...msg);
};


export default logger;