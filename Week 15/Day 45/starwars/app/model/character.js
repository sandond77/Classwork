var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Characters = sequelize.define("characters", {
  // id: {
  //   type: Sequelize.INT,
  //   autoIncrement: true,
  //   primaryKey: true
  // },
  routeName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  forcePoints: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});


Characters.sync();

module.exports = Characters;
