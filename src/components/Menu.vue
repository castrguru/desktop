<template>
    <div class="divide-y divide-gray-200 overflow-hidden bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
        <div
            v-for="action in actions"
            :key="action.title"
            class="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-500"
        >
            <div>
                <span :class="[action.iconBackground, action.iconForeground, 'inline-flex p-3 ring-4 ring-white']">
                    <component :is="action.icon" class="size-6" aria-hidden="true" />
                </span>
            </div>

            <div class="mt-8">
                <h3 class="text-4xl font-semibold text-slate-600 tracking-tighter">
                    <RouterLink :to="action.href" class="focus:outline-none">
                        <!-- Extend touch target to entire panel -->
                        <span class="absolute inset-0" aria-hidden="true" />
                        {{ action.title }}
                    </RouterLink>
                </h3>

                <p class="mt-2 text-base text-slate-500 tracking-wide">
                    <span v-if="action.description">
                        {{ action.description }}
                    </span>
                    <span v-else>
                        Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                    </span>
                </p>
            </div>

            <span class="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
    AcademicCapIcon,
    BanknotesIcon,
    CheckBadgeIcon,
    ClockIcon,
    ReceiptRefundIcon,
    UsersIcon
} from '@heroicons/vue/24/outline'

const actions = [
    {
        title: 'Frameify',
        description: `Instantly package & deploy ANY publicly accessible website into a Farcaster frame.`,
        href: 'frameify',
        icon: ClockIcon,
        iconForeground: 'text-teal-700',
        iconBackground: 'bg-teal-50',
    },
    {
        title: 'Elements',
        description: `The perfect resource for builders in need of content to add to their frames.`,
        href: 'elements',
        icon: CheckBadgeIcon,
        iconForeground: 'text-purple-700',
        iconBackground: 'bg-purple-50',
    },
    {
        title: 'Concierge',
        description: `We're ready to help you with whatever your needs, regardless of how long it takes.`,
        href: 'home',
        icon: UsersIcon,
        iconForeground: 'text-sky-700',
        iconBackground: 'bg-sky-50',
    },
    {
        title: 'Monetize',
        href: 'home',
        icon: BanknotesIcon,
        iconForeground: 'text-yellow-700',
        iconBackground: 'bg-yellow-50',
    },
    {
        title: 'Concierge 2',
        description: `We're ready to help you with whatever your needs, regardless of how long it takes.`,
        href: 'home',
        icon: UsersIcon,
        iconForeground: 'text-sky-700',
        iconBackground: 'bg-sky-50',
    },
    {
        title: 'Monetize 2',
        href: 'home',
        icon: BanknotesIcon,
        iconForeground: 'text-yellow-700',
        iconBackground: 'bg-yellow-50',
    },
    {
        title: 'Components',
        description: `Browse through a library of curated scripts, already packaged for you to copy and drop-in to your dApps.`,
        href: 'home',
        icon: ReceiptRefundIcon,
        iconForeground: 'text-rose-700',
        iconBackground: 'bg-rose-50',
    },
    {
        title: 'User Guides',
        description: `Convenient access to some of the best walk-though tutorials, covering everything from apples to zebras.`,
        href: 'home',
        icon: AcademicCapIcon,
        iconForeground: 'text-fuchsia-700',
        iconBackground: 'bg-fuchsia-50',
    },
]
</script>
