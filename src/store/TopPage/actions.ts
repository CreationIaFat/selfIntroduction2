import * as types from './types';
import { IState, IGetters, Actions, IActions, IMutations, } from '@/store/types'
import { handleError } from 'vue';

const actions: Actions<
types.IState,
types.IActions,
types.IGetters,
types.IMutations & IMutations,
IState,
IGetters,
IActions
> = {
//  async commitAAAA({ commit }, payload){
//     try {
//             commit('setksfjkaj', payload);
//         } catch(e){
//             handleError(commit, e);
//         }
    // },

};

export default actions;
