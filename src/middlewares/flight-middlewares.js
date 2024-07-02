const { StatusCodes } = require('http-status-codes');

const {ErrorResponse} = require('../utils/common');

const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next){
      if(!req.body.flightNumber){
          ErrorResponse.message = 'Something went wrong while creating Flight';
         
          ErrorResponse.error =  new AppError(['flightNumber is not found in the incomming request in the correct form'], StatusCodes.BAD_REQUEST);

          return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse);
      }

      if(!req.body.airplaneId){
        ErrorResponse.message = 'Something went wrong while creating Flight';
       
        ErrorResponse.error =  new AppError(['airplaneId code is not found in the incomming request in the correct form'], StatusCodes.BAD_REQUEST);

        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
     }

    if(!req.body.departureAirportId){
        ErrorResponse.message = 'Something went wrong while creating Flight';
       
        ErrorResponse.error =  new AppError(['departureAirportId is not found in the incomming request in the correct form'], StatusCodes.BAD_REQUEST);

        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    if(!req.body.arrivalAirportId){
        ErrorResponse.message = 'Something went wrong while creating Flight';
       
        ErrorResponse.error =  new AppError(['arrivalAirportId is not found in the incomming request in the correct form'], StatusCodes.BAD_REQUEST);

        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    if(!req.body.arrivalTime){
        ErrorResponse.message = 'Something went wrong while creating Flight';
       
        ErrorResponse.error =  new AppError(['arrivalTime is not found in the incomming request in the correct form'], StatusCodes.BAD_REQUEST);

        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.departureTime){
        ErrorResponse.message = 'Something went wrong while creating Flight';
       
        ErrorResponse.error =  new AppError(['departureTime is not found in the incomming request in the correct form'], StatusCodes.BAD_REQUEST);

        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.price){
        ErrorResponse.message = 'Something went wrong while creating Flight';
       
        ErrorResponse.error =  new AppError(['price is not found in the incomming request in the correct form'], StatusCodes.BAD_REQUEST);

        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    if(!req.body.totalSeats){
        ErrorResponse.message = 'Something went wrong while creating Flight';
       
        ErrorResponse.error =  new AppError(['totalSeats is not found in the incomming request in the correct form'], StatusCodes.BAD_REQUEST);

        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    



     next();

}


// function validateUpdateRequest(req, res, next){
   
//     if(!req.body.name && !req.body.code && !req.body.cityId && !req.body.address){
//         ErrorResponse.message = 'Something went wrong while updating airport';
       
//         ErrorResponse.error =   new AppError(['None of the parameters (name, code, cityId and address) found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
//         return res
//                 .status(StatusCodes.BAD_REQUEST)
//                 .json(ErrorResponse);
//     }
//    next();

// }


module.exports = {
    validateCreateRequest,
    //validateUpdateRequest
}