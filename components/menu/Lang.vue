<template>
    <div class='inline relative leading-5 text-gray-800 box-border'>
        <div class='inline relative box-border'>
            <div @click='show = !show' v-click-outside='hide'
                :class='[(bg ? "text-gray-50":"text-gray-900"), (show ? "bg-gray-200 text-gray-900":""),"hover:bg-blue-100 rounded-full outline-none inline-block overflow-visible relative p-3 m-0 text-sm font-semibold leading-4 no-underline bg-transparent border-0 appearance-none cursor-pointer select-auto box-border whitespace-no-wrap"]'>

                    <div class='flex relative items-center h-4 box-border'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="block w-5 h-5 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                    </div>
                
            </div>
        </div>

        <transition v-if='show' enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <div  class="mb-14 mt-1 absolute z-50 transform -translate-x-3/4 px-2 w-60 sm:px-0">
                <div class="w-full rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="relative flex flex-col bg-white px-3 py-4 sm:p-2">
                        <a class="p-2 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                        href="#"
                        v-for="locale in availableLocales"
                        :key="locale.code"
                        @click='show = false'
                        @click.prevent.stop="$i18n.setLocale(locale.code)">
                            <div class="flex items-center justify-center h-10 w-10 text-4xl sm:h-12 sm:w-12">
                                {{ locale.emoji }}
                            </div>
                            <div class="ml-4">
                                <p class="text-base font-medium text-gray-900">
                                {{ locale.name }}
                                </p>
                                <p class="mt-1 text-sm text-gray-500">
                                {{ locale.country }}
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Selection',
    data(){
        return {
        show: false,
        }
    },
    props: {
        bg: false,
    },
    computed: {
        availableLocales () {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        }
    },
    methods: {
        hide() {
        this.show = false
        }
    }
}
</script>
