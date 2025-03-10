const { StatusCodes } = require('http-status-codes');

const { FlightService } = require('../services');



const { SuccessResponse, ErrorResponse } = require('../utils/common');
/**
 * POST : /flights
 * req-body {
 *     flightNumber:      'UK 808'
 *     airplaneId:          'a380'
 *     departureAirportId:    12
 *     arrivalAirportId:      11
 *     arrivalTime:        '11:10:00',
 *     departureTime:      '09:30:00'
 *     price:                2500
 *     boardingGate:         '12A'
 *     totalSeats:           '250'
 *     
 *      }
 *       
 */

async function createFlight(req,res){
   try {
        //call the service and passing request to services
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats

        });
        //structuring the response
        SuccessResponse.data = flight;
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

async function getAllFlights(req, res){
    try {
        console.log(req.query);
        const flights = await FlightService.getAllFlights(req.query);

        SuccessResponse.data = flights;
        return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponse);

    } catch (error) {
        console.log(error);
      ErrorResponse.error = error;
      return res
               .status(error.statusCode)
               .json(ErrorResponse);  
    }
}



module.exports = {
    createFlight,
    getAllFlights
    
} 