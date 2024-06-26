const { StatusCodes } = require('http-status-codes');
const { AirplaneRepository } = require('../repositories');

const airplaneRepository = new AirplaneRepository();

const AppError = require('../utils/errors/app-error');

async function createAirplane(data){
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            
            error.errors.forEach((err) => {
                explanation.push(err.message);                
            });
            

            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

 // this function is going to get me in all the the  available airplanes 
async function getAirplanes(){
      try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
      } catch (error) {
        throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
      }
}

module.exports = {
    createAirplane,
    getAirplanes
}