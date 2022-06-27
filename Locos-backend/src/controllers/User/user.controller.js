const createError = require('http-errors');
const userService = require('./user.service');

exports.createNewUser = (req, res, next) => {

    if (!req.body['username'] || !req.body['email'] || !req.body['password']) {

        return next(new createError.BadRequest("Invalid request body"));
    }

    const newUser = {
        username: req.body['username'],
        email: req.body['email'],
        password: req.body['password'],
        role: 'user'
    }

    return userService.create(newUser)
        .then(userData => {
            res.status(201).json({
                id: userData._id,
                username: userData.username,
                role: userData.role,
                email: userData.email,
                password: userData.password
            });
        })
        .catch(err => {
            console.error(err);
            return next(new createError[500]('Could not saved user'));
        })
}

exports.getAllUsers = (req, res, next) => {

    return userService.findAll().then(userList => {
            res.json(userList);
        })
        .catch(err => {
            console.error(err);
            return next(new createError[500]('Could not send userList'))
        })
}

exports.getUserById = (req, res, next) => {
    const id = req.params.id;
    console.debug(`${new Date().toUTCString()}:${req.method} Request, path: ${req.path} with id:${id}`)

    return userService.findById(id)
        .then(user => {
            if (!user)  return next(new createError.NotFound(`Could not send person by id:${req.params.id}`));

            res.json(user)
        })
        .catch(err => {
            if (err.kind === "ObjectId") {
                // not found
                return next(new createError.NotFound(`User not found with id: ${id}`));
            } else {
                // unknown error
                return next(new createError.InternalServerError(err.message));
            }
        })
}

exports.updateUser = (req, res, next) => {
    const id = req.params.id;

    const { username, email, password } = req.body;

    const updatedUser = {
        username: username,
        email: email,
        password: password,
        role: 'user'
    }

    return userService.update(id, updatedUser)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            return next(new createError.BadRequest('Could not updated User with id: ' + id));
        })
};

exports.deleteUser = (req, res, next) => {
    const id = req.params.id;

    return userService.delete(id)
        .then(deletedUser => {
            res.json({
                userDeleted: true,
                id: deletedUser._id
            })
        })
        .catch(err => {
            return next(new createError[500](`User could not deleted by id:${id}`))
        })
}