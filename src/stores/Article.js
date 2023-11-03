import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

//Store 是用 defineStore() 定义的，它的第一个参数要求是一个独一无二的名字
export const useArticleStore = defineStore('article', () => {
  const articles = reactive({});

  function addArticle(data) {
    articles.githubData = data
  }
  return { articles, addArticle }
})
