<template>
  <div class="task-item" :style="{backgroundColor: bgc}">
    <p>Research</p>
    <img class="task-item-arrow" src="/assets/img/arrow.svg" alt="">
  </div>
</template>

<script setup lang="ts">
defineProps({
  bgc: String
})
</script>

<style lang="scss" scoped>
@import './taskItem.scss';
</style>