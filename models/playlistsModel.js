const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema structure
const PlaylistSchema = new Schema({
  songs: {
    type: [String],
    required: true,
  },
  id_user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  playlistName: {
    type: String,
    require: true,
  },
}, { versionKey: false });

const Playlist = mongoose.model('Playlist', PlaylistSchema);
module.exports = Playlist;
