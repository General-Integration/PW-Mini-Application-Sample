<template>
    <nav class="grid grid-cols-3 gap-4">
        <router-link :to="{ name: ROUTE_NAME.home }" class="flex justify-center w-full py-3">
            <div class="rounded-full text-dusty-gray-500 p-3">
                <IconHome class="w-6 h-6 font-black"></IconHome>
            </div>
        </router-link>
        <router-link :to="{ name: ROUTE_NAME.eventAll }" class="flex justify-center w-full py-3">
            <div class="rounded-full text-dusty-gray-500 p-3">
                <IconEventActive class="w-6 h-6" v-if="route.name == ROUTE_NAME.eventAll || route.name == ROUTE_NAME.eventDetail"></IconEventActive>
                <IconEvent class="w-6 h-6" v-else></IconEvent>
            </div>
        </router-link>
        <div class="flex justify-center w-full py-3">
            <div class="rounded-full text-dusty-gray-500 p-3">
                <IconInformationCircle class="w-6 h-6 font-black"></IconInformationCircle>
            </div>
        </div>
    </nav>
</template>
<script setup>
    import { useRoute } from 'vue-router';
    import { ROUTE_NAME } from '@/utils/constants'
    import { IconHome, IconInformationCircle, IconEvent, IconEventActive } from '@/components';
    const route = useRoute();
</script>
<style>
    .router-link-active>div{
        @apply active;
    }
</style>