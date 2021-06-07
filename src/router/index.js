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
       ////Product dashboard////
    {
        path: '/admin/products',
        name: 'product_dash',
        component: () => import('../view/All/Product/product_dash.vue'),
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
      ////custom dashboard////
    {
        path: '/admin/custom',
        name: 'custom_dash',
        component: () => import('../view/All/Custom field/custom_dash'),
    },
    {
        path: '/new_custom',
        name: 'new_custom',
        component: () => import('../view/All/Custom field/new_custom'),
    },
    {
        path: '/custome_value',
        name: 'custome_value',
        component: () => import('../view/All/Custom field/custome_value'),
    },    ////stores dashboard////
    {
        path: '/admin/stores',
        name: '/admin/stores',
        component: () => import('../view/All/Stores/stores_dash'),
    },
    {
        path: '/new_store',
        name: 'new_store',
        component: () => import('../view/All/Stores/new_store')
    },
    {
        path: '/edit_store/:id',
        name: 'edit_store',
        component: () => import('../view/All/Stores/edit_store')
    },
    {
        path: '/store/:id/product',
        name: 'prod_store',
        component: () => import('../view/All/Stores/Products/prod_store')
    },
    {
        path: '/store/:id/new_product',
        name: 'new_prod_store',
        component: () => import('../view/All/Stores/Products/new_prod_store')
    },
    {
        path: '/store/:id/product/:id_product',
        name: 'edit_prod_store',
        component: () => import('../view/All/Stores/Products/edit_prod_store')
    },
    {
        path: '/store/product/not_impro',
        name: 'not_impro_prod',
        component: () => import('../view/All/Stores/Products/not_impro_prod')
    },
   
    //doctor dashboard//
    // {
    //     path: '/admin/doctors',
    //     name: 'dosctors',
    //     component: () => import('../view/depDoctor/doctor/dosctors'),
    // },
    {
        path: '/admin/doctors',
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
        name: 'editdoctor',
        component: () => import('../view/depDoctor/doctor/editDoctor'),
        params: true,
    },
    {
        path: '/viewdoctor',
        name: 'viewdoctor',
        component: () => import('../view/depDoctor/doctor/viewDoctor'),
        params: true,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
