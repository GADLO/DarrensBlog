<template>
    <el-container style="height:100%;border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :collapse="isCollapse" default-active="1">
                <el-sub-menu index="1">
                    <template #title>Vanilla JS</template>
                    <el-menu-item-group title="原型">
                        <el-menu-item :index="`1-${ind}`" v-for=" (item, ind) in articles.githubData"
                            @click="openArticle(item)">{{ item.node.title
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
            <el-main class="content">
                <div v-highlight v-html="curArticle"></div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script >

import { useArticleStore } from '@/stores/Article'
import { storeToRefs } from 'pinia'
import { ref } from "vue";
import { marked } from 'marked';
import highlight from 'highlight.js'


export default {
    name: 'Essay',
    components: {
        // EssayTemplate
    },
    setup() {

        const store = useArticleStore(),
            { articles } = storeToRefs(store),
            { addArticle } = store;

        let isCollapse = false, curArticle = ref('');
        // console.log(articles.githubData);
        function openArticle(data) {
            marked.setOptions({
                highlight: function (code) {
                    return highlight.highlightAuto(code).value;
                }
            })

            curArticle.value = marked(data.node.body);
            console.log(curArticle.value);
        }



        return { articles, isCollapse, openArticle, curArticle }
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
        max-width: 680px;
    }

}

::v-deep {
    .content {

        h2 {
            margin-top: 20px;
            text-align: center;
            font-size: 30px;
            font-weight: bold;

        }

        h3 {
            margin-top: 15px;

            font-size: 18px;
            font-weight: bold;
            text-align: center;

        }



        ul {
            margin: 18px 0 0 0;
            text-indent: 2em;
            font-size: 14px;
            color: #4a4a4a;

            li {
                position: relative;

                &::before {
                    content: '';
                    position: absolute;
                    top: 9px;
                    left: 10px;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background-color: #242424;
                }
            }
        }

        p {
            margin: 18px 0 0 0;
            text-indent: 2em;
            font-size: 14px;
            color: #4a4a4a;
            font-family: Microsoft YaHei, Helvetica, Verdana, Arial, Tahoma;

            code {
                margin: 0 5px;
                padding: 2px 5px;
                background-color: #f9f9f9;
                border: 1px solid rgb(229, 229, 229);
                border-radius: 8px;
                color: #ef6155;
            }
        }

        pre {
            position: relative;
            padding-left: 20px;
            padding-right: 10px;
            font-size: 14px;

            margin-top: 56px;
            // padding: 32px;
            margin-bottom: 20px;

            background-color: #f9f9f9;
            border: 1px solid rgb(229, 229, 229);
            border-radius: 8px;
            // font-family: source-code-pro,
            //     Menlo,
            //     Monaco,
            //     "Courier New",
            //     Courier,
            //     monospace;
        }

        code {
            border-radius: 8px;
            background-color: #f9f9f9;

        }

        .pre-numbering {
            position: absolute;
            top: 0;
            left: 0;
            width: 29px;
            padding: 15px 7px 12px 5px;
            border-right: 1px solid #f9f9f9;
            color: #c9c8c8;
            background: #f9f9f9;
            text-align: right;
            font-size: 1em;
            line-height: 1.5;
            height: 100%;
            // text-align: center;
        }


    }
}
</style>