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

module.exports = { getAllMovies, addMovies }
