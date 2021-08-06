const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema structure
const favoriteSchema = new Schema ({
  id_user: {
    type: Schema.Types.ObjectId,
    required: true
  },
  songs: {
    type: [String]
  }
}, { versionKey: false });

const Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorite;
