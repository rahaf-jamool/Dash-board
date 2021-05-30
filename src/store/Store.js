import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex, axios);

let lang = window.localStorage.getItem('lang');
export default new Vuex.Store({
    state: {
        // APi
        Stores: [],
        store: null,
        Sections: [],
        Product: [],
        ProductID: null,
        Brand: [],
        Brands: [],
        Categories: [],
        CategoryID: null,
        SectionID:null,
        priceArray: [],
        sections: [],
    },
    mutations: {
        SET_Stores(state, Stores) {
            state.Stores = Stores;
        },
        SET_Store(state, store) {
            state.store = store;
        },
        SET_Products(state, Product) {
            state.Product = Product;
        },
        SET_ProductID(state, ProductID) {
            state.ProductID = ProductID;
        },
        SET_Brands(state, Brands) {
            state.Brands = Brands;
        },
        SET_Categories(state, Categories) {
            state.Categories = Categories;
        },
        SET_CategoryID(state, CategoryID) {
            state.CategoryID = CategoryID;
        },
        Delete_Category(state, itemsId) {
            let Categories = state.Categories.filter((v) => v.id != itemsId);
            state.Categories = Categories;
        },
        SET_Sections(state, sections) {
            state.sections = sections;
        },
        SET_SectionID(state, SectionID) {
            state.SectionID = SectionID;
        },
    },
    actions: {
        loadStores({ commit }) {
            axios
                .get(`/api/stores/getAll?lang=${lang}`)
                .then((res) => {
                    console.warn('Store :', res.data.Stores);
                    let Stores = res.data.Stores;
                    commit('SET_Stores', Stores);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadstore({ commit }, productId) {
            axios
                .get(`/api/stores/getById/${productId}?lang=${lang}`)
                .then((res) => {
                    console.warn('StorebyId :', res.data);
                    let store = res.data.Store;
                    commit('SET_Store', store);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadProducts({ commit }) {
            axios
                .get(`/api/products/getAll?lang=${lang}`)
                .then((res) => {
                    console.warn('Product :', res.data.Products);
                    let Product = res.data.Products;
                    commit('SET_Products', Product);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadProduct({ commit }, ProductID) {
            axios
                .get(`/api/products/getById/${ProductID}?lang=${lang}`)
                .then((res) => {
                    console.warn('productById :', res.data.product);
                    let ProductID = res.data.product;
                    commit('SET_ProductID', ProductID);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadBrands({ commit }) {
            axios
                .get(`/api/brands/getAll?lang=${lang}`)
                .then((res) => {
                    console.warn('Brands :', res.data.Brand);
                    let Brands = res.data.Brand;
                    commit('SET_Brands', Brands);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadCategories({ commit }) {
            axios
                .get(`/api/categories/getAll?lang=${lang}`)
                .then((res) => {
                    console.warn('Categories :', res.data.Category);
                    let Categories = res.data.Category;
                    commit('SET_Categories', Categories);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadCategory({ commit }, CategoryID) {
            axios
                .get(`/api/categories/getById/${CategoryID}?lang=${lang}`)
                .then((res) => {
                    console.warn('CategoryID :', res.data.Category);
                    let CategoryID = res.data.Category;
                    commit('SET_CategoryID', CategoryID);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        async deleteCategory({ commit }, items) {
            axios.put(
                `http://edalili.e-dalely.com/public/api/categories/trash/${items.id}`,
                commit('Delete_Category', items.id)
            );
        },
        loadSections({ commit }) {
            axios
                .get(`/api/sections/getAll?lang=${lang}`)
                .then((res) => {
                    console.warn('Sections :', res.data.Section);
                    let sections = res.data.Section;
                    commit('SET_Sections', sections);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadSection({ commit }, SectionID) {
            axios
                .get(`/api/sections/getById/${SectionID}?lang=${lang}`)
                .then((res) => {
                    console.warn('SectionID :', res.data);
                    let SectionID = res.data;
                    commit('SET_SectionID', SectionID);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });

    },},
    getters: {
        avalibleStore: (state) => {
            let len = state.Product[0].store.length;
            return len - 1;
        },
        getStoreId: (state) => (id) => {
            return state.Stores.find((prod) => prod.id === id);
        },
    },
});
