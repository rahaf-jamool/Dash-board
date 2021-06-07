<template>
    <div class="parent">
        <dosctors></dosctors>
        <div class="col-12">
            <div class="contain m-4 col-10">
                <div class="nav_Product">
                    <table class="table table-striped product">
                        <thead>
                            <tr class="text-center bg-info text-light">
                                <th class="id">Id</th>
                                <th class="img">Image</th>
                                <th class="name">FirstName</th>
                                <th>LastName</th>
                                <th class="status">Description</th>
                                <!-- <th class="edit">Status</th> -->
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           <tr
                                class="text-center"
                                v-for="items in doctorstrashed"
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
                                <!-- <td>
                                    <i
                                        v-if="items.is_active == '0'"
                                        class="fa fa-check"
                                    ></i>
                                    <i v-else class="fa fa-times"></i>
                                </td> -->
                                <td class="Action">
                                    <i class="fas fa-trash-restore mr-3"></i>
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
    name: 'doctorTrashed',
    components: { Dosctors },
    computed: {
        ...mapState({
            doctorstrashed: (state) => state.Doctors.doctorstrashed,
        }),
    },
    mounted() {
        this.$store.dispatch('loadDoctorTrashed');
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
