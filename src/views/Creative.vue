<template>
    <div class="wrap">

        <div class="card gradient-border" ref="card" v-for='item in projectNames'>
            <div class="card_content">{{ item }}</div>
        </div>
    </div>
</template>

<script >
import { ref, onMounted, nextTick } from 'vue';

export default {
    name: '',
    setup() {
        function generateRandomString(minLength, maxLength) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
            let randomString = '';
            for (let i = 0; i < length; i++) {
                randomString += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return randomString;
        }

        function generateRandomChineseString(minLength, maxLength) {
            // 中文常用字符的Unicode编码范围是0x4e00到0x9fa5
            const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
            let randomString = '';
            for (let i = 0; i < length; i++) {
                // 随机生成一个在中文编码范围内的字符
                const unicodeNum = Math.floor(Math.random() * (0x9fa5 - 0x4e00 + 1)) + 0x4e00;
                randomString += String.fromCharCode(unicodeNum);
            }
            return randomString;
        }

        // 创建项目名称数组
        let projectNames = [];
        for (let i = 0; i < 22; i++) {
            projectNames.push(generateRandomChineseString(3, 10)); // 假设项目名称长度在5到10个字符之间
        }



        const updateMessage = async () => {


            await nextTick();

            // 现在DOM已经更新了
            let cards = document.querySelectorAll('.card') // 'Hello, Vue 3!'
            for (let i = 0; i < cards.length; i++) {
                let textLen = cards[i].textContent.length
                cards[i].style.width = `${textLen * 5 + 200}px`;
                // cards[i].style.height = `${50 * Math.random() + 100}px`
                console.log('card', cards[i].textContent);
            }
        };

        updateMessage()

        return {
            projectNames
        }
    }
}
</script>

<style lang='scss' scoped>
:root {
    --color-first: #65587f;
    --color-second: #f18867;
    --color-third: #e85f99;
    --color-forth: #50bda1;
}

.wrap {
    width: 100vw;
    max-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding: 10px;
    justify-content: center;
    // align-items: flex-start;
}

.card {
    width: 200px;
    height: 80px;
    margin: 10px;

    color: #666666;

    --border-width: 40px;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Lato, sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
    background: #222;
    border: 4px solid #888888;
    background-color: #f4f5f6;
    border-radius: var(--border-width);
    outline: none;
    box-shadow: 0px 0px 0px #ffffff, 0px 0px 0px #ffffff, 0px 0px 0px #ffffff, 6px 20px 25px rgba(0, 0, 0, 0.2);
    transition: .13s ease-in-out;
    cursor: pointer;

    .card_content {
        box-shadow: inset 0px -8px 0px #dddddd, 0px -8px 0px #f4f5f6;
        border-radius: 44px;
        height: 100%;
        width: 100%;
        display: grid;
        place-items: center;
    }

    &:active {
        transition: .13s ease-in-out;

        .card_content {
            box-shadow: none;
        }

        box-shadow: none;
        transform: translate3d(0px, 0px, 0px);
    }
}

@keyframes moveGradient {
    50% {
        background-position: 100% 50%;
    }
}
</style>