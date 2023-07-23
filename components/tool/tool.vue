<template>
  <div class="tool">
    <u-icon :name="tool.img" :size="30" />
  </div>
</template>

<script setup lang="ts">
import { ITask } from '@/types/ITask'
import UIcon from "@/components/ui/icons/UIcon/index.vue";

interface IPropsTool {
  tool: ITask
}

const props = defineProps<IPropsTool>()
</script>

<style scoped lang="scss">
@import './tool.scss';
</style>