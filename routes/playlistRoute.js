/* eslint-disable import/no-unresolved */
const express = require('express');

const router = express.Router();
const playlistController = require('../controllers/playlistController');

router.post('./playlist', playlistController.create);
router.get('/playlist', playlistController.getPlaylist);

module.exports = router;
