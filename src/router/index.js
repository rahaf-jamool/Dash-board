import Vue from 'vue';
import VueRouter from 'vue-router';
/* import services */

Vue.use(VueRouter);

const routes = [
    /* dashboard */
    {
        path: '/admin',
        name: 'admin',
        component: () => import('../components/body'),
    },
    ////category all dashboard////
    {
        path: '/admin/categories',
        name: 'categories_dash',
        component: () => import('../view/All/Category/categories_dash.vue'),
        params: true,
    },
    {
        path: '/newCategory',
        name: 'addnewcategory',
        component: () => import('../view/All/Category/addNewCategory'),
        params: true,
    },
    {
        path: '/categoryview/:id',
        name: 'categoryview',
        component: () => import('../view/All/Category/categoryView'),
        params: true,
    },
    {
        path: '/categoryEdit/:id',
        name: 'categoryEdit',
        component: () => import('../view/All/Category/categoryEdit'),
        params: true,
    },
    //brand all dashboard//
    {
        path: '/admin/brands',
        name: 'brand_dash',
        component: () => import('../view/All/Brand/brand_dash'),
    },
    {
        path: '/brandnew',
        name: 'brand_add',
        component: () => import('../view/All/Brand/brandAddnew'),
    },
    {
        path: '/brandview/:id',
        name: 'brand_view',
        component: () => import('../view/All/Brand/brandview'),
        params: true,
    },
    {
        path: '/brandedit/:id',
        name: 'brand_edit',
        component: () => import('../view/All/Brand/brandedit'),
        params: true,
    },
    //product all dashboard//
    {
        path: '/admin/products',
        name: 'product_dash',
        component: () => import('../view/All/Product/product_dash.vue'),
    },
    {
        path: '/new_product',
        name: 'new_product',
        component: () => import('../view/All/Product/new_product'),
    },
    {
        path: '/edit_product/:id',
        name: 'edit_product',
        component: () => import('../view/All/Product/edit_product'),
    },
    //doctor dashboard//
    {
        path: '/admin/doctors',
        name: 'dosctors',
        component: () => import('../view/depDoctor/doctor/dosctors'),
    },
    {
        path: '/doctores',
        name: 'doctor',
        component: () => import('../view/depDoctor/doctor/doctor_dash'),
    },
    {
        path: '/trashdoctors',
        name: 'doctorTrashed',
        component: () => import('../view/depDoctor/doctor/doctorTrashed'),
    },
    {
        path: '/newdoctor',
        name: 'addNewdoctor',
        component: () => import('../view/depDoctor/doctor/addNewdoctor'),
    },
    {
        path: '/editdoctor',
        name: 'editDoctor',
        component: () => import('../view/depDoctor/doctor/editDoctor'),
    },
    {
        path: '/viewdoctor',
        name: 'viewdoctor',
        component: () => import('../view/depDoctor/doctor/viewDoctor'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
