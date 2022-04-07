<template>
    <div class="bg-network">
        <HeaderHome/>
        <section class="-top-20 relative flex flex-row justify-between items-center h-auto mt-20 p-8 lg:p-20 bg-white bg-opacity-20">
            <div class="absolute bottom-0 -left-48 z-0">
                <!--<svg class="hidden lg:block stroke-0 fill-current text-palette-ciel opacity-20 blur-3xl" height="800" width="800">
                    <circle cx="400" cy="400" r="400" />
                </svg>-->
            </div>
            <div class="flex flex-col p-2 lg:p-10 space-y-5 lg:space-y-10">
                <h1 class="text-5xl lg:text-5xl font-semibold">
                    {{ $t('headerSectionHome.title') }}
                </h1>
                <p class="text-xl lg:text-xl xl:text-base">
                    {{ $t('headerSectionHome.text')}}
                </p>
                <a href="https://whitepaper.edutoken.org" target="_blank" class="text-3xl lg:text-base z-50">
                    <div class="text-lg lg:ext-base text-center cursor-pointer py-3 lg:py-3 border-2 border-palette-violet text-palette-violet rounded-2xl hover:bg-palette-violet hover:text-white">
                        Whitepaper
                    </div>
                </a>
            </div>
            <div class="hidden md:block">
                <img src="~assets/mapmonde.gif">
            </div>
        </section>
        <section class="flex flex-col">
            <div>
                <h2 class="text-center text-xl sm:text-2xl lg:text-3xl font-semibold">
                    {{ $t('who.title') }}
                </h2>
                <p class="text-center text-sm lg:text-base p-4 lg:px-40 lg:py-5">
                    {{ $t('who.text') }}
                </p>
            </div>
            <div class="flex flex-col space-y-10 lg:grid lg:grid-cols-3 lg:justify-evenly lg:space-x-10 lg:space-y-0 py-5 px-20">
                <div class="flex flex-col items-center lg:pt-3">
                    <IconsReader/>
                    <h3 class="text-center text-xl lg:text-xl font-semibold m-5 ">
                        {{ $t('who.university.title') }}
                    </h3>
                    <p class="text-center text-sm lg:text-base">
                        {{ $t('who.university.text') }}
                    </p>
                </div>
                <div class="flex flex-col items-center">
                    <IconsBook/>
                    <h3 class="text-center text-xl lg:text-xl font-semibold m-5">
                        {{ $t('who.student.title') }}
                    </h3>
                    <p class="text-center text-sm lg:text-base">
                        {{ $t('who.student.text') }}
                    </p>
                </div>
                <div class="flex flex-col items-center lg:pt-3">
                    <IconsTeacher/>
                    <h3 class="text-center text-xl lg:text-xl font-semibold m-5">
                        {{ $t('who.teacher.title') }}
                    </h3>
                    <p class="text-center text-sm lg:text-base">
                        {{ $t('who.teacher.text') }}
                    </p>
                </div>
            </div>
        </section>
        <section class="flex flex-col items-center">
                <iframe class="aspect-video w-full sm:w-2/3 lg:w-2/3 z-50" src="https://www.youtube.com/embed/VOn80tYOA-o" title="YouTube video player" allowfullscreen></iframe>
        </section>
        <section id="edukarta" class="relative flex flex-col space-y-10 px-10 h-auto items-center lg:flex-row lg:justify-around lg:space-x-10 lg:px-20">
            <div class="absolute right-0 -top-32 z-0">
                <!--<svg class="stroke-0 fill-current text-palette-cyan opacity-20 blur-3xl" height="600" width="600">
                    <circle cx="300" cy="300" r="300" />
                </svg>-->
            </div>
            <div class="absolute -left-16 -bottom-32 z-0">
                <!--<svg class="stroke-0 fill-current text-palette-bleu opacity-20 blur-3xl" height="400" width="400">
                    <circle cx="200" cy="200" r="200" />
                </svg>-->
            </div>
            <div class="flex flex-col space-y-10 z-50 items-center lg:items-start lg:w-1/4">
                <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold">
                    {{ $t('what.title') }}
                </h2>
                <img class="w-1/2 lg:w-auto" src="~assets/prof.png">
                <p class="text-sm lg:text-base text-center lg:text-left">
                    {{ $t('what.text') }}
                </p>
                <a href="https://www.edukarta.com" target="_blank">
                    <div class="py-2 lg:py-3 bg-palette-violet rounded-lg text-white w-40 text-center lg:w-40 text-lg lg:text-xl">
                        EduKarta
                    </div>
                </a>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 max-w-4xl">
                <div class="bg-white rounded-2xl p-10 drop-shadow-3xl items-center w-72 h-60 lg:w-72 lg:h-72">
                    <div class="flex flex-col space-y-4 lg:space-y-2">
                        <h3 class="text-base lg:text-xl font-semibold">{{ $t('what.map.title') }}</h3>
                        <p class="text-sm lg:text-base text-justify">
                            {{ $t('what.map.text') }}
                        </p>
                    </div>
                </div>
                <div class="bg-white rounded-2xl p-10 drop-shadow-3xl items-center w-72 h-60 lg:w-72 lg:h-72">
                    <div class="flex flex-col space-y-4 lg:space-y-2">
                        <h3 class="text-base lg:text-xl font-semibold">{{ $t('what.profile.title') }}</h3>
                        <p class="text-sm lg:text-base text-justify">
                            {{ $t('what.profile.text') }}
                        </p>
                    </div>
                </div>
                <div class="bg-white rounded-2xl p-10 drop-shadow-3xl items-center w-72 h-60 lg:w-72 lg:h-72">
                    <div class="flex flex-col space-y-4 lg:space-y-2">
                        <h3 class="text-base lg:text-xl font-semibold">{{ $t('what.edk.title') }}</h3>
                        <p class="text-sm lg:text-base text-justify">
                            {{ $t('what.edk.text') }}
                        </p>
                    </div>
                </div>
                <div class="bg-white rounded-2xl p-10 drop-shadow-3xl items-center w-72 h-60 lg:w-72 lg:h-72">
                    <div class="flex flex-col space-y-4 lg:space-y-2">
                        <h3 class="text-base lg:text-xl font-semibold">{{ $t('what.factory.title') }}</h3>
                        <p class="text-sm lg:text-base text-justify">
                            {{ $t('what.factory.text') }}
                        </p>
                    </div>
                </div>
                <div class="bg-white rounded-2xl p-10 drop-shadow-3xl items-center w-72 h-60 lg:w-72 lg:h-72">
                    <div class="flex flex-col space-y-4 lg:space-y-2">
                        <h3 class="text-base lg:text-xl font-semibold">{{ $t('what.edukaps.title') }}</h3>
                        <p class="text-sm lg:text-base text-justify">
                            {{ $t('what.edukaps.text') }}
                        </p>
                    </div>
                </div>
                <div class="bg-white rounded-2xl p-10 drop-shadow-3xl items-center w-72 h-60 lg:w-72 lg:h-72">
                    <div class="flex flex-col space-y-4 lg:space-y-2">
                        <h3 class="text-base lg:text-xl font-semibold">{{ $t('what.ethiken.title') }}</h3>
                        <p class="text-sm lg:text-base text-justify">
                            {{ $t('what.ethiken.text') }}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section id="tokenomics" class="flex flex-col lg:flex-row lg:space-x-20 lg:px-20 lg:my-10 justify-center">
            <div class="relative flex flex-col space-y-10 lg:w-1/2 justify-center p-10">
                <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">
                    Tokenomics
                </h2>
                <p class="text-sm lg:text-base text-justify">
                    {{ $t('tokenomics.text') }}
                </p>
                <div class="absolute -left-16 -bottom-32 z-0">
                    <!--<svg class="stroke-0 fill-current text-palette-bleu opacity-10 blur-3xl" height="400" width="400">
                        <circle cx="200" cy="200" r="200" />
                    </svg>-->
                </div>
            </div>
            <div class="w-full sm:w-1/2 lg:w-1/2 p-5 lg:p-0">
                <img src="~assets/tokenomics.png" alt="">
            </div>
        </section>
        <section id="roadmap" class="flex flex-col items-center space-y-10">
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold mt-20">
                {{ $t('roadmap.title') }}
            </h2>
            <div class="flex flex-row justify-between items-center">
                <div class="flex flex-col space-y-6 m-10 lg:w-8/12">
                    <div v-for="year in years().years" :key="year.id">
                        <!--<div @click="yClick(year.id)" class="flex flex-row space-x-2 justify-between items-center">-->
                        <div class="flex flex-row space-x-2 justify-between items-center">
                            <div class="w-14 h-14 text-3xl lg:w-10 lg:h-10 lg:text-2xl rounded-full bg-gradient-to-b from-palette-ciel to-palette-cyan opacity-80 text-white flex justify-center items-center drop-shadow-xl">
                                {{ year.id + 1 }}
                            </div>
                            <div class="grow text-center text-3xl lg:text-xl font-bold">{{ year.name }}</div>
                            <div >
                                <!--<svg v-if="year.show" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#8083F3">-->
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#8083F3">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                                <!--<svg v-else class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#8083F3">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                                </svg>-->
                            </div>
                        </div>
                        <div v-if="true" class="m-2">
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-10 lg:ml-14">
                                <div v-for="quarter in year.quarters" :key="quarter.id">
                                    <div class="flex flex-col p-4 lg:p-4 space-y-2 bg-white rounded-2xl drop-shadow-3xl">
                                        <h3 class="text-lg lg:text-lg font-semibold">{{ quarter.id }}</h3>
                                        <p class="text-base lg:text-base">
                                            {{ quarter.content }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden lg:block lg:w-4/12">
                    <img class="" src="~assets/serveurs.png">
                </div>
            </div>
        </section>
        <section id="team" class="">
            <div class="relative max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
                <!--<div class="absolute right-32 -top-16 z-0">
                    <svg class="stroke-0 fill-current text-palette-cyan opacity-20  blur-3xl" height="600" width="600">
                        <circle cx="300" cy="300" r="300" />
                    </svg>
                </div>
                <div class="absolute left-64 bottom-16 z-0">
                    <svg class="stroke-0 fill-current text-palette-vert opacity-10  blur-3xl" height="600" width="600">
                        <circle cx="300" cy="300" r="300" />
                    </svg>
                </div>-->
                <div class="relative space-y-12 z-10">
                    <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                        <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold">{{ $t('team.title') }}</h2>
                        <p class="text-sm lg:text-base text-center">
                            {{ $t('team.text') }}
                        </p>
                    </div>
                    <ul role="list" class="mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-16 sm:space-y-0 lg:max-w-5xl">
                        <li v-for="person in people" :key="person.name">
                            <a v-if="person.name=='more'" href="https://forms.gle/YTXQtxFnbpRniWKS7" target="_blank">
                                <div class="cursor-pointer p-2 space-y-6 rounded-lg shadow-md hover:shadow-inner border-blue-edk">
                                    <img class="mx-auto h-40 w-40 rounded-full xl:w-48 xl:h-48" src="~/assets/education-token.jpg"/>
                                    <p class="text-blue-edk font-bold">
                                        {{ $t('team.career') }}
                                    </p>
                                </div>
                            </a>
                            <div v-else class="space-y-6">
                                <img class="shadow-md mx-auto h-40 w-40 rounded-full xl:w-48 xl:h-48" :src="require(`~/assets/${person.imageUrl}`)"/>
                                <div class="space-y-2">
                                    <div class="text-lg leading-6 font-medium space-y-1">
                                        <h3>{{ person.name }}</h3>
                                        <p class="text-palette-violet">{{ person.role }}</p>
                                    </div>
                                    <div class="flex justify-center space-x-5">
                                        <a v-if="person.linkedin" :href="person.linkedinUrl" target="_blank" class="text-blue-600 hover:text-blue-800">
                                            <span class="sr-only">LinkedIn</span>
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <FooterHome/>
    </div>
</template>

<script>
const people = [
  {
    name: 'Aldrick',
    role: 'CEO',
    imageUrl:
      'team/aldrick.jpeg',
    linkedin: true,
    linkedinUrl: 'https://www.linkedin.com/in/aldrick-allal-53458191/',
  },
  {
    name: 'Alexandra',
    role: 'Chief Educational Officer',
    imageUrl:
      'team/alexandra.jpeg',
    linkedin: false,
    linkedinUrl: '#',
  },
  {
    name: 'Ialgen',
    role: 'Chief Operating Officer',
    imageUrl:
      'team/ialgen.jpeg',
    linkedin: true,
    linkedinUrl: 'https://www.linkedin.com/in/ialgen-allal/',
  },
  {
    name: 'Sabrina',
    role: 'Chief Financial Officer',
    imageUrl:
      'team/sabrina.jpeg',
    linkedin: true,
    linkedinUrl: 'https://www.linkedin.com/in/sabrina-camelot-2243b234/',
  },
  {
    name: 'Istvan',
    role: 'Chief Legal Officer',
    imageUrl:
      'team/istvan.jpeg',
    linkedin: true,
    linkedinUrl: 'https://www.linkedin.com/in/istvan-a/',
  },
  {
    name: 'Ghenima',
    role: 'Data Analyst',
    imageUrl:
      'team/ghenima.jpeg',
    linkedin: true,
    linkedinUrl: 'https://www.linkedin.com/in/ghenima-chellouche-4266b4172',
  },
  {
    name: 'Iqbal',
    role: 'International Business Development',
    imageUrl:
      'team/iqbal.jpeg',
    linkedin: false,
    linkedinUrl: '#',
  },
  {
    name: 'more',
  },
]

//let yearsShow = [true, false, false]
//let yearId

export default {
    data() {
        return {
            people,
            //yearsShow,
        }
    },
    methods: {
        /*yClick(y_id) {
            for (let i = 0; i < yearsShow.length; i++) {
                if (i == y_id) { yearsShow[i] = true}
                else { yearsShow[i] = false }
            }
        },*/
        years(boolY) {
            return {
                years: [
                    {
                        id: 0,
                        name: '2021',
                        click: 'a21',
                        //show: boolY[0],
                        quarters: {
                            Q1: {id: 'Q1', content: this.$i18n.t('roadmap.years.y21.q1')},
                            Q2: {id: 'Q2', content: this.$i18n.t('roadmap.years.y21.q2')},
                            Q3: {id: 'Q3', content: this.$i18n.t('roadmap.years.y21.q3')},
                            Q4: {id: 'Q4', content: this.$i18n.t('roadmap.years.y21.q4')},
                        }
                    },
                    {
                        id: 1,
                        name: '2022',
                        click: 'a22',
                        //show: boolY[1],
                        quarters: {
                            Q1: {id: 'Q1', content: this.$i18n.t('roadmap.years.y22.q1')},
                            Q2: {id: 'Q2', content: this.$i18n.t('roadmap.years.y22.q2')},
                            Q3: {id: 'Q3', content: this.$i18n.t('roadmap.years.y22.q3')},
                            Q4: {id: 'Q4', content: this.$i18n.t('roadmap.years.y22.q4')},
                        }
                    },
                    {
                        id: 2,
                        name: '2023',
                        click: 'a23',
                        //show: boolY[2],
                        quarters: {
                            Q1: {id: 'Q1', content: this.$i18n.t('roadmap.years.y23.q1')},
                            Q2: {id: 'Q2', content: this.$i18n.t('roadmap.years.y23.q2')},
                            Q3: {id: 'Q3', content: this.$i18n.t('roadmap.years.y23.q3')},
                            Q4: {id: 'Q4', content: this.$i18n.t('roadmap.years.y23.q4')},
                        }
                    }
                ]
            }
        }
    }
    
}
</script>

<style scoped>

.bg-network {
    animation: pulse 10s linear infinite;
    background-image: url("~assets/networkCOMP.jpeg");
    background-repeat: repeat;
}

@keyframes pulse {
    0% {
        background-position: 0px 0px;
    }
    25% {
        background-position: 15px 15px;
    }
    50% {
        background-position: 0px 30px;
    }
    75% {
        background-position: -15px 15px;
    }
    100% {
        background-position: 0px 0px;    } 
    }
</style>


