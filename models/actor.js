module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define(
    'Actors',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'Actors', // memastikan nama tabel konsisten
      timestamps: true, // aktifkan jika kamu ingin createdAt/updatedAt
      underscored: false, // sesuaikan dengan kebiasaan kamu, default false
    }
  )

  return Actor
}
