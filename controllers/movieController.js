const { Movie } = require('../models')

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll()
    res.status(200).json({
      movies,
      metadata: 'test movies endpoint',
    })
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data movies', error })
  }
}

const addMovies = async (req, res) => {
  try {
    const { title, director, year } = req.body

    const newMovie = await Movie.create({
      title,
      director,
      year,
    })

    res.status(201).json({
      data: newMovie,
      message: 'Berhasil menambahkan',
    })
  } catch (error) {
    res.status(500).json({ message: 'Gagal menambah data movies', error })
  }
}

const editMovies = async (req, res) => {
  try {
    const { id } = req.params
    const { title, director, year } = req.body

    const movie = await Movie.findByPk(id)
    if (!movie) {
      return res.status(404).json({ message: 'Movie tidak ditemukan' })
    }

    await movie.update({ title, director, year })

    res.status(200).json({
      data: movie,
      message: 'Berhasil mengedit',
    })
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengedit data movies', error })
  }
}

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params

    const movie = await Movie.findByPk(id)
    if (!movie) {
      return res.status(404).json({ message: 'Movie tidak ditemukan' })
    }

    await movie.destroy()

    res.status(200).json({ message: 'Berhasil menghapus movie' })
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus data movies', error })
  }
}

module.exports = {
  getAllMovies,
  addMovies,
  editMovies,
  deleteMovie,
}
