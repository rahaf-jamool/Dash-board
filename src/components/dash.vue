<template>
    <nav class="sidebar">
        <div class="text">Dashboard</div>
        <ul>
            <li>
                <a class="a sell"
                    >SELL
                    <span class="fa fa-home"></span>
                </a>
                <ul>
                    <li>
                        <router-link to="/admin/products" class="a">
                            Products
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/categories" class="a">
                            Category
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/brands" class="a"
                            >Brands</router-link
                        >
                    </li>
                    <li>
                        <router-link to="/admin/custom" class="a"
                            >Custom field</router-link
                        >
                    </li>
                </ul>
            </li>
            <li>
                <a class="a sell">Stores</a>
                <ul>
                    <li>
                        <router-link to="/admin/stores" class="a"
                            >All Stores</router-link
                        >
                    </li>
                </ul>
            </li>
            <li>
                <a class="a sell">Doctors</a>
                <ul>
                    <li>
                        <router-link to="/admin/doctors" class="a"
                            >All Doctor</router-link
                        >
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Admin',
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    user-select: none;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
.sidebar {
    position: fixed;
    width: 200px;
    height: 100%;
    left: 0;
    background: #1b1b1b;
}
.sidebar .text {
    color: #fff;
    font-size: 25px;
    font-weight: 600;
    line-height: 65px;
    text-align: center;
    background: #1e1e1e;
    letter-spacing: 1px;
}
nav ul {
    background: #1b1b1b;
    height: 100%;
    width: 100%;
    list-style: none;
}
nav ul li {
    line-height: 60px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
nav ul li .a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    display: block;
    width: 100%;
    border-left: 3px solid transparent;
}
nav ul li .a:hover {
    color: cyan;
    background: #1e1e1e;
    border-left-color: cyan;
}
nav ul ul {
    position: static;
    /* display: none; */
}
nav ul ul li {
    line-height: 42px;
    border-bottom: none;
}
nav ul ul li .a {
    font-size: 17px;
    color: #e6e6e6;
    padding-left: 60px;
}
nav ul li .sell {
    border: 0px solid;
    box-shadow: 0 4px 8px 0 rgba(92, 90, 90, 0.2),
        0 6px 30px 0 rgba(95, 94, 94, 0.19);
    background-color: #dec;
    background: #1e1e1e;
    box-shadow: 10px;
}
</style>
