<script setup lang="ts">
import { ref } from 'vue'
import { invoke } from '@tauri-apps/api/core'

import Menu from './components/Menu.vue'

const greetMsg = ref('')
const name = ref('')

async function greet() {
    if (name.value === '') {
        greetMsg.value = ''
        return
    }

    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsg.value = await invoke('greet', { name: name.value })
}
</script>

<template>
    <main class="w-screen h-screen bg-gradient-to-b from-stone-800 to-slate-800">
        <h1 class="text-5xl text-slate-200 tracking-widest">
            Castr GÜRŲ Studio
        </h1>

        <p class="text-xl text-slate-200">
            Click on the <span className="text-3xl font-bold">GURU</span>, Vite, and Vue logos to learn more.
        </p>

        <form class="row" @submit.prevent="greet">
            <input id="greet-input" v-model="name" placeholder="Enter a name..." />
            <button type="submit" class="text-xl text-slate-200">Greet</button>
        </form>

        <p v-if="greetMsg.length > 1" className="p-5 bg-rose-200 text-2xl font-bold text-sky-800 tracking-widest leading-9 text-pretty">
            {{ greetMsg }}
        </p>

        <Menu />
    </main>
</template>
