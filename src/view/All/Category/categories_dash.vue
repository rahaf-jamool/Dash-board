<template>
    <div class="parent">
        <div class="col-12">
            <div class="contain m-4 col-10">
                <div class="container">
                    <div class="float-right row m-6">
                        <router-link to="/newCategory"
                            ><button class="btn btn-info float-right">
                                <i class="fa fa-plus"></i>
                                &nbsp;&nbsp; Add New Category
                            </button>
                        </router-link>
                    </div>
                    <hr class="bg-info mt-5" />
                </div>
                <div class="nav_Product">
                    <table class="table table-striped product">
                        <thead>
                            <tr class="text-center bg-info text-light">
                                <th class="id">Id</th>
                                <th class="img">Image</th>
                                <th class="name">Name</th>
                                <th>Section</th>
                                <th class="status">Status</th>
                                <th class="edit">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                class="text-center"
                                v-for="items in Categories"
                                :key="items.id"
                            >
                                <td>
                                    <input
                                        style="margin: 0px 10px"
                                        type="checkbox"
                                    />{{ items.id }}
                                </td>
                                <td>
                                    <img v-lazy="`${items.image}`" />
                                </td>
                                <td>
                                    {{ items.name }}
                                </td>
                                <td>{{ items.section_id }}</td>
                                <td>
                                    <i
                                        v-if="items.is_active == 'Active'"
                                        class="fa fa-check"
                                    ></i>
                                    <i v-else class="fa fa-times"></i>
                                </td>
                                <td class="Action">
                                    <router-link
                                        :to="{
                                            name: 'categoryview',
                                            params: { id: items.id },
                                        }"
                                        class="text-info mr-4"
                                        ><i class="fa fa-eye"></i
                                    ></router-link>
                                    <router-link
                                        :to="{
                                            name: 'categoryEdit',
                                            params: { id: items.id },
                                        }"
                                        class="text-success mr-4"
                                        @click="showEditModal = true"
                                        ><i class="fa fa-edit"></i
                                    ></router-link>
                                    <a class="text-danger"
                                        ><i
                                            @click="delettcategory(items)"
                                            class="fa fa-trash-alt"
                                        ></i
                                    ></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'categories_dash',
    methods: {
        delettcategory(items) {
            this.$store.dispatch('deleteCategory', items);
        },
    },
    computed: {
        ...mapState({
            Categories: (state) => state.All.Categories,
            sections: (state) => state.All.sections,
        }),
    },
    mounted() {
        this.$store.dispatch('loadCategories');
        this.$store.dispatch('loadSections');
    },
};
</script>
<style scoped>
.parent {
    width: 100%;
    height: auto;
    display: grid;
}
.option_dash {
    background-color: #ccc;
}
.new_product {
    margin: 10px;
    padding: 10px;
}
.selected {
    margin: 10px;
    padding: 10px;
}
.contain {
    width: 100%;
    left: 15%;
    right: 5%;
}
.product {
    margin: auto;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.product img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px 0;
}
#overlay1,
#overlay2,
#overlay3 {
    position: fixed;
    top: 20px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
}
.Action a {
    cursor: pointer;
    color: #fff;
}
</style>
