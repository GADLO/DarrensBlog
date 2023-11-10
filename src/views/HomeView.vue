<template>
  <div class="wrap">
    <div class="carousel">
      <el-carousel height="auto" pause-on-hover>
        <el-carousel-item style="height:280px" v-for="item in carouselItem">
          <h3 class="small justify-center" text="2xl" style="height:280px">{{ item.node.title }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="route-card" v-for="route in routeCard">
      <!-- <icon-base icon-name="huawei" width="80" height="80" iconColor="pink">
        <huawei />
      </icon-base> -->
      <div class="card">
        <router-link :to="route.path">{{ route.name }}
        </router-link>
      </div>



    </div>
    <!-- <marked-template markdown=""></marked-template> -->
    <el-button @click="refetch">请求数据</el-button>
  </div>
</template>

<script  >
import Login from './Login.vue';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import IconBase from '@/components/icons/IconBase.vue';
import huawei from '@/components/icons/svgTemplate/huawei.vue';

import { useQuery } from '@vue/apollo-composable'
import { indexQuery } from '@/queries/markdownQuery.js'
import { useArticleStore } from '@/stores/Article'
import { storeToRefs } from 'pinia'
import { onUpdated, onMounted } from 'vue'

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

  },

  setup() {
    let carouselItem = ref();
    let { result, refetch, onResult } = useQuery(indexQuery);

    onUpdated(() => {
      refetch()
    })

    onMounted(() => {
      onResult((res) => {
        console.log('onResult', res)
        carouselItem.value = res.data.repository?.issues?.edges;
        addArticle(carouselItem);

      })
    })

    const route = useRoute(),
      router = useRouter();
    //主页卡片集合获取
    const routeCard = router.options.routes;

    const store = useArticleStore(),
      { articles } = storeToRefs(store),
      { addArticle } = store;

    if (result.value) {

      // console.log(articles.value.githubData);
    } else {
      carouselItem = [
        {
          node: {
            title: '数据请求失败'
          }
        }
      ]
    }






    return {
      routeCard, carouselItem, refetch, result
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
    border-radius: 25px;
    color: #EBEBEB99;
    background: linear-gradient(130deg, #42d392 25%, #647eff);
    transition: ease-in-out .3s;

    .card {
      background-color: #fff;
      border-radius: 20px;
      width: 95%;
      height: 92%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      background-color: #767474;
      // opacity: .9;
    }

    &:hover {
      transform: scale(1.05);
      transition: ease-in-out .3s;
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
