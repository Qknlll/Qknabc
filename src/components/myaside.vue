<template>
    <div class="side">
        <div v-for="item, index in topList" class="title">
            <div style="color: white;font-size: 18px;">
                {{ item.title }}&emsp;&emsp;&emsp;&emsp;&emsp;
                <span @click="flag1" v-if="index == 0">
                    >
                </span>
            </div>
            <transition>
                <div v-show="flag" class="children">
                    <div style="width: 100%;text-align: center;color: white;margin: 20px 0;"
                        v-show="ite.type.includes(type)" v-for="ite in item.children">
                        {{ ite.title }}
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script  setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { top } from "@/request/api";
const flag = ref(false)
const route = useRoute();
const router = useRouter();
const store = useStore();
const topList = ref([])
const props = defineProps({
    type: Number
})



const getTop = () => {
    top().then(res => {
        console.log(res.data);
        topList.value = res.data
    })
}
getTop()

const flag1 = () => {
    flag.value = !flag.value
}
</script>

<style lang="scss" scoped>
.side {
    width: 200px;
    height: calc(100vh - 60px);
    background-color: #545454;
}
</style>