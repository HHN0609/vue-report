<template>
<div class="app">
    <month-list :data="data"></month-list>
</div>
</template>

<script setup lang="ts">
import MonthList from '../../src/components/MonthList.vue';
import mockData from '../../src/units/mockData'
const data = mockData(2021, 6, 12)
console.log(data)
</script>

<style scoped lang="less">
.app{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>