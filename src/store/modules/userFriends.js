import UserFriends from '../../data/UserFriends';

const state={
  userFriends:[]
};

const getters = {
  userFriends(state) {
    return state.userFriends;
  }
};

const mutations = {
  'USER_SET_FRIENDS'(state, userFriend){
    state.userFriends = userFriend;
  },
  'USER_ADD_FRIEND' (state, userFriend){
    state.userFriends.push(userFriend);
  },
  'USER_DELETE_FRIEND' (state, userFriend){
    state.userFriends.splice(0,1);
  }
};

const actions = {
  initUserFriends: ({commit}) => {
    commit('USER_SET_FRIENDS', UserFriends);
  },
  userAddFriends: ({commit}, userFriends) => {
    commit('USER_ADD_FRIEND', userFriends);
  },
  userDeleteFriends: ({commit}, userFriend) => {
    commit('USER_DELETE_FRIEND', userFriend)
  }
};


export default {
  state,
  mutations,
  actions,
  getters
};