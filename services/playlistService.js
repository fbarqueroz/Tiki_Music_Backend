const Playlists = require('../models/playlistsModel');

const PlaylistService = {};
PlaylistService.createPlaylist = async function ({ id_song, id_user, playlistName }) {
  try {
    const playlist = new Playlists({ id_song, id_user, playlistName });
    const newPlaylist = await playlist.save();
    return newPlaylist;
  } catch (error) {
    throw new Error('Error while save the playlist');
  }
};

PlaylistService.getPlaylist = async function () {
  try {
    const playlist = await Playlists.find({});
    return playlist;
  } catch (error) {
    throw new Error('Error while Paginating the playlist ');
  }
};

PlaylistService.deleteSongs = async function({id},{id_user, playlistName, id_song}){
  try{
      const Playlist = await playlist.findById(id);
      const updatePlay = await Playlist.set({id_user, playlistName});
      Playlist.id_song.pull(id_song.toString());
      await updatePlay.save();
      return updatePlay;
  }catch (error){
      throw new Error ('Error while delete playlist')
  }
}

PlaylistService.deletePlaylist = async function({id}){
  try{
      const Playlist = await playlist.deleteOne({_id:id});
      return Playlist;
  }catch (error){
      throw new Error ('Error while delete playlist')
  }
}

PlaylistService.updatePlaylist = async function({id},{id_user, playlistName, id_song}){
try{
    const Playlist = await playlist.findById(id);
    const updatePlay = await Playlist.set({id_user, playlistName});
    Playlist.id_song.push(id_song.toString());
    await updatePlay.save();
    return updatePlay;
}catch (error){
    throw new Error ('Error while save playlist')
}
}

module.exports = PlaylistService;
