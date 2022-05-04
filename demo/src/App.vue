<template>
<div>
    <one-month-grids @hover="sayHello" :year="2020" :month="7" :day="3" :data="July.data"></one-month-grids>
    <message-box></message-box>
</div>
</template>

<script setup lang="ts">
import OneMonthGrids from '../../src/components/OneMonthGrids.vue'
import MessageBox from '../../src/components/MessageBox.vue';
const July = require('../data/July.json')
const sayHello = (payload) => {
    console.log(payload)
}
</script>

<style scoped lang="less">
</style>