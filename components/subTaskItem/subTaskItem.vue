<template>
  <div class="sub-task-item" :class="{'active': task.completed}">
    <p>{{task.title}}</p>
    <div class="sub-task-item-completed">
      <u-icon name="check" v-show="task.completed" :size="13" fill="#fff" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ITask } from '@/types/ITask'
import UIcon from "@/components/ui/icons/UIcon/index.vue";

interface ISubTask {
  task: ITask
}

const props = defineProps<ISubTask>()
</script>

<style lang="scss" scoped>
@import './subTaskItem.scss';
</style>