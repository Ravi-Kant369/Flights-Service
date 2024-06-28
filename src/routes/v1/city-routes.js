const express = require('express');

const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares');
const router = express.Router();




//refering -> /api/v1/airplanes  which POST request
router.post('/', 
    CityMiddlewares.validateCreateRequest,
    CityController.createCity);

//refering -> /api/v1/cities  DELETE
router.delete('/:id', CityController.destroyCity);

//refering -> /api/v1/cities   PATCH
router.patch('/:id', 
    CityMiddlewares.validateUpdateRequest,
    CityController.updateCity);


module.exports = router;
