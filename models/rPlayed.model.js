// User's models database

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rPLayedSchema = new Schema ({
    id_user: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    songs: {
        type: Array,
        required: true
    }

    /*
        id_user: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    songs: {
        type: Array,
        required: true
    }
    */
}, {versionKey: false });

const rPLayed = mongoose.model('rPLayed', rPLayedSchema);
module.exports = rPLayed;