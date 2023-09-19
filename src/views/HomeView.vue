<template>
  <div class="app">
    <span style="cursor: pointer;" @click="tab">
      {{ user }}
    </span>

  </div>
  <ul class="ul" v-show="status">
    <li v-for="item, index in menList" @click="tabList(index)" :class="activeindex == index ? 'active' : ''">{{
      item.name }}
    </li>
    <li @click="back">退出登录</li>
  </ul>
  <myaside :type="type"></myaside>
</template>

<script  setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { menu } from '../request/api'
import myaside from '../components/myaside.vue'

const user = ref(localStorage.getItem('token') || '')
const status = ref(false)
const menList = ref([])
const activeindex = ref(0)
const type = ref(1)
const route = useRoute();
const router = useRouter();
const store = useStore();

const getList = () => {
  menu().then(res => {
    console.log(res);
    menList.value = res.data
  })
}
getList()
const tab = () => {
  console.log(1);
  status.value = !status.value

}

const tabList = (i) => {
  activeindex.value = i
  type.value = menList.value[i].type

}

const back = () => {
  localStorage.removeItem('token')
  router.push('/login')
}

</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 50px;
  background-color: #545454;
  text-align: right;
  line-height: 50px;
  color: white;
}

.ul {
  position: fixed;
  right: 0;
  width: 50px;
  border: 1px solid #ccc;
  text-align: center;
  top: 45px;

  li {
    font-size: 12px;
    height: 30px;
    border-bottom: 1px solid #ccc;
    list-style: none;
  }
}

.active {
  color: skyblue;
}
</style>
