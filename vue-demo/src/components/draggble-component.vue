<template>
    <div 
        class="draggble-box" 
        ref="draggbleBox"
    >
        <draggable 
            v-model="myArray" 
            draggable=".draggble-item"
            @start="drag=true" 
            @end="drag=false">
            <div 
                v-for="element in myArray" 
                :key="element.id"
                class="draggble-item"
            >
                {{element.name}}
            </div>
            <div
                slot="footer"
                class="draggble-footer"
                key="footer"
                @click="addItem"
                ref="addButton"
            >
                Add
            </div>
        </draggable>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
let id = 0;

export default {
    components: {
        draggable
    },
    data() {
        return {
            myArray: []
        }
    },
    methods: {
        addItem() {
            this.myArray.push({name: `A-${id}`, id: id++ })

            // TODO: let 「Add」show up all time
            const draggbleBox = this.$refs.draggbleBox
            const addButton = this.$refs.addButton


            // Is not working :( 
            draggbleBox.scrollLeft = draggbleBox.scrollWidth


        }
    }
    
}
</script>
<style lang="css" scoped>
.draggble-box {
    overflow: auto;
    white-space: nowrap;
    background-color: #e3e5e8;
    padding: 1rem;
    display: flex;
}
.draggble-item {
    border: 1px solid gray;
    margin: 5px;
    display: inline-flex;
    width: 80px;
    height: 80px;
}
.draggble-footer {
    border: 1px solid gray;
    margin: 5px;
    display: inline-flex;
    width: 80px;
    height: 80px;
}
</style>