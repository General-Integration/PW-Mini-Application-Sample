<template>
    <section class="relative px-4 pb-24 pt-6 w-ful">
        <h1 class="font-medium text-xl mb-6">{{ REVIEW_ORDER }}</h1>
        <img :src="item.thumbnailUrl ?? ''" class="w-full rounded-t-md"/>
        <div class="bg-dusty-gray-900 p-2 rounded-b-md w-full">
            <span>{{ title }}</span>
        </div>
        <p class="pb-2 pt-5">{{ SUMMARY }}</p>
        <table class="w-full">
            <tr class="border-dashed border-b-2 border-dusty-gray-100">
                <td class="py-2 text-dusty-gray-100">{{ SUB_TOTAL }}</td>
                <td class="text-right py-2 text-dusty-gray-100">{{ price }}</td>
            </tr>
            <tr>
                <td class="py-2 text-xl text-dusty-gray-100 font-medium" v-text="TOTAL"></td>
                <td class="text-right text-dusty-gray-500 py-2text-xl font-bold" v-text="price"></td>
            </tr>
        </table>
        <button class="pay-button fixed flex justify-center z-50 bottom-5 w-11/12 max-w-screen-2xl py-5" @click="doPayment" :disabled="isDisabled" :class="isDisabled ?? 'bg-opacity-50'">
            <span v-if="!isDisabled">{{ PAY }} {{ price }}</span>
            <icon-spinner v-else class="w-6 h-6"></icon-spinner>
        </button>
    </section>
</template>
<script setup>
    import md5 from 'md5'
    import _ from 'lodash'
    import router from '@/router'
    import { onMounted, ref } from 'vue'
    import { useRoute } from 'vue-router'
    import { IconSpinner } from '@/components'
    import { useErrorStore } from '@/stores/error'
    import { setNativeAppBarTitle } from '@/composable/composable'
    import { registerHandler, callHandler } from 'web-bridge-gateway'
    import { SERVICES, ROUTE_NAME, DEFAULT_CURRENCY } from '@/utils/constants'
    import { PAY, TOTAL, SUMMARY, SUB_TOTAL, REVIEW_ORDER } from '@/utils/strings'

    const route = useRoute();

    const isDisabled = ref(false);
    const useError = useErrorStore();

    const item = _.find(SERVICES, obj => obj.id == route.params.id);
    const title = item && item?.title || '';
    const price = item && item?.price || '';

    const payload  = {
        account: md5(new Date()),
        amount: item.price_original ?? 0,
        currency: item.currency ?? DEFAULT_CURRENCY
    }
    const doPayment =()=>{
        isDisabled.value = true;
        callHandler("doPayment",payload ).then((res) => {
            if(res.error){
                useError.setError({ show: true, ...res.error });
            }
            console.log(res)
        }).catch((error) => {
            console.log(error);
            useError.show = true;
        });
        setTimeout(()=>{
            isDisabled.value = false;
        },3000)
    }

    onMounted(()=>{
        setNativeAppBarTitle(title);
        registerHandler("getStatus", (data) => {
            isDisabled.value = false;
            console.log("data from native:", data);
            router.push({name: ROUTE_NAME.success});
        });
    })
</script>
<style scoped>
    .pay-button{
        @apply bg-robin-egg-blue py-3.5 rounded-md text-white text-center;
    }
</style>