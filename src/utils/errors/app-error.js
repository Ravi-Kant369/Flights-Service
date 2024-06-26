
class AppError extends Error {

    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        this.explanation = message;

    //what actually happend to the current call is present in explanation in deatails

    }    
}

module.exports = AppError;