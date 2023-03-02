<template>
    <div class="relative w-full h-full">
        <slot name="loading"></slot>
        <img ref="lazyImg" v-bind="$attrs" :data-src="props.src" class="max-w-full max-h-full"/>
    </div>
</template>
<script setup>
    import { defineProps, onMounted, ref } from 'vue'

    const lazyImg = ref('');

    const props = defineProps({
        src : {
            type: String,
            required: true
        }
    });

    onMounted(()=>{
        const toggleImgNSpinner =(imgObject, display)=>{
            if(imgObject){
                if(imgObject && imgObject.previousElementSibling){
                    imgObject.previousElementSibling.style.display = display;
                }
                imgObject.style.display = display == 'none' ? 'block' : display;
            }
        }
        if ('IntersectionObserver' in window && lazyImg.value) {
            const imgObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // IMAGE LOADING 
                        const image = entry.target;
                        image.src = image.dataset.src;
                        toggleImgNSpinner(image, 'block');
                        // IMAGE LOADED 
                        image.onload =()=>toggleImgNSpinner(image, 'none');
                        // IMAGE LOAD ERROR 
                        image.onerror =()=>console.log('error');
                        imgObserver.unobserve(image);
                    }
                });
            });
            imgObserver.observe(lazyImg.value);
        }else{
            // This won’t work if the browser doesn’t support IntersectionObserver. Although global support is around 92%, IE doesn’t support it at all. If you have traffic in the millions, 1–2% can still mean tens of thousands of users.
            toggleImgNSpinner(lazyImg.value, 'none');
        }
    })
</script>