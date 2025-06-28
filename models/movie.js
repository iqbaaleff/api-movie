module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movies', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    director: DataTypes.STRING,
    year: DataTypes.INTEGER,
  })

  Movie.associate = (models) => {
    Movie.belongsToMany(models.Genres, {
      through: 'MovieGenres',
      as: 'genres',
      foreignKey: 'movieId',
    })
  }

  return Movie
}
