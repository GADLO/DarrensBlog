<template>
    <input type="checkbox" :checked="item.completed" @click="todoCheck(item.id)">
</template>


<script setup>

function todoCheck() {

}

const item = defineProps(['item'])
</script>

<style lang='scss' scoped></style>