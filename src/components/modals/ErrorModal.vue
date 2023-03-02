<template>
    <teleport to="body">
        <transition>
            <div v-show="useError.show" class="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-start justify-center items-center min-h-screen text-center" @click="backdropDismiss($event)" aria-controls="dismiss">
                <div class="bg-white rounded-md shadow-xl w-4/5 pt-4">
                    <header class="text-center font-bold text-xl">
                        <p>{{ useError.title }}</p>
                    </header>
                    <section class="text-center text-base p-4">
                        <p>{{ useError.message }}</p>
                    </section>
                    <footer class="flex justify-center items-center p-4 border-t-2 border-gray-100">
                        <a class="font-bold text-lg text-cyan-500" @click="buttonDismiss($event)" aria-label="dismiss">Dismiss</a>
                    </footer>
                </div>
            </div>
        </transition>
    </teleport>
  </template>

<script setup>
    import { useErrorStore } from '@/stores/error'
    
    const useError = useErrorStore();

    const backdropDismiss =(event)=>dismiss(event)
    const buttonDismiss =(event)=>dismiss(event)

    const dismiss =(event)=>{
        if(event.target.getAttribute('aria-label') === 'dismiss'){
            useError.resetError();
        }
    }
</script>
<style scoped>

</style>