const Recents = require('../models/recentlyPlayed.model');
const mongoose = require('mongoose');
const recentsService = {};

async function findUser(id_user) {
  try {
    const user = Recents.findOne({ id_user: mongoose.Types.ObjectId(id_user) });
    return user || null; // es lo mismo que user ? user : null
  } catch (e) {
    throw new Error('Error while get user');
  }
}

async function createRecents(id_user, songs) {
  try {
    const recents = new Recents({ id_user, songs });
    const newRecents = await recents.save();
    return newRecents;
  } catch (e) {
    throw new Error('Error while save recents');
  }
}

async function updateRecents(user, songs) {
  try {
    user.songs.unshift(songs.toString());
    await user.save();
    return user;
  } catch (e) {
    throw new Error('Error while update recents');
  }
}

recentsService.upsertRecents = async function ({ id_user, songs }) {
  try {
    const user = await findUser(id_user);
    if (user) {
      return await updateRecents(user, songs);
    }
    return await createRecents(id_user, songs);
  } catch (e) {
    throw new Error('Error while save recents');
  }
};

recentsService.getRecents = async function ({ id_user }) {
  try {
    const recents = await Recents.findOne({ id_user: `${id_user}` });
    return recents;
  } catch (e) {
    throw new Error('Error while returning recents');
  }
};

module.exports = recentsService;