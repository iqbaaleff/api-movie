const { Actor } = require('../models')

const getAllActor = async (req, res) => {
  try {
    const actors = await Actor.findAll()
    res.status(200).json({
      data: actors,
      metadata: 'Daftar semua aktor',
    })
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data Actor', error })
  }
}

const addActor = async (req, res) => {
  try {
    const { name, bio } = req.body
    const newActor = await Actor.create({ name, bio })

    res.status(201).json({
      data: newActor,
      message: 'Berhasil menambahkan Actor',
    })
  } catch (error) {
    res.status(500).json({ message: 'Gagal menambah data Actor', error })
  }
}

const editActor = async (req, res) => {
  try {
    const { id } = req.params
    const { name, bio } = req.body

    const actor = await Actor.findByPk(id)
    if (!actor) {
      return res.status(404).json({ message: 'Actor tidak ditemukan' })
    }

    await actor.update({ name, bio })

    res.status(200).json({
      data: actor,
      message: 'Berhasil mengedit Actor',
    })
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengedit data Actor', error })
  }
}

const deleteActor = async (req, res) => {
  try {
    const { id } = req.params

    const actor = await Actor.findByPk(id)
    if (!actor) {
      return res.status(404).json({ message: 'Actor tidak ditemukan' })
    }

    await actor.destroy()

    res.status(200).json({ message: 'Berhasil menghapus Actor' })
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus data Actor', error })
  }
}

module.exports = {
  getAllActor,
  addActor,
  editActor,
  deleteActor,
}
