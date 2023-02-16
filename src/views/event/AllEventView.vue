<template>
    <section class="p-4 mb-20">
        <h1 class="font-medium text-xl pt-4">{{ ALL_EVENT }}</h1>
        <div class="flex flex-col pt-6 space-y-4" v-if="EVENTS&&EVENTS.length">
            <router-link v-for="(event,key) in EVENTS" :key="key" :to="{name: ROUTE_NAME.eventDetail, params:{ handler: event.key}}" class="service-button">
                <span>{{ event.title }}</span>
            </router-link>
        </div>
    </section>
</template>
<script setup>
    import { onMounted } from 'vue';
    import { ALL_EVENT } from '@/utils/strings'
    import { ROUTE_NAME, EVENTS } from '@/utils/constants'
    import { resetNativeAppBarTitle } from '@/composable/composable'
    
    onMounted(()=>{ resetNativeAppBarTitle(); })
</script>
<style scoped>
    .service-button{
        @apply border-solid border-[1px] border-robin-egg-blue py-3 rounded-md text-robin-egg-blue text-center;
    }
</style>