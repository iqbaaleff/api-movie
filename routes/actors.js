const express = require('express')
const router = express.Router()
const actorController = require('../controllers/actorController')

router.get('/', actorController.getAllActor)

router.post('/', actorController.addActor)

router.put('/:id', actorController.editActor)

router.delete('/:id', actorController.deleteActor)

module.exports = router
