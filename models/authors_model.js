const DataTypes =require("sequelize");
const sequelize = require('./config/database.js')

sequelize.define('authors',{
    aut_id:{
        type: DataTypes.INTEGER,
    },
    aut_name:{
        type: DataTypes.STRING
    },
    aut_lastname:{
        type: DataTypes.STRING
    }
}) 