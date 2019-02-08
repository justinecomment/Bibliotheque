import UserCollections from '../../data/UserCollections';

const state={
  userCollections:[]
};

const getters = {
  userCollections(state) {
    return state.userCollections;
  }
};

const mutations = {
  'USER_SET_COLLECTIONS'(state, userCollection){
    state.userCollections = userCollection;
  },
  'USER_ADD_COLLECTION' (state, userCollection){
    state.userCollections.push(userCollection);
  },
  'USER_DELETE_COLLECTION' (state, userCollection){
    state.userCollections.splice(0,1);
  }
};

const actions = {
  initUserCollections: ({commit}) => {
    commit('USER_SET_COLLECTIONS', UserCollections);
  },
  userAddCollection: ({commit}, userCollections) => {
    commit('USER_ADD_COLLECTION', userCollections);
  },
  userDeleteCollection: ({commit}, userCollection) => {
    commit('USER_DELETE_COLLECTION', userCollection)
  }
};


export default {
  state,
  mutations,
  actions,
  getters
};