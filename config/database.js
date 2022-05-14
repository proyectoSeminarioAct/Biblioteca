require("dotenv").config()
const Sequelize =require("sequelize");

const sequelize = new Sequelize(
  process.env.PG_BD, // db name,
  process.env.PG_USER, // username
  process.env.PG_PASS, // password
  {
    host: process.env.PG_HOST,
    dialect: "postgres",
  }
)

module.exports = sequelize