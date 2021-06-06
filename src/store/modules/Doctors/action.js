import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);
let lang = window.localStorage.getItem('lang');

export const loadDoctors = ({ commit }) => {
    axios
        .get(`http://doctors.e-dalely.com/public/api/doctor/get?lang=${lang}`)
        .then((res) => {
            console.warn('doctors :', res.data.doctor);
            let doctors = res.data.doctor;
            commit('SET_Doctors', doctors);
        })
        .catch(function (error) {
            console.log('Error: ', error);
        });
};
