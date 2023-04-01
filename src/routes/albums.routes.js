const express = require('express')
const albumController = require('../controllers/albums.controllers')
const { doSomething, checkID } = require('../middlewares/middlewares')

const router = express.Router()

router.get('/', doSomething, albumController.getAllAlbums)
router.get('/:id', albumController.getAlbumById)
router.get('/', checkID, albumController.createAlbum)

module.exports = router