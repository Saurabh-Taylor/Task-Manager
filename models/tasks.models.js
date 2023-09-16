const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,
        maxLength:[20,'Not More Than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    }
})


module.exports = mongoose.model("Task", taskSchema)