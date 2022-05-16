const numeros = require('./numeros.js');
const Logger = require('logplease');
const logger = Logger.create('Mensaje');

const verify = (x) => {
    if (numeros.esPar(x) == true) {
        logger.info(`El numero ${x} es par.`)
    } else {
        logger.error(`El numero ${x} es inpar`)
    }
}

verify(2)
verify(3)
verify(101)
verify(201)
verify(202)
verify(100)