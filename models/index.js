const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../config/db.config')

const Movie = require('./movie')(sequelize, DataTypes)
const Genre = require('./genre')(sequelize, DataTypes)
const Actor = require('./actor')(sequelize, DataTypes)
const MovieGenre = require('./movieGenre')(sequelize, DataTypes)
const MovieActor = require('./movieActor')(sequelize, DataTypes)

const db = {
  Sequelize,
  sequelize,
  Movie,
  Genre,
  Actor,
  MovieGenre,
  MovieActor,
}

// 💡 Panggil fungsi asosiasi DI SINI:
const setupAssociations = require('./associations')
setupAssociations(db)

module.exports = db
