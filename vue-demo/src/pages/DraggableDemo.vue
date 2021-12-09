<template>
    <div>
        <DraggableComponent 
            class="draggable-outer"
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
            
        }
    }
    
}
</script>
<style lang="css" scoped>
.draggable-item {
    margin: 10px;
}
</style>