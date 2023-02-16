<template>
    <div class="relative container mx-auto h-full">
        <!-- HEADER  -->
        <app-header></app-header>
        <!-- CONTENT  -->
        <router-view></router-view>
        <!-- FOOTER -->
        <app-footer></app-footer>
    </div>
</template>
<script setup>
    import { AppHeader, AppFooter } from '@/layouts'
</script>