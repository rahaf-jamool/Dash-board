<template>
    <div class="parent">
        <div class="selected">
            Products <span style="color: red">/</span> Edit Products
        </div>
        <div class="custom">
            <div class="custom_Gender">Gender</div>
            <div>
                <input
                    name="checkbox"
                    type="checkbox"
                    value="1"
                   
                />
                <label >Male</label>
            </div>
            <div>
                <input
                    name="checkbox"
                    type="checkbox"
                    value="1"
                   
                />
                <label>Female</label>
            </div>
            <hr />
            <div class="custom_Size">Size</div>
            <div>
                <input
                    name="checkbox"
                    type="checkbox"
                    value="1"
                 
                />
                <label>Large</label>
            </div>
            <div>
                <input
                    name="checkbox"
                    type="checkbox"
                    value="1"
                    
                />
                <label>Medium</label>
            </div>
            <div>
                <input
                    name="checkbox"
                    type="checkbox"
                    value="1"
                   
                />
                <label>Small</label>
            </div>
            <hr />
            <div class="custom_Brand">Brand</div>
            <div class="containd_Categorires">
            <div  v-for="item in Brands" :key="item.pr">
                <input
                    :id="`radio${item.id}`"
                    name="radios"
                    type="radio"
                    :value="item.id"
                    v-model="products.brand_id"
                />
                <label :for="`radio${item.id}`">{{item.name}}</label>
            </div>
            </div>
            <div class="custom_Categorires">Categorires</div>
            <div class="containd_Categorires">
            <div  v-for="items in Categories" :key="items.pr">
                <input
                    :id="`radio${items.id}`"
                    name="radios"
                    type="radio"
                    :value="items.id"
                    v-model="products.category_id"
                  
                />
                <label :for="`radio${items.id}`">{{items.name}}</label>
            </div>
            </div>

        </div>
        <div class="contain">
            <div class="alert" id="alert">
                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                <strong>Danger!</strong> You must fill in all fields.
            </div>
            <div class="alertt" id="alertt">
                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                <strong>Good</strong> "operation accomplished successfully.
            </div>
            <form>
                <input
                    type="text"
                    v-model="products.product[0].name"
                    placeholder="name"
                />
                <hr />
                <br />
                <input
                    type="text"
                    v-model="products.product[0].short_des"
                    placeholder="short_des"
                />
                <hr />
                <br />
                <input
                    type="text"
                    v-model="products.product[0].long_des"
                    placeholder="long_des"
                />
                <hr />
                <br />

             <!-- <select v-model="products.image">
                    <option disabled value="">Please select img</option>
                    <option
                        value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy6iZq7N0bOew1ttlwpQRgf-SmI4MHbWZU3Q&usqp=CAU"
                    >
                        img 1
                    </option>
                    <option
                        value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy6iZq7N0bOew1ttlwpQRgf-SmI4MHbWZU3Q&usqp=CAU"
                    >
                        img 2
                    </option>
                    <option
                        value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy6iZq7N0bOew1ttlwpQRgf-SmI4MHbWZU3Q&usqp=CAU"
                    >
                        img 3
                    </option>
                </select>    -->
            </form>
            <UploadImages class="upload_img" :max="3" @change="handleImages" />
            <button class="save" @click="updateProduct()">save</button>
        </div>
    </div>
</template>

<script>
import UploadImages from "vue-upload-drop-images"
import { mapState } from 'vuex';
import axios from 'axios';
export default {
    name: 'new_product',
    components: {UploadImages},
    data() {
        return {
            files:[],
            products: {
                product: [
                    {
                        local: 'ar',
                        name: null,
                        meta: 'arefe',
                        short_des: null,
                        long_des: null,
                    },
                    {
                        local: 'en',
                        name: 'efen',
                        meta: 'efefen',
                        short_des: 'en en',
                        long_des: 'en en',
                    },
                    {
                        local: 'fr',
                        name: 'ffer',
                        meta: 'ffefr',
                        short_des: 'fr fr',
                        long_des: 'fr fr',
                    },
                ],
                brand_id: null,
                barcode: 'mobiles',
                slug: 'mobiles',
                rating_id: 1,
                offer_id: 1,
                image: [],
                custom_feild_id: 1,
                is_active: 1,
                is_appear: 1,
                category_id: null,
                category: [
                    {
                        category_id: 1,
                    },
                    {
                        category_id: 2,
                    },
                    {
                        category_id: 3,
                    },
                ],
                customFeild: [
                    {

                    },

                ],
                images: [
                    {
                        product_id: 1,
                        image: 'asdasd',
                        is_cover: 1,
                    },
                    {
                        product_id: 1,
                       image: 'asdasd',
                        is_cover: 0,
                    },
                    {
                        product_id: 1,
                       image: 'asdasd',
                        is_cover: 0,
                    },
                ],
            },
        };
    },
    methods: {
        // Pushes posts to the server when called.//
        updateProduct() {      
            axios.put(
                `/api/products/update/${this.ProductID[0].id}`,
                this.products
            );

            if(this.products.product[0].name == null || this.products.product[0].short_des == null || this.products.product[0].long_des == null || this.products.image == null){
               document.getElementById('alert').classList.add('block')  ;
            }
            else{
                document.getElementById('alertt').classList.add('block')  ;
            }
            console.log(JSON.stringify(this.products));
        },
            handleImages(Imgs){
               this.products.image = "http://localhost:8080/img/"+Imgs[0].name;
                for (var i=0;i<Imgs.length;i++) {
                     
            this.products.images[i] = Imgs[i].name ;
            this.products.images[i] = {image: Imgs[i].name,product_id: this.ProductID[0].id,
            is_cover: i === 0 ? 1 : 0
            }; 
                }
                console.log (this.products.images);
                
            }
    },
    computed: {
        ...mapState(['ProductID', 'Brands','Categories']),
    },
    mounted() {
        this.$store.dispatch('loadProduct', this.$route.params.id);
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
        '. . . . selected . . . custom custom'
        '. contain contain contain contain contain contain contain custom custom';
}

.selected {
    grid-area: selected;
    margin: auto;
    padding: 10px;
    background-color: #eee;
}
.custom {
    width: 100%;
    background-color: #ddd;
    grid-area: custom;
}
.contain {
    width: 100%;
    grid-area: contain;
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
.custom {
    width: 100%;
    background-color: #ddd;
    grid-area: custom;
}
.custom_Gender,
.custom_Size,
.custom_Brand,
.custom_Categorires {
    margin: 10px;
    border: 0px solid;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
    background-color: #dec;
    text-shadow: 2px 2px 8px #f71919;
}
.containd_Categorires{
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
    margin: 20px;
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
  padding: 20px;
  background-color: #f44336;
  color: white;
  transition: all .5s;
}
.alertt {
  display: none;
  padding: 20px;
  background-color: #00b618;
  color: white;
}
.block{
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
.upload_img{
    width: 50%;
    height: auto;
}
</style>
