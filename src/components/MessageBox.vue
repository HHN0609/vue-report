<template>
<div class="box" :style="{ top: y + 'px', left: x + 'px'}">
    <div class="triangle"></div>
    <div class="messageBox">
        <slot></slot>{{ msg }}
    </div>
</div>
</template>

<script setup lang="ts">
import { ref, Ref } from '@vue/reactivity';
import { watch, onBeforeMount} from 'vue';

const props = defineProps<{
    msg?: string | number,
    target?: HTMLElement
}>()
const messageBox: HTMLElement = document.querySelector(".messageBox")
console.log(messageBox)
let x: Ref<number> = ref(0)
let y: Ref<number> = ref(0)
watch( () => props.target, () => {
    console.log("change posititon")
    let rect: DOMRect = props.target.getBoundingClientRect()
    x.value = rect.x - 75 + rect.width / 2
    y.value = rect.y + rect.height
})


</script>

<style scoped lang="less">
.box{
    display: inline-block;
    overflow: hidden;
    position: absolute;
    z-index: 10;
    > .triangle{
        width: 0;
        height: 0;
        border-left: 5px solid rgba(0, 0, 0, 0);
        border-right: 5px solid rgba(0, 0, 0, 0);
        border-bottom: 10px solid #dcdcdc;
        margin: 0 auto;
    }
    > .messageBox {
        display: inline-block;
        min-width: 150px;
        min-height: 40px;
        border-radius: 10px;
        background:#dcdcdc;
        text-align: center;
        line-height: 40px;
    }    
}
</style>
