const express = require('express');
const router = express.Router();
const recentlyPlayedController = require('../controllers/recentlyPlayedcontroller');

router.post('/recently-played', recentlyPlayedController.create);
router.get('/recently-played', recentlyPlayedController.getRecentlyPlayed);


module.exports = router;