const express = require('express');
const router = express.Router();
const rPlayedController = require('../controllers/rPlayed.controller');

router.post('/rPlayed', rPlayedController.create);
router.get('/rPlayed', rPlayedController.getRPlayed);


module.exports = router;