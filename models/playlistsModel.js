// Playlist models database
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
  id_song: {
    type: String,
    required: true,
  },
  id_user: {
    type: [String],
    required: true,
  },
  playlistName: {
    type: [String],
    require: true,
  },
}, { versionKey: false });

const Playlists = mongoose.model('Playlists', PlaylistSchema);
module.exports = Playlists;
