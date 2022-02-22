<template>
    <div class="shadow">
        <header class="transition h-20 flex flex-row justify-between items-center pr-10 pl-10 bg-palette-cyan bg-opacity-20">
            <a href="/" class="m-4 cursor-pointer">
                <LogoMainBlack/>
            </a>
            <div class="hidden sm:flex sm:flex-row sm:items-center sm:space-x-10 sm:font-medium">
                <NuxtLink to="#edukarta">What is EduKarta?</NuxtLink>
                <NuxtLink to="#roadmap">Road Map</NuxtLink>
                <NuxtLink to="#tokenomics">EduToken</NuxtLink>
                <button class="bg-palette-ciel text-white px-5 py-2 rounded-lg hover:bg-palette-bleu"> EduKarta </button>
            </div>
            <div class="-mr-2 flex items-center sm:hidden">
                <!-- Mobile menu button -->
                <button @click="open_menu" class="">
                <!-- Icon when menu is close. -->
                <svg v-if="!open" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <!-- Icon when menu is open. -->
                <svg v-else class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>
        </header>
        <!-- Mobile menu -->
        <div v-if="open" class="sm:hidden flex flex-col items-center space-y-4 p-4 font-medium bg-palette-cyan bg-opacity-20">
            <NuxtLink to="#edukarta">What is EduKarta?</NuxtLink>
            <NuxtLink to="#roadmap">Road Map</NuxtLink>
            <div> EduToken </div>
            <button class="bg-palette-ciel text-white px-5 py-2 rounded-lg hover:bg-palette-bleu"> EduKarta </button>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            open: false
        }
    },
    methods: {
        open_menu() {
            this.open = !this.open
        }
    }
}
</script>