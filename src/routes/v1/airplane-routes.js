const express = require('express');

const { AirplaneController } = require('../../controllers');
const router = express.Router();

const { AirplaneMiddlewares } = require('../../middlewares');


//refering -> /api/v1/airplanes  which POST request
router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);


// api/v1/airplanes GET Request
router.get('/',
   
    AirplaneController.getAirplanes);

module.exports = router;
