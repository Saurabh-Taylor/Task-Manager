const express = require("express")
const app = express()
const tasks = require("./routes/tasks.routes.js")
const connectToDB = require("./config/dbConnection.js")

require('dotenv').config()

const port = 3000

// Db Connection  -- we can use try catch here too as well
connectToDB()


// middlewares
app.use(express.static("./public"))
app.use(express.json())


// routes

app.use('/api/v1/tasks', tasks)


app.listen(port,()=>{
    console.log(`server is running on ${port}`);
}) 