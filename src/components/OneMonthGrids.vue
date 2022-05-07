<template>
<div class="card_container">
    <div class="grids_container" :style="{ width: containerWidth + 'px' }" ref="container">
        <div v-for="index in headEmptyDays" class="empty_grids"></div>
        <div v-for="index in totalDays" :data-key="index" class="day_grids" :style="{ background: colorArr[data[index - 1].depth] }"></div>
    </div>
    <div class="month_tag">{{month}}月</div>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, computed , Ref, onUnmounted} from 'vue';
import dayjs from "dayjs"
import getTotalWeeksInMonth from '../units/getTotalWeeksInMonth'
import colorArr from '../theme/green'
import { DescriptionTemplate } from '../types'

const container: Ref<any> = ref(null)
const props = defineProps<{
    year: number,
    month: number,
    data: DescriptionTemplate[]
}>()
const emit = defineEmits(["show", "out"])

// 这个月一共有几天
const totalDays = computed(() => {
    return dayjs(`${props.year}-${props.month}`).daysInMonth()
})

// 这个月1号所在的星期的星期天，到这个月1号，中间间隔的天数
const headEmptyDays = computed(() => {
    return dayjs(`${props.year}-${props.month}`).day()
})

// 根据这个月横跨了多少个星期来动态计算容器的宽度
const containerWidth = computed(() => {
    return getTotalWeeksInMonth(props.year, props.month) * 13
})

const mouseOverHandle = (event: MouseEvent): void => {
    if(event.target === event.currentTarget) return
    let target = event.target as HTMLElement
    emit("show", {
        year: props.year,
        month: props.month,
        day: Number(target.dataset.key),
        description: props.data[Number(target.dataset.key) - 1].description,
        target: target
    })
}
const mouseOutHandle = (event: MouseEvent): void => {
    if(event.target === event.currentTarget) return
    emit("out", {})
}
onMounted(() => {
    const dom:HTMLElement = container.value
    dom.addEventListener("mouseover", mouseOverHandle)
    dom.addEventListener('mouseout', mouseOutHandle)
})
onUnmounted(() => {
    const dom:HTMLElement = container.value
    dom.removeEventListener("mouseover", mouseOverHandle)
    dom.removeEventListener("mouseout", mouseOutHandle)
})
</script>

<style scoped lang="less">
@container_height: 91px;
.card_container{
    display: inline-block;
    width: fit-content;
}
.grids_container{
    overflow: hidden;
    // border: 1px solid rgb(168, 161, 161);
    height: @container_height;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    > .day_grids{
        box-sizing: border-box;
        width: 12px;
        height: 12px;
        background: rgb(215, 208, 208);
        border: 2px solid rgba(0, 0, 0, 0.418);
        margin: 0.5px;
        background-clip: content-box;
        border-radius: 30%;
    }
    > .empty_grids{
        box-sizing: border-box;
        width: calc(@container_height / 7);
        height: calc(@container_height / 7);
        visibility: hidden;
    }
}
.month_tag{
    color: rgb(143, 140, 140);
    text-align: center;
}
</style>