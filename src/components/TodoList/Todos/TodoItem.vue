<template>
    <div>
        <ul>
            <li>
                <todo-check :item="item" @toggle-completed="toggleCompleted"></todo-check>
                <todo-content :item="item"></todo-content>

                <todo-remove :item="item" @remove-todo="removeTodo"></todo-remove>
            </li>

        </ul>

    </div>
</template>



<script setup>

import { inject, ref } from 'vue';
import TodoCheck from './TodoCheck.vue'
import TodoContent from './TodoContent.vue'
import TodoRemove from './TodoRemove.vue'

const { item } = defineProps({ item: Object })
const emit = defineEmits(['toggleCompleted', 'removeTodo'])






function toggleCompleted(id) {

    emit('toggleCompleted', id)

}



function removeTodo(id) {
    emit('removeTodo', id)
}


</script>

<style lang='scss' scoped>
ul,
li {
    list-style: none;
    display: flex;
    align-items: center;
}
</style>