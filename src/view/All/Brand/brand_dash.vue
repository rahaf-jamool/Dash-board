<template>
    <div class="parent">
        <div class="col-12">
            <div class="contain m-4 col-10">
                <div class="container">
                    <div class="float-right row m-6">
                        <router-link to="/brandnew"
                            ><button class="btn btn-info float-right">
                                <i class="fa fa-plus"></i>
                                &nbsp;&nbsp; Add New Brand
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
                                <th>Description</th>
                                <th class="status">Status</th>
                                <th class="edit">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                class="text-center"
                                v-for="items in Brands"
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
                                <td>{{ items.description }}</td>
                                <td>
                                    <i
                                        v-if="items.is_active == '1'"
                                        class="fa fa-check"
                                    ></i>
                                    <i v-else class="fa fa-times"></i>
                                </td>
                                <td class="Action">
                                    <router-link
                                        :to="{
                                            name: 'brand_view',
                                            params: { id: items.id },
                                        }"
                                        class="text-info mr-4"
                                        ><i class="fa fa-eye"></i
                                    ></router-link>
                                    <router-link
                                        :to="{
                                            name: 'brand_edit',
                                            params: { id: items.id },
                                        }"
                                        class="text-success mr-4"
                                        ><i class="fa fa-edit"></i
                                    ></router-link>
                                    <a
                                        class="text-danger"
                                        @click="delBrand(items)"
                                        ><i class="fa fa-trash-alt"></i
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
    name: 'brand_dash',
    data() {
        return {};
    },
    methods: {
        delBrand(items) {
            this.$store.dispatch('deleteBrand', items);
        },
    },
    computed: {
        ...mapState(['Brands']),
    },
    mounted() {
        this.$store.dispatch('loadBrands');
    },
};
</script>

<style scoped>
.parent {
    width: 100%;
    height: auto;
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
