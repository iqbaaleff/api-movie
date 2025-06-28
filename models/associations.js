module.exports = (sequelizeModels) => {
  const { Movie, Genre, Actor, MovieGenre, MovieActor } = sequelizeModels

  // ============================
  // Movie ⇄ Genre (many-to-many)
  // ============================

  // Satu Movie bisa memiliki banyak Genre
  Movie.belongsToMany(Genre, {
    through: MovieGenre, // Model pivot
    foreignKey: 'movie_id', // FK di MovieGenre
    otherKey: 'genre_id', // FK pasangannya
    as: 'genres', // alias, penting saat include
  })

  // Satu Genre bisa digunakan oleh banyak Movie
  Genre.belongsToMany(Movie, {
    through: MovieGenre,
    foreignKey: 'genre_id',
    otherKey: 'movie_id',
    as: 'movies',
  })

  // ============================
  // Movie ⇄ Actor (many-to-many)
  // ============================

  // Satu Movie punya banyak Aktor
  Movie.belongsToMany(Actor, {
    through: MovieActor,
    foreignKey: 'movie_id',
    otherKey: 'actor_id',
    as: 'actors',
  })

  // Satu Aktor bisa main di banyak Movie
  Actor.belongsToMany(Movie, {
    through: MovieActor,
    foreignKey: 'actor_id',
    otherKey: 'movie_id',
    as: 'movies',
  })
}
