const Router = require('express')
const router = new Router()
const { check } = require('express-validator')
const controler = require('./carControler')

router.post(
  '/',
  [
    check('brand','Brand is not Empty').notEmpty(),
    check('model','Model is not Empty').notEmpty(),
    check('year','Year is not Empty').notEmpty(),
  ],
  controler.createCar
)

router.get('/', controler.getCars)

router.delete('/:id', controler.deleteCar)

module.exports = router
