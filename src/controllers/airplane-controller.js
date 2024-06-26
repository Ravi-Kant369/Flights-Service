const { StatusCodes } = require('http-status-codes');

const { AirplaneService } = require('../services');

const { SuccessResponse, ErrorResponse } = require('../utils/common');
/**
 * POST : /airplane
 * req-body {modelNumber: 'airbusa320', capacity: 200}
 * 
 *  
 */

async function createAirplane(req,res){
   try {
        //call the service and passing request to services
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        //structuring the response
        SuccessResponse.data = airplane;
        return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponse);


   } catch (error) {
    ErrorResponse.error = error;
    return res
         .status(error.statusCode)
         .json(ErrorResponse);
   }

}

module.exports = {
    createAirplane
} 