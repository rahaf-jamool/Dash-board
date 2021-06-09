<template>
    <div class="col-xs-12 m-2" style="display: flex">
        <div class="col-9 ml-5">
            <!--            <nav-add></nav-add>-->
            <h5 class="modal-title">Add New Hospital</h5>
            <div class="row">
                <div id="overlay1 mt-5 col-9">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="alert" id="alert">
                                <span
                                    class="closebtn"
                                    onclick="this.parentElement.style.display='none';"
                                    >&times;</span
                                >
                                <strong>Danger!</strong> You must fill in all
                                fields.
                            </div>
                            <div class="alertt" id="alertt">
                                <span
                                    class="closebtn"
                                    onclick="this.parentElement.style.display='none';"
                                    >&times;</span
                                >
                                <strong>Good</strong> "operation accomplished
                                successfully.
                            </div>
                            <div class="form" id="form">
                                <div class="modal-body p-4">
                                    <div class="form-group">
                                        <input
                                            id="inputFirstName"
                                            type="text"
                                            class="form-control form-control-lg"
                                            placeholder="FirstName"
                                            required
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            id="inputLastName"
                                            type="text"
                                            class="form-control form-control-lg"
                                            placeholder="LastName"
                                            required
                                        />
                                    </div>
                                    <!-- <div class="form-group">
                      <input
                          id="inputdescription"
                          type="text"
                          class="form-control form-control-lg"
                          placeholder="Description"
                          v-model="
                              doctors.doctor[2].description
                          "
                          required
                      />
                  </div> -->
                                    <!-- <div class="form-group">
                      <input
                          id="div1"
                          ondrop="drop(event)"
                          ondragover="allowDrop(event)"
                          type="text"
                          class="form-control form-control-lg div1"
                          placeholder="ImageURL"
                          v-model="doctors.image"
                          required
                      />
                  </div>
                  <br />
                  <div style="display: flex">
                      <img
                          src="../../../../../public/img/aa.jpg"
                          draggable="true"
                          ondragstart="drag(event)"
                          width="336"
                          height="69"
                      />
                      <img
                          src="../../../../../public/img/elctronic.jpg"
                          draggable="true"
                          ondragstart="drag(event)"
                          width="336"
                          height="69"
                      />
                      <img
                          src="../../../../../public/img/buty.jpg"
                          draggable="true"
                          ondragstart="drag(event)"
                          width="336"
                          height="69"
                      />
                      <img
                          src="../../../../../public/img/kitchen.jpg"
                          draggable="true"
                          ondragstart="drag(event)"
                          width="336"
                          height="69"
                      />
                      <img
                          src="../../../../../public/img/gasses.jpg"
                          draggable="true"
                          ondragstart="drag(event)"
                          width="336"
                          height="69"
                      />
                      <img
                          src="../../../../../public/img/rr.jpg"
                          draggable="true"
                          ondragstart="drag(event)"
                          width="336"
                          height="69"
                      />
                  </div> -->

                                    <div class="form-group">
                                        <button
                                            class="btn btn-info btn-block btn-lg"
                                        >
                                            Add Hospital
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3 card ml-5" style="max-width: 540px">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img class="card-img" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'addNewhospital',
    data() {
        return {
            hospitals: {
                name: 'العناية',
                medical_center: 'one',
                general_hospital: 0,
                private_hospital: 1,
                location_id: 1,
                doctor_id: 13,
                is_active: 1,
                is_approved: 1,
            },
        };
    },
};
</script>

<style scoped>
img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: auto;
}
#div1 {
    width: 350px;
    height: 70px;
    padding: 10px;
}
.sidenav {
    height: 100%;
    width: 200px;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: rgb(25, 126, 151);
    overflow-x: hidden;
    padding-top: 20px;
}
/* Style the sidenav links and the dropdown button */
.sidenav .a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: #444141;
    display: block;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    outline: none;
}
/* On mouse-over */
.sidenav .a:hover {
    color: #f1f1f1;
}
.alert {
    display: none;
    padding: 20px;
    background-color: #f44336;
    color: white;
    transition: all 0.5s;
}
.alertt {
    display: none;
    padding: 20px;
    background-color: #00b618;
    color: white;
}
.block {
    display: block;
}
.containd_Categorires {
    height: 130px;
    overflow-y: scroll;
}
</style>
