<template>
    <h1>Mode: WatchEffect {{ mode }}</h1>
    <h1>{{ title }}</h1>
    <h1>{{ content }}</h1>
    <el-button @click="setTitle('setted')">setTitle</el-button>
    <el-button @click="setContent('setted')">setTitle</el-button>
    <el-button @click="setTitle('setted'), setContent('setted')">allSet</el-button>
    <el-button @click="switchMode">Mode</el-button>
</template>

<script >
import { ref, watchEffect } from 'vue';
import { useState, useReactive } from './hooks';

export default {
    name: '',
    setup() {

        const [title, setTitle] = useState('WatchEffect Title');
        const [content, setContent] = useState('WatchEffect Content');

        let [mode, refMode] = useReactive({ pre: true });


        /**flush 配置
         * pre: 侦听器被创建与依赖数据变更的时候都会执行回调，自动追踪依赖，默认配置，组件挂载、组件更新前执行副作用回调函数，并缓存副作用回调函数，异步执行，改变多个依赖只会调用一次副作用函数。
         * 
         * post：组件挂载、组件更新之后执行副作用回调函数，并缓存副作用回调函数，异步执行，改变多个依赖只会调用一次副作用函数。
         * 
         * sync：组件挂载、组件更新之后执行副作用回调函数，不缓存副作用回调函数，同步执行，改变多个依赖并调用多次副作用函数。
         */

        watchEffect(() => {
            console.log(title.value, content.value);
        }, mode)





        function switchMode() {
            mode.value = { post: true }
        }

        return {
            title,
            setTitle,
            content,
            setContent,
            mode,
            ...refMode,
            switchMode
        }

    }
}
</script>

<style lang='scss' scoped>
* {
    color: #fff;
}
</style>