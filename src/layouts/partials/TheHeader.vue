<template>
    <header class="h-auto shadow-sm">
      <div class="flex flex-col items-center pb-[22px] px-3 bg-robin-egg-blue w-full">
        <div>
          <img :src="logoSvg" class="w-16 h-16 mb-3" alt=""/>
        </div>
        <p class="font-semibold text-white text-xl text-center">{{ appName }}</p>
        <p class="font-thin text-white text-sm opacity-80">{{ EXAMPLE }}</p>
        <IconChevronDown class="w-2 h-3 text-white opacity-80" @click="closeApp"></IconChevronDown>
      </div>
    </header>
</template>
<script setup>
  import { computed } from 'vue';
  import { EXAMPLE } from '@/utils/strings'
  import logoSvg from '@/assets/images/logo.svg'
  import { IconChevronDown } from '@/components'
  import { callHandler } from 'web-bridge-gateway'

  const closeApp =()=>callHandler('closeApp')

  const appName = computed(()=>{
    return process.env.VUE_APP_NAME ?? '';
  })
</script>