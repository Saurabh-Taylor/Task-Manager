const Task = require("../models/tasks.models.js")



const getAllTasks = async (req,res)=>{
   
    try {
        const tasks = await Task.find({})
        return res.status(200).json({
        success:true,
        message:"Tasks Fetched SuccessFully",
        tasks
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }

}

const createTask = async(req,res)=>{

    try {
        const task = await Task.create(req.body)
        return res.status(200).json({
        task
    })

    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }

    
}

const getTask = async(req,res)=>{

   try {
    const { id } = req.params

    const singleTask =  await Task.findById(id)

    if(!singleTask){
        return res.status(404).json({
            success:false,
            message:"Did Not Found Any Task associated with this ID"
        })
    }

    return res.status(200).json({
        success:true,
        message:"Task Fetched SuccessFully",
        singleTask
        })


   } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
   }

}

const updateTask = async(req,res)=>{
   
    try {
        const { id } = req.params

        const updatedTask = await Task.findByIdAndUpdate(id,req.body,{new:true,runValidators:true})

        res.status(200).json({
            success:true,
            message:'Task Updated SuccessFully',
            updatedTask
        })
    } catch (error) {
        
    }

}

const deleteTask = async(req,res)=>{
   
    try {
        const { id } = req.params
    
        const singleTask =  await Task.findByIdAndDelete(id)
    
        if(!singleTask){
            return res.status(404).json({
                success:false,
                message:"Couldnot fetch"
            })
        }
    
        return res.status(200).json({
            success:true,
            message: "Task Deleted SuccessFully" ,
            })
    
    
       } catch (error) {
            return res.status(500).json({
                success:false,
                message:error.message
            })
       }
    
}



module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask 
}
