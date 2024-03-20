<template>
    <div class="login-tab">
        <div class="login-nav">
            <div v-for="tab in tabData" :class="['nav-item']" @click="changeTab(tab)">{{ tab }}
            </div>
        </div>
        <div class="login-component">
            <keep-alive>
                <component :is="comList[currentTab]"></component>
            </keep-alive>

        </div>
    </div>
    <router-view></router-view>
</template>

<script setup>
import { ref, computed, defineAsyncComponent } from 'vue';
import Account from './Account.vue'

const QRcode = defineAsyncComponent(() => import('./QRcode.vue'))
const Mobile = defineAsyncComponent(() => import('./Mobile.vue'))

let currentTab = ref(
    'Account'
)

const comList = {
    Account,
    QRcode,
    Mobile
}

const tabData = [
    'Account',
    'QRcode',
    'Mobile',]

const currentTabComponent = computed(() => {
    return currentTab.value;
})

function changeTab(tab) {

    currentTab.value = tab;
}


</script>

<style lang='scss' scoped>
.login-tab {
    width: 500px;
    padding: 50px auto;
    border: 1px solid gray;

    .login-nav {
        height: 50px;
        border-bottom: 1px solid gray;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .nav-item {
            cursor: pointer;
        }
    }
}
</style>