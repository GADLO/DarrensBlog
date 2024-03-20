<template>
  <div class="wrap">

    <div class="cube-container">
      <div class="cube">
        <div class="face front">CSS</div>
        <div class="face back">JavaScript</div>
        <div class="face right">HTML</div>
        <div class="face left">VUE</div>
        <div class="face top">REACT</div>
        <div class="face bottom">ANGULAR</div>
      </div>
    </div>
    <div class="time-flow">
      <div class="route-card">
        <div class="card">
          <router-link :to="'/creative'">
            <div>{{ greeting }}</div>
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';


let greeting = ref('');
let autoplayInterval
let currentIndex = ref(0)
const welcomes = ref(['Welcome', 'Bienvenido', '欢迎', 'أهلا بك', 'Bem-vindo', 'Добро пожаловать', 'ようこそ', 'Willkommen', 'Bienvenue', 'Benvenuto', '환영합니다', 'Hoş geldiniz', 'خوش آمدید', 'स्वागत है', 'Karibu', 'Selamat datang'])




const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    greeting.value = welcomes.value[currentIndex.value]
    currentIndex.value === welcomes.value.length ? currentIndex.value = 0 : currentIndex.value++
  }, 3000);
};

const stopAutoplay = () => {
  clearInterval(autoplayInterval);
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});

</script>



<style lang='scss' scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.wrap {
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  flex-direction: column;
  padding-top: 90px;


  .cube-container {
    width: 200px;
    height: 200px;
    perspective: 800px;
    margin: 50px auto;
    margin-bottom: 100px;

    .cube {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      animation: rotate 20s infinite linear;
    }

    .face {
      font-weight: bold;
      position: absolute;
      width: 200px;
      height: 200px;
      color: rgb(21, 153, 214);
      font-size: 28px;
      text-align: center;
      line-height: 200px;
      background: transparent;
      opacity: 0.9;
      border: 2px solid;
      border-image: linear-gradient(90deg,
          rgba(14, 8, 110, 1) 0%,
          rgba(15, 15, 167, 1) 26%,
          rgba(20, 45, 255, 1) 85%);
      box-shadow: 0 0 100px rgba(8, 178, 245, 0.61);
    }

    .front {
      transform: translateZ(100px);
      background-color: #0093e9;
      background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
    }

    .back {
      transform: rotateY(180deg) translateZ(100px);
      background-color: #0093e9;
      background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
    }

    .right {
      transform: rotateY(90deg) translateZ(100px);
      background-color: #0093e9;
      background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
    }

    .left {
      transform: rotateY(-90deg) translateZ(100px);
      background-color: #0093e9;
      background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
    }

    .top {
      transform: rotateX(90deg) translateZ(100px);
      background-color: #0093e9;
      background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
    }

    .bottom {
      transform: rotateX(-90deg) translateZ(100px);
      background-color: #0093e9;
      background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
    }

    &:hover .cube {
      animation-play-state: paused;
    }

    @keyframes rotate {
      0% {
        transform: rotateX(0) rotateY(0) rotateZ(0);
      }

      100% {
        transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
      }
    }

  }

  .time-flow {
    height: 20%;
    // backdrop-filter: blur(10px);
    // background-color: rgba(255, 255, 255, 0.4);
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    padding: 40px;
  }

  a {
    text-decoration: none;
    color: #413f3f99;
  }

  .route-card {
    font-size: 20px;
    font-weight: bold;
    width: 230px;
    height: 80px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    border-radius: 40px;
    color: #EBEBEB99;
    transition: .3s;
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);

    .card {
      border-radius: 17px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
    }

    &:hover {
      transform: scale(1.05);
      background-color: aliceblue;


      a {
        color: #38373799;
      }
    }
  }
}
</style>
