import state from './state';
import * as mutations from './mutations';
import * as actions from './action';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);
// let lang = window.localStorage.getItem('lang');

export default {
    state,
    mutations,
    actions,
};
