<script setup>
import { onMounted, ref, onActivated, onDeactivated } from 'vue';

onMounted(() => console.log('Account Mounted'))
onActivated(() => console.log('Account activated'))
onDeactivated(() => console.log('Account deactivated'))

const username = ref('');
const password = ref('');
const error = ref('');



const login = () => {
    if (username.value === 'admin' && password.value === 'password') {
        // 登录成功,进行相应的操作,如跳转到首页
        console.log('登录成功');
        // 这里可以使用路由跳转或其他逻辑
    } else {
        error.value = '用户名或密码错误';
    }
};
</script>

<template>
    <div class="login-container">
        <h2>Account Login</h2>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="username">用户名:</label>
                <input type="text" id="username" v-model="username" required>
            </div>
            <div class="form-group">
                <label for="password">密码:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">登录</button>
        </form>
        <p v-if="error" class="error-message">{{ error }}</p>
    </div>
</template>

<style scoped>
.login-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;

}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button[type="submit"] {
    padding: 8px 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.error-message {
    color: red;
    margin-top: 10px;
}
</style>
