<template>
  <div class="progress-bar">
    <div class="bar fill" :style="{
      width: value + '%',
      borderRadius: value === 100 ? '200px' : '200px 4px 4px 200px'
    }">
    <p>{{ value + '%'}}</p>
    </div>
    <div class="bar empty" :style="{
      width: 100 - value + '%'
    }">
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  value: number
}

const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
@import './progressBar.scss';
</style>