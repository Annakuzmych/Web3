module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("userProfill", {
    name: {
      type: Sequelize.TEXT
    },
    mail: {
      type: Sequelize.TEXT
    },
    pass: {
      type: Sequelize.TEXT
    },
    bd: {
      type: Sequelize.TEXT
    },
    sex: {
      type: Sequelize.TEXT
    },

  });

  return User;
};
