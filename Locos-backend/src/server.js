const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
const logger = require('./config/logger');
const dieselRoutes = require('./controllers/Diesel/diesel.routes');
const electricRoutes = require('./controllers/Electrician/electric.routes');
const commentRoutes = require('./controllers/Comment/comment.routes');
const buyItemRoutes = require('./controllers/BuyItems/buyItems.routes');
const userRoutes = require('./controllers/User/user.routes');
const cors = require('cors');

const app = express();
app.use(cors());

const authenticationByJWT = require('./auth/authenticate');
const adminRoleHandler = require('./auth/adminOnly');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// mongoose.set('useFindAndModify', false);

const connectionString = process.env.DB_CONNECTION;
console.log(process.env.PORT);
// console.log(connectionString);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Mongodb connection is successful');
}).catch((err) => {
    console.log(err);
    process.exit();
});


// mongoose.connect('mongodb+srv://NagyZsolt:Stratocaster76@cluster0.asejk.mongodb.net/locomotives?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => logger.info('MongoDB connection is OK!'))
//     .catch((err) => {
//         logger.error(err);
//         process.exit();
//     });

app.use(morgan('combined', {stream: {write: (message) => logger.info(message)}}));        //a morgan alapértelmezetten mindig a console-ra logol.

//Authorization
const authHandler = require('./auth/authHandler');

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.url, req.method, req.httpVersion);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

// app.use(express.static('./public'));

// app.use('/download/:img', (req, res) => {
//     res.download(`./public/img/${
//         req.params.img}`)
// });

app.post('/login', authHandler.login);
app.post('/refresh', authHandler.refresh);
app.post('/logout', authHandler.logout);


app.use('/user', userRoutes);
app.use('/diesel', dieselRoutes);
app.use('/electric', electricRoutes);
app.use('/comment', authenticationByJWT, commentRoutes);
app.use('/buyitem', authenticationByJWT, buyItemRoutes);

//hibakezelő midleware
app.use((err, req, res, next) => {
    logger.error(`Error ${err.statusCode}: ${err.message}`);
    res.status(err.statusCode);
    res.json({
        hasError: true,
        message: err.message
    });
});

module.exports = app;