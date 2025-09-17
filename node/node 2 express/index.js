const express = require('express')
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const { url_db } = require('./config')
const carRouter = require('./Car/carRouter')

const app = express()

app.use(express.json())

app.use('/api/car', carRouter)



const start = async () => {
  try {
    mongoose.connect(url_db)
    app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))
  } catch (error) {
    console.log(error);
  }
}

start()

