<template>
  <div :class="$style['app']">
    <NuxtPage :class="$style['page']" />
  </div>
</template>

<script setup lang="ts">


</script>

<style module lang="scss">
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #F9FAFE;
}
.page {
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  & > * {
    flex-grow: 1;
  }
}
</style>