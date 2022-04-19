const User = require('../models/user');


module.exports.save = (req, res, next) => {
    res.json(User.User.save(req.body));
}

module.exports.getAll = (req, res, next) => {
    res.json(User.User.getAll());
}


module.exports.login = (req, res, next) => {
    res.status(200).json(User.login(req.body));
}