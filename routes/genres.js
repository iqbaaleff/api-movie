const express = require('express')
const router = express.Router()
const genreController = require('../controllers/genreController')

router.get('/', genreController.getAllGenre)

router.post('/', genreController.addGenre)

router.put('/:id', genreController.editGenre)

router.delete('/:id', genreController.deleteGenre)

module.exports = router
