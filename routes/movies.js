const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')

router.get('/', movieController.getAllMovies)

router.post('/', movieController.addMovie)

router.put('/:id', movieController.editMovie)

router.delete('/:id', movieController.deleteMovie)

module.exports = router
