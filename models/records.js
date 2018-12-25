'use strict';
module.exports = (sequelize, DataTypes) => {
  const Records = sequelize.define('Records', {
    nozzleId: DataTypes.STRING,
    openingReading: DataTypes.INTEGER,
    closingReading: DataTypes.INTEGER,
    rate: DataTypes.INTEGER
  }, {});
  Records.associate = function(models) {
    // associations can be defined here
  };
  return Records;
};