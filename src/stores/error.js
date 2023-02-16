import { ref } from 'vue'
import { defineStore } from 'pinia'
import { ERROR_TITLE, ERROR_MESSAGE } from '@/utils/strings'

export const useErrorStore = defineStore('error', () => {
    
    const show = ref(0)
    const title = ref(ERROR_TITLE)
    const message = ref(ERROR_MESSAGE) 

    const setError =(payload)=>hanlder(payload)
    const resetError =()=> hanlder()

    const hanlder =(payload)=>{
        show.value = payload && payload?.show || false
        title.value = payload && payload?.code || ERROR_TITLE
        message.value = payload && payload?.message || ERROR_MESSAGE
    }

    return {show, title, message, setError, resetError}
})