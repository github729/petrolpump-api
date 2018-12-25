var models = require('../models');
var Sequelize = require('sequelize');

exports.GetPreviousDayRecords = (req, res) => {
    models.Nozzels.hasMany(models.Records, { foreignKey: 'nozzleId' });
    var today = new Date()
    yesterday = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() - 1);
    models.Nozzels.findAll({
        where: { fuelType: req.params.fuel },
        attributes: ['id', 'name'],
        include: [
            {
                model: models.Records,
                where: Sequelize.where(Sequelize.fn('date', Sequelize.col(`Records.createdAt`)), '=', yesterday)
            }
        ]
    }).then(petrol => {
        let json_res = {};
        if (petrol) {
            let json_res = {};
            json_res['success'] = true;
            json_res['data'] = petrol;
            res.json(json_res);
        } else {
            json_res['success'] = false;
            json_res['data'] = 'No user found';
            res.json(json_res);
        }
    })
}
exports.SaveRecords = function (request, response) {
    let postData = request.body;
    models.Records.create(postData).then(nozzle => {
        result = {};
        if (nozzle) {
            result.success = true;
            result.message = 'Record saved successfully';
        }
        else {
            result.success = true;
            result.message = 'Record not saved successfully ';
        }
        response.json(result);
    });
}
exports.FilterRecords = function(req,res) {
    let postData = req.body;
    let today = new Date();
    models.Nozzels.hasMany(models.Records, { foreignKey: 'nozzleId' });
    if(postData.date == 'today') {
        let searchDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate());
        where =  Sequelize.where(Sequelize.fn('date', Sequelize.col(`Records.createdAt`)), '=', searchDate);
    }
    if(postData.date == 'thisWeek') {
        weekStart = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate()-7);
        where = {
            createdAt : {
                $between :[weekStart,today]
            }
        }
    }
    if(postData.date == 'thisMonth') {
        yearStart = today.getFullYear() + '-' + today.getMonth()  + '-' + (today.getDate()-7);
        where = {
            createdAt : {
                $between :[yearStart,today]
            }
        }
    }
    models.Nozzels.findAll({
        attributes: ['id', 'name','fuelType'],
        include: [
            {
                model: models.Records,
                where: where
            }
        ]
    }).then(petrol => {
        let json_res = {};
        if (petrol) {
            let json_res = {};
            json_res['success'] = true;
            json_res['data'] = petrol;
            res.json(json_res);
        } else {
            json_res['success'] = false;
            json_res['data'] = 'No user found';
            res.json(json_res);
        }
    })


}