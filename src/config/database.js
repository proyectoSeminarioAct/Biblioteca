require("dotenv").config()
const Sequelize =require("sequelize");

module.exports = sequelize = new Sequelize(
  process.env.PG_BD, 
  process.env.PG_USER,
  process.env.PG_PASS,
  {
    host: process.env.PG_HOST,
    dialect: "postgres",
  }
)
