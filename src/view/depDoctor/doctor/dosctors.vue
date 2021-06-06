<template>
    <div class="topnav">
        <router-link class="active a" to="/doctores">Dectors</router-link>
        <router-link class="a" to="/trashdoctors">Dector trached</router-link>
    </div>
</template>

<script>
export default {
    name: 'dosctors',
};
</script>

<style scoped>
/* Add a black background color to the top navigation */
.topnav {
    background-color: #333;
    overflow: hidden;
    margin-left: 18%;
    margin-right: 10px;
    margin-top: 10px;
}

/* Style the links inside the navigation bar */
.topnav .a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

/* Change the color of links on hover */
.topnav .a:hover {
    background-color: #ddd;
    color: black;
}

/* Add a color to the active/current link */
.topnav .a.active {
    background-color: #04aa6d;
    color: white;
}
</style>
