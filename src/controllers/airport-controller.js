const { StatusCodes } = require('http-status-codes');

const { AirportService} = require('../services');

const { SuccessResponse, ErrorResponse } = require('../utils/common');
/**
 * POST : /airports
 * req-body {name: 'IGI', cityId: 5, code: 'DEL'}
 *       
 */

async function createAirport(req,res){
   try {
        //call the service and passing request to services
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });
        //structuring the response
        SuccessResponse.data = airport;
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
 * GET  : /airports
 * req-body {}
 * 
 *  
 */

async function getAirports(req,res){

    try {
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
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
 *  GET : /airports/:id     
 *  req-body {}
 * 
 *  
 */

async function getAirport(req,res){

    try {
        const airport = await AirportService.getAirport(req.params.id); // in url we have id property and acces we use req.params.id
        SuccessResponse.data = airport;
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
 *  DELETE : /airports/:id     
 *  req-body {}
 * 
 *  
 */


async function destroyAirport(req,res){
    try {
        const response = await AirportService.destroyAirport(req.params.id); // in url we have id property and acces we use req.params.id
        SuccessResponse.data = response;
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
 *  PATCH : /airports/:id     
 *  req-body {name: 'IGI', cityId: 5, code: 'NEW-DEL'}
 * 
 *  
 */

async function updateAirport(req,res){
    try {
       
        const airport = await AirportService.updateAirport(req.params.id, req.body); // in url we have id property and acces we use req.params.id
        SuccessResponse.data = airport;
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
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
} 