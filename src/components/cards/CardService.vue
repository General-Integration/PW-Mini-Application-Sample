<template>
    <div class="grid gap-3 grid-cols-2 w-full" v-if="data.length">
        <router-link v-for="(item,index) in data" :key="index" :to="{name: ROUTE_NAME.order, params:{ id: item.id }}" class="bg-white rounded-lg h-auto">
            <div class="h-[150px] rounded-t-lg">
                <img loading="lazy" :src="item.thumbnail_url" class="object-cover w-full h-full rounded-t-lg" alt=""/>
            </div>
            <div class="p-3">
                <h5 class="mb-1 text-lg text-black-900">{{ item.title ?? '' }}</h5>
                <h5 class="mb-2 text-lg font-bold text-black-900">{{ item.price ?? '' }}</h5>
            </div>
        </router-link>
    </div>
</template>
<script setup>
    import { defineProps, computed } from 'vue'
    import { ROUTE_NAME } from '@/utils/constants'
    const props = defineProps({
        data : {
            type: Array,
            required: true,
            default: () => []
        }
    });
    const data = computed(()=>{
        return props.data;
    });
</script>