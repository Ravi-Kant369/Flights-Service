const { StatusCodes } = require('http-status-codes');
const { CityRepository } = require('../repositories');

const cityRepository = new CityRepository();

const AppError = require('../utils/errors/app-error');


async function createCity(data){
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        console.log(error);
        if(error.name == 'SequelizeValidationError'|| error.name =='SequelizeUniqueConstraintError'){
            let explanation = [];
            
            error.errors.forEach((err) => {
                explanation.push(err.message);                
            });
            

            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new City object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyCity(id){
    try {
        const response = await cityRepository.destroy(id);
        return response;
      } catch (error) {
         console.log(error);
          if(error.statusCode == StatusCodes.NOT_FOUND){
              throw new AppError('The city you requested to delete is not present', error.statusCode);
          }
           throw new AppError('Cannot fetch data of all the cities', StatusCodes.INTERNAL_SERVER_ERROR);
      }


}

async function updateCity(id, data){

    try {
        
        const city = await cityRepository.update(id, data);
        return city;
        
    } catch (error) {
       
     
        if(error.name == 'SequelizeValidationError '){
            let explanation = [];
            
            error.errors.forEach((err) => {
                explanation.push(err.message);                
            });
            
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        else if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested to update is not present', error.statusCode);
        }
        
        throw new AppError('Cannot update a new City object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    createCity,
    destroyCity,
    updateCity
}