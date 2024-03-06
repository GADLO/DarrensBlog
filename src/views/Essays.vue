<template>
    <!-- <el-container style="height:100%;border: 1px solid #eee">
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
    </el-container> -->
    <div class="article-wrap">
        <div class="head">文章</div>
        <div class="blog-list">
            <div class="list-item" v-for="article in articleList">
                <span class="item-name">{{ article.node.title }}</span>
                <span class="create-time">{{ article.node.updatedAt }}</span>
                <!-- <span class="read-time">{{ article.node.title }}</span> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { useQuery } from '@vue/apollo-composable';
import { indexQuery } from '@/queries/markdownQuery.js';
import { useArticleStore } from '@/stores/Article'
import { storeToRefs } from 'pinia'
import { ref, onMounted } from "vue";
import { marked } from 'marked';
import highlight from 'highlight.js'

onMounted(() => {
    fetchData()
});

let articleList = ref({});
let curArticle = ref('');


const { result, refetch, onResult, onError, loading } = useQuery(indexQuery);



const fetchData = () => {
    refetch();
};



//若请求成功，提取请求数据

onResult((res) => {
    console.log('result,result', res);
    articleList.value = res.data?.repository?.issues?.edges;
    console.log('articleList', articleList);
    test.value = articleList.value[0].node.title

    addArticle(articleList);
});



onError((error) => {
    console.error('数据请求失败:', error);
    addArticle([{ node: { title: '数据请求失败' } }]);
});

const store = useArticleStore(),
    { articles } = storeToRefs(store),
    { addArticle } = store;


// console.log(articles.githubData);
function openArticle(data) {
    marked.setOptions({
        highlight: function (code) {
            return highlight.highlightAuto(code).value;
        }
    })

    curArticle.value = marked(data.node.body);
    // console.log(curArticle.value);
}





</script>

<style lang='scss' scoped>
.article-wrap {
    color: #494848;
    width: 650px;
    margin: 0 auto;
    margin-top: 60px;

    .head {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 40px;
        // background-color: orange;
    }


    .blog-list {
        list-style: none;

        .list-item {
            margin: 10px 0;

            .item-name {
                cursor: pointer;
                transition: ease-in-out .3s;

                &:hover {
                    color: #242424;
                    transform: scale(2.02);
                    transition: ease-in-out .3s;
                }
            }
        }

        .create-time {
            margin-left: 20px;
            font-size: 12px;
            color: #bfbebe;
        }
    }
}

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

::v-deep(.content) {

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
</style>