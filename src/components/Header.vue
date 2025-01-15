<template>
    <header class="w-full bg-white">
        <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8 border-b border-fuchsia-700" aria-label="Global">
            <div class="flex lg:flex-1">
                <div class="py-3 flex justify-center items-center gap-4">
                    <RouterLink to="/" @click="mobileMenuOpen = false">
                        <img src="../assets/icon.svg" class="size-10" />
                    </RouterLink>

                    <h1 class="text-5xl font-thin text-fuchsia-800 tracking-wide uppercase">
                        CG Studio
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

            <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="px-6 flex items-center justify-between">
                    <!-- <div class="-m-1.5 p-1.5">
                        <span class="sr-only">Castr GÜRŲ Studio</span>
                        <img
                            class="h-8 w-auto"
                            src="../assets/icon.svg"
                            alt=""
                        />
                    </div> -->
                    <UserCircleIcon class="size-12 text-slate-300" />

                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 outline-none" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="size-12" aria-hidden="true" />
                    </button>
                </div>

                <section class="my-3 px-5 py-2 bg-fuchsia-50 border-y border-fuchsia-200">
                    <form class="mt-2 flex gap-3" @submit.prevent="greet">
                        <input 
                            class="w-2/3 px-3 py-1 outline-none border border-fuchsia-200 rounded tracking-widest text-fuchsia-900 font-mono" 
                            v-model="name" 
                            placeholder="Enter a name..." 
                        />
                        
                        <button type="submit" class="px-3 py-1 text-xl text-slate-200 bg-sky-700 shadow rounded hover:text-amber-200 hover:bg-sky-600">
                            Connect!
                        </button>
                    </form>

                    <p v-if="greetMsg?.length > 1" className="my-2 p-3 bg-rose-50 border border-rose-100 rounded text-xl/7 font-medium text-rose-500/80 tracking-tight text-pretty">
                        {{ greetMsg }}
                    </p>
                </section>

                <div class="px-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <RouterLink to="/frameify" @click="mobileMenuOpen = false" class="flex gap-3 items-center -mx-3 block rounded-lg px-3 py-2 text-2xl/7 font-semibold text-slate-600 tracking-wider hover:bg-fuchsia-50">
                                <RectangleGroupIcon class="size-8 text-fuchsia-700" />
                                Frameify
                            </RouterLink>

                            <RouterLink to="/elements" @click="mobileMenuOpen = false" class="flex gap-3 items-center -mx-3 block rounded-lg px-3 py-2 text-2xl/7 font-semibold text-slate-600 tracking-wider hover:bg-fuchsia-50">
                                <SparklesIcon class="size-8 text-fuchsia-700" />
                                Elements
                            </RouterLink>

                            <RouterLink to="/about" @click="mobileMenuOpen = false" class="flex gap-3 items-center -mx-3 block rounded-lg px-3 py-2 text-2xl/7 font-semibold text-slate-600 tracking-wider hover:bg-fuchsia-50">
                                <AcademicCapIcon class="size-8 text-fuchsia-700" />
                                GÜRŲS DAO
                            </RouterLink>
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
import { AcademicCapIcon, RectangleGroupIcon, SparklesIcon } from '@heroicons/vue/24/solid'
import { ArrowPathIcon, Bars3Icon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, UserCircleIcon, XMarkIcon } from '@heroicons/vue/24/outline'
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
