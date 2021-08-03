// Var
const playlistService = require('../services/playlistService');
const playlistController = {};

// Post controller
playlistController.create = async function (req, res, next) {
  try {
    const newPlaylist = await playlistService.createPlaylist(req.body);
    return res.status(201).json({ newPlaylist });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Get controller
playlistController.getPlaylist = async function (req, res, next) {
  try {
    const playlist = await playlistService.getPlaylist();
    return res.status(200).json({ status: 200, data: playlist, message: 'Successfully playlist  retrieved' });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Put controller
playlistController.updatePlaylist = async function (req, res, next) {
  try{
      const updatePlaylist = await playlistService.updatePlaylist(req.params, req.body);
      return res.status(201).json({status:201, data: updatePlaylist, message:'Playlist Updated'});
  }catch(error){
      return res.status(400).json({ status: 400, message: error.message })
  }
}

// Delete playlist controller
playlistController.deletePlaylist = async function (req, res, next) {
  try{
      const deletePlaylist = await playlistService.deletePlaylist(req.params);
      return res.status(201).json({ status:201, data: deletePlaylist, message:'Playlist Deleted'});
  }catch(error){
      return res.status(400).json({ status: 400, message: error.message })
  }
}

// Delete song from playlist controller
playlistController.deletePlaylistBySong = async function (req, res, next) {
  try{
      const deleteSongs = await playlistService.deleteSongs(req.params, req.body);
      return res.status(201).json({ status:201, data: deleteSongs, message:'Song Deleted'});
  }catch(error){
      return res.status(400).json({ status: 400, message: error.message })
  }
}

// Export
module.exports = playlistController;