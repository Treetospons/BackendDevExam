const express = require("express");
const router = express.Router();

let TodoList = [];

router.get("/", (req, res) => {
  res.send(TodoList).end();
});

router.get("/:id", (req, res) => {
  const result = TodoList.filter((i) => i?.id.toString() === req.params?.id);
  res.send(result).end();
});

router.post("/create", (req, res) => {
  if (!req.body?.id) {
    res.status(400).send('required id').end()
  }
  const todoIndex = TodoList.findIndex((i) => i?.id === req.body?.id);
  if (todoIndex > 0) {
    res.status(400).send('todolist duplicate').end()
  }
  TodoList.push(req.body);
  res.send(req.body).end();
});

router.put("/update", (req, res) => {
  if (!req.body?.id) {
    res.status(400).send('required id').end()
  }
  const todoIndex = TodoList.findIndex((i) => i?.id === req.body?.id);

  if (todoIndex < 0) {
    res.status(404).send('not found').end()
  }
  const todo = TodoList.filter((i) => i?.id === req.body?.id);
  const newTodo = Object.assign({}, ...todo, req.body);
  TodoList[todoIndex] = newTodo;
  res.send(newTodo).end();
});

router.delete("/:id", (req, res) => {
  const newTodo = TodoList.filter((i) => i?.id.toString() !== req.params?.id);
  TodoList = newTodo
  res.send(newTodo).end();
});

module.exports = router;
