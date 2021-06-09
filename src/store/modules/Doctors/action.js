import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);
// let lang = window.localStorage.getItem('lang');

export const loadDoctors = ({ commit }) => {
    axios
        .get(`/api/doctor/get`)
        .then((res) => {
            console.warn('doctors :', res.data.doctor);
            let doctors = res.data.doctor;
            commit('SET_Doctors', doctors);
        })
        .catch(function (error) {
            console.log('Error: ', error);
        });
};
export const loadDoctor = ({ commit }, DoctorID) => {
    axios
        .get(`/api/doctor/getById/${DoctorID}`)
        .then((res) => {
            console.warn('DoctorID :', res.data.doctor);
            let DoctorID = res.data.doctor;
            commit('SET_DoctorID', DoctorID);
        })
        .catch(function (error) {
            console.log('Error: ', error);
        });
};
export const loadDoctorTrashed = ({ commit }) => {
    axios
        .get(`/api/doctor/getTrashed`)
        .then((res) => {
            console.warn('doctorstrashed :', res.data.doctor);
            let doctorstrashed = res.data.doctor;
            commit('SET_DoctorTrashed', doctorstrashed);
        })
        .catch(function (error) {
            console.log('Error: ', error);
        });
};
export const deleteDoctor = ({ commit }, items) => {
    axios.put(
        `/api/doctor/trash/${items.id}`,
        commit('Delete_Doctor', items.id)
    );
};
export const trashDoctor = ({ commit }, items) => {
    axios.put(
        `/api/doctor/restoreTrashed/${items.id}`,
        commit('Trash_Doctor', items.id)
    );
};
//hospital
export const loadHospitals = ({ commit }) => {
    axios
        .get(`/api/Hospital/get`)
        .then((res) => {
            console.warn('Hospitals :', res.data.Hospital);
            let Hospitals = res.data.Hospital;
            commit('SET_Hospitals', Hospitals);
        })
        .catch(function (error) {
            console.log('Error: ', error);
        });
};
export const loadHospital = ({ commit }, HospitalID) => {
    axios
        .get(`/api/Hospital/getById/${HospitalID}`)
        .then((res) => {
            console.warn('HospitalID :', res.data.Hospital);
            let HospitalID = res.data.Hospital;
            commit('SET_HospitalID', HospitalID);
        })
        .catch(function (error) {
            console.log('Error: ', error);
        });
};
