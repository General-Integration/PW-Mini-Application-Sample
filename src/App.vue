<template>
  <error-modal/>
  <component :is="isLayout"></component>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  import { ErrorModal } from '@/components'
  import { useErrorStore } from './stores/error'
  import { shallowRef, onMounted, ref } from 'vue'
  import { EVENTS, ROUTE_NAME } from '@/utils/constants'
  import { DefaultLayout, ChildLayout } from '@/layouts'
  import { callHandler, registerHandler } from 'web-bridge-gateway'

  const fromRoute = ref();
  const router = useRouter();
  const useError = useErrorStore();
  const isLayout = shallowRef();
  // SWITCH APP LAYOUT
  router.beforeEach((to, from) => {
    fromRoute.value = from.name;
    isLayout.value = to?.meta?.layout == 'Child' ? ChildLayout : DefaultLayout;
  })

  // GET BUSINESS ID GROM GET_FROFILE HANDLER 
  const handlerKey = EVENTS && EVENTS[0]['key'] ? EVENTS[0]['key'] : ''

  onMounted(async()=>{
    if(handlerKey){
      await callHandler(handlerKey).then((res) => {
        if(res.error){
          useError.setError({ show: true, ...res.error });
        }else{
          localStorage.setItem('getProfile', JSON.stringify(res));
        }
      }).catch((error) => {
        useError.show = true;
        console.log(error);
      });
    }

    registerHandler("closeApp", (data) => {
      console.log("closeApp:", data);
      callHandler('closeApp')
    });

  })

  window.addEventListener('popstate', () => {
    if(fromRoute.value === ROUTE_NAME.eventAll){
      router.push({ name: ROUTE_NAME.home });
    }else if(fromRoute.value === ROUTE_NAME.home){
      callHandler('closeApp')
    }
  });
</script>