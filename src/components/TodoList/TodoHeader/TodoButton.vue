<template>
    <el-button @click="addTodo" type="success">add</el-button>
</template>

<script setup>

const emit = defineEmits(['addTodo'])

function addTodo() {
    emit('addTodo')
}





</script>

<style lang='scss' scoped></style>