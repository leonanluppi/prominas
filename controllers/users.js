var db = require('./../models');

module.exports = {
    index: function(req, res, next) {

        return res.render('users', {
            users: obj
        });
    },

    new: function(req, res, next) {
        return res.render('create_users', {
            title: 'Create new user'
        });
    },

    create: function(req, res, next) {
        req.body.id = uid + 1;
        obj.push(req.body);


        return res.redirect('/users');
    }
};
