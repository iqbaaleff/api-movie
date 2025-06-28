const express = require('express')
const cors = require('cors')
const movieRoutes = require('./routes/movies')
const genreRoutes = require('./routes/genres')
const actorRoutes = require('./routes/actors')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/movie', movieRoutes)
app.use('/genre', genreRoutes)
app.use('/actor', actorRoutes)

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

// Global Error Handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Internal server error' })
})

module.exports = app
