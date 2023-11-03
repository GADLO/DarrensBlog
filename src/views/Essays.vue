<template>
    <el-container style="height:100%;border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu default-active="1">
                <el-sub-menu index="1">
                    <template #title>Vanilla JS</template>
                    <el-menu-item-group title="原型">
                        <el-menu-item :index="`1-${ind}`" v-for=" (item, ind) in articles.githubData">{{ item.node.title
                        }}</el-menu-item>
                    </el-menu-item-group>

                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>CSS</template>
                </el-sub-menu>
                <el-sub-menu index="3">
                    <template #title>HTML</template>
                </el-sub-menu>
                <el-sub-menu index="4">
                    <template #title>VUE</template>
                </el-sub-menu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-main>

            </el-main>
        </el-container>
    </el-container>
</template>

<script >
// import EssayTemplate from '@/components/essayTemplate';
import { useArticleStore } from '@/stores/Article'
import { storeToRefs } from 'pinia'

export default {
    name: 'Essay',
    components: {
        // EssayTemplate
    },
    setup() {
        const store = useArticleStore(),
            { articles } = storeToRefs(store),
            { addArticle } = store;

        console.log(articles.githubData);
        return { articles }
    }
}
</script>

<style lang='scss' scoped>
.wrap {
    display: flex;
    height: 100%;

    .essay-list {
        height: 100%;

        flex: 1;
        border-right: 1px solid #f2f2f2;
    }

    .content {
        height: 100%;

        flex: 3;
    }
}
</style>