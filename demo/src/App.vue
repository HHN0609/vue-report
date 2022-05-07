<template>
<month-list :data="data"></month-list>
</template>

<script setup lang="ts">
import MonthList from '../../src/components/MonthList.vue';
import mockData from '../data/mockData'
const data = mockData(2021, 12, 6)
console.log(data)
</script>

<style scoped lang="less">
</style>