const todoRouter = require('express').Router()
const { saveTodo, getTodosOfUser, changeTodoState } = require('../controllers/todo.controllers')

todoRouter
  .post('/create/:userID', saveTodo)
  .get('/:userID', getTodosOfUser)
  .patch('/patch/:taskID', changeTodoState)

module.exports = todoRouter