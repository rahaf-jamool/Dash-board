<template>
    <div class="col-xs-12 m-2" style="display: flex">
        <div class="col-9 ml-5">
            <h5 class="modal-title">Add New Category</h5>
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
                                            id="inputName"
                                            type="text"
                                            class="form-control form-control-lg"
                                            placeholder="Name"
                                            v-model="
                                                categories.category[2].name
                                            "
                                            required
                                        />
                                    </div>
                                    <div class="form-group d-flex">
                                        Section<label
                                            ><input
                                                id="choiceLabel"
                                                type="label"
                                                class="form-control form-control-lg"
                                                v-model="categories.section_id"
                                                required
                                        /></label>
                                    </div>
                                    <div class="form-group d-flex">
                                        Parent Category<label
                                            ><input
                                                type="label"
                                                class="form-control form-control-lg"
                                                v-model="categories.parent_id"
                                                required
                                        /></label>
                                    </div>
                                    <div class="form-group">
                                        <input
                                            id="div1"
                                            ondrop="drop(event)"
                                            ondragover="allowDrop(event)"
                                            type="text"
                                            class="form-control form-control-lg div1"
                                            placeholder="ImageURL"
                                            v-model="categories.image"
                                            required
                                        />
                                    </div>
                                    <br />
                                    <div style="display: flex">
                                        <img
                                            src="../../../../public/img/aa.jpg"
                                            draggable="true"
                                            ondragstart="drag(event)"
                                            width="336"
                                            height="69"
                                        />
                                        <img
                                            src="../../../../public/img/elctronic.jpg"
                                            draggable="true"
                                            ondragstart="drag(event)"
                                            width="336"
                                            height="69"
                                        />
                                        <img
                                            src="../../../../public/img/buty.jpg"
                                            draggable="true"
                                            ondragstart="drag(event)"
                                            width="336"
                                            height="69"
                                        />
                                        <img
                                            src="../../../../public/img/kitchen.jpg"
                                            draggable="true"
                                            ondragstart="drag(event)"
                                            width="336"
                                            height="69"
                                        />
                                        <img
                                            src="../../../../public/img/gasses.jpg"
                                            draggable="true"
                                            ondragstart="drag(event)"
                                            width="336"
                                            height="69"
                                        />
                                        <img
                                            src="../../../../public/img/rr.jpg"
                                            draggable="true"
                                            ondragstart="drag(event)"
                                            width="336"
                                            height="69"
                                        />
                                    </div>

                                    <div class="form-group">
                                        <button
                                            class="btn btn-info btn-block btn-lg"
                                            @click="postCategory()"
                                        >
                                            Add Category
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
                            <img :src="categories.image" class="card-img" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">
                                    {{ categories.category[2].name }}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidenav col-3">
            <div>
                <div class="a">Section</div>
                <div class="form-check">
                    <label
                        class="form-check-label a"
                        v-for="item in sections"
                        :key="item.id"
                    >
                        <input
                            type="radio"
                            class="form-check-input"
                            name="choice"
                            v-model="categories.section_id"
                            :value="item.id"
                            @click="choiceradio()"
                        />{{ item.name }}
                    </label>
                </div>
            </div>
            <div>
                <div class="a1">PARENT CATEGORIES</div>
                <div class="customer-select sel4">
                    <select v-model="categories.parent_id">
                        <option
                            v-for="category in Categories"
                            :key="category.id"
                            :value="category.id"
                        >
                            {{ category.name }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
export default {
    name: 'addnewcategory',
    data() {
        return {
            categories: {
                category: [
                    {
                        name: 'gvhghv',
                        local: 'en',
                        language_id: 1,
                    },
                    {
                        name: 'vghvhh',
                        local: 'fr',
                        language_id: 1,
                    },
                    {
                        name: null,
                        local: 'ar',
                        language_id: 1,
                    },
                ],
                slug: 'hbhjb',
                is_active: 1,
                parent_id: null,
                image: null,
                lang_id: 1,
                section_id: null,
                created_at: 1,
                updated_at: 1,
            },
        };
    },
    methods: {
        postCategory() {
            axios.post(
                'http://edalili.e-dalely.com/public/api/categories/create',
                this.categories
            );
            if (
                this.categories.category[2].name == null ||
                this.categories.section_id == null ||
                this.categories.image == null ||
                this.categories.parent_id == null
            ) {
                document.getElementById('alert').classList.add('block');
            } else {
                document.getElementById('alert').classList.remove('block');
                document.getElementById('alertt').classList.add('block');
                console.log(JSON.stringify(this.categories));
                this.$router.push({ name: 'categories_dash' });
            }
        },
        allowDrop(ev) {
            ev.preventDefault();
        },
        drag(ev) {
            ev.dataTransfer.setData('text', ev.target.id);
        },
        drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData('text');
            ev.target.appendChild(document.getElementById(data));
        },
        choiceradio() {
            var radios = document.getElementsByName('choice');
            console.log(radios);
            for (var i = 0; i < radios.length; i++) {
                radios[i].onclick = function () {
                    document.getElementById(
                        'choiceLabel'
                    ).innerText = this.value;
                };
            }
        },
        // handleChange(event) {
        //     localStorage.setItem('selected', event.target.value);
        //     localStorage.getItem('selected');
        //     document.getElementById('parent').value = localStorage.getItem(
        //         'selected'
        //     );
        //     this.categories.parent_id = localStorage.getItem('selected');
        // },
    },
    computed: {
        ...mapState({
            Categories: (state) => state.All.Categories,
            sections: (state) => state.All.sections,
        }),
    },
    mounted() {
        this.$store.dispatch('loadSections');
        this.$store.dispatch('loadCategories');
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
