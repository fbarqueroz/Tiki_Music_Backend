// User's models database
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favoriteSchema = new Schema ({
  id_user: {
    type: Schema.Types.ObjectId,
    required: true
  },
  songs: {
    type: [String],
    required: true
  }
}, { versionKey: false });

const Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorite;
