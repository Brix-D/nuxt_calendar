<template>
  <div 
    class="task-item" 
    :style="{
      backgroundColor: task.background.color,
      boxShadow: active ? `0px 21px 40px 10px ${task.background.shadow}` : ''
    }"
    @click="switchActive"
  >
    <p>{{task.title}}</p>
    <div class="task-item__arrow">
      <u-icon 
        name="arrow" 
        @click="switchActive"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import UIcon from "@/components/ui/icons/UIcon/index.vue";
defineProps({
  task: Object
})

let active: Ref<boolean> = ref(false)
let activeArrow: Ref<boolean> = ref(false)

function switchActive() {
  active.value = !active.value
  activeArrow.value = !activeArrow.value
}
</script>

<style lang="scss">
@import './taskItem.scss';
</style>