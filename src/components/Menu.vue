<template>
    <div class="divide-y divide-gray-200 overflow-hidden bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
        <div
            v-for="screen in screens"
            :key="screen.title"
            class="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-500"
        >
            <div>
                <span :class="[screen.iconBackground, screen.iconForeground, 'border inline-flex p-1.5 ring-4 ring-white rounded']">
                    <component :is="screen.icon" class="size-8 opacity-70" aria-hidden="true" />
                </span>
            </div>

            <div class="mt-3">
                <h3 class="text-4xl font-semibold text-slate-600 tracking-tighter">
                    <RouterLink :to="screen.href" class="focus:outline-none">
                        <!-- Extend touch target to entire panel -->
                        <span class="absolute inset-0" aria-hidden="true" />
                        {{ screen.title }}
                    </RouterLink>
                </h3>

                <p class="mt-2 text-base text-slate-500 tracking-wide">
                    <span v-if="screen.description">
                        {{ screen.description }}
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
    BookOpenIcon,
    CheckBadgeIcon,
    ClockIcon,
    ReceiptRefundIcon,
    RectangleGroupIcon,
    RectangleStackIcon,
    RocketLaunchIcon,
    SparklesIcon,
    SwatchIcon,
    UserGroupIcon,
    UsersIcon,
} from '@heroicons/vue/24/outline'

const screens = [
    {
        title: 'Frameify',
        description: `Instantly package & deploy ANY publicly accessible website into a Farcaster frame.`,
        href: 'frameify',
        icon: RectangleGroupIcon,
        iconForeground: 'text-amber-700',
        iconBackground: 'bg-amber-50 border-amber-700/30',
    },
    {
        title: 'Frame Kits',
        description: `Start building your next project from one of our amazing templates.`,
        href: 'kits',
        icon: RectangleStackIcon,
        iconForeground: 'text-rose-700',
        iconBackground: 'bg-rose-50 border-rose-700/30',
    },
    {
        title: 'Deployments',
        href: 'deploy',
        icon: RocketLaunchIcon,
        iconForeground: 'text-sky-700',
        iconBackground: 'bg-sky-50 border-sky-700/30',
    },
    {
        title: 'Monetize',
        description: `Learn how to profit from your hard work.`,
        href: 'monetize',
        icon: BanknotesIcon,
        iconForeground: 'text-green-700',
        iconBackground: 'bg-green-50 border-green-700/30',
    },
    {
        title: 'Elements',
        description: `The perfect resource for builders in need of content to add to their frames.`,
        href: 'elements',
        icon: SparklesIcon,
        iconForeground: 'text-purple-700',
        iconBackground: 'bg-purple-50 border-purple-700/30',
    },
    {
        title: 'Components',
        description: `Browse through a library of curated scripts, already packaged for you to copy and drop-in to your dApps.`,
        href: 'components',
        icon: SwatchIcon,
        iconForeground: 'text-rose-700',
        iconBackground: 'bg-rose-50 border-rose-700/30',
    },
    {
        title: 'Concierge',
        description: `We're ready to help you with whatever your needs, regardless of how long it takes.`,
        href: 'concierge',
        icon: UserGroupIcon,
        iconForeground: 'text-sky-700',
        iconBackground: 'bg-sky-50 border-sky-700/30',
    },
    {
        title: 'User Guides',
        description: `Convenient access to some of the best walk-though tutorials, covering everything from apples to zebras.`,
        href: 'guides',
        icon: BookOpenIcon,
        iconForeground: 'text-fuchsia-700',
        iconBackground: 'bg-fuchsia-50 border-fuchsia-700/30',
    },
]
</script>
