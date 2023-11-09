<template>
    <div v-html="html"></div>
</template>

<script >
import { marked } from 'marked';
import highlight from 'highlight.js'
import { ref } from "vue";


export default {
    name: 'MarkedTemplate',
    props: ['markdown'],
    setup(props) {

        // const fileMD = require.context('@/markdown', true, /\.md$/);
        let html = ref('')
        marked.setOptions({
            highlight: function (code) {
                return highlight.highlightAuto(code).value;
            }
        })

        html.value = marked(props.markdown);
        console.log(html.value);
        return {
            html
        }
    }
}
</script>

<style lang='scss' scoped></style>