<template>
    <div class="parent">
        <div class="selected">Customs</div>
        <div class="New_Custom">
            <button @click="newCustom">New Custom</button>
        </div>
        <div class="New_Value">
            <button @click="newValue">New Value</button>
        </div>
        <div class="contain">
            <div class="nav__Custom">
                <div style="background-color: #ddd; padding: 20px" class="id">
                    id
                </div>
                <div style="background-color: #ddd; padding: 20px" class="name">
                    name
                </div>
                <div
                    style="background-color: #ddd; padding: 20px"
                    class="Value"
                >
                    Value
                </div>
                <div style="background-color: #ddd; padding: 20px" class="edit">
                    edit
                </div>
                <Custom
                    v-for="items in custom"
                    :key="items.pr"
                    :id="items.id"
                    :name="items.name"
                    :value="items.value"
                />
            </div>
        </div>
    </div>
</template>

<script>
import json from '../../../json/custom.json';
import Custom from '../Custom field/Custom';
export default {
    name: 'custom_dash',
    components: { Custom },
    data() {
        return {
            custom: json[0].Custome_field,
        };
    },
    methods: {
        newCustom() {
            this.$router.push(`/new_custom`);
        },
        newValue() {
            this.$router.push(`/custome_value`);
        },
    },
};
</script>
<style scoped>
.parent {
    font-size: 18px;
    width: 100%;
    height: auto;
    display: grid;
    grid-template-areas:
        '. . selected New_Custom New_Custom New_Value New_Value . . .'
        '. . contain contain contain contain contain contain contain contain';
}
.New_Value {
    border-radius: 5px;
    grid-area: New_Value;
    margin: 10px;
}

.New_Custom {
    border-radius: 5px;
    grid-area: New_Custom;
    margin: 10px;
}
.New_Custom button,
.New_Value button {
    border: none;
    background-color: #0eacc6;
    padding: 10px;
    color: #fff;
}

.selected {
    grid-area: selected;
    margin: 10px;
    padding: 10px;
    background-color: #eee;
}
.contain {
    width: 100%;
    grid-area: contain;
}
.nav__Custom {
    display: grid;
    grid-template-areas: 'id name Value edit';
}
</style>
