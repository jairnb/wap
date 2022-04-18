const User = require('../models/user');


module.exports.save = (req, res, next) => {
    res.json(User.save(req.body));
}

module.exports.getAll = (req, res, next) => {
    res.json(User.getAll());
}