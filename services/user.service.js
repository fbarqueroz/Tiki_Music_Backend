const md5 = require('md5')
const User = require('../models/user.model');
const userService = {};

userService.createUser = async function ({ name, email, password }) {
  try {
    const user = new User({ name, email, password: md5(password)});
    const newUser = await user.save();
    return newUser;
  } catch (error) {
    throw new Error('Error while save user');
  }
};

userService.getUsers = async function () {
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    throw new Error('Error while Pginating Users');
  }
};

userService.getUser = async function ({ id }) {
  try {
    const user = await User.findById(id);
    let getUser = JSON.parse(JSON.stringify(users));
    delete getUser.password;
    return user;
  } catch (error) {
    throw new Error ('Error while retirning the user');
  }
}

userService.updateUser = async function ({ id }, { name, email, password }) {
  try {
    const user = await User.findById(id);
    const updateUser = await user.set({name, email, password: md5(password)});
    await updateUser.save();
    return updateUser;
  } catch (error) {
     console.log(error.message);
    throw new Error ('Error while update the user');
  }
}
userService.deleteUser = async function({id}){
  try{
      const user = await  User.findByIdAndRemove(id);
      return user;
  }catch (error){
      console.log(error.message);
      throw new Error ('Error while delete user');
  }
}
module.exports = userService;
