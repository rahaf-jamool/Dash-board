<template>
    <!-- <div class="option_dash">
            <select v-model="selected" @change="handleChange($event)">
                <option value="catlog" disabled>catlog</option>

                <option @click="gotoProductAll" value="Product">Product</option>

                <option @click="gotoCategoriesAll" value="Catogeries">
                    Catogeries
                </option>
                <option @click="gotoBrandAll" value="Brands">Brands</option>
                <option value="Custom field">Custom field</option>
            </select> -->

    <!-- <div class="selected">{{selected}}</div>  -->

    <div class="sidebar">
        <router-link to="/Admin/product_dash" class="a"> Product </router-link>
        <router-link to="/categories_dash" class="a"> Category </router-link>
        <router-link to="/brand_dash" class="a">Brands</router-link>
        <router-link to="">Custom field</router-link>
    </div>
</template>

<script>
export default {
    name: 'Admin',

    components: {},
    data() {
        return {
            selected: localStorage.getItem('selected'),
        };
    },
    methods: {
        // gotoProductAll() {
        //     this.$router.push(`/Admin/product_dash`);
        // },
        // gotoCategoriesAll() {
        //     this.$router.push(`/categories_dash`);
        // },
        // gotoBrandAll() {
        //     this.$router.push(`/brand_dash`);
        // },
        // handleChange(event) {
        //     localStorage.setItem('selected', event.target.value);
        // },
    },
    computed: {},
};
</script>
<style>
/*.option_dash {*/
/*    grid-area: option;*/
/*    background-color: #ccc;*/
/*}*/

/*.selected {*/
/*    grid-area: selected;*/
/*    margin: 10px;*/
/*    padding: 10px;*/
/*}*/
/*.contain {*/
/*    width: 100%;*/
/*    grid-area: contain;*/
/*}*/
/*////*/

/* Style the sidebar - fixed full height */
.sidebar {
    height: 100%;
    width: 160px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 16px;
}

/* Style sidebar links */
.sidebar .a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block;
}

/* Style links on mouse-over */
.sidebar .a:hover {
    color: #f1f1f1;
}

/* Style the main content */
.main {
    margin-left: 160px; /* Same as the width of the sidenav */
    padding: 0px 10px;
}

/* Add media queries for small screens (when the height of the screen is less than 450px, add a smaller padding and font-size) */
@media screen and (max-height: 450px) {
    .sidebar {
        padding-top: 15px;
    }
    .sidebar .a {
        font-size: 18px;
    }
}
</style>
