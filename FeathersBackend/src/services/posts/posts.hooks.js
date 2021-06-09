const { authenticate } = require('@feathersjs/authentication').hooks;




const campoImagen = async context => {

  console.log(context.result);
  if (context.method === "get") {
    if (context.result.image) {
      context.result.image = context.result.image.split(',');
    }
  } else {
    for (const post of context.result) {
      if (post.image) {
        post.image = post.image.split(',');
      }
    }
  }
  console.log(context.result);
}


module.exports = {
  before: {
    all: [],
    find: [],
    get: [authenticate('jwt')],
    create: [authenticate('jwt')],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [],
    find: [campoImagen],
    get: [campoImagen],
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