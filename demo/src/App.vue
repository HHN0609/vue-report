<template>
<div>
    <one-month-grids :year="2020" :month="7" :day="3"></one-month-grids>
    <one-month-grids :year="2020" :month="8" :day="3"></one-month-grids>
    <one-month-grids :year="2020" :month="9" :day="3"></one-month-grids>
    <one-month-grids :year="2020" :month="10" :day="3"></one-month-grids>
    <one-month-grids :year="2020" :month="11" :day="3"></one-month-grids>
    <message-box></message-box>
</div>
</template>

<script setup lang="ts">
import OneMonthGrids from '../../src/components/OneMonthGrids.vue'
import MessageBox from '../../src/components/MessageBox.vue';
</script>

<style scoped lang="less">
</style>