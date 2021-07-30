const Favorite = require('../models/favorite.model');
const mongoose = require('mongoose');
const favoritesService = {};

async function findUser(id_user) {
  try {
    const user = Favorite.findOne({id_user: mongoose.Types.ObjectId(id_user)});
    return user ? user: null;
  } catch (error) {
    throw new Error('Error while getting user');
  }
}

async function createFavorite(id_user, songs) {
  try {
    const favorite = new Favorite({id_user, songs});
    const newFavorite = await favorite.save();
    return newFavorite;
  } catch (error) {
    throw new Error('Error while save the favorite song');
  }
}

async function updateFavorite(user, songs) {
  try {
    user.songs.push(songs.toString());
    await user.save();
    return user;
  } catch (error) {
    throw new Error('Error while update the favorite song');
  }
}

favoritesService.upsertFavorite = async function ({id_user, songs}) {
  try {
    const user = findUser(id_user);
    if(user) {
      return await updateFavorite(user, songs);
    }
    return await createFavorite;
  } catch(error) {
    throw new Error ('Error while save the favorite song');
  }
};

module.exports = favoritesService;