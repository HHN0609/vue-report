<template>
<div class="vue-report-container">
    <one-month-grids v-for="item in data" 
        @out="hiddenBox" 
        @show="showBox" 
        :year="item.year" 
        :month="item.month" 
        :data="item.dailyMsgs"
    />
</div>
<message-box v-if="isShow" :target="target">
    <template v-slot:date>
        <div>{{year}} - {{month}} - {{day}}</div>
    </template>
    <template v-slot:description>
        {{msg}} contributions
    </template> 
</message-box>
</template>

<script setup lang="ts">
import OneMonthGrids from './OneMonthGrids.vue'
import MessageBox from './MessageBox.vue';
import { ref, Ref, nextTick } from 'vue';
import { MonthDataTemplate } from '../types'
const props = defineProps<{
    data: MonthDataTemplate[],
    mode?: string,
    themeColor?: string
}>()

// 控制messageBox的显示
const isShow: Ref<boolean> = ref<boolean>(false)

// 指定messageBox需要依附的dom元素
const target = ref<HTMLElement>()

// messageBox内部的信息
const msg: Ref<string | number> = ref("")

// messageBox内部的日期显示
const year: Ref<string | number> = ref<string | number>(0)
const month: Ref<string | number> = ref<string | number>(0)
const day: Ref<string | number> = ref<string | number>(0)

// <one-month-grids/>show事件的回调
const showBox = (payload) => {
    isShow.value = true
    nextTick(() => {
        target.value = payload.target
    })
    msg.value = payload.description
    year.value = payload.year
    month.value = payload.month
    day.value = payload.day
}

// <one-month-grids/>out事件的回调
const hiddenBox = () => {
    isShow.value = false
}
</script>

<style scoped lang="less">
.vue-report-container{
    width: fit-content;
    height: fit-content;
    overflow-y: hidden;
    overflow-x: scroll;
    resize: horizontal;
    white-space: nowrap;
    min-width: 400px;
    background:rgb(247, 244, 244);
}
</style>