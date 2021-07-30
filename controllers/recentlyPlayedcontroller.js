const recentlyPlayedService = require('../services/recentlyPlayed.service');
const recentlyPlayedController = {};

recentlyPlayedController.create = async function (req, res, next) {
    try {
        newRecentlyPlayed = await recentlyPlayedService.createRecetlyPlayed(req.body);
        return res.status(201).json({newRecentlyPlayed});
    } catch(error) {
        return res.status(400).json({status: 400, message: error.message});
    }
}

recentlyPlayedController.getRecentlyPlayed = async function (req, res, next) {
    try {
        /*Consultar error dice que recentlyPlayedService.getRPlayed() is a function*/
        const recentlyPlayed = await recentlyPlayedService.getRecentlyPlayed();
        return res.status(200).json({status: 200, data: recentlyPlayed, message: 'Successfully recently played song retrieved'});
    } catch (error) {
        return res.status(400).json({status: 400, message: error.message});
    }
}

module.exports = recentlyPlayedController;