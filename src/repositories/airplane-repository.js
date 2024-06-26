/*
Airplane is gpoing to be simple CRUD like,
1. add a plane 
2. remove a plane
3. get a plane
4. update a plane

*/

const CrudRepository = require('./crud-repository');

const { Airplane } = require('../models');  // you are doing return/module.exports for Airplane in models

class AirplaneRepository extends CrudRepository { //all the basic CRUD functiinalities are given to AirplaneRepository

    constructor(){
        super(Airplane);
    }
}

module.exports = AirplaneRepository;