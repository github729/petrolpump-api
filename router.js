
var express = require('express');
// var config = require('./config/config.json')['system'];
var RecordsController = require('./controllers/RecordsController')

// Routes
module.exports = function (app) {
    app.get('/', (req, res) => {
        res.send('Revere Watch API is running at <a href></a>');
    });
      
    var apiRoutes = express.Router();
    apiRoutes.get('/', (req, res) => {
        res.send('Welcome to Revere API service');
    });

    /******Testing*****/
    apiRoutes.get('/:fuel', RecordsController.GetPreviousDayRecords);
    apiRoutes.post('/records',RecordsController.SaveRecords);
    apiRoutes.post('/filter',RecordsController.FilterRecords);
    /******END - Testing*****/
    app.use('/v1', apiRoutes);
};