<template>
    <section class="p-4 mb-20">
        <card-service :data="SERVICES"></card-service>
    </section>
</template>
<script setup>
    import { onMounted } from 'vue';
    import { CardService } from '@/components'
    import { SERVICES } from '@/utils/constants'
    import { resetNativeAppBarTitle } from '@/composable/composable'
    onMounted(()=>{ 
        resetNativeAppBarTitle(); 
    })
</script>