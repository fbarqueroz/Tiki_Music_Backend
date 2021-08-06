// Var
const express = require('express');
const router = express.Router();
const recentlyPlayedcontroller = require('../controllers/recentlyPlayedcontroller');

// Recently played routes
router.put('/recently-played', recentlyPlayedcontroller.upsert);
router.get('/recently-played/:id_user', recentlyPlayedcontroller.getRecents);

// Export
module.exports = router;