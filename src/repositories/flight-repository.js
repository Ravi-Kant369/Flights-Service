const CrudRepository = require('./crud-repository');

const { flight } = require('../models');  // you are doing return/module.exports for Airplane in models

class FlightRepository extends CrudRepository { //all the basic CRUD functiinalities are given to AirplaneRepository

    constructor(){
        super(flight);
    }
}

module.exports = FlightRepository;