const express = require('express');
const router = express.Router();

const { addTask, updateTask, getTasks, getTask, deleteTask } = require('../controllers/task');

router.get('/tasks', getTasks)
router.post('/tasks', addTask)
router.get('/tasks/:id', getTask)
router.patch('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)

module.exports = router;