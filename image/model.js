const Sequelize = require("sequelize");
const db = require("../db");

const image = db.define("image", {
  url: Sequelize.STRING,
  title: Sequelize.STRING
});

module.exports = image;
