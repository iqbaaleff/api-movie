const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')

router.get('/', movieController.getAllMovies)

router.post('/', movieController.addMovies)

router.put('/:id', movieController.editMovies)

router.delete('/:id', movieController.deleteMovie)

module.exports = router
