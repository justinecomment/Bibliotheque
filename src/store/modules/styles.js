import Styles from '../../data/styles';

const state={
  styles:[]
};

const getters = {
  styles(state) {
    return state.styles;
  }
};

const mutations = {
  'SET_STYLES'(state, styles){
    state.styles = styles;
  }
};

const actions = {
  initStyles: ({commit}) => {
    commit('SET_STYLES', Styles);
  }
};


export default {
  state,
  mutations,
  actions,
  getters
};