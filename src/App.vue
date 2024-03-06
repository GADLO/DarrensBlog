<script >
import { RouterLink, RouterView } from 'vue-router';
import { useRoute, useRouter } from 'vue-router';
import { debounce, flatten } from '@/utils/tools.js'

import HomeView from "@/views/HomeView.vue"

export default {
  components: {
    HomeView
  },
  setup() {
    let arr = [1, 2, [3, 4, [5, 6]]]
    console.log(flatten(arr));
    const router = useRouter();

    function home() {
      router.push('/')
      console.log('go back');
    }

    const goHome = debounce(home, 4000, false)

    return {
      goHome
    }
  }
}

</script>

<template>
  <!-- <header><span class="logo" @click="goHome">DARREN</span>
    <div class="menu">

      <router-link to="/essays">文章</router-link>
      <span @click="home">Frontend</span>
      <el-avatar class="text-green-600 text-lg bg-sky-200"> D </el-avatar>
    </div>
  </header> -->
  <div class="main">
    <RouterView></RouterView>
  </div>
  <!-- <footer>
    <p>since 2018 </p>
  </footer> -->
</template>

<style scoped lang="scss">
header {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 58px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.4);
  // border-bottom: .1px solid #6b6868;
  color: #1bc62099;
  padding: 0 28px;
  position: fixed;
  top: 0;
  z-index: 1000;

  .logo {
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
    cursor: pointer;
  }

  .menu {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;

  }
}

.main {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: linear-gradient(to bottom,
  //     #AED6F1,
  //     /* 清晨蓝 */
  //     #306eb5,

  //   );

  background: linear-gradient(-45deg, #ff6188 0%, #fc9867 13%, #ffd866 25%, #a9dc76 38%, #78dce8 50%, #ab9df2 62%, #ffd866 75%, #a9dc76 87%, #78dce8 100%);
  // height: calc(100% - 58px);
  // border: 1px solid #ccc;

  background-size: 800% 800%;
  /* 循环动画 - 原理4 */
  animation: gradientBG 20s ease infinite;
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

​
/* 动画，控制背景 background-position */


footer {
  position: fixed;
  bottom: 0;
  background-color: #333;
  color: rgb(124, 120, 120);
  text-align: center;
  padding: 10px 0;
  height: 40px;
  width: 100%;

  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.4);
}
</style>
