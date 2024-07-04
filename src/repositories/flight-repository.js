const CrudRepository = require('./crud-repository');

const {Sequelize} = require('sequelize');

const { flight, Airplane, Airport, City } = require('../models');  // you are doing return/module.exports for Airplane in models

class FlightRepository extends CrudRepository { //all the basic CRUD functiinalities are given to AirplaneRepository

    constructor(){
        super(flight);
    }

    async getAllFlights(filter , sort){
        const response = await flight.findAll({
            where: filter,
            order: sort,
            include: [
                {   // do mapping on primary key 

                    // Eager Loading - Eager Loading is the act of querying data of several models at once (one 'main' model and one or more associated models). At the SQL level, this is a query with one or more joins.
                    
                    model:Airplane, // The entire Airplane Model Object will be fetched by airplaneId inside the Flight Model Object
                    required:true  //When eager loading, we can force the query to return only records which have an associated model, effectively converting the query from the default OUTER JOIN to an INNER JOIN. This is done with the required: true option, as follows:
                },

                {// on what columns u want to comparision of joins to happen
                  model:Airport,
                  required:true, 
                  as : 'departureAirport',
                  // Airport is associated to flight multiple times. To identify the correct association, you must use the 'as' keyword to specify the alias of the association you want to include.
                  
                  /**
                  * 
                  * departureId is based on Airport.code and not based on Airport.id.
                  * But by default it will try to do the mapping on Airport.id but we want to do the mapping on Airport.code
                  * so for that we can specifically mention on what columns u want the comparison of the join to happen
                  * using `on:` property
                  * 
                  */
                  
                  // if u dont want to do join on primary key then u have to specifically tell
                  on: {
                    // telling which column to do join/ custom column
                    col1:Sequelize.where(Sequelize.col('flight.departureAirportId'), '=', Sequelize.col('departureAirport.code'))
                  },

                 include: {// inside airport detail we want city details also for that we do
                    model:City,
                    required: true
                 }


                },

                {// on what columns u want to comparision of joins to happen
                    model:Airport,
                    required:true,
                    as : 'arrivalAirport',
                    on: {
                      col1:Sequelize.where(Sequelize.col('flight.arrivalAirportId'), '=', Sequelize.col('arrivalAirport.code'))
                    },
                    include: {
                        model:City,
                        required: true
                     }
  
                  }
            ]
        });

        return response;
    }


}

module.exports = FlightRepository;