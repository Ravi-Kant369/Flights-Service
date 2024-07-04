'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneId'
      });

      this.belongsTo(models.Airport,{
        foreignKey:'departureAirportId',
        as: 'departureAirport', // when u mention this alias sequelize know thats this the assoaciation u want to refer 
        onDelete:'cascade'

      });

      this.belongsTo(models.Airport,{
        foreignKey:'arrivalAirportId',
        as: 'arrivalAirport',
        onDelete:'cascade'
      });

    }
  }
  flight.init({
    flightNumber:{
      type: DataTypes.STRING,
      allowNull:false
    },
    airplaneId:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    departureAirportId:{
      type: DataTypes.STRING,
      allowNull:false
    },
    arrivalAirportId:{
      type: DataTypes.STRING,
      allowNull:false
    },
    arrivalTime: {
      type:DataTypes.DATE,
      allowNull:false
    },
    departureTime:{
      type:DataTypes.DATE,
      allowNull:false
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    boardingGate:{
      type: DataTypes.STRING
    },
    totalSeats: {  // total available seat
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'flight',
  });
  return flight;
};