<template>
    <div class="qr-wrap">
        <img src="../../assets/QRcode.jpg" alt="">
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => console.log('QRcode Mounted'))

</script>

<style lang='scss' scoped>
.qr-wrap {
    display: grid;
    place-items: center;
    margin: 0 auto;

    img {
        width: 300px;
        height: 200px;
        object-fit: cover;
    }
}
</style>