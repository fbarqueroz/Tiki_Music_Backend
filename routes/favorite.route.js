const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favorite.controller');

router.put('/favorite', favoriteController.updateFavorite);
router.get('/favorite', favoriteController.upsertFavorite);
router.post('/favorite', favoriteController.createFavorite);

module.exports = router;
