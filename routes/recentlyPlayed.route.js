const express = require('express');

const router = express.Router();
const recentlyPlayedcontroller = require('../controllers/recentlyPlayedcontroller');

router.put('/recently-played', recentlyPlayedcontroller.upsert);

router.get('/recently-played/:id_user', recentlyPlayedcontroller.getRecents);

module.exports = router;