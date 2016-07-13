module.exports = (sequelize, Sequelize) => {

  var Users = sequelize.define('Users', {
    name: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        notNull : true,
        isAlpha : true,
        notContainsWhiteSpaces: function(value) {
          if (!Array.isArray(value)) {
            return;
          }

          var whiteSpace = value.toString().split(' ');
          return !whiteSpace.length
                  ? true
                  : false;
       }
      }
    },
    age: {
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: true,
        notNull : true,
        isInt   : true
      }
    }
  });

  return Users;
};
