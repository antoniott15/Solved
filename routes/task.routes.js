const express = require('express');
const router = express.Router();
const Task = require('../models/models');

router.get('/', async (req,res) => {
    const task = await Task.find();
    console.log(task);
    res.json(task);
});

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});

router.post('/', async (req,res) => {
    const {
        title,
        description
    } = req.body;
    const task = new Task({
        title,
        description
    });
    await task.save();
    console.log(task);
    res.json({
        status: 'task saved'
    });
});

router.put('/:id', async (req,res)=>{
    const {
        title,
        description
    } = req.body;
    const newTask = {
        title,
        description
    };
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({
        status: 'task update'
    });
});

router.delete('/:id', async (req,res) => {
    await Task.findByIdAndRemove(req.params.id, newTask);
     res.json({
         status: 'task delete'
     });
});

module.exports = router;