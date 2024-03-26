<template>
    <span :style="{ textDecoration: item.completed ? 'line-through' : '' }">
        {{ item.content }}
    </span>
</template>

<script setup>

const { item } = defineProps({ item: Object })

// console.log(item);
</script>

<style lang='scss' scoped>
span {
    color: whitesmoke;
    margin: 0 20px;
}
</style>