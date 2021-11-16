<template>
    <div>
        <HeaderHome/>
        <section class="-top-20 relative flex flex-row justify-between items-center h-auto mt-20 p-20 bg-palette-cyan bg-opacity-20">
            <div class="absolute bottom-0 -left-48">
                <svg class="stroke-0 fill-current text-palette-ciel opacity-20 filter blur-3xl" height="800" width="800">
                    <circle cx="400" cy="400" r="400" />
                </svg>
            </div>
            <div class="flex flex-col p-10 space-y-10">
                <h1 class="text-8xl lg:text-5xl font-semibold">
                    The token for innovation in education. <br> Think crypto.
                </h1>
                <p class="text-3xl lg:text-xl xl:text-base">
                    L’EduToken est une crypto-monnaie indispensable à l’univers EduKarta qui a de surcroît pour vertu de financer la totalité du projet.
                </p>
                <div class="py-5 lg:py-3 border-2 border-palette-violet text-palette-violet text-center rounded-2xl hover:bg-palette-violet hover:text-white">
                    <a href="" class="w-full h-full text-3xl lg:text-base">
                        Whitepaper
                    </a>
                </div>
            </div>
            <div class="hidden lg:block fill-current text-palette-violet opacity-80">
                <svg height="500" width="500">
                    <circle cx="250" cy="250" r="240" stroke-width="3"/>
                </svg>
            </div>
        </section>
        <section class="flex flex-col">
            <div>
                <h2 class="text-center text-6xl lg:text-3xl font-semibold">
                    Who is EduKarta for?
                </h2>
                <p class="text-center text-3xl lg:text-base p-10">
                    EduKarta est un écosystème de services et programmes dévolus à l’éducation qui concerne enfants, étudiants, parents, professeurs, grands-parents, educational institutions du monde entier.
                </p>
            </div>
            <div class="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 px-32 pb-20">
                <div class="flex flex-col items-center lg:pt-3">
                    <IconsReader/>
                    <h3 class="text-center text-5xl lg:text-xl font-semibold m-5">
                        Universities
                    </h3>
                    <p class="text-center text-2xl lg:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div class="flex flex-col items-center">
                    <IconsBook/>
                    <h3 class="text-center text-5xl lg:text-xl font-semibold m-5">
                        Student
                    </h3>
                    <p class="text-center text-2xl lg:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div class="flex flex-col items-center lg:pt-3">
                    <IconsTeacher/>
                    <h3 class="text-center text-5xl lg:text-xl font-semibold m-5">
                        Teacher
                    </h3>
                    <p class="text-center text-2xl lg:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </section>
        <section id="#edukarta" class="relative flex flex-col space-y-10 px-10 h-auto items-center lg:flex-row lg:space-x-10 lg:px-20">
            <div class="absolute right-0 -top-32 ">
                <svg class="stroke-0 fill-current text-palette-cyan opacity-20 filter blur-3xl" height="600" width="600">
                    <circle cx="300" cy="300" r="300" />
                </svg>
            </div>
            <div class="absolute -left-16 -bottom-32 z-0">
                <svg class="stroke-0 fill-current text-palette-bleu opacity-20 filter blur-3xl" height="400" width="400">
                    <circle cx="200" cy="200" r="200" />
                </svg>
            </div>
            <div class="flex flex-col space-y-10 z-50 items-center lg:items-start">
                <h2 class="text-6xl lg:text-3xl font-semibold">
                    What is Edukarta?
                </h2>
                <img class="w-1/2 lg:w-auto" src="~assets/what_is_edukarta.png">
                <p class="text-3xl lg:text-base text-center lg:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button class="py-5 lg:py-3 bg-palette-violet rounded-lg text-white w-60 lg:w-40 text-3xl lg:text-xl xl:text-base">
                    EduKarta
                </button>
            </div>
            <div class="flex flex-col space-y-4">
                <div class="flex flex-row bg-white rounded-2xl py-10 px-16 lg:py-4 lg:px-0 filter drop-shadow-3xl items-center">
                    <div class="hidden lg:block p-6 ml-4 text-6xl text-palette-ciel font-light">1</div>
                    <div class="flex flex-col space-y-4 lg:px-4 lg:mr-4 lg:space-y-2">
                        <h3 class="text-4xl lg:text-xl font-semibold">La carte</h3>
                        <p class="text-3xl lg:text-base text-justify">
                            La carte est l’élément central qui permet de visualiser rapidement et efficacement les formations adaptées à l’étudiant. Grâce aux filtres adaptés, l’étudiant est en mesure de trouver les formations lui convenant tant sur le plan intellectuel que dans la zone géographique qu’il recherche.
                        </p>
                    </div>
                </div>
                <div class="flex flex-row bg-white rounded-2xl py-10 px-16 lg:py-4 lg:px-0 filter drop-shadow-3xl items-center">
                    <div class="hidden lg:block p-6 ml-4 text-6xl text-palette-ciel font-light">2</div>
                    <div class="flex flex-col space-y-4 lg:px-4 lg:mr-4 lg:space-y-2">
                        <h3 class="text-4xl lg:text-xl font-semibold">Governance</h3>
                        <p class="text-3xl lg:text-base text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div class="flex flex-row bg-white rounded-2xl py-10 px-16 lg:py-4 lg:px-0 filter drop-shadow-3xl items-center">
                    <div class="hidden lg:block p-6 ml-4 text-6xl text-palette-ciel font-light">3</div>
                    <div class="flex flex-col space-y-4 lg:px-4 lg:mr-4 lg:space-y-2">
                        <h3 class="text-4xl lg:text-xl font-semibold">Governance</h3>
                        <p class="text-3xl lg:text-base text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div class="flex flex-row bg-white rounded-2xl py-10 px-16 lg:py-4 lg:px-0 filter drop-shadow-3xl items-center">
                    <div class="hidden lg:block p-6 ml-4 text-6xl text-palette-ciel font-light">4</div>
                    <div class="flex flex-col space-y-4 lg:px-4 lg:mr-4 lg:space-y-2">
                        <h3 class="text-4xl lg:text-xl font-semibold">La carte</h3>
                        <p class="text-3xl lg:text-base text-justify">
                            La carte est l’élément central qui permet de visualiser rapidement et efficacement les formations adaptées à l’étudiant. Grâce aux filtres adaptés, l’étudiant est en mesure de trouver les formations lui convenant tant sur le plan intellectuel que dans la zone géographique qu’il recherche.
                        </p>
                    </div>
                </div>
                <div class="flex flex-row bg-white rounded-2xl py-10 px-16 lg:py-4 lg:px-0 filter drop-shadow-3xl items-center">
                    <div class="hidden lg:block p-6 ml-4 text-6xl text-palette-ciel font-light">5</div>
                    <div class="flex flex-col space-y-4 lg:px-4 lg:mr-4 lg:space-y-2">
                        <h3 class="text-4xl lg:text-xl font-semibold">Governance</h3>
                        <p class="text-3xl lg:text-base text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section id="roadmap" class="flex flex-col items-center space-y-10">
            <h2 class="text-6xl lg:text-3xl font-semibold mt-20">
                Roadmap
            </h2>
            <div class="flex flex-row items-center">
                <div class="flex flex-col space-y-6 m-10">
                    <div @click="a20" class="flex flex-row space-x-2 justify-between items-center">
                        <div class="w-14 h-14 text-3xl lg:w-10 lg:h-10 lg:text-2xl rounded-full bg-gradient-to-b from-palette-cyan to-palette-ciel opacity-80 text-white flex justify-center items-center filter drop-shadow-xl">
                            1
                        </div>
                        <div class="flex-grow text-center text-3xl lg:text-xl font-bold">2020</div>
                        <div>
                            <svg v-if="show_20" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#8083F3">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                            
                            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#8083F3">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                            </svg>
                        </div>
                    </div>
                    <div v-if="show_20" class="flex flex-col space-y-4 lg:space-y-2 ml-14">
                        <div class="flex flex-col p-6 lg:p-4 space-y-2 bg-white rounded-2xl  filter drop-shadow-3xl">
                            <h3 class="text-2xl lg:text-lg font-semibold">Q1</h3>
                            <p class="text-2xl lg:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="flex flex-col p-6 lg:p-4 space-y-2 bg-white rounded-2xl  filter drop-shadow-3xl">
                            <h3 class="text-2xl lg:text-lg font-semibold">Q2</h3>
                            <p class="text-2xl lg:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="flex flex-col p-6 lg:p-4 space-y-2 bg-white rounded-2xl  filter drop-shadow-3xl">
                            <h3 class="text-2xl lg:text-lg font-semibold">Q3</h3>
                            <p class="text-2xl lg:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="flex flex-col p-6 lg:p-4 space-y-2 bg-white rounded-2xl  filter drop-shadow-3xl">
                            <h3 class="text-2xl lg:text-lg font-semibold">Q4</h3>
                            <p class="text-2xl lg:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div @click="a21" class="flex flex-row space-x-2 justify-between items-center">
                        <div class="w-14 h-14 text-3xl lg:w-10 lg:h-10 lg:text-2xl rounded-full bg-gradient-to-l from-palette-ciel to-palette-cyan opacity-80 text-white flex justify-center items-center filter drop-shadow-xl">
                            2
                        </div>
                        <div class="flex-grow text-center text-3xl lg:text-xl font-bold">2021</div>
                        <div>
                            <svg v-if="show_21" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#8083F3">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#8083F3">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                            </svg>
                        </div>
                    </div>
                    <div v-if="show_21" class="flex flex-col space-y-4 lg:space-y-2 ml-14">
                        <div class="flex flex-col p-6 lg:p-4 space-y-2 bg-white rounded-2xl  filter drop-shadow-3xl">
                            <h3 class="text-2xl lg:text-lg font-semibold">Q1</h3>
                            <p class="text-2xl lg:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="flex flex-col p-6 lg:p-4 space-y-2 bg-white rounded-2xl  filter drop-shadow-3xl">
                            <h3 class="text-2xl lg:text-lg font-semibold">Q2</h3>
                            <p class="text-2xl lg:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="flex flex-col p-6 lg:p-4 space-y-2 bg-white rounded-2xl  filter drop-shadow-3xl">
                            <h3 class="text-2xl lg:text-lg font-semibold">Q3</h3>
                            <p class="text-2xl lg:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="flex flex-col p-6 lg:p-4 space-y-2 bg-white rounded-2xl  filter drop-shadow-3xl">
                            <h3 class="text-2xl lg:text-lg font-semibold">Q4</h3>
                            <p class="text-2xl lg:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div @click="a22" class="flex flex-row space-x-2 justify-between items-center">
                        <div class="w-14 h-14 text-3xl lg:w-10 lg:h-10 lg:text-2xl rounded-full bg-gradient-to-l from-palette-cyan to-palette-ciel opacity-80 text-white flex justify-center items-center filter drop-shadow-xl">
                            3
                        </div>
                        <div class="flex-grow text-center text-3xl lg:text-xl font-bold">2022</div>
                        <div>
                            <svg v-if="show_22" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#8083F3">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#8083F3">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                            </svg>
                        </div>
                    </div>
                    <div v-if="show_22" class="flex flex-col space-y-4 lg:space-y-2 ml-14">
                        <div class="flex flex-col p-6 lg:p-4 space-y-2 bg-white rounded-2xl  filter drop-shadow-3xl">
                            <h3 class="text-2xl lg:text-lg font-semibold">Q1</h3>
                            <p class="text-2xl lg:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="flex flex-col p-6 lg:p-4 space-y-2 bg-white rounded-2xl  filter drop-shadow-3xl">
                            <h3 class="text-2xl lg:text-lg font-semibold">Q2</h3>
                            <p class="text-2xl lg:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="flex flex-col p-6 lg:p-4 space-y-2 bg-white rounded-2xl  filter drop-shadow-3xl">
                            <h3 class="text-2xl lg:text-lg font-semibold">Q3</h3>
                            <p class="text-2xl lg:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="flex flex-col p-6 lg:p-4 space-y-2 bg-white rounded-2xl  filter drop-shadow-3xl">
                            <h3 class="text-2xl lg:text-lg font-semibold">Q4</h3>
                            <p class="text-2xl lg:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div @click="a23" class="flex flex-row space-x-2 justify-between items-center">
                        <div class="w-14 h-14 text-3xl lg:w-10 lg:h-10 lg:text-2xl rounded-full bg-gradient-to-b from-palette-ciel to-palette-cyan opacity-80 text-white flex justify-center items-center filter drop-shadow-xl">
                            4
                        </div>
                        <div class="flex-grow text-center text-3xl lg:text-xl font-bold">2023</div>
                        <div >
                            <svg v-if="show_23" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#8083F3">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#8083F3">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                            </svg>
                        </div>
                    </div>
                    <div v-if="show_23" class="flex flex-col space-y-4 lg:space-y-2 ml-14">
                        <div class="flex flex-col p-6 lg:p-4 space-y-2 bg-white rounded-2xl  filter drop-shadow-3xl">
                            <h3 class="text-2xl lg:text-lg font-semibold">Q1</h3>
                            <p class="text-2xl lg:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="flex flex-col p-6 lg:p-4 space-y-2 bg-white rounded-2xl  filter drop-shadow-3xl">
                            <h3 class="text-2xl lg:text-lg font-semibold">Q2</h3>
                            <p class="text-2xl lg:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="flex flex-col p-6 lg:p-4 space-y-2 bg-white rounded-2xl  filter drop-shadow-3xl">
                            <h3 class="text-2xl lg:text-lg font-semibold">Q3</h3>
                            <p class="text-2xl lg:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="flex flex-col p-6 lg:p-4 space-y-2 bg-white rounded-2xl  filter drop-shadow-3xl">
                            <h3 class="text-2xl lg:text-lg font-semibold">Q4</h3>
                            <p class="text-2xl lg:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="hidden lg:block lg:w-1/2">
                    <img class="" src="~assets/stair_man.png">
                </div>
            </div>
        </section>
        <FooterHome/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show_20: true,
            show_21: false,
            show_22: false,
            show_23: false,
        }
    },
    methods: {
        a20() {
            if (!this.show_20) {this.show_20 = !this.show_20} 
            this.show_21 = false
            this.show_22 = false
            this.show_23 = false
        },
        a21() {
            this.show_20 = false
            if (!this.show_21) {this.show_21 = !this.show_21}
            this.show_22 = false
            this.show_23 = false
        },
        a22() {
            this.show_20 = false
            this.show_21 = false
            if (!this.show_22) {this.show_22 = !this.show_22}
            this.show_23 = false
        },
        a23() {
            this.show_20 = false
            this.show_21 = false
            this.show_22 = false
            if (!this.show_23) {this.show_23 = !this.show_23}
        }
    }
}
</script>