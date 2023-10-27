<template>
    <div class="property">
        <h2>{{ name }}</h2>
        <div class="items">
            <div class="item" v-for="(item, ind) in num">{{ ind + 1 }}</div>

        </div>
    </div>
</template>

<script >
export default {
    name: 'FlexItems',
    props: ['name', 'num'],
    setup(props) {
        console.log(props.num + 2);
    }
}
</script>

<style lang='scss' scoped>
h2 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
}

.property {
    width: 100%;
    border: 3px dashed orange;
    border-radius: 10px;
    padding: 10px;
    background-color: #995db5;

}

.items {
    display: flex;
    height: 50px;
    gap: 10px;


    .item {
        background-color: orange;
        flex: 1;
        color: whitesmoke;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 1.5rem;

        &:nth-child(2) {
            flex: 2;
        }

        &:nth-child(3) {
            flex: 1;
        }
    }
}
</style>