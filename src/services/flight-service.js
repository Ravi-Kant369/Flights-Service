const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');
const moment = require('moment');
const { FlightRepository } = require('../repositories');

const flightRepository = new FlightRepository();

const AppError = require('../utils/errors/app-error');

async function createFlight(data){
    try {
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            
            error.errors.forEach((err) => {
                explanation.push(err.message);                
            });
            

            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Flight object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllFlights(query){
    let customFilter = {};
    let sortFilter = [];
    // trips - MUM-DEL   FROM:DEL--TO:MUM

    if(query.trips){
        [departureAirportId, arrivalAirportId] = query.trips.split('-');
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;

    }
    
    if(query.price){
        //search flights in range[minPrice,maxPrice]
        [minPrice,maxPrice] = query.price.split('-');
        customFilter.price ={
            [Op.between] :[minPrice, (maxPrice==undefined)?10000:maxPrice]
        }

    }

    if(query.travellers){
        // The available no. of seats should be equal to or greater than  the number of travellers
        customFilter.totalSeats = {
            [Op.gte]:query.travellers
        }
    }
    
    if(query.tripDate){  
        
        // Display all flights on a particular date
        const startDate = moment(query.tripDate, 'YYYY-MM-DD').startOf('day').toDate(); // Start of the day 
        const endDate = moment(query.tripDate, 'YYYY-MM-DD').endOf('day').toDate(); // End of the day 
        console.log(startDate);
        console.log(endDate);
        customFilter.departureTime = {
            [Op.between] : [startDate,endDate]
        }

    }
    
    if(query.sort){
        // for sorting based on departureTime,price
        // like sort departureId in ASC order or sort by price In DESC order

        const params = query.sort.split(',');
        const sortFilters = params.map((param)=> param.split('_'));
        sortFilter = sortFilters;
        console.log(sortFilter);
    }


    try {
        const  flights = await flightRepository.getAllFlights(customFilter, sortFilter);
        return flights;
    } catch (error) {
        console.log(error);
        throw new AppError('Cannot fetch data of all the flights', StatusCodes.INTERNAL_SERVER_ERROR);
    }



}

module.exports = {
    createFlight,
    getAllFlights
    
    
}