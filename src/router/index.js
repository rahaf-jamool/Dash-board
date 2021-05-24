import Vue from 'vue';
import VueRouter from 'vue-router';
/* import services */

Vue.use(VueRouter);

const routes = [
    /* dashboard */
    {
        path: '/admin',
        name: 'Adminbody',
        component: () => import('../components/body'),
    },
    {
        path: '/admin/product_dash',
        name: 'product_dash',
        component: () => import('../view/All/Product/product_dash.vue'),
    },
    ////category dashboard////
    {
        path: '/admin/categories_dash',
        name: 'categories_dash',
        component: () => import('../view/All/Category/categories_dash.vue'),
    },
    {
        path: '/newCategory',
        name: 'addnewcategory',
        component: () => import('../view/All/Category/addNewCategory'),
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
    },
    //
    {
        path: '/admin/brand_dash',
        name: 'brand_dash',
        component: () => import('../view/All/Brand/brand_dash'),
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
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
