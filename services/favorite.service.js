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

async function deleteFavoriteMusic(user, songs){
  try {
      user.songs.pull(songs.toString());
      user.save();
      return user;
  }
  catch (e){
      console.log('Error message', e.message);
      throw Error ('Error while delete Favorite Music')
  }
}

favoritesService.upsertFavorite = async function({id_user, songs}){
  try {
      const user = await findUser(id_user);
      if(user){
          return await updateFavoriteMusic(user, songs);
      }
      return await createFavorite(id_user, songs);
  }
  catch (e){
      console.log('Error message', e.message);
      throw Error ('Error while upsert Favorite Music');
  }
}

favoritesService.getFavorite = async function () {
  try {
      const favoriteMusic = await FavoriteMusic.find({});
      return favoriteMusic;
  }catch (e){
      console.log('Error message', e.message);
      throw Error ('Error while paginating favorite music');
  }
} 

favoritesService.deleteFavorite = async function({songs, id_user}){
  try{
      const user = await findUser(id_user);
      if(user){
          return await deleteFavoriteMusic(user, songs);
      }
  }catch(e){
      throw new Error('Error while delete favorite');
  }
}

module.exports = favoritesService;