require('dotenv').config();
const config = require('config');
const logger = require('./config/logger');

const app = require('./server');


if(!config.has('database')) {
    logger.error('No database config found!');
    process.exit();
}
const port = config.port || 3000;

const connectionString = process.env.DB_CONNECTION

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Mongodb connection is successful');
}).catch((err) => {
    console.log(err);
    process.exit();
});


console.log(process.env.PORT);

app.listen(port, () => {
    console.log(`App is listening at localhost ${port}`)
});
