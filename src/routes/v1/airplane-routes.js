const express = require('express');

const { AirplaneController } = require('../../controllers');
const router = express.Router();

const { AirplaneMiddlewares } = require('../../middlewares');


//refering -> /api/v1/airplanes  which POST request
router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);


// api/v1/airplanes GET Request
router.get('/',AirplaneController.getAirplanes);


// /api/v1/airplanes/:id  GET
 router.get('/:id', AirplaneController.getAirplane);


 // /api/v1/airplanes/:id  DELETE
 router.delete('/:id', AirplaneController.destroyAirplane);

// /api/v1/airplanes/:id  PATCH

 router.patch('/:id',
   
    AirplaneMiddlewares.validateUpdateRequest,
    AirplaneController.updateAirplane);


module.exports = router;
