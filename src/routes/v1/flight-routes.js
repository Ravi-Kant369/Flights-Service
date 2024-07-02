const express = require('express');

const { FlightController } = require('../../controllers');

const { FlightMiddlewares } = require('../../middlewares');

const router = express.Router();




//refering -> /api/v1/flights  which POST request
router.post('/',
    FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight
);



module.exports = router;