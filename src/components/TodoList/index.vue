<template>
    <div class="">
        <todo-header></todo-header>
        <todos :todos="todoList"> </todos>
        <todo-footer></todo-footer>
    </div>
</template>

<script setup>
import TodoHeader from './TodoHeader/index.vue'
import Todos from './Todos/index.vue';
import TodoFooter from './TodoFooter/index.vue'

import { ref, provide, reactive } from 'vue';


provide('plh', '请输入')
const todoList = ref([{
    id: 1,
    content: 'todo',
    completed: false
}])
function addTodo(todo) {
    todoList.push(todo)
}


</script>

<style lang='scss' scoped></style>