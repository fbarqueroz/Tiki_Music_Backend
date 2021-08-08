const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema structure
const PlaylistSchema = new Schema({
  id_user:{
    type: Schema.Types.ObjectId,
    required: true
},
playlistName:{
    type: String,
    required: true
},
songs:[String]
}, { versionKey: false });

const playlist = mongoose.model('playlist', PlaylistSchema)
module.exports = playlist;
