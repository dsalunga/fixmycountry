'use strict';

module.exports = function (router) {
    var model = {};

    router.get('/', function (req, res) {
        res.render('dust/index', model);
    });
};
