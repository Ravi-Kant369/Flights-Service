const { StatusCodes } = require('http-status-codes');

const { AirplaneService } = require('../services');

const { SuccessResponse, ErrorResponse } = require('../utils/common');
/**
 * POST : /airplanes
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

/**
 * GET  : /airplanes 
 * req-body {}
 * 
 *  
 */

async function getAirplanes(req,res){

    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res
                  .status(StatusCodes.OK)
                  .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

/**
 *  GET : /airplane/:id     
 *  req-body {}
 * 
 *  
 */

async function getAirplane(req,res){

    try {
        const airplane = await AirplaneService.getAirplane(req.params.id); // in url we have id property and acces we use req.params.id
        SuccessResponse.data = airplane;
        return res
                  .status(StatusCodes.OK)
                  .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res 
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

/**
 *  DELETE : /airplane/:id     
 *  req-body {}
 * 
 *  
 */


async function destroyAirplane(req,res){
    try {
        const airplane = await AirplaneService.destroyAirplane(req.params.id); // in url we have id property and acces we use req.params.id
        SuccessResponse.data = airplane;
        return res
                  .status(StatusCodes.OK)
                  .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res 
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

/**
 *  PATCH : /airplane/:id     
 *  req-body {ModelNumber:'boing777','capacity': 250}
 * 
 *  
 */

async function updateAirplane(req,res){
    try {
       
        const airplane = await AirplaneService.updateAirplane(req.params.id, req.body); // in url we have id property and acces we use req.params.id
        SuccessResponse.data = airplane;
        return res
                  .status(StatusCodes.OK)
                  .json(SuccessResponse);
    } catch (error) {
       
        ErrorResponse.error = error;

        return res 
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}



module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
} 