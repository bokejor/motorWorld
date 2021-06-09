const { authenticate } = require('@feathersjs/authentication').hooks;
const { alterItems } = require('feathers-hooks-common');
const firebase = require('firebase');

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

const crearUsuario = async context => {

  const { profile = "user", ...data } = context.data;

  try {
    const newUser = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
    context.data.firebaseId = newUser.user.uid;
    context.data.profile = profile;

  } catch (e) {

    console.log(e)

  }


}

module.exports = {
  before: {
    all: [],
    find: [authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [crearUsuario, hashPassword('password')],
    update: [hashPassword('password'), authenticate('jwt')],
    patch: [hashPassword('password'), authenticate('jwt')],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
