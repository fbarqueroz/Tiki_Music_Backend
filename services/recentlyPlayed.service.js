const RPlayed = require('../models/recentlyPlayed.model');
const RPlayedService = {};

RPlayedService.createRPlayed = async function ({id_user, date, songs}){
    try {
        const rPlayed = new RPlayed({id_user, date, songs});
        const newRPlayed = await rPlayed.save();
        return newRPlayed;
    } catch(error) {
        throw new Error ('Error while save the recently song played');
    }
};

RPlayedService.getRPLayed = async function () {
    try {
        const rPlayed = await User.find({});
        return rPlayed;
    } catch (error) {
        throw new Error ('Error while Pginating the recently played song');
    }
};

module.exports = RPlayedService;