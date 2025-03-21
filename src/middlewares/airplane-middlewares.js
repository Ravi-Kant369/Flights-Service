const { StatusCodes } = require('http-status-codes');

const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next){
      if(!req.body.modelNumber){
          ErrorResponse.message = 'Something went wrong while creating airplane';
         
          ErrorResponse.error =  new AppError(['Model Number is not found in the incomming request in the correct form'], StatusCodes.BAD_REQUEST);

          return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse);
      }
     next();

}


function validateUpdateRequest(req, res, next){
   
    if(!req.body.modelNumber && !req.body.capacity){
        ErrorResponse.message = 'Something went wrong while updating airplane';
       
        ErrorResponse.error =  new AppError(['Model Number and capacity is not found in the incomming request in the correct form'], StatusCodes.BAD_REQUEST);

        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
   next();

}


module.exports = {
    validateCreateRequest,
    validateUpdateRequest
}