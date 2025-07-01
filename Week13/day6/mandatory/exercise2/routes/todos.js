import express from 'express';


const todos = [{id: 1, task: 'Make Supper', completed: false}];

export const router = express.Router();

router.use(express.json());

router.get('/todos', (req, res) => {
    res.status(200).json(todos);
});


router.post('/todos', (req, res) => {
    let {task, completed} = req.body;
    if (!task) {
        res.status(400).json({msg: 'must place task in the body.'});
        return;
    } else if (! completed) {
        completed = false;
    } else if (typeof completed != 'boolean') {
        res.status(400).json({msg: 'completed value must be a boolean'});
        return;
    }

    let id = todos[todos.length -1].id + 1;
    todos.push({id, task, completed})
    res.status(201).json({msg: 'Created'});

});

router.put('/todos/:id', (req, res) => {
    let id = Number(req.params.id);
    if (!id) {
        res.status(400).json({msg: 'Not a valid id'});
        return;
    }
    let todo = todos.find(todo => todo.id === id);
    if (!todo) {
        res.status(404).json({msg: 'todo not found'});
        return;
    }

    let {task, completed} = req.body;
    if (!task) {
        res.status(400).json({msg: 'must place task in the body.'});
        return;
    } else if (! completed) {
        completed = todo.completed;
    } else if (typeof completed != 'boolean') {
        res.status(400).json({msg: 'completed value must be a boolean'});
        return;
    }
    todo.task = task;
    todo.completed = completed;
    res.json({msg: 'Item updated'});

    
})

router.delete('/todos/:id', (req, res) => {
    let id = Number(req.params.id);
    if (!id) {
        res.status(400).json({msg: 'invalid id given'});
        return;
    }
    let index = todos.findIndex(item => item.id === id);
    if (index === -1) {
        res.status(404).json({msg: 'todo not found'});
        return;
    }
    todos.splice(index, 1);
    res.json({msg: 'todo deleted.'})
})