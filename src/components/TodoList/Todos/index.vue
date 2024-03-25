<template>
    <div>
        <todo-item v-for="item in props.todos" :item="item"></todo-item>
    </div>
</template>

<script setup>
import { toRef, toRefs } from 'vue';
import TodoItem from './TodoItem.vue'


const props = defineProps({ todos: Array })




</script>

<style lang='scss' scoped></style>