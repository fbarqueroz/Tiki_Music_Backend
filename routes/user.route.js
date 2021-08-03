// Var
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Users routes
router.post('/user', userController.create); // Create a new user
router.get('/users', userController.getUsers); // Call all users
router.get('/user/:id', userController.getUser); // Call an specific user with the id
router.put('/user/:id', userController.updateUser); // Update the user information
router.delete('/user/:id', userController.deleteUser); // Delete a specific user
router.post('/user/login', userController.userLogin); // Verify the log in

// Export
module.exports = router;