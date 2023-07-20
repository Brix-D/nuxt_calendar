<template>
    <div>
        <!-- test
        <u-icon name="logo" :size="40"/> -->
        <Calendar :rows="rows" >
        </Calendar>
    </div>
</template>

<script setup lang="ts">
import UIcon  from '@/components/ui/icons/UIcon/index.vue';
import Calendar from '@/components/blocks/Calendar/index.vue';

interface IEventItem {
    start: string;
    duration: number;
    color: string;
}

const rows = ref([]) as Ref<IEventItem[][]>;
const loading = ref(true) as Ref<boolean>;


const getData = async () => {
    loading.value = true;
    // здесь будет запрос с бекенда
    rows.value = [
        [
            {
                start: '2023-07-20T22:15:00',
                duration: 24 * 60,
                color: '#1e45aa',
            }
        ],
        [
            {
                start: '2023-07-19T02:15:00',
                duration: 48 * 60,
                color: '#1345aa',
            }
        ],
    ];
    loading.value = false;
};

onMounted(() => {
    getData();
});

</script>

<style module lang="scss">
</style>