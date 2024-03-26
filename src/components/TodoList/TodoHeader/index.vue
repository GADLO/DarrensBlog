<template>
    <todo-input ref="todoInput" @change-content="changeContent"></todo-input>
    <todo-button @add-todo="addTodo"></todo-button>
</template>

<script setup>
import TodoInput from './TodoInput.vue'
import TodoButton from './TodoButton.vue';

import { ref } from 'vue';

let content = ''
const emit = defineEmits(['addTodo'])

function changeContent(text) {
    content = text
}

function addTodo() {
    emit('addTodo', {
        id: new Date().getTime(),
        content: content,
        completed: false
    })
}

</script>

<style lang='scss' scoped></style>