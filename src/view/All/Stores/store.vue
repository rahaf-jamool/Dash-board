<template>
    <div class="stores">
        <div><input style="margin: 0px 10px" type="checkbox" />{{ id }}</div>
          <div><img v-lazy="`${image}`" /></div>
    
        <router-link :to="`/store/${id}/product`" style="margin: auto;">
                <div>{{ title }}</div></router-link>
           <select class="sections">
               <option v-for="item in section" :key="item.ps" > {{item.name}} </option>
           </select>
        <div>
            <i v-if="is_active == 'Active'" class="fa fa-check"></i>
            <i v-else class="fa fa-times"></i>
        </div>
        <div class="icon">
            <router-link
                :to="{ name: 'edit_store', params: { id: id } }"
                @click="showEditModal = true"
            >
                <i class="fas fa-edit"></i>
            </router-link>

            <i @click="Delete()" class="fa fa-trash"></i>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'stores',
    props: ['id', 'title','section','name','is_active'],
    data() {
        return {
            details: {
                id: this.id,
            },
        };
    },
    methods: {
        Delete() {
            axios.delete(
                `http://edalili.e-dalely.com/public/api/stores/delete/${this.id}`,
                this.details
            );
            console.log(JSON.stringify(this.is_active));
        },
    },
    computed: {
    
    },
};
</script>
<style scoped>
.stores {
    display: contents;
}
.stores div {
    margin: auto;
}
.stores img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 20px 0;
}
div i {
    cursor: pointer;
    margin: 0 5px;
}
.icon i:hover {
    color: red;
    font-size: 20px;
}
.sections{
    width: 100px;
    height: 80px;
    margin: auto;
}


</style>
