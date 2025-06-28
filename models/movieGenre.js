module.exports = (sequelize, DataTypes) => {
  const MovieGenre = sequelize.define(
    'MovieGenres',
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Movies', // sesuaikan dengan nama tabel
          key: 'id',
        },
      },
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Genres', // sesuaikan dengan nama tabel
          key: 'id',
        },
      },
    },
    {
      timestamps: false, // ⬅️ ini WAJIB untuk tabel pivot jika tidak perlu createdAt/updatedAt
      underscored: true, // ⬅️ sesuaikan jika pakai snake_case
    }
  )

  return MovieGenre
}
