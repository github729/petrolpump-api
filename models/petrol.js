'use strict';
module.exports = (sequelize, DataTypes) => {
  const Petrol = sequelize.define('Petrol', {
    nozzleId: DataTypes.INTEGER,
    openingReading: DataTypes.INTEGER,
    closingReading: DataTypes.INTEGER,
    rate: DataTypes.INTEGER,
  }, {});
  Petrol.associate = function(models) {
    // associations can be defined here
  };
  return Petrol;
};