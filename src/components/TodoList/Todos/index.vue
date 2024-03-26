<template>
    <div>
        <todo-item v-if="len.length > 0" v-for="item in todos" :item="item" @toggle-completed="toggleCompleted"
            @remove-todo="removeTodo"></todo-item>

        <p v-else>空</p>
    </div>
</template>

<script setup>

import { inject, watch } from 'vue';
import TodoItem from './TodoItem.vue'


let len = inject('todoLen')


watch(len, () => {
    console.log('len change');
}, {
    deep: true
})
console.log(len);

const { todos } = defineProps({ todos: Array })
const emit = defineEmits(['toggleCompleted', 'removeTodo'])

function toggleCompleted(id) {
    emit('toggleCompleted', id)
}

function removeTodo(id) {
    emit('removeTodo', id)
}



</script>

<style lang='scss' scoped></style>