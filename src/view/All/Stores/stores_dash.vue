<template>
    <div class="parent">
        <div class="selected">Stores</div>
        <div class="new_store">
            <button @click="newProduct">New Store</button>
        </div>
        <div class="contain">
            <div class="nav_store">
                <div style="background-color: #ddd; padding: 20px" class="id">
                    id
                </div>
                <div style="background-color: #ddd; padding: 20px" class="logo">
                    logo
                </div>
                
                <div style="background-color: #ddd; padding: 20px" class="name">
                    name
                </div>
                <div style="background-color: #ddd; padding: 20px" class="sections">
                 sections
                </div>
                <div style="background-color: #ddd; padding: 20px" class="status">
                    status
                </div>    
                <div style="background-color: #ddd; padding: 20px" class="edit">
                    edit
                </div>
                <stores
                    v-for="items in Stores"
                    :key="items.pr"
                    :id="items.id"
                    :title="items.title"
                    :section="items.section"
                    :is_active	="items.is_active	"
                    
                />
            </div>
        </div>
    </div>
</template>

<script>
import stores from '../Stores/store';
import { mapState } from 'vuex';
export default {
    name: 'stores_dash',
    components: {
        stores,
    },
    data() {
        return {};
    },
    methods: {
        newProduct() {
            this.$router.push(`/new_store`);
        },
    },
    computed: {
               ...mapState({
            Stores: (state) => state.Stores.Stores,
        }),
    },
    mounted() {
        this.$store.dispatch('loadStores');
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
        '. . selected new_product new_product . . . . .'
        '. . contain contain contain contain contain contain contain contain';
}
.new_store {
    border-radius: 5px;
    grid-area: new_product;
    margin: 10px;
}
.new_store button {
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
.nav_store {
    display: grid;
    grid-template-areas:
        'id logo name sections status edit'
        'stores stores stores stores stores stores';
}
.Contain_store .id {
    grid-area: id;
}
.Contain_store .edit {
    grid-area: edit;
}
.Contain_store .stores {
    grid-area: prodstoresuct;
}
</style>
