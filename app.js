require("dotenv").config()
const client = require('./config/postgres.js')
const sequelize = require('./config/database.js')
const usersRoutes = require ('./routes/users.routes.js')
const express = require("express")
const cors = require("cors")
const path = require("path")
const bp = require('body-parser')
const app = express()

// Config Swagger

const swaggerUI =  require("swagger-ui-express")
const swaggerJSDoc = require("swagger-jsdoc")
const { request } = require("express")
const swaggerSpec = {
    definition:{
        openapi: "3.0.0",
        info: {
            title: "Biblioteca Backend",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3001"
            }
        ]
    },
    apis: [`${path.join(__dirname,"./routes/*.js")}`]
}

app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerSpec)))


app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
// app.use(express.json())

app.use(cors())
app.use(usersRoutes)


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


/*client.connect();

app.get('/users', (req, res)=>{
    client.query(`Select * from users`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})*/



