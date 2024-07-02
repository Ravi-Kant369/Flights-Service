
const CrudRepository = require('./crud-repository');

const { Airport } = require('../models');  // you are doing return/module.exports for Airplane in models

class AirportRepository extends CrudRepository { //all the basic CRUD functiinalities are given to AirplaneRepository

    constructor(){
        super(Airport);
    }
}

module.exports = AirportRepository ;