const express = require('express');

const { FlightController } = require('../../controllers');

const { FlightMiddlewares } = require('../../middlewares');

const router = express.Router();




//refering -> /api/v1/flights  which POST request
router.post('/',
    FlightMiddlewares.validateCreateRequest,
    FlightMiddlewares.validateDateTime,
    FlightController.createFlight
);

//refering -> /api/v1/flights?trips=MUM-DEL   GET
router.get('/',
   
    FlightController.getAllFlights
);



module.exports = router;