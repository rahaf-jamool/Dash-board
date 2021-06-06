<template>
    <div class="parent">

        <div class="selected">
            Customs <span style="color: red">/</span> New Value
        </div>
        <div class="contain">
        <div class="alert" id="alert">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
           <strong>Warning!</strong> You must fill in all fields.
        </div>
        <div class="alertt" id="alertt">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
            <strong>Good</strong> "operation accomplished successfully.
        </div>
        </div>
        <select style="width: 150px;margin: auto;">
            <option v-for="items in custom" :key="items.pr">{{items.name}}</option>
        </select>
        <form>
                <input
                    type="text"
                    placeholder="value"
                   
                />
         </form>
         
         <button class="save" @click="handleCustome">save</button>
    </div>
</template>

<script>
import json from "../../../json/custom.json";
export default {
    name: 'custome_value',
    components: {},
    data() {
        return {
           custom : json[0].Custome_field
        };
    },
    methods: {
           handleCustome(){
        console.log (this.custom); 
            }
    },
    computed: {
      
    },
    mounted() {

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
.parent .save {
    background-color: #18ade8;
    border: none;
    padding: 10px;
    width: 80px;
    color: #fff;
    margin: auto;
    border-radius: 10px;
}
</style>
