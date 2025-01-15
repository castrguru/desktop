<template>
    <main class="w-screen h-screen bg-gradient-to-b from-stone-800 to-slate-800 flex flex-col justify-between overflow-x-hidden">
        <div class="flex">
            <Header />
        </div>

        <div class="flex-1 h-full overflow-y-scroll">
            <RouterView />
        </div>

        <div class="flex">
            <Footer />
        </div>
    </main>
</template>

<script setup lang="ts">
/* Import components. */
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>
