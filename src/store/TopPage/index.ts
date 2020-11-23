import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { IState } from './types'

const state: IState = {
  jshjdh: '',
};

export default {
    namespaced: true, state, actions, mutations, getters,
}
