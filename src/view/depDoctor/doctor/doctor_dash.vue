<template>
    <div class="parent">
        <dosctors></dosctors>
        <div class="col-12">
            <div class="contain m-4 col-10">
                <div class="container">
                    <div class="float-right row m-6">
                        <input type="text" placeholder="Search.." />
                        <router-link to="/newdoctor"
                            ><button class="btn btn-info float-right ml-3">
                                <i class="fa fa-plus"></i>
                                &nbsp;&nbsp; Add New Doctor
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
                                <th class="name">FirstName</th>
                                <th>LastName</th>
                                <th class="status">Description</th>
                                <th class="edit">Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                class="text-center"
                                v-for="items in doctors"
                                :key="items.id"
                            >
                                <td>
                                    <input
                                        style="margin: 0px 10px"
                                        type="checkbox"
                                    />
                                    {{ items.id }}
                                </td>
                                <td>
                                    <img v-lazy="`${items.image}`" />
                                </td>
                                <td>{{ items.first_name }}</td>
                                <td>{{ items.last_name }}</td>
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
                                            name: 'viewdoctor',
                                            params: { id: items.id },
                                        }"
                                        class="text-info mr-4"
                                        ><i class="fa fa-eye"></i
                                    ></router-link>
                                    <router-link
                                        :to="{
                                            name: 'editDoctor',
                                            params: { id: items.id },
                                        }"
                                        class="text-success mr-4"
                                        ><i class="fa fa-edit"></i
                                    ></router-link>
                                    <a class="text-danger"
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
import Dosctors from './dosctors';
import { mapState } from 'vuex';
export default {
    name: 'doctor',
    components: { Dosctors },
    computed: {
        ...mapState({
            doctors: (state) => state.Doctors.doctors,
        }),
    },
    mounted() {
        this.$store.dispatch('loadDoctors');
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
    left: 10%;
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
input[type='text'] {
    float: right;
    padding: 6px;
    border: none;
    margin-top: 8px;
    margin-right: 16px;
    font-size: 17px;
}

/* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */
@media screen and (max-width: 600px) {
    input[type='text'] {
        float: none;
        display: block;
        text-align: left;
        width: 100%;
        margin: 0;
        padding: 14px;
    }
    input[type='text'] {
        border: 1px solid #ccc;
    }
}
</style>
