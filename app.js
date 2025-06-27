const express = require('express')
const cors = require('cors')

const movieRoutes = require('./routes/movies')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/', movieRoutes)

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
