
/*
 * GET home page.
 */

var Wine = require('../models/wine')

exports.wines = function(req, res) {
    Wine.find(function(err, wines) {
        if (err) throw err;
        res.json(wines)
    });
};

exports.wine = function(req, res) {
    console.log('find wine id ' + req.params.id)
    Wine.find({ id: req.params.id }, function(err, wine) {
        if (err) throw err
        res.json(wine)
    })
};