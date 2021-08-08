const playlist = require('../models/playlistsModel');
const mongoose = require('mongoose');

const playlistService = {}


playlistService.createPlaylist = async function ({id_user, playlistName ,songs}){
    try{
        const Playlist = new playlist({id_user, songs, playlistName})
        const newPlaylist = await Playlist.save();
        return newPlaylist;
    }catch(error){
        throw new Error('Error while save playlist');
    }
}

playlistService.updateplaylist = async function({id},{id_user, playlistName, songs}){
    try{
        const Playlist = await playlist.findById(id);
        const updatePlay = await Playlist.set({id_user, playlistName});
        Playlist.songs.push(songs.toString());
        await updatePlay.save();
        return updatePlay;
    }catch (error){
        throw new Error('Error while update playlist');
    }
}

playlistService.deleteSongs = async function({id},{id_user, playlistName, songs}){
    try{
        const Playlist = await playlist.findById(id);
        const updatePlay = await Playlist.set({id_user, playlistName});
        Playlist.songs.pull(songs.toString());      
        await updatePlay.save();       
        if(Playlist){
            return "Song deleted sucessfully"
        }
    }catch(error){
        throw new Error('Error while delete favorite');
    }
}
playlistService.deletePlaylist = async function({id}){
    try{
        const Playlist = await playlist.deleteOne({_id:id});
        if(Playlist){
            return "Playlist deleted successfully"
        }
        return Playlist;
    }catch(error){
        throw new Error('Error while delete Playlist');
    }
}

playlistService.getPlaylist = async function({id_user}){
    try{    
        const playlists = await playlist.find({id_user: mongoose.Types.ObjectId(id_user)});
        return playlists;
    }catch(error){
        throw new Error ('Error while paginating Playlists');
    }
} 

playlistService.getPlaylistOne = async function({id_user, id}){
    try{
        const Playlist = await playlist.find({id_user:mongoose.Types.ObjectId(id_user), _id:id}); 
        return Playlist;
    }catch(error){
        throw new Error ('Error while paginating Playlists');
    }
}


module.exports = playlistService;


