<template>
    <button @click="removeTodo(item.id)">删除</button>
</template>

<script setup>

const { item } = defineProps({ item: Object })

const emit = defineEmits(['removeTodo'])

function removeTodo(id) {
    emit('removeTodo', id)
}
</script>

<style lang='scss' scoped>
button {
    color: whitesmoke;
    margin: 0 20px;

    &:hover {
        color: red;
    }
}
</style>