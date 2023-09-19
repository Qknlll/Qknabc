<template>
    <div class="app">

        <div class="main">
            <p>
                <img src="../assets/logo.png" alt="" style="width: 50px;">
            </p>
            <p style="margin: 10px 0;">
                用户名<input type="text" placeholder="请输入用户名" v-model="form.username"><br>
                <span v-show="user" style="color: red;font-size: 12px">请输入用户名</span>
            </p>
            <p style="margin: 10px 0;">
                密码<input type="text" placeholder="请输入密码" v-model="form.password"><br>
                <span v-show="pass" style="color: red;font-size: 12px">请输入密码</span>
            </p>
            <button style="background-color: #398ae1;width: 100px;border: none;height: 25px;" @click="login">登录</button>
        </div>
    </div>
</template>

<script  setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const router = useRouter();
const store = useStore();
const form = reactive({
    username: '',
    password: ''
})
const user = ref(false)
const pass = ref(false)

const login = () => {
    if (form.username == '' && form.password == '') {
        user.value = true
        pass.value = true
        return false

    } else {
        user.value = false
        pass.value = false
        localStorage.setItem('token', form.username)
        router.push('/')
    }
}

</script>

<style lang="scss" scoped>
.app {
    width: 100%;
    height: 100vh;
    background-color: #97eed4;
    position: relative;

    .main {
        width: 400px;
        height: 200px;
        background-color: #fff;
        position: absolute;
        text-align: center;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
}
</style>