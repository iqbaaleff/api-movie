require('dotenv').config()
const app = require('./app')
const { sequelize } = require('./models')

const PORT = process.env.PORT || 3000

// Sync database dan jalankan server
sequelize
  .sync({ alter: true }) // atau { force: true } saat development awal
  .then(() => {
    console.log('✅ Database connected & synced')
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error('❌ Failed to sync database:', err)
  })
