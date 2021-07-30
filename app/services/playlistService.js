const Playlists = require('../models/playlistsModel');

const PlaylistService = {};
PlaylistService.createPlaylist = async function ({ id_song, id_user, playlistName }) {
  try {
    const playlist = new Playlists({ id_song, id_user, playlistName });
    const newPlaylist = await playlist.save();
    return newPlaylist;
  } catch (e) {
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

module.exports = PlaylistService;
