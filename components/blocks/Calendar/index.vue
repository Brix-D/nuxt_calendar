<template>
    <div :class="$style['calendar'] ">
        <header :class="$style['calendar__header']">
            test
            {{ monday }} - {{ sunday }}
        </header>
        <div :class="$style['calendar__body']">
            <aside :class="$style['calendar__background']">
                <template v-for="(row, index) in rows" :key="index">
                    <div v-for="day in days" :key="day" :class="[
                        $style['calendar__background-cell'],
                        {
                            [$style['calendar__background-cell--top']]: index === 0,
                            [$style['calendar__background-cell--left']]: day === 1
                        }
                    ]">
                        <slot name="background-cell" />
                    </div>
                </template>
            </aside>
            <div :class="$style['calendar__content']">
                s
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" generic="T">
import { getStartEndOfWeek } from '@/utils/dates';

interface ICalendarRequiredEvent {
    start: string;
    duration: number;
}

type ICalendarEvent = ICalendarRequiredEvent & T;

type ICalendarRow = ICalendarEvent[];

interface Props {
    rows: ICalendarRow[];
    days?: number;
    now?: string | Date;
}

const props = withDefaults(defineProps<Props>(), {
    days: 7,
    now: new Date().toISOString(),
});

// background
const BACKGROUND_ROW_HEIGHT = 100;

const backgroundColumns = computed(() => {
    return `repeat(${props.days}, minmax(${BACKGROUND_ROW_HEIGHT}px, 1fr))`;
});

const backgroundRows = computed(() => {
    return `repeat(${props.rows.length}, minmax(${BACKGROUND_ROW_HEIGHT}px, 1fr))`;
});

// dates
const convertedDate = computed(() => {
    return props.now instanceof Date ? props.now : new Date(props.now);
});

const { monday, sunday } = getStartEndOfWeek(convertedDate.value);
</script>

<style module lang="scss">

.calendar {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;

    &__header {
        flex-shrink: 1;
        display: grid;
    }
    &__body {
        flex-grow: 1;
        overflow: auto;
        position: relative;
        display: flex;
        flex-direction: column;
    }
    &__background {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;

        display: grid;
        grid-template-columns: v-bind('backgroundColumns');
        // grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
        grid-template-rows: v-bind('backgroundRows');

        &-cell {
            border-top: 1px solid #C6CBD3;
            border-left: 1px solid #C6CBD3;



            &--top {
                border-top: none;
            }
            &--left {
                border-left: none;
            }
        }
    }
    &__content {
        position: relative;
        z-index: 2;
        flex-grow: 1;
    }
}
</style>