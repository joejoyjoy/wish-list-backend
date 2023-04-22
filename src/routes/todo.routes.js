const todoRouter = require('express').Router()
const { saveTodo, getTodosOfUser, changeTodoState, deleteTodo } = require('../controllers/todo.controllers')

todoRouter
  .post('/create/:userID', saveTodo)
  .get('/:userID', getTodosOfUser)
  .patch('/patch/:taskID', changeTodoState)
  .delete('/delete/:taskID', deleteTodo)

module.exports = todoRouter