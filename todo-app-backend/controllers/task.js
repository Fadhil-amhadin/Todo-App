const { task } = require('../models')

exports.addTask = async (req, res) => {
    try {
        console.log(req.body)
        const data = req.body;
        await task.create(data);
        res.send({
            status: "success",
            message: "add data success"
        })
    } catch (error) {
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        await task.update(data, {
            where:{
                id
            }
        })
        res.send({
            status: "success",
            message: "update data success"
        })
    } catch (error) {
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.getTasks = async (req, res) => {
    try {
        const data = await task.findAll()
        res.send({
            status: "success",
            message: "get data success",
            data
        })
    } catch (error) {
        res.status(500).send({
            status: "failed",
            message: "server error"
        })   
    }
}

exports.getTask = async (req, res) => {
    try {
        const {id} = req.params;
        const data = await task.findOne({
            where: {
                id
            }
        })
        res.send({
            status: "success",
            message: "get data success",
            data
        })
    } catch (error) {
        res.status(500).send({
            status: "failed",
            message: "server error"
        })   
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        await task.destroy({
            where: {
                id
            }
        })
        res.send({
            status : "success",
            message : "delete data success"
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "server error"
        })
    }
}