<template>
    <div class="parent">
        <div class="selected">
            Store
            <span style="color: red">/ {{ this.$route.params.id }}/</span> New
            Product
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
                    v-model="products.price"
                    placeholder="Price"
                />
                <hr />
                <br />
                <br />

                <input
                    type="text"
                    v-model="products.quantity"
                    placeholder="Quantity"
                />
                <hr />
                <br />
                <br />

                <div></div>
            </form>
            <button class="save" @click="postPost()">save</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';

export default {
    name: 'new_product',
    components: {},
    data() {
        return {
            products: {
                "store_id": 9,
                "Product_id": 1,
                "is_active": 1,
                "is_appear": 1,
                "price": null,
                "quantity": null
                    },
        };
    },
    methods: {
        // Pushes posts to the server when called.
        postPost() {
            axios.post(
                '/api/stores/insertProductToStore',
                this.products
            );
            if (
                this.products.price == null ||
                this.products.quantity == null
            ) {
                // alert("You must fill in all fields");
                document.getElementById('alert').classList.add('block');
            } else {
                document.getElementById('alertt').classList.add('block');
            }

            console.log(JSON.stringify(this.products));
        },
    },

    computed: {
        ...mapState({
            Categories: (state) => state.All.Categories,
            Brands: (state) => state.All.Brands,
        }),
    },
    mounted() {
        this.$store.dispatch('loadBrands');
        this.$store.dispatch('loadCategories');
    },
};
</script>
<style scoped>
.parent {
    width: 100%;
    height: 654px;
    display: grid;
    font-size: 18px;
    grid-template-areas:
        'selected'
        'contain';
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
</style>
