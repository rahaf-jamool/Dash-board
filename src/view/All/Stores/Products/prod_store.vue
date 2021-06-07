<template>
    <div class="parent">
               <div class="selected">
            Store <span style="color: red">/{{this.$route.params.id}}</span><span style="color: red">/</span> Product
        </div>
        <div class="new_product">
            <button @click="newProduct">New Product</button>
        </div>
        <div class="contain">
            <div class="nav_Product">
                <div style="background-color: #ddd; padding: 20px" class="id">
                    id
                </div>
                <div style="background-color: #ddd; padding: 20px">
                    img<img class="img" src="" />
                </div>
                <div style="background-color: #ddd; padding: 20px" class="name">
                    name
                </div>

                <div
                    style="background-color: #ddd; padding: 20px"
                    class="status"
                >
                    status
                </div>
                <div style="background-color: #ddd; padding: 20px" class="edit">
                    edit
                </div>
                <prod
                    v-for="items in store.product"
                    :key="items.pr"
                    :id="items.id"
                    :name="items.name"
                    :image="items.image"
                    :is_appear="items.is_appear"
                />
            </div>
        </div>
    </div>
</template>

<script>
import prod from '../Products/prod.vue';
import { mapState } from 'vuex';
export default {
    name: 'prod_store',
    components: {
        prod,
    },
    data() {
        return {};
    },
    methods: {
        newProduct() {
            this.$router.push(`/store/${this.$route.params.id}/new_product`);
        },
    },
    computed: {
        ...mapState({
            store: (state) => state.Stores.store,
        }),
    },
    mounted() {
  this.$store.dispatch('loadstore', this.$route.params.id);
    },
};
</script>
<style scoped>
.parent {
    font-size: 18px;
    width: 100%;
    height: auto;
    display: grid;
    grid-template-areas:
        '. . . selected new_product new_product . . . .'
        '. . . contain contain contain contain contain contain contain';
}
.new_product {
    border-radius: 5px;
    grid-area: new_product;
    margin: 10px;
}
.new_product button {
    border: none;
    background-color: #0eacc6;
    padding: 10px;
    color: #fff;
}

.selected {
    grid-area: selected;
    margin: 10px;
    padding: 10px;
    background-color: #eee;
}
.contain {
    width: 100%;
    grid-area: contain;
}
.nav_Product {
    display: grid;
    grid-template-areas:
        'id img name status edit'
        'product product product product product';
}
.Contain_Product .id {
    grid-area: id;
}
.Contain_Product .img {
    grid-area: img;
}
.Contain_Product .status {
    grid-area: status;
}
.Contain_Product .edit {
    grid-area: edit;
}
.Contain_Product .product {
    grid-area: product;
}
</style>
