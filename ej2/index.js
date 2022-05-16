const Logger = require('logplease');
const logger = Logger.create('Mensaje');

logger.debug('Hola Mundo desde Node ^^');
logger.info('Noticias de última hora, Node.js me encanta!!');
logger.warn('Tirando warnings como campeones');
logger.error('Algo no está bien!!!')