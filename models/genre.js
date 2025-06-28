module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genres', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  Genre.associate = (models) => {
    Genre.belongsToMany(models.Movies, {
      through: 'MovieGenres',
      as: 'movies',
      foreignKey: 'genreId',
    })
  }

  return Genre
}
