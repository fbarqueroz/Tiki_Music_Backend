// Var
const userService = require('../services/user.service');
const userController = {};

// Push user controller
userController.create = async function (req, res, next) {
  try {
    newUser = await userService.createUser(req.body);
    return res.status(201).json({ newUser });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Get all users controller
userController.getUsers = async function (req, res, next) {
  try {
    const users = await userService.getUsers();
    return res.status(200).json({ status: 200, data: users, message: 'Successfully users retrieved' });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Get user by id controller
userController.getUser = async function (req, res, next) {
  try {
    const user = await userService.getUser(req.params);
    if (user == null) {
      return res.status(200).json({ status: 400, data: user, message: 'Cannot find user' });
    }
    return res.status(200).json({ status: 200, data: user, message: 'Successfully user retrieved' });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Put user controller
userController.updateUser = async function(req, res, next){
  try{
      const updateUser = await userService.updateUser(req.params, req.body);
      return res.status(200).json({ status:200, data: updateUser, message: "Successfully updated user"})

  }catch(error){
      return res.status(400).json({status: 400, message: error.message});
  }
}

// Delete user controller
userController.deleteUser = async function (req, res, next){ 
  try{
      const user = await userService.deleteUser(req.params)
      return res.status(200).json({status: 200, data: user, message: "Successfully deleted user"})

  }   catch(error){
      return res.status(400).json({status:400, message: error.message})
  }
}

// Login user controller
userController.userLogin = async function (req, res, next) {
  try {
    const loginUser = await userService.userLogin(req.body);
    return res.status(200).json({ status: 200, data: loginUser, message: 'Successufully users retrived' });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Export
module.exports = userController;
