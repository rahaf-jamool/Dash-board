<template>
    <div class="Custom">
         <div><input style="margin: 0px 10px" type="checkbox" />{{ id }}</div>
        <div>{{name }}</div>
        <div>{{value}}</div>
        <div class="icon">
            <router-link
                :to="{ name: 'edit_product', params: { id: id } }">
                <i class="fas fa-edit"></i>
            </router-link>

            <i class="fa fa-trash"></i>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'Custom',
    props: ['id', 'name', 'value'],
    data() {
        return {
        
        };
    },

};
</script>
<style scoped>
.Custom {
    display: contents;
}
.Custom div {
    margin: auto;
}
div i {
    cursor: pointer;
    margin: 0 5px;
}
.icon i:hover {
    color: red;
    font-size: 20px;
}
</style>
