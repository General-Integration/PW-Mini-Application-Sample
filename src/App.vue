<template>
  <error-modal/>
  <component :is="isLayout"></component>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  import { ErrorModal } from '@/components'
  import { EVENTS } from '@/utils/constants'
  import { shallowRef, onMounted } from 'vue'
  import { useErrorStore } from './stores/error'
  import { callHandler } from 'web-bridge-gateway'
  import { DefaultLayout, ChildLayout } from '@/layouts'

  const router = useRouter();
  const useError = useErrorStore();
  const isLayout = shallowRef(null);

  // SWITCH APP LAYOUT
  router.beforeEach((to) => {
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
  })
</script>