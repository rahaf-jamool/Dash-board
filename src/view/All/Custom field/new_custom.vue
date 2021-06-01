<template>
    <div class="parent">

        <div class="selected">
            Customs <span style="color: red">/</span> New Customs
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
         <form>
                <input
                    type="text"
                    placeholder="name"
                />
         </form>
        </div>
    </div>
</template>

<script>


export default {
    name: 'new_custom',
    components: {},
    data() {
        return {
          
        };
    },
    methods: {
     
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
.parent .save {
    background-color: #18ade8;
    border: none;
    padding: 10px;
    width: 80px;
    color: #fff;
    margin: 20px;
    border-radius: 10px;
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

</style>
