<template>
    <section class="px-4 pb-4 pt-6 w-full">
        <div class="bg-dusty-gray p-5 rounded-md w-full mb-[18px] text-dusty-gray-500 text-base font-normal">{{ handlerKey ? `${handlerKey}{}` : '' }}</div>
        <div class="relative bg-dusty-gray p-5 rounded-md w-full text-dusty-gray-500 text-base font-normal overflow-x-auto">
            <skeleton-event-detail v-if="isLoading"></skeleton-event-detail>
            <pre v-else>{{responseData}}</pre>
        </div>
    </section>
</template>
<script setup>
    import _ from 'lodash'
    import { useRoute } from 'vue-router'
    import { onMounted, ref } from 'vue'
    import { EVENTS } from '@/utils/constants'
    import { useErrorStore } from '@/stores/error'
    import { callHandler } from 'web-bridge-gateway'
    import { SkeletonEventDetail } from '@/components'
    import { setNativeAppBarTitle } from '@/composable/composable'

    const route = useRoute();
    const isLoading = ref(false);
    const responseData = ref('');
    const useError = useErrorStore();
    const handlerKey = route.params.handler;

    const getItem = item =>{ return localStorage.getItem(item);}

    const localProfile = getItem('getProfile') ? JSON.parse(getItem('getProfile')) : '';

    const appBarTitle = handlerKey ? _.startCase(_.camelCase(handlerKey)) : '';

    const businessid = localProfile && localProfile?.data?.business_id || '';

    const requestHandler = async ()=>{
        if(EVENTS && EVENTS[0]['key'] && EVENTS[0]['key'] == handlerKey){
            responseData.value = localProfile;
        }else if(handlerKey){
            isLoading.value = true;
            await callHandler(`${handlerKey}`, {businessid: businessid}).then((res) => {
                if(res.error){
                    useError.setError({ show: true, ...res.error })
                }else{
                    responseData.value = res;
                }
                console.log(res)
            }).catch((error) => {
                useError.show = true;
                console.log(error);
            }).finally(()=>isLoading.value = false);
        }
    }

    onMounted(()=>{
        setNativeAppBarTitle(appBarTitle);
        requestHandler();
    })
</script>