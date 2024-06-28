const express = require('express');

const { CityController } = require('../../controllers');
const router = express.Router();

//const { AirplaneMiddlewares } = require('../../middlewares');


//refering -> /api/v1/airplanes  which POST request
router.post('/', CityController.createCity);

//refering -> /api/v1/cities  DELETE
router.delete('/:id', CityController.destroyCity);

//refering -> /api/v1/cities   PATCH
router.patch('/:id', CityController.updateCity);


module.exports = router;
