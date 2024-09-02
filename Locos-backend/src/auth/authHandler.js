const jwt = require('jsonwebtoken');
const User = require('../model/user.model');
const Token = require('../model/token.model');

module.exports.login = (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username: username, password: password })
        .then(user => {
            if (user) {
                const accessToken = jwt.sign({
                    username: user.username,
                    role: user.role,
                    user_id: user.user_id
                }, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: process.env.TOKEN_EXPIRY
                });

                const refreshToken = jwt.sign({
                    username: user.username,
                    role: user.role,
                    user_id: user.user_id
                }, process.env.REFRESH_TOKEN_SECRET);

                const newRefreshToken = new Token({
                    token: refreshToken
                });

                newRefreshToken.save()

                res.json({
                    accessToken,
                    refreshToken,
                    username: user.username,
                    user_id: user._id,
                    role: user.role
                })
            } else {
                res.status(400).json('Felhasználónév vagy jelszó nem megfelelő!');
            }
        });
}

module.exports.refresh = (req, res) => {
    const { token } = req.body;

    if (!token) {
        res.sendStatus(401);
        return;
    }
    Token.findOne({ token: token })
        .then(data => {
            if (data) {
                jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {

                    if (err) {
                        res.sendStatus(403);
                    }
                    const accessToken = jwt.sign({
                        username: user.username,
                        role: user.role,
                        user_id: user.user_id
                    }, process.env.ACCESS_TOKEN_SECRET, {
                        expiresIn: process.env.TOKEN_EXPIRY
                    });
                    res.json({
                        accessToken,
                        personData: {
                            username: user.username,
                            role: user.role,
                            user_id: user.user_id
                        }
                    });
                    return;
                })
            }
        })
}

module.exports.logout = (req, res) => {
    const { token } = req.body;
    if (!token) {
        res.sendStatus(403);
        return;
    }

    Token.findOneAndRemove({ token: token })
        .then(data => {
            if (data) {
                res.status(200).send({});
            } else {
                res.sendStatus(403);
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json("...");
        })
}
