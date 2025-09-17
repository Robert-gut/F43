const { Schema, model } = require('mongoose')

const Car = new Schema({
  brand: {type: String, required: true, trim: true},
  model: {type: String, required: true, trim: true},
  year: {type: Number, required: true}
})

module.exports = model('Car', Car)
