require('dotenv').config()// for the server to read the .env file
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./route/index') 
const errorHandler = require('./middleware/ErrorHadlMiddleware')
const path = require('path')

const PORT = process.env.PORT  ||  5000 

const app = express()
app.use(cors())
app.use(express.json()) //Parsing the json format
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorHandler) // Middleware that works with errors should go last



const start = async() => {
    try {
        await sequelize.authenticate()  //connecting to the database
        await sequelize.sync() //checks the databse states against the data schema
        app.listen(5000,()=>{console.log(`Server start. PORT:${PORT}`)})        
    } catch (e) {
        console.log(e)
    }
}

start()
