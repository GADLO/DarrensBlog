<template>
    <h1>1234</h1>
    <h1></h1>
    <button></button>
</template>

<script >
import { reactive, computed } from 'vue'

export default {
    name: 'Computed',
    setup() {
        const state = reactive({
            a: 1,
            b: 2
        })

        /**
         * computed的执行
         * 执行其回调函数
         * 返回一个结果这个结果赋值给computedRef的value属性
         */
        const computedRef = computed(() => {
            return state.a + state.b
        })

        return {
            state,
            computedRef
        }
    }
}
</script>

<style lang='scss' scoped></style>