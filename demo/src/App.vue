<template>
<div>
    <one-month-grids @hover="sayHello" :year="2020" :month="7" :day="3" :data="July.data"></one-month-grids>
    <message-box v-if="target !== HEML" :msg="msg" :target="target">commit times: </message-box>
</div>
</template>

<script setup lang="ts">
import OneMonthGrids from '../../src/components/OneMonthGrids.vue'
import MessageBox from '../../src/components/MessageBox.vue';
import { reactive, ref, Ref } from 'vue';
const July = require('../data/July.json')
const HEML = document.documentElement
let target = ref<HTMLElement>(document.documentElement)
let msg: Ref<string | number> = ref("")
const sayHello = (payload) => {
    console.log(payload)
    target.value = payload.target
    msg.value = payload.day
}
</script>

<style scoped lang="less">
</style>