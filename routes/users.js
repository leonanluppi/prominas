var express = require('express');
var router = express.Router();
var controller = require('./../controllers/users');

/* GET users listing. */
router.get('/', controller.index);
router.get('/new', controller.new);
router.post('/', controller.create);

module.exports = router;
