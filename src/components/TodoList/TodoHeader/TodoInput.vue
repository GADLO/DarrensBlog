<template>
    <input class="ind" type="text" v-model="content" :placeholder="plh" />
</template>

<script setup>
import { ref, inject, watch } from 'vue';


const content = ref('')
const emit = defineEmits(['changeContent'])
const plh = inject('plh')

watch(content, () => {
    if (content.value.length > 0) {
        emit('changeContent', content.value)
    }
})



</script>

<style lang='scss' scoped>
.ind {
    color: rgb(5, 5, 5);
    margin: 0 20px;
}
</style>