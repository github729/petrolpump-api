'use strict';
module.exports = (sequelize, DataTypes) => {
  const records = sequelize.define('records', {
    nozzleId: DataTypes.STRING,
    openingReading: DataTypes.INTEGER,
    closingReading: DataTypes.INTEGER,
    rate: DataTypes.INTEGER
  }, {});
  records.associate = function(models) {
    // associations can be defined here
  };
  return records;
};