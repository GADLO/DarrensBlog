<template>
    <div class="api-wrap">
        <div class="api-menu">
            <h1 @click="back">Vue Origin API</h1>
            <div v-for="route in originApiRoutes" style="max-width: 100px" @click="routeClick(route.path)">
                {{ route.name }}
            </div>
        </div>

        <div class="api-content">
            <router-view></router-view>
        </div>

    </div>
</template>

<script >
import { useRouter } from 'vue-router';

export default {
    name: '',
    setup() {

        const router = useRouter()
        const routes = useRouter().options.routes
        const originApiRoutes = routes[4].children
        console.log(originApiRoutes);

        function routeClick(currentRoute) {
            console.log(currentRoute);
            router.push(`/Originapi/${currentRoute}`)
        }

        function back() {
            router.push(`/Originapi`)
        }

        return {
            originApiRoutes, routeClick, back
        }
    }
}
</script>

<style lang='scss' scoped>
.api-wrap {
    display: flex;
    height: 100%;
    width: 100%;
    background-color: #686363;

    .api-menu {
        flex: 1.2;
        display: flex;
        justify-content: start;
        flex-direction: column;
        align-items: center;



        h1 {
            color: #fff;
            height: 60px;
            line-height: 60px;
            font-size: 20px;
            font-weight: bold;
        }

        div {
            height: 40px;
            line-height: 40px;
            color: #d3d2d2;
            cursor: pointer;

            &:active {
                color: antiquewhite;
            }
        }
    }

    .api-content {
        flex: 5;
    }
}
</style>