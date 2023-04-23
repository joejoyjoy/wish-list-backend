const todoRouter = require('express').Router()
const { 
  saveTodo, 
  getTodosOfUser, 
  changeTodoState, 
  deleteTodo, 
  changeTodoValue 
} = require('../controllers/todo.controllers')

todoRouter
  .post('/create/:userID', saveTodo)
  .get('/:userID', getTodosOfUser)
  .patch('/patch/:taskID', changeTodoState)
  .delete('/delete/:taskID', deleteTodo)
  .patch('/change/:taskID', changeTodoValue)

module.exports = todoRouter