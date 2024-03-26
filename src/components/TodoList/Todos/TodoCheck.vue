<template>
    <input type="checkbox" :checked="item.completed" @click="toggleCompleted(item.id)">
</template>

<script setup>
const { item } = defineProps({ item: Object });
const emit = defineEmits(['toggleCompleted'])

function toggleCompleted(id) {
    emit('toggleCompleted', id)
}
</script>

<style lang='scss' scoped></style>