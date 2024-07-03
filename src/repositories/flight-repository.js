const CrudRepository = require('./crud-repository');

const { flight } = require('../models');  // you are doing return/module.exports for Airplane in models

class FlightRepository extends CrudRepository { //all the basic CRUD functiinalities are given to AirplaneRepository

    constructor(){
        super(flight);
    }

    async getAllFlights(filter , sort){
        const response = await flight.findAll({
            where: filter,
            order: sort
        });

        return response;
    }


}

module.exports = FlightRepository;