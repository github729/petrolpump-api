'use strict';
module.exports = (sequelize, DataTypes) => {
  const nozzels = sequelize.define('nozzels', {
    name: DataTypes.STRING,
    fuelType: DataTypes.STRING
  }, {});
  nozzels.associate = function(models) {
    // associations can be defined here
  };
  return nozzels;
};