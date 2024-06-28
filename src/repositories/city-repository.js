const CrudRepository = require('./crud-repository');

const { City } = require('../models');  // you are doing return/module.exports for Airplane in models

class CityRepository extends CrudRepository { //all the basic CRUD functiinalities are given to AirplaneRepository

    constructor(){
        super(City);
    }
}

module.exports = CityRepository;