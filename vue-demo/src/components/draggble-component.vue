<template>
    <div 
        class="draggble-box" 
        ref="draggbleBox"
    >
        <draggable 
            v-model="selfArr"
            v-bind="dragOptions"
            draggable=".draggble-item"
            @start="drag=true"
            @end="drag=false"
        >
            <div 
                v-for="element in selfArr" 
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
    props:['draggableArray'],
    data() {
        return {
            selfArr: this.draggableArray,
            drag: false
        }
    },
    watch: {
        selfArr: {
            immediate: true,
            handler (newVal) {
                this.$emit('update:draggableArray', newVal)
            },
            deep: true
        }
    },
    computed: {
        dragOptions() {
            return {
                animation: 200,
                disabled: false,
            }
        }
    },
    methods: {
        addItem() {
            this.selfArr.push({name: `A-${id}`, id: id++ })

            // let 「Add」show up all time
            const draggbleBox = this.$refs.draggbleBox
            
            this.$nextTick(() => {
                draggbleBox.scrollLeft = draggbleBox.scrollWidth
            })
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