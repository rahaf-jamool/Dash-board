<template>
    <div class="parent">
        <div class="selected">
            Stores <span style="color: red">/</span> New Store
        </div>

        <div class="contain">
            <div class="alert" id="alert">
                <span
                    class="closebtn"
                    onclick="this.parentElement.style.display='none';"
                    >&times;</span
                >
                <strong>Warning!</strong> You must fill in all fields.
            </div>
            <div class="alertt" id="alertt">
                <span
                    class="closebtn"
                    onclick="this.parentElement.style.display='none';"
                    >&times;</span
                >
                <strong>Good</strong> "operation accomplished successfully.
            </div>

            <form>
                <input
                    type="text"
                    v-model="stores.store[0].title"
                    placeholder="name"
                />
                <hr />
                <br />
                <br />
            </form>

            <button class="save" @click="postPost()">save</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'new_store',
    components: {},
    data() {
        return {
            files: [],
            stores: {
                store: [
                    {
                        local: 'ar',
                        title: null,
                    },
                    {
                        local: 'en',
                        title: 'basel',
                    },
                    {
                        local: 'fr',
                        title: 'basel',
                    },
                ],
                loc_id: '1',
                country_id: '1',
                gov_id: '1',
                city_id: '1',
                street_id: '1',
                offer_id: '1',
                socialMedia_id: '1',
                followers_id: '1',
                is_active: 1,
                is_approved: 1,
                delivery: 1,
                edalilyPoint: 'edalilyPoint',
                rating: 'rating',
                workingHours: 'workingHours',
                logo: 'mobiles',
            },
        };
    },
    methods: {
        // Pushes posts to the server when called.
        postPost() {
            axios.post('/api/stores/create', this.stores);
            if (this.stores.store[0].title == null) {
                // alert("You must fill in all fields");
                document.getElementById('alert').classList.add('block');
            } else {
                document.getElementById('alertt').classList.add('block');
            }

            console.log(JSON.stringify(this.stores));
        },
    },
    computed: {},
    mounted() {},
};
</script>
<style scoped>
.parent {
    width: 100%;
    height: 654px;
    display: grid;
    font-size: 18px;
    grid-template-areas:
        '. . . . . selected . . custom custom'
        '. contain contain contain contain contain contain contain contain contain';
}
.parent .save {
    background-color: #18ade8;
    border: none;
    padding: 10px;
    width: 80px;
    color: #fff;
    margin: 20px;
    border-radius: 10px;
}
.containd_Categorires {
    height: 130px;
    overflow-y: scroll;
}
.selected {
    grid-area: selected;
    margin: auto;
    padding: 10px;
    background-color: #eee;
}
.contain {
    width: 100%;
    grid-area: contain;
}
form input {
    border: none;
}
form input:focus {
    outline: none;
}
form input:focus::placeholder {
    color: transparent;
}
form hr {
    width: 200px;
    margin: 0 auto;
}

.alert {
    display: none;
    padding: 80px;
    background-color: #f44336;
    color: white;
    position: absolute;
    right: 40%;
    top: 30%;
    z-index: 3;
    font-size: 20px;
}
.alertt {
    display: none;
    padding: 80px;
    color: white;
    background-color: #00b618;
    position: absolute;
    right: 40%;
    top: 30%;
    z-index: 3;
    font-size: 20px;
}
.block {
    display: block;
}

.closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
}

.closebtn:hover {
    color: black;
}
.upload_img {
    width: 50%;
    height: auto;
}
</style>
