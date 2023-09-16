const mongoose = require("mongoose")


const connectToDB = async ()=>{

    mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology:true, useNewUrlParser:true})
    .then((conn) => console.log(`Database is connected on ${conn.connection.host}`))
    .catch((e)=> console.log("ERR:", e.message ))
}

module.exports = connectToDB