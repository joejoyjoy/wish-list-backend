const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const albumRouter = require('./routes/albums.routes')

const app = express()

app.use(helmet())
app.use(morgan('dev'))

app.use('/albums', albumRouter)


module.exports = app