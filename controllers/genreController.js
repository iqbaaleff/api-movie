const { Genre } = require('../models')

const getAllGenre = async (req, res) => {
  try {
    const genres = await Genre.findAll()
    res.status(200).json({
      genres,
      metadata: 'test genre endpoint',
    })
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data genre', error })
  }
}

const addGenre = async (req, res) => {
  try {
    const { name } = req.body

    const newGenre = await Genre.create({ name })

    res.status(201).json({
      data: newGenre,
      message: 'Berhasil menambahkan',
    })
  } catch (error) {
    res.status(500).json({ message: 'Gagal menambah data genre', error })
  }
}

const editGenre = async (req, res) => {
  try {
    const { id } = req.params
    const { name } = req.body

    const genre = await Genre.findByPk(id)
    if (!genre) {
      return res.status(404).json({ message: 'Genre tidak ditemukan' })
    }

    await genre.update({ name })

    res.status(200).json({
      data: genre,
      message: 'Berhasil mengedit genre',
    })
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengedit data genre', error })
  }
}

const deleteGenre = async (req, res) => {
  try {
    const { id } = req.params

    const genre = await Genre.findByPk(id)
    if (!genre) {
      return res.status(404).json({ message: 'Genre tidak ditemukan' })
    }

    await genre.destroy()

    res.status(200).json({ message: 'Berhasil menghapus genre' })
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus data genre', error })
  }
}

module.exports = {
  getAllGenre,
  addGenre,
  editGenre,
  deleteGenre,
}
