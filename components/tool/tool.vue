<template>
  <div class="tool">
    <img :src="img" alt="">
  </div>
</template>

<script setup lang="ts">
defineProps({
  img: String
})
</script>

<style scoped lang="scss">
@import './tool.scss';
</style>