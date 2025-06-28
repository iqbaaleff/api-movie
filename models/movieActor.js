// models/movieactor.js
module.exports = (sequelize, DataTypes) => {
  const MovieActor = sequelize.define(
    'movie_actors',
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Movies',
          key: 'id',
        },
      },
      actor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Actors',
          key: 'id',
        },
      },
      role_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false, // ⬅️ ini WAJIB untuk tabel pivot jika tidak perlu createdAt/updatedAt
      underscored: true, // ⬅️ sesuaikan jika pakai snake_case
    }
  )

  return MovieActor
}
