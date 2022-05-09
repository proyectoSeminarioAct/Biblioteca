const Sequelize =require("sequelize");

const sequelize = new Sequelize(
  "BD_BIBLIOTECA", // db name,
  "postgres", // username
  "postgrest", // password
  {
    host: "localhost",
    dialect: "postgres",
  }
)


module.exports = sequelize