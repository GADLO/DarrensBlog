<template>
    <span>
        {{ item.content }}
    </span>
</template>

<script setup>

const { item } = defineProps({ item: Object })

console.log(item);
</script>

<style lang='scss' scoped></style>