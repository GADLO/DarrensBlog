import { createApp, h } from 'vue'
import { createPinia } from 'pinia';
import VueAxios from 'vue-axios';
import axios from 'axios';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./style/index.css";
import { apolloClient } from '@/utils/apolloClient.js'
import { provideApolloClient } from '@vue/apollo-composable'
import hljs from 'highlight.js';
import "highlight.js/styles/paraiso-light.css";

import App from './App.vue';
import router from './router';

// console.log(apolloClient);

const app = createApp({
    setup() {
        provideApolloClient(apolloClient)
    },
    render: () => h(App),
});
app.use(hljs);
app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(ElementPlus);


//封装成一个指令,highlight是指令的名称
app.directive('highlight', (el) => {
    let blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {

        // 创建ol标签元素
        let ol = document.createElement("ol");

        // 2.根据换行符获取行数，根据获取的行数生成行号
        let rowCount = block.outerHTML.split('\n').length;
        for (let i = 1; i < rowCount; i++) {
            // 创建li标签元素
            let li = document.createElement("li");
            let text = document.createTextNode(i);
            // 将生成的行号添加到li标签中
            li.appendChild(text);
            // 将li标签添加到ol标签中
            ol.appendChild(li);
        }
        // 为ol标签添加class名
        ol.className = 'pre-numbering';
        block.parentNode.appendChild(ol);

        hljs.highlightBlock(block)
    })
})

app.mount('#app');