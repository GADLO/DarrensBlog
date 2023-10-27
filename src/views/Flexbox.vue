<template>
    <h1>Flexbox Guide</h1>
    <div class="container">
        <flex-items name="flex-diretion" :num="4"></flex-items>
        <flex-items name="flex-diretion" :num="8"></flex-items>

    </div>
</template>

<script >
import FlexItems from '@/components/flexbox/FlexItems.vue'

export default {
    name: 'FlexBox',
    components: {
        FlexItems
    },
    setup() {

    }
}
</script>

<style lang='scss' scoped>
h1 {
    font-family: MD Primer Bold, Rubik, Lato, Lucida Grande, Lucida Sans Unicode, Tahoma, Sans-Serif;
    font-style: normal;
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
}

.container {
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0px 0px 10px 5px #f2f2f2;
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>