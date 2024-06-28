const { StatusCodes } = require('http-status-codes');

const { CityService } = require('../services');

const { SuccessResponse, ErrorResponse } = require('../utils/common');
/**
 * POST : /cities
 * req-body {name : Varanasi}
 * 
 *  
 */

async function createCity(req,res){
   try {
        //call the service and passing request to services
        const city = await CityService.createCity( {
          name :req.body.name
        });
        //structuring the response
        SuccessResponse.data = city;
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
 *  DELETE : /cities/:id    
 *  req-body {}
 * 
 *  
 */


async function destroyCity(req,res){
     try {
         const city = await CityService.destroyCity(req.params.id); // in url we have id property and acces we use req.params.id
         SuccessResponse.data = city;
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
 *  PATCH : /cities/:id     
 *  req-body {name: Banaras}
 * 
 *  
 */

async function updateCity(req,res){
    try {
       
        const city= await CityService.updateCity(req.params.id,
            {
                name: req.body.name
            }
        ); // in url we have id property and acces we use req.params.id
        SuccessResponse.data = city;
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
    createCity,
    destroyCity,
    updateCity
}