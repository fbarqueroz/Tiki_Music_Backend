const rPlayedService = require('../services/rPlayed.service');
const rPlayedController = {};

rPlayedController.create = async function (req, res, next) {
    try {
        newRPlayed = await rPlayedService.createRPlayed(req.body);
        return res.status(201).json({newRPlayed});
    } catch(error) {
        return res.status(400).json({status: 400, message: error.message});
    }
}

rPlayedController.getRPlayed = async function (req, res, next) {
    try {
        /*Consultar error dice que rPlayedService.getRPlayed() is a function*/
        const rPlayed = await rPlayedService.getRPlayed();
        return res.status(200).json({status: 200, data: rPlayed, message: 'Successfully recently played song retrieved'});
    } catch (error) {
        return res.status(400).json({status: 400, message: error.message});
    }
}

module.exports = rPlayedController;