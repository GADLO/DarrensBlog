<template>
    <h1>Provide/Inject</h1>

    <todo-list></todo-list>
</template>

<script setup>
import TodoList from '@/components/TodoList/index.vue'
/**
 * 通常来说，组件是可以不断嵌套的，数据就可以依据单向数据流的原则不断的传递下去
 * 数据就会穿透所有依赖关系中的组件，许多组件并不需要这个数据也会进行注册相关属性
 * Provide/Inject就是用来处理这个问题的，让组件依赖关系变得简单，组件嵌套关系也不那么深
 */
</script>

<style lang='scss' scoped></style>