'use strict';
module.exports = (sequelize, DataTypes) => {
  const Nozzels = sequelize.define('Nozzels', {
    name: DataTypes.STRING,
    fuelType: DataTypes.STRING
  }, {});
  Nozzels.associate = function(models) {
    // associations can be defined here
  };
  return Nozzels;
};