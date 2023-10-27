<template>
  <div class="wrap">
    <div class="carousel">
      <el-carousel height="auto" pause-on-hover>
        <el-carousel-item style="height:280px" v-for="item in 2" :key="item">
          <h3 class="small justify-center" text="2xl" style="height:280px">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="route-card" v-for="route in routeCard">
      <!-- <icon-base icon-name="huawei" width="80" height="80" iconColor="pink">
        <huawei />
      </icon-base> -->
      <router-link :to="route.path">{{ route.name }}
      </router-link>


    </div>
    <!-- <marked-template markdown=""></marked-template> -->

  </div>
</template>

<script  >
import Login from './Login.vue';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter, onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router';
import IconBase from '../components/icons/IconBase.vue';
import huawei from '../components/icons/svgTemplate/huawei.vue';
import MarkedTemplate from '@/components/marked/MarkedTemplate.vue'


export default {
  name: 'HomeView',
  beforeRouteEnter(to, from) {
    console.log('beforeRouteEnter');
    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 `this` ！
    // 因为当守卫执行时，组件实例还没被创建！
  },

  components: {
    Login,
    IconBase,
    huawei,
    MarkedTemplate
  },

  setup() {
    const route = useRoute(),
      router = useRouter();

    const input = ref(null);



    const routeCard = router.options.routes;

    // 与 beforeRouteLeave 相同，无法访问 `this`
    onBeforeRouteUpdate((to, from) => { console.log('beforeRouteUpdate'); });

    // 在导航离开渲染该组件的对应路由时调用
    // 与 beforeRouteUpdate 相同，无法访问 `this`
    onBeforeRouteLeave((to, from) => { console.log('beforeRouteLeave'); });
    return {
      routeCard, input
    }
  }
}
</script>

<style lang='scss' scoped>
.wrap {
  margin: 0 auto;
  // padding-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 70vh;
  width: 100vw;
  flex-wrap: wrap;
  // background-color: #1a1a1a;

  .carousel {
    height: 280px;
    width: 100%;
    background-color: #f2f2f2;
  }

  a {
    text-decoration: none;
    color: #EBEBEB99;
  }

  .route-card {
    font-size: 20px;
    font-weight: bold;
    width: 180px;
    height: 120px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    border: px solid #D7FFFE;
    border-radius: 5px;
    // background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);
    // box-shadow: 2px 2px 20px #d8d8d8;
    color: #EBEBEB99;

    background: linear-gradient(#222, #222),
      linear-gradient(130deg, #42d392 25%, #647eff);
    background-origin: padding-box, border-box;

    background-repeat: no-repeat;
    /* this is important */
    border: 3px solid transparent;


    &:hover {
      transform: scale(1.05);
      transition: all .3s;
    }
  }
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
