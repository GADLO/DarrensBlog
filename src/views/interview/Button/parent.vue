<template>
    <A :count="'count'">{{ count }}</A>
    <B> <button :disabled="count >= 10" @click="handleClick">Plus</button></B>
</template>

<script setup>
import A from './A.vue'
import B from './B.vue'

import { ref } from 'vue'

let count = ref(0);


function handleClick() {
    count.value++
    console.log(count);
}



</script>

<style lang='scss' scoped>
button {
    display: block;
    background-color: #fff;
}
</style>