const path = require('path');
const winston = require('winston');

const options = {
    console: {
        level: 'debug',      //a console-ra írandó logok mikor jöjjenek létre, mi a fontossági szint
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
            // winston.format.json()
        )
    },
    file: {                 //fájlba történő logolás
        level:'info',       //ez magasabb szint, mint a 'debug'!
        filename: path.join(__dirname, '..', '..', 'app.log'),
        format: winston.format.json()
    }
};

const logger = winston.createLogger({
    format: winston.format.simple(),    //az itt megadott format mindenre vonatkozik, amit nem definiáltunk  külön az Options-ben!
    transports: [
        new winston.transports.Console(options.console),
        new winston.transports.File(options.file)
    ],
    exitOnError: false
});

module.exports = logger;