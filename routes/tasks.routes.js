const express = require('express')
const {getAllTasks ,createTask ,getTask , deleteTask ,updateTask } = require("../controllers/task.controllers.js")

const router = express.Router()


router.route('/')
        .get(getAllTasks)
        .post(createTask)

        
router.route('/:id')
        .get(getTask)
        .patch(updateTask)
        .delete(deleteTask)


module.exports = router