module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.INTEGER,
    },
  })

  return Movie
}
