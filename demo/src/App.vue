<template>
<div class="app">
    <h1 class="title">DEMO</h1>
    <month-list :data="data" :theme-color="'blue'"></month-list>
</div>
</template>

<script setup lang="ts">
import MonthList from '../../src/components/MonthList.vue';
import mockData from '../../src/units/mockData'
const data = mockData(2021, 6, 12)
</script>

<style scoped lang="less">
.app{
    > .title{
        margin: 20px 0;
    }
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>