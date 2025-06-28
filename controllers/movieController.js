const { Movie, Genre, Actor } = require('../models')

// Gunakan include yang eksplisit agar tidak error jika alias typo
const movieIncludeOptions = [
  { model: Genre, as: 'genres' },
  { model: Actor, as: 'actors' },
]

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll({ include: movieIncludeOptions })
    res.status(200).json({
      data: movies,
      metadata: 'Daftar semua movie lengkap dengan genre dan aktor',
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Gagal mengambil data movies' })
  }
}

const addMovie = async (req, res) => {
  try {
    const { title, director, year, genreIds = [], actorIds = [] } = req.body

    if (!title || typeof title !== 'string') {
      return res
        .status(400)
        .json({ message: 'Title wajib diisi dan berupa string' })
    }

    const newMovie = await Movie.create({ title, director, year })

    if (genreIds.length > 0) {
      await newMovie.setGenres(genreIds)
    }

    if (actorIds.length > 0) {
      for (const actor of actorIds) {
        await newMovie.addActor(actor.id, {
          through: { role_name: actor.role_name },
        })
      }
    }

    const result = await Movie.findByPk(newMovie.id, {
      include: movieIncludeOptions,
    })

    res.status(201).json({
      data: result,
      message: 'Berhasil menambahkan movie',
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Gagal menambahkan movie' })
  }
}

const editMovie = async (req, res) => {
  try {
    const { id } = req.params
    const { title, director, year, genreIds = [], actorIds = [] } = req.body

    const movie = await Movie.findByPk(id)
    if (!movie) {
      return res.status(404).json({ message: 'Movie tidak ditemukan' })
    }

    await movie.update({ title, director, year })

    await movie.setGenres(genreIds || [])
    await movie.setActors(actorIds || [])

    const updatedMovie = await Movie.findByPk(id, {
      include: movieIncludeOptions,
    })

    res.status(200).json({
      data: updatedMovie,
      message: 'Berhasil mengedit movie',
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Gagal mengedit movie' })
  }
}

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params

    const movie = await Movie.findByPk(id)
    if (!movie) {
      return res.status(404).json({ message: 'Movie tidak ditemukan' })
    }

    await movie.setGenres([])
    await movie.setActors([])

    await movie.destroy()

    res.status(200).json({ message: 'Berhasil menghapus movie' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Gagal menghapus movie' })
  }
}

module.exports = {
  getAllMovies,
  addMovie,
  editMovie,
  deleteMovie,
}
