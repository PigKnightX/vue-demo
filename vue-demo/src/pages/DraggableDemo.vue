<template>
    <div>
        <DraggableComponent 
            class="draggable-outer"
            :draggableArray.sync="myArr"
        />
    </div>
</template>
<script>
import DraggableComponent from '../components/draggble-component.vue'

export default {
    components: {
        DraggableComponent
    },
    data() {
        return {
            myArr: []
        }
    }
}
</script>
<style lang="css" scoped>
.draggable-item {
    margin: 10px;
}
</style>