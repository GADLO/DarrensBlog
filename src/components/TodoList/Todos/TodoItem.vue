<template>
    <li>
        <todo-check :item="props.item"></todo-check>
        <todo-content :item="props.item"></todo-content>
        <todo-remove :item="props.item"></todo-remove>
    </li>
</template>



<script setup>

import TodoCheck from './TodoCheck.vue'
import TodoContent from './TodoContent.vue'
import TodoRemove from './TodoRemove.vue'

const props = defineProps({ item: Object })



</script>

<style lang='scss' scoped></style>