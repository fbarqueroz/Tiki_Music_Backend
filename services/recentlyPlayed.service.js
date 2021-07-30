const RecentlyPlayed = require('../models/user.model');
const RecentlyPlayedService = {};

RecentlyPlayedService.createRecentlyPlayed = async function ({id_user, date, songs}){
    try {
        const recentlyPlayed = new RecentlyPlayed({id_user, date, songs});
        const newRecentlyPlayed = await recentlyPlayed.save();
        return newRecentlyPlayed;
    } catch(error) {
        throw new Error ('Error while save the recently song played');
    }
};

RecentlyPlayedService.getRecentlyPLayed = async function () {
    try {
        const recentlyPlayed = await User.find({});
        return recentlyPlayed; 
    } catch (error) {
        throw new Error ('Error while Pginating the recently played song');
    }
};

module.exports = RecentlyPlayedService;