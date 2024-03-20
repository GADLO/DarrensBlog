<template>
    <h1>Watch</h1>
    <p>侦听器
        监听依赖
    </p>
    <h1 ref="titleRef">titileRef{{ title }}</h1>
    <h1>{{ title }}</h1>
    <h1>{{ content }}</h1>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <el-button @click="setTitle('setted')">set</el-button>
    <el-button @click="setContent('setContented')">setContent</el-button>
    <el-button @click="setTitle('setted'), setContent('setContented')">setTitle and setContent</el-button>

    <el-button @click="setAge(2)">setAge</el-button>
    <el-button @click="setName('PupStar')">setName</el-button>
</template>

<script >

import { ref, watch } from 'vue';
import { useState, useReactive } from './hooks'


export default {
    name: '',
    setup() {
        // const title = ref('this is title');

        // const setTitle = (text) => {
        //     title.value = text;
        // }

        const [title, setTitle] = useState('hook')
        const [content, setContent] = useState('content')

        //监听title.value, 如果发生改变，立即调用传入的callback(curv, prev)
        watch(title, (curv, prev) => {
            console.log(curv, prev);
        })

        //getter函数
        //当一次性更改两个值的时候，watch开始收集依赖，依赖当中会有函数回调，多次回调会默认合并成一次来执行。
        watch(() => {
            //这个函数会被watch执行
            //返回值会传递到watch的第二个参数，也就是传递给text
            return `this is ${title.value}, and this is ${content.value}`
        }, (text) => { console.log(text); })

        //reactive侦听
        const [state, refState] = useReactive({
            name: 'spongeBob',
            age: 1
        })


        //响应式数据都是对象
        //watch如果直接侦听一个对象值，可以深度侦听
        //watch如果要侦听getter函数，默认是不深度侦听的，如果想要深度侦听，将watch第三个参数设置deep属性为true

        state.article = {
            title: 'this is title',
            content: 'this is article'
        }

        // watch(state.article, (curv, prev) => {
        //     console.log(curv, prev);
        // })

        // state.article.title = 'title changed'
        // state.article.content = 'content change'

        //使用{deep: true},尽量少用，会影响性能
        watch(() => state.article, (curv, prev) => {
            console.log(curv, prev);
        }, { deep: true })

        state.article.title = 'title getter changed'


        //同时监听多个值
        watch([title, content, state.article], (curv, prev) => {
            console.log(curv, prev);
        })


        //想要拿到DOM更新之后的innerText，使用flush：'pre | post | sync
        const titleRef = ref(null);

        watch(title, () => {
            //默认情况下，组件更新前被调用
            //获取的value是组件更新之前的值
            console.log('默认情况下，组件更新前被调用,获取的value是组件更新之前的值:', titleRef.value.innerText);
        })

        //创建watch立即执行
        watch(title, () => {
            console.log('创建watch立即执行');
        }, {
            immidiate: true
        })


        watch(title, () => {

        }, {
            onTrack(e) {
                //侦听器侦听行为被创建的时候触发
                console.log('onTrack');
            },
            onTrigger(e) {
                //依赖被修改的时候被触发
                console.log('onTrigger');
            }
        })

        return {
            titleRef,
            title,
            setTitle,
            content,
            setContent,
            state,
            ...refState
        }

    }
}
</script>

<style lang='scss' scoped>
* {
    color: #fff;
}
</style>