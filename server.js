import app from './src/app.js'
import config from './src/constants/index.js'

const PORT = config.port || 8080

// listen port
app.listen(PORT, () => {
  console.log(`escuchando el servidor ${PORT}`)
})
