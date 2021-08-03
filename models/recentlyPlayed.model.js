const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema structure
const recentlyPlayedSchema = new Schema ({
    id_user: {
        type: Schema.Types.ObjectId,
        required: true
    },
    songs: {
        type: [String],
        required: true
    }
}, {versionKey: false });

const recentlyPlayed = mongoose.model('recentlyPlayed', recentlyPlayedSchema);
module.exports = recentlyPlayed;