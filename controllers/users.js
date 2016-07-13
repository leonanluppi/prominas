var Users = require('./../models').Users;

module.exports = {
    index: function(req, res, next) {
        Users.findAndCountAll()
                .then((result) => {
                    if (!result.rows) {
                        return;
                    }

                    return res.render('users', {
                        users: result.rows
                    });
                })
                .catch((err) => {
                    console.log(err);
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
