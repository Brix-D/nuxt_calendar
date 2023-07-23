<template>
  <div class="side-bar-item">
    <u-icon :name="img" :size="24" />
  </div>
</template>

<script setup lang="ts">
import UIcon from "@/components/ui/icons/UIcon/index.vue";

interface IPropsImage {
  img: string;
}

const props = withDefaults(defineProps<IPropsImage>(), {img: ''})
</script>

<style lang="scss" scoped>
@import './sidebarItem.scss';
</style>