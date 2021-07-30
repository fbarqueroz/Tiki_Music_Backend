const favoriteService = require('../services/favorite.service');

const favoriteController = {};

favoriteController.upsert = async function (req, res, next) {
  try {
    const upsertFavorite = await  favoritesService.upsertFavorite(req.body); 
    newFavorite = await favoriteService.createFavorite(req.body);
    return res.status(201).json({ status: 201, data: upsertFavorite });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

favoriteController.getFavorite = async function(req, res, next){
  try{
      const favorites = await favoritesService.getFavorite();
      return res.status(200).json({ status:200, data: favorites, message: "Successfully favorites retrieved"})

  }catch(error){
      return res.status(400).json({status: 400, message: error.message});
  }
}

favoriteController.delete = async function(req, res, next){
  try{
      const deleteFavorite = await favoritesService.deleteFavorite(req.body);
      return res.status(200).json({ status:200, data: deleteFavorite, message: "Item removed succesfull"})

  }catch(error){
      return res.status(400).json({status: 400, message: error.message});
  }
}
module.exports = favoriteController;
