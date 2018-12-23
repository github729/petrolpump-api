var models = require('../models');
var Sequelize = require('sequelize');

exports.GetPreviousPetrol = (req, res) => {
    models.Nozzels.hasMany(models.Petrol, { foreignKey: 'nozzleId' });
    var today = new Date()
    yesterday = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() - 1);
    models.Nozzels.findAll({
        where: { fuelType: req.params.fuel },
        attributes: ['id', 'name'],
        include: [
            {
                model: models.Petrol,
                where: Sequelize.where(Sequelize.fn('date', Sequelize.col(`Petrols.createdAt`)), '=', yesterday)
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
exports.SaveRecords = (req, res) => {
    models.Nozzels.c
}

exports.SaveRecords = function (request, response) {
    let postData = request.body;
    models.Petrol.create(postData).then(nozzle => {
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