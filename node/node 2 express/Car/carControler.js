const Car = require('../modules/Car')
const { validationResult } = require('express-validator')

class CarController {
  async getCars(req, res){
    try {
      const cars = await Car.find()
      res.status(200).json(cars)
    } catch (error) {
      console.log(error)
      res.status(500).json({message: 'Error server!'})
    }
  }

  async createCar(req, res){
    try {
      const errors = validationResult(req)
      if(!errors.isEmpty()){
        return res.status(400).json({message: 'Error validation', errors})
      }

      const { brand, model, year} = req.body

      const newCar = new Car({
        brand,
        model,
        year
      })

      await newCar.save()

      res.status(201).json({message: 'Car saved!', car: newCar})
    } catch (error) {
      console.log(error)
      res.status(500).json({message: 'Error server!'})
    }
    
  }

  async deleteCar(req, res){
    try {
      const { id } = req.params

      const cars = await Car.findByIdAndDelete(id)

      if(!cars){
        return res.status(404).json({message: 'Not found car by id!'})
      }

      res.status(200).json({message: 'Car deleted!'})
    } catch (error) {
      console.log(error)
      res.status(500).json({message: 'Error server!'})
    }
  }
}

module.exports = new CarController()