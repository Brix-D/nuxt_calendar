<template>
    <span>
        <component
            :is="component"
            :class="classes"
            :aria-labelledby="name"
            focusable="false"
            role="img"
        />
    </span>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, AsyncComponentLoader } from 'vue';
import { PropsColors, useColor } from '@/composables/ui/useColor';

interface BSvgProps {
    fill?: PropsColors['color'];
    name: string;
    size?: number | string;
}

const props = withDefaults(defineProps<BSvgProps>(), {
    fill: 'primary',
    size: 20,
});

const classes = computed(() => {
    return ['icon', `icon-${props.name}`];
});

const { colorVariant } = useColor(() => props.fill);

const modules: Record<string, AsyncComponentLoader> = import.meta.glob('@/assets/icons/*.svg');
const component = computed(() => {
    const icon = modules[`/assets/icons/${props.name}.svg`];
    return defineAsyncComponent(icon);
});

const sizeIcon = computed(() => {
    return typeof props.size === 'number' ? `${props.size}px` : props.size;
});
</script>

<style scoped lang="scss">
:where(.icon) {
    display: inline-flex;
    width: v-bind('sizeIcon');
    height: v-bind('sizeIcon');
    fill: v-bind('colorVariant');
} //.icon
</style>
