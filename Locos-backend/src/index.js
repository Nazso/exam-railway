require('dotenv').config();
const config = require('config');
const mongoose = require('mongoose');
const morgan = require('morgan');
const logger = require('./config/logger');


const app = require('./server');

if(!config.has('database')) {
    logger.error('No database config found!');
    process.exit();
}

const port = process.env.PORT || 3000;

// mongoose.connect('mongodb+srv://NagyZsolt:Stratocaster76@cluster0.asejk.mongodb.net/locomotives?retryWrites=true&w=majority')
//     .then(() => logger.info('MongoDB connection is OK!'))
//     .catch((err) => {
//         logger.error(err);
//         process.exit();
//     });

app.listen(port, () => {
    console.log(`App is listening at localhost ${port}`)
});
