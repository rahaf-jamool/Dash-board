<template>
    <div class="col-xs-12 m-2" style="display: flex">
        <div class="col-9 ml-5">
            <div id="overlay2 mt-5">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                Update Category
                                {{ categories.category[2].name }}
                            </h5>
                        </div>
                        <div class="modal-body p-4">
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control form-control-lg"
                                    placeholder="Name"
                                    v-model="categories.category[2].name"
                                />
                            </div>
                            <div class="form-group">
                                <label
                                    ><input
                                        id="choiceLabel"
                                        type="label"
                                        class="form-control form-control-lg"
                                        v-model="categories.section_id"
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
                                    id="drag1"
                                    src="../../../../public/img/aa.jpg"
                                    draggable="true"
                                    ondragstart="drag(event)"
                                    width="336"
                                    height="69"
                                />
                                <img
                                    id="drag1"
                                    src="../../../../public/img/elctronic.jpg"
                                    draggable="true"
                                    ondragstart="drag(event)"
                                    width="336"
                                    height="69"
                                />
                                <img
                                    id="drag1"
                                    src="../../../../public/img/buty.jpg"
                                    draggable="true"
                                    ondragstart="drag(event)"
                                    width="336"
                                    height="69"
                                />
                                <img
                                    id="drag1"
                                    src="../../../../public/img/kitchen.jpg"
                                    draggable="true"
                                    ondragstart="drag(event)"
                                    width="336"
                                    height="69"
                                />
                                <img
                                    id="drag1"
                                    src="../../../../public/img/gasses.jpg"
                                    draggable="true"
                                    ondragstart="drag(event)"
                                    width="336"
                                    height="69"
                                />
                                <img
                                    id="drag1"
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
                                    @click="updateCategory()"
                                >
                                    Update Category
                                </button>
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
                        :key="item"
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
            <div class="a">Category parent</div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
export default {
    name: 'categoryEdit',
    data() {
        return {
            categories: {
                category: [
                    {
                        name: 'njknj',
                        local: 'en',
                        language_id: 1,
                    },
                    {
                        name: 'ljlkjlkj',
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
                parent_id: 1,
                image: null,
                lang_id: 1,
                section_id: null,
                created_at: null,
                updated_at: null,
            },
        };
    },
    computed: {
        ...mapState(['CategoryID', 'sections']),
    },
    mounted() {
        this.$store.dispatch('loadCategory', this.$route.params.id);
        this.$store.dispatch('loadSections');
    },
    methods: {
        updateCategory() {
            axios.put(
                `http://edalili.e-dalely.com/public/api/categories/update/${this.CategoryID.id}`,
                this.categories
            );
            console.log(JSON.stringify(this.categories));
            this.$router.push({ name: 'categories_dash' });
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
</style>
