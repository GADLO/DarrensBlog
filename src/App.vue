<script >
import { RouterLink, RouterView } from 'vue-router';
import { useRoute, useRouter } from 'vue-router';

import HomeView from "@/views/HomeView.vue"

export default {
  components: {
    HomeView
  },
  setup() {
    const router = useRouter();

    function home() {
      router.push('/')
    }

    return {
      home
    }
  }
}

</script>

<template>
  <header><span class="logo" @click="home">Frontend</span>

    <div class="menu">
      <span @click="home">Frontend</span>
      <span @click="home">Frontend</span>
      <el-avatar class="text-green-600 text-lg bg-sky-200"> D </el-avatar>
    </div>
  </header>
  <div class="main">
    <RouterView></RouterView>
  </div>
</template>

<style scoped lang="scss">
header {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 58px;
  background-color: #1a1a1a;
  border-bottom: .1px solid #6b6868;
  color: #EBEBEB99;
  padding: 5px;
  padding: 0 28px;

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
  height: calc(100% - 58px);
  border: 1px solid #ccc;
}
</style>
