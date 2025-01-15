<template>
    <div class="bg-white py-8">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                <div v-for="item in timeline" :key="item.name">
                    <time :datetime="item.dateTime" class="flex items-center gap-2 text-xl/6 font-semibold text-fuchsia-600 tracking-tight">
                        <CalendarDaysIcon class="size-6" />
                        <!-- <svg viewBox="0 0 4 4" class="mr-4 size-1 flex-none" aria-hidden="true">
                            <circle cx="2" cy="2" r="2" fill="currentColor" />
                        </svg> -->
                        {{ item.date }}
                        <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-slate-700/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true" />
                    </time>

                    <p class="mt-3 text-2xl/8 font-semibold tracking-wide text-slate-700">
                        {{ item.name }}
                    </p>

                    <p class="mt-1 text-lg/8 text-slate-600">
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CalendarDaysIcon } from '@heroicons/vue/24/outline'

const timeline = [
    {
        name: "Introduce GÜRŲS DAO",
        description: "Establish an all new brand for Castr GÜRŲ projects under the fully transparent umbrella of a decentralized autonomous organization (DAO).",
        date: "1st Quarter 2025",
        dateTime: "2025-01",
    },
    {
        name: "Secured $65m in funding",
        description: "Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.",
        date: "2nd Quarter 2025",
        dateTime: "2025-04",
    },
    {
        name: "Released beta",
        description: "Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.",
        date: "3rd Quarter 2025",
        dateTime: "2025-07",
    },
    {
        name: "Global launch of product",
        description: "Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.",
        date: "4th Quarter 2025",
        dateTime: "2025-10",
    },
]
</script>
