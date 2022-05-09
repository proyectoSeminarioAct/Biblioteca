require("dotenv").config()
const client = require('./config/postgres.js')
const sequelize = require('./config/database.js')
const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

const port = process.env.port

app.listen (port, () => {
    console.log(`http://localhost:${port}`);
    connectsequelize();
})

async function connectsequelize() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}


client.connect();

app.get('/users', (req, res)=>{
    client.query(`Select * from users`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})



