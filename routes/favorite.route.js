const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favorite.controller');

router.put('/favorite', favoriteController.upsert);
router.get('/favorite', favoriteController.upsert);
// router.get('/favorite', favoriteController.getFavorites);

module.exports = router;
