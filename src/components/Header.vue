<template>
    <header class="w-full bg-white">
        <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8 border-b border-fuchsia-700" aria-label="Global">
            <div class="flex lg:flex-1">
                <div class="py-3 flex justify-center items-center gap-4">
                    <img src="../assets/icon.svg" class="size-10" />

                    <h1 class="text-4xl text-fuchsia-900 tracking-tighter">
                        Castr GÜRŲ Studio
                    </h1>
                </div>
            </div>

            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="size-12" aria-hidden="true" />
                </button>
            </div>
        </nav>

        <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-10" />

            <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <RouterLink to="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Castr GÜRŲ Studio</span>
                        <img
                            class="h-8 w-auto"
                            src="../assets/icon.svg"
                            alt=""
                        />
                    </RouterLink>

                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="size-12" aria-hidden="true" />
                    </button>
                </div>

                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <RouterLink to="/frameify" @click="mobileMenuOpen = false" class="flex gap-3 items-center -mx-3 block rounded-lg px-3 py-2 text-2xl/7 font-semibold text-slate-600 tracking-wider hover:bg-gray-50">
                                <RectangleGroupIcon class="size-8" />
                                Frameify
                            </RouterLink>

                            <RouterLink to="/" @click="mobileMenuOpen = false" class="flex gap-3 items-center -mx-3 block rounded-lg px-3 py-2 text-2xl/7 font-semibold text-slate-600 tracking-wider hover:bg-gray-50">
                                <SparklesIcon class="size-8" />
                                Elements
                            </RouterLink>

                            <RouterLink to="/about" @click="mobileMenuOpen = false" class="flex gap-3 items-center -mx-3 block rounded-lg px-3 py-2 text-2xl/7 font-semibold text-slate-600 tracking-wider hover:bg-gray-50">
                                <AcademicCapIcon class="size-8" />
                                GÜRŲS DAO
                            </RouterLink>
                        </div>

                        <div class="py-6">
                            <section>
                                <form class="row" @submit.prevent="greet">
                                    <input id="greet-input" v-model="name" placeholder="Enter a name..." />
                                    <button type="submit" class="text-2xl text-slate-800">Greet</button>
                                </form>

                                <p v-if="greetMsg?.length > 1" className="p-5 bg-rose-200 text-2xl font-bold text-sky-800 tracking-widest leading-9 text-pretty">
                                    {{ greetMsg }}
                                </p>
                            </section>

                            <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-2xl/7 font-semibold text-gray-900 hover:bg-gray-50">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import { AcademicCapIcon, ArrowPathIcon, Bars3Icon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, RectangleGroupIcon, SparklesIcon, SquaresPlusIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

import { invoke } from '@tauri-apps/api/core'

const greetMsg = ref(null)
const name = ref(null)

const greet = async () => {
    /* Validate (Tauri) invoke. */
    if (typeof invoke === 'undefined') {
        return alert('You CANNOT use Tauri functions here.')
    }

    if (name.value === '') {
        return greetMsg.value = ''
    }

    /* Call Rust (backend). */
    greetMsg.value = await invoke('greet', { name: name.value })
}

const mobileMenuOpen = ref(false)
</script>
