
var express = require('express');
// var config = require('./config/config.json')['system'];
var PetrolController = require('./controllers/PetrolController')

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
    apiRoutes.get('/:fuel', PetrolController.GetPreviousPetrol);
    apiRoutes.post('/records',PetrolController.SaveRecords)
    /******END - Testing*****/
    app.use('/v1', apiRoutes);
};