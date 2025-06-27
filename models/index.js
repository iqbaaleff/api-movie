const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../config/db.config')

const Movie = require('./movie')(sequelize, DataTypes)
const Genre = require('./genre')(sequelize, DataTypes)

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.Movie = Movie
db.Genre = Genre

module.exports = db
