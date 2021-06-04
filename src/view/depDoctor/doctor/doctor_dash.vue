<template>
    <div class="parent">
        <div class="col-12">
            <div class="contain m-4 col-10">
                <div class="container">
                    <div class="float-right row m-6">
                        <router-link to="/newdoctor"
                            ><button class="btn btn-info float-right">
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
                            <tr class="text-center">
                                <td>
                                    <input
                                        style="margin: 0px 10px"
                                        type="checkbox"
                                    />
                                    id
                                </td>
                                <td>
                                    <img />
                                </td>
                                <td>FirstName</td>
                                <td>LastName</td>
                                <td>description</td>
                                <td>
                                    status
                                    <!--                                                            <i-->
                                    <!--                                                                class="fa fa-check"-->
                                    <!--                                                            ></i>-->
                                    <!--                                                            <i  class="fa fa-times"></i>-->
                                </td>
                                <td class="Action">
                                    <router-link
                                        :to="{
                                            name: 'viewDoctor',
                                        }"
                                        class="text-info mr-4"
                                        ><i class="fa fa-eye"></i
                                    ></router-link>
                                    <router-link
                                        :to="{
                                            name: 'editDoctor',
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
export default {
    name: 'doctor_dash',
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
