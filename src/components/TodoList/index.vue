<template>
    <div class="">
        <todo-header @add-todo="addTodo"></todo-header>
        <todos :todos="todoList" @toggle-completed="toggleCompleted" @remove-todo="removeTodo"> </todos>
        <todo-footer></todo-footer>
    </div>
</template>

<script setup>
import TodoHeader from './TodoHeader/index.vue'
import Todos from './Todos/index.vue';
import TodoFooter from './TodoFooter/index.vue'

import { ref, provide, reactive } from 'vue';





let todoList = ref([])

provide('plh', '请输入')

provide('todoLen', todoList)
function addTodo(todo) {

    todoList.value.push(todo)
    // console.log(todoList);
}

function toggleCompleted(id) {

    // console.log(id);
    todoList.value.forEach(item => {
        if (item.id === id) {
            item.completed = !item.completed
        }
    })
}

function removeTodo(id) {

    todoList.value = todoList.value.filter(item => item.id !== id)
}


</script>

<style lang='scss' scoped></style>