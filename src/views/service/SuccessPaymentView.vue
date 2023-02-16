<template>
    <section class="relative w-ful flex flex-col items-center justify-center h-screen">
        <div>
            <img :src="successImg" class="-mt-32"/>
        </div>
        <div>
            <h1 class="font-bold text-xl text-black-900">{{ SUCCESS }}</h1>
        </div>
        <button class="pay-button fixed z-50 bottom-5 w-11/12 max-w-screen-2xl" @click="handleGoHome">
            <span>{{ GO_HOME }}</span>
        </button>
    </section>
</template>
<script setup>
    import { onMounted } from 'vue';
    import router from '@/router/index'
    import { ROUTE_NAME } from '@/utils/constants'
    import { SUCCESS, GO_HOME } from '@/utils/strings'
    import successImg from '@/assets/images/success.svg'
    import { resetNativeAppBarTitle } from '@/composable/composable'

    const handleGoHome =()=>{
        router.push({ name: ROUTE_NAME.home });
    }
    
    onMounted(()=>{ resetNativeAppBarTitle(); })
</script>
<style scoped>
    .pay-button{
        @apply bg-robin-egg-blue py-3.5 rounded-md text-white text-center;
    }
</style>