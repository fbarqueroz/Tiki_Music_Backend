const Playlists = require('../models/playlistsModel');

const PlaylistService = {};
PlaylistService.createPlaylist = async function ({ songs, id_user, playlistName }) {
  try {
    const playlist = new Playlists({ songs, id_user, playlistName });
    const newPlaylist = await playlists.save();
    return newPlaylist;
  } catch (error) {
    throw new Error('Error while save the playlist');
  }
};

PlaylistService.getPlaylist = async function ({id_user}) {
  try {
    const playlist = await Playlists.find({id_user});
    return playlist;
  } catch (error) {
    throw new Error('Error while Paginating the playlist ');
  }
};

PlaylistService.getPlaylistId = async function ({ id }) {
  try {
      const playlist = await Playlists.findById(id);
      return playlist;
  } catch (error) {
      throw new Error(error.message);
  }
};


PlaylistService.deletePlaylist = async function({ id }){
  try{
      const Playlist = await Playlists.deleteOne({_id:id});
      return Playlist;
  }catch (error){
      throw new Error ('Error while delete playlist')
  }
}

PlaylistService.updatePlaylist = async function({id},{songs,id_user, playlistName}){
try{
    const Playlist = await Playlists.findById(id);
    const updatePlay = await Playlists.set({songs,id_user, playlistName});
    Playlist.songs.push(songs.toString());
    await updatePlay.save();
    return updatePlay;
}catch (error){
  console.log(error)
    throw new Error ('Error while save playlist')
}
}

module.exports = PlaylistService;
