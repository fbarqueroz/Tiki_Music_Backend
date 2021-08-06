// Var
const favoriteMusicService = require('../services/favorite.service')
const favoriteMusicControllers = {};

// Put controller
favoriteMusicControllers.upsert = async function (req, res, next) {
    try {
        const newFavoriteMusic = await favoriteMusicService.upsertfavoriteMusic(req.body)
        return res.status(201).json({ newFavoriteMusic });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

// Get controller
favoriteMusicControllers.getFavoriteMusicByUser = async function (req, res, next) {
    try {
        const favoriteMusic = await favoriteMusicService.getFavoriteMusicbyUser(req.params)
        return res.status(200).json({ status: 200, data: favoriteMusic, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

// Delete controller
favoriteMusicControllers.deleteFavoriteMusicByUserAndSong= async function (req, res, next) {
    try {
        const favoriteMusic =  await favoriteMusicService.deleteFavoriteMusicByUserAndSong(req.params)
        return res.status(202).json({  status: 202, data: favoriteMusic, message: "Item removed successfully" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

// Export
module.exports = favoriteMusicControllers;