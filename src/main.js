import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia';
import VueAxios from 'vue-axios';
import axios from 'axios';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./style/index.css";
import { apolloClient } from '@/utils/apolloClient.js'
import { provideApolloClient } from '@vue/apollo-composable'

import App from './App.vue';
import router from './router';

console.log(apolloClient);

const app = createApp({
    setup() {
        provideApolloClient(apolloClient)
    },

    render: () => h(App),
});

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(ElementPlus);

app.mount('#app');