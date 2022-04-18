const Book = require('../models/book');

exports.getAll = (req, res, next) => {
    res.status(200).json(Book.getAll());
}

exports.get = (req, res, next) => {
    res.status(200).json(Book.get(req.params.id));
}

exports.save = (req, res, next) => {
    res.status(201).json(Book.save(req.body))
}

exports.update = (req, res, next) => {
    res.status(200).json(Book.update(req.params.id, req.body));
}

exports.delete = (req, res, next) => {
    res.status(200).json(Book.delete(req.params.id));
}
