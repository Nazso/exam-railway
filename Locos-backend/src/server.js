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
const YAML = require('yamljs');
const swaggerUI = require('swagger-ui-express');
const config = require('config');
// const path = require('path');

// const angularAppPath = path.join(__dirname, '..', 'public', 'angular');

const app = express();
app.use(cors());

const authenticationByJWT = require('./auth/authenticate');
const adminRoleHandler = require('./auth/adminOnly');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

app.use(morgan('combined', {stream: {write: (message) => logger.info(message)}}));        //a morgan alapértelmezetten mindig a console-ra logol.

//Authorization
const authHandler = require('./auth/authHandler');

app.use(express.json());

// app.use('/', express.static(angularAppPath));

app.use((req, res, next) => {
    console.log(req.url, req.method, req.httpVersion);
    next();
});

app.use(express.static('./public'));

//YAML DOCS endpoint
app.use('/docs', swaggerUI.serve, swaggerUI.setup(YAML.load('./docs/swagger.yaml')))

//authentication
app.post('/login', authHandler.login);
app.post('/refresh', authHandler.refresh);
app.post('/logout', authHandler.logout);

//endpoints
app.use('/user', userRoutes);
app.use('/diesel', dieselRoutes);
app.use('/electric', electricRoutes);
app.use('/comment', authenticationByJWT, commentRoutes);
app.use('/buyitem', authenticationByJWT, buyItemRoutes);

//error handling midleware
app.use((err, req, res, next) => {
    logger.error(`Error ${err.statusCode}: ${err.message}`);
    res.status(err.statusCode);
    res.json({
        hasError: true,
        message: err.message
    });
});

module.exports = app;
