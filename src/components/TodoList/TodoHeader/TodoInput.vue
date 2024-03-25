<template>
    <el-input type="text" v-model="content" :placeholder="plh">
    </el-input>
</template>

<script setup>
import { ref, inject } from 'vue';


const content = ref('')
const plh = inject('plh')



</script>

<style lang='scss' scoped></style>