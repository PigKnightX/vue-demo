<template>
    <div>
        <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false">
            <div 
                v-for="element in myArray" 
                :key="element.id"
                class="draggable-item"
            >
                {{element.name}}
            </div>
        </draggable>
    </div>
</template>
<script>
import draggable from 'vuedraggable'

export default {
    components: {
        draggable
    },
    data() {
        return {
            myArray: [
                {id: 1, name: '111'},
                {id: 2, name: '222'},
                {id: 3, name: '333'}
            ]
        }
    }
    
}
</script>
<style lang="css" scoped>
.draggable-item {
    border: 1px solid gray;
    margin: 5px;
    display: inline-flex
}
</style>