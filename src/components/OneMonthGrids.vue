<template>
<div class="card_container" >
    <div class="grids_container" :style="{ width: containerWidth + 'px' }" ref="container">
        <div v-for="index in headEmptyDays" class="empty_grids"></div>
        <div v-for="index in totalDays" :data-key="index" :key="index" class="day_grids" :style="{ background: colorArr[data[index - 1].depth] }"></div>
    </div>
    <div class="month_tag">{{month}}月</div>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, computed , Ref, onUnmounted} from 'vue';
import dayjs from "dayjs"
import getTotalWeeksInMonth from '../units/getTotalWeeksInMonth'
import colorArr from '../theme/green'
type ComponentData = {
    depth: number,
    tipsData: string
}
const container: Ref<any> = ref(null)
const props = defineProps<{
    year: number,
    month: number,
    data: ComponentData[],
    day?: number,
}>()
const totalDays = computed(() => {
    return dayjs(`${props.year}-${props.month}`).daysInMonth()
})
const headEmptyDays = computed(() => {
    return dayjs(`${props.year}-${props.month}`).day()
})
const containerWidth = computed(() => {
    return getTotalWeeksInMonth(props.year, props.month) * 12
})
const emit = defineEmits(
    {
        hover(payload){
            return true
        }
    }
)
const mouseOverHandle = (event: MouseEvent): void => {
    if(event.target === event.currentTarget) return
    let target = event.target as HTMLElement
    console.log(target.dataset.key)
    emit("hover", {
        month: props.month,
        day: Number(target.dataset.key)
    })
}
onMounted(() => {
    const dom:HTMLElement = container.value
    dom.addEventListener("mouseover", mouseOverHandle)
})
onUnmounted(() => {
    const dom:HTMLElement = container.value
    dom.removeEventListener("mouseover", mouseOverHandle)
})
</script>

<style scoped lang="less">
@container_height: 84px;
.card_container{
    width: fit-content;
    display: inline-block;
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
        border: 1px solid white;
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