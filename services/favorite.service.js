const Favorite = require('../models/favorite.model');
const mongoose = require('mongoose');

const favoriteMusicService = {}

favoriteMusicService.getFavoriteMusicbyUser = async function ({id_user}) {
    try {
        const favoriteMusic = await Favorite.find({id_user: mongoose.Types.ObjectId(id_user)})
        return favoriteMusic;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Favorite Music')
    }
}

async function findUser (id_user) {
    try {
        const user = await Favorite.findOne({id_user: mongoose.Types.ObjectId(id_user)})
        return user ? user : null;
    } catch (e) {
        // Log Errors
        throw Error('Error while getting user')
    }
}


async function saveFavoriteMusic (id_user, songs) {
    try {
        const favoriteMusic = new FavoriteMusic({id_user, songs});
        const newFavoriteMusic = await favoriteMusic.save();
        return newFavoriteMusic;
    } catch (e) {
        // Log Errors
        throw Error('Error while save Favorite Music')
    }
}

async function updateFavoriteMusic (user, songs) {
    try {
        user.songs.push(songs.toString());
        user.save()
        return user;
    } catch (e) {
        // Log Errors
        console.log('Error Message', e.message)
        throw Error('Error while update Favorite Music')
    }
}

async function deleteFavoriteMusic (user, songs) {
    try {
        user.songs.pull(songs);
        user.save()
        return user;
    } catch (e) {
        // Log Errors
        console.log('Error Message', e.message)
        throw Error('Error while delete Favorite Music')
    }
}


favoriteMusicService.upsertfavoriteMusic = async function ({id_user, songs}) {
    try {
        const user = await findUser (id_user)
        if (user){
            return await updateFavoriteMusic(user, songs)
        } else {
            return await saveFavoriteMusic (id_user, songs)
        }
    } catch (e) {
        // Log Errors
        console.log('Error Message', e.message)
        throw Error('Error while save Favorite Music')
    }
}

favoriteMusicService.deleteFavoriteMusicByUserAndSong  = async function ({id_user, song}) {
    try {
        const user = await findUser (id_user) 
        if (user){
            return deleteFavoriteMusic(user, song)
        }
    } catch (e) {
        // Log Errors
        console.log('Error Message', e.message)
        throw Error('Error while save Favorite Music')
    }
} 

module.exports = favoriteMusicService