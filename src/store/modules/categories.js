import Categories from '../../data/Categories';

const state={
  categories:[]
};

const getters = {
  categories(state) {
    return state.categories;
  }
};

const mutations = {
  'SET_CATEGORIES'(state, categorie){
    state.categories = categorie;
  }
};

const actions = {
  initCategories: ({commit, rootState, dispatch}) => {
    commit('SET_CATEGORIES', Categories);
  }
};


export default {
  state,
  mutations,
  actions,
  getters
};