'use strict';
module.exports = (sequelize, DataTypes) => {
  const Diesel = sequelize.define('Diesel', {
    nozzleName: DataTypes.STRING,
    openingReading: DataTypes.INTEGER,
    closingRreading: DataTypes.INTEGER,
    rate: DataTypes.INTEGER
  }, {});
  Diesel.associate = function(models) {
    // associations can be defined here
  };
  return Diesel;
};