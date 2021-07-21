const favoriteService = require('../services/favorite.service');

const favoriteController = {};

favoriteController.upsert = async function (req, res, next) {
  try {
    const upsertFavorite = await  favoriteService.upsertFavorite(req.body); 
    newFavorite = await favoriteService.createFavorite(req.body);
    return res.status(201).json({ status: 201, data: upsertFavorite });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

module.exports = favoriteController;
