<template>
    <div class="bg-network">
        <HeaderHome/>
        <section class="-top-20 relative flex flex-row justify-between items-center h-auto mt-20 p-20 bg-white bg-opacity-20">
            <div class="absolute bottom-0 -left-48">
                <svg class="hidden lg:block stroke-0 fill-current text-palette-ciel opacity-20 blur-3xl" height="800" width="800">
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
                <a href="https://edu-karta.gitbook.io/edukarta/" class="text-3xl lg:text-base">
                    <div class="cursor-pointer py-5 lg:py-3 border-2 border-palette-violet text-palette-violet text-center rounded-2xl hover:bg-palette-violet hover:text-white">
                        Whitepaper
                    </div>
                </a>
            </div>
            <div class="hidden lg:block">
                <img src="~assets/mapmonde.gif">
            </div>
            <!--
            <div class="hidden lg:block fill-current text-palette-violet opacity-80">
                <svg height="500" width="500">
                    <circle cx="250" cy="250" r="240" stroke-width="3"/>
                </svg>
            </div>
            -->
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
            <div class="flex flex-col space-y-10 lg:flex-row lg:justify-around lg:space-x-10 lg:space-y-0 px-32 pb-10">
                <div class="flex flex-col items-center lg:pt-3">
                    <IconsReader/>
                    <h3 class="text-center text-5xl lg:text-xl font-semibold m-5 ">
                        Universities
                    </h3>
                    <p class="text-center text-2xl lg:text-base">
                        Chaque institution educative a sa place sur EduKarta. Petite ou grande, le référencement est gratuit et automatique. Sur EduKarta, sont recensées plus de 20 millions d'institutions dans le monde.
                    </p>
                </div>
                <div class="flex flex-col items-center">
                    <IconsBook/>
                    <h3 class="text-center text-5xl lg:text-xl font-semibold m-5">
                        Student
                    </h3>
                    <p class="text-center text-2xl lg:text-base">
                        Les étudiants et leurs parents ont accès à toutes les institutions mondiales. La création de leur compte personnel est gratuite. Utilisez EduKarta pour accéder aux informations indispensables à une orientation claire et efficace.
                    </p>
                </div>
                <div class="flex flex-col items-center lg:pt-3">
                    <IconsTeacher/>
                    <h3 class="text-center text-5xl lg:text-xl font-semibold m-5">
                        Teacher
                    </h3>
                    <p class="text-center text-2xl lg:text-base">
                        Avec EduKarta, les enseignants ont enfin la place qu'ils méritent dans l'écosystème éducatif international. Ce sont eux qui créent les cours et permettent aux étudiants de découvrir, aimer, apprendre, se former et devenir des pros.
                    </p>
                </div>
            </div>
        </section>
        <section class="flex flex-col items-center">
                <iframe class="aspect-video w-2/3 z-50" src="https://www.youtube.com/embed/VOn80tYOA-o" title="YouTube video player" allowfullscreen></iframe>
        </section>
        <section id="edukarta" class="relative flex flex-col space-y-10 px-10 h-auto items-center lg:flex-row lg:justify-around lg:space-x-10 lg:px-20">
            <div class="absolute right-0 -top-32 z-0">
                <svg class="stroke-0 fill-current text-palette-cyan opacity-20 blur-3xl" height="600" width="600">
                    <circle cx="300" cy="300" r="300" />
                </svg>
            </div>
            <div class="absolute -left-16 -bottom-32 z-0">
                <svg class="stroke-0 fill-current text-palette-bleu opacity-20 blur-3xl" height="400" width="400">
                    <circle cx="200" cy="200" r="200" />
                </svg>
            </div>
            <div class="flex flex-col space-y-10 z-50 items-center lg:items-start lg:w-1/4">
                <h2 class="text-6xl lg:text-3xl font-semibold">
                    What is Edukarta?
                </h2>
                <img class="w-1/2 lg:w-auto" src="~assets/prof.png">
                <p class="text-3xl lg:text-base text-center lg:text-left">
                    EduKarta est une plateforme qui rassemble les connaissances et leurs architectes dans un monde électronique sécurisé et dynamique.
                </p>
                <a href="https://edu-karta.gitbook.io/edukarta/">
                    <div class="py-5 lg:py-3 bg-palette-violet rounded-lg text-white w-60 text-center lg:w-40 text-3xl lg:text-xl xl:text-base">
                        EduKarta
                    </div>
                </a>
            </div>
            <div class="grid grid-cols-3 gap-10 max-w-4xl">
                <div class="flex flex-row bg-white rounded-2xl py-10 px-16 lg:py-4 lg:px-0 drop-shadow-3xl items-center w-72 h-72">
                    <div class="flex flex-col space-y-4 lg:m-12 lg:space-y-2">
                        <h3 class="text-4xl lg:text-xl font-semibold">La carte</h3>
                        <p class="text-3xl lg:text-base text-justify">
                            La carte est l’élément central qui permet de visualiser rapidement et efficacement les formations adaptées à l’étudiant.
                        </p>
                    </div>
                </div>
                <div class="flex flex-row bg-white rounded-2xl py-10 px-16 lg:py-4 lg:px-0 drop-shadow-3xl items-center w-72 h-72">
                    <div class="flex flex-col space-y-4 lg:m-12 lg:space-y-2">
                        <h3 class="text-4xl lg:text-xl font-semibold">L'EduToken</h3>
                        <p class="text-3xl lg:text-base text-justify">
                            Grâce à l’EduToken (EDK), EduKarta garantit toutes les transactions, sécurise votre argent et vous permet d’en gagner.
                        </p>
                    </div>
                </div>
                <div class="flex flex-row bg-white rounded-2xl py-10 px-16 lg:py-4 lg:px-0 drop-shadow-3xl items-center w-72 h-72">
                    <div class="flex flex-col space-y-4 lg:m-12 lg:space-y-2">
                        <h3 class="text-4xl lg:text-xl font-semibold">La NFT Factory</h3>
                        <p class="text-3xl lg:text-base text-justify">
                            EduKarta propose d’ailleurs une NFT Factory qui sélectionne les meilleurs enseignements et les transforme en NFT.
                        </p>
                    </div>
                </div>
                <div class="flex flex-row bg-white rounded-2xl py-10 px-16 lg:py-4 lg:px-0 drop-shadow-3xl items-center w-72 h-72">
                    <div class="flex flex-col space-y-4 lg:m-12 lg:space-y-2">
                        <h3 class="text-4xl lg:text-xl font-semibold">EduKaps</h3>
                        <p class="text-3xl lg:text-base text-justify">
                            Des capsules de connaissances universelles seront envoyées comme des graines dans tous les endroits de la planète ou l'éducation est en souffrance/carence.
                        </p>
                    </div>
                </div>
                <div class="flex flex-row bg-white rounded-2xl py-10 px-16 lg:py-4 lg:px-0 drop-shadow-3xl items-center w-72 h-72">
                    <div class="flex flex-col space-y-4 lg:m-12 lg:space-y-2">
                        <h3 class="text-4xl lg:text-xl font-semibold">Le fonds Ethiken</h3>
                        <p class="text-3xl lg:text-base text-justify">
                            Le fonds Ethiken dont l’objet est de garantir le cours de l’EDK et protéger l’épargne des investisseurs non-spéculateurs
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section id="tokenomics" class="flex flex-row space-x-20 px-20 my-10">
            <div class="relative flex flex-col space-y-10 w-1/2 justify-center p-10">
                <h2 class="text-6xl lg:text-3xl font-semibold text-center">
                    Tokenomics
                </h2>
                <p class="text-3xl lg:text-base text-justify">
                    |Details sur le lancement du token.|
                </p>
                <div class="absolute -left-16 -bottom-32 z-0">
                    <svg class="stroke-0 fill-current text-palette-bleu opacity-10 blur-3xl" height="400" width="400">
                        <circle cx="200" cy="200" r="200" />
                    </svg>
                </div>
            </div>
            <div class="hidden lg:block lg:w-1/2">
                <img src="~assets/tokenomics.png" alt="">
            </div>
        </section>
        <section id="roadmap" class="flex flex-col items-center space-y-10">
            <h2 class="text-6xl lg:text-3xl font-semibold mt-20">
                Roadmap
            </h2>
            <div class="flex flex-row justify-between items-center">
                <div class="flex flex-col space-y-6 m-10 lg:w-8/12">
                    <div v-for="year in years" :key="year.id">
                        <div @click="yClick(year.id)" class="flex flex-row space-x-2 justify-between items-center">
                            <div class="w-14 h-14 text-3xl lg:w-10 lg:h-10 lg:text-2xl rounded-full bg-gradient-to-b from-palette-ciel to-palette-cyan opacity-80 text-white flex justify-center items-center drop-shadow-xl">
                                {{ year.id }}
                            </div>
                            <div class="grow text-center text-3xl lg:text-xl font-bold">{{ year.name }}</div>
                            <div >
                                <svg v-if="year.show" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#8083F3">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                                <svg v-else class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="#8083F3">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                                </svg>
                            </div>
                        </div>
                        <div v-if="year.show">
                            <div class="grid grid-cols-2 gap-10 ml-14">
                                <div v-for="quarter in year.quarters" :key="quarter.id">
                                    <div class="flex flex-col p-6 lg:p-4 space-y-2 bg-white rounded-2xl drop-shadow-3xl">
                                        <h3 class="text-2xl lg:text-lg font-semibold">{{ quarter.id }}</h3>
                                        <p class="text-2xl lg:text-base">
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
        <section class="">
            <div class="relative max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
                <div class="absolute right-32 -top-16 z-0">
                    <svg class="stroke-0 fill-current text-palette-cyan opacity-20  blur-3xl" height="600" width="600">
                        <circle cx="300" cy="300" r="300" />
                    </svg>
                </div>
                <div class="absolute left-64 bottom-16 z-0">
                    <svg class="stroke-0 fill-current text-palette-vert opacity-10  blur-3xl" height="600" width="600">
                        <circle cx="300" cy="300" r="300" />
                    </svg>
                </div>
                <div class="relative space-y-12 z-10">
                    <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                        <h2 class="text-6xl lg:text-3xl font-semibold">Meet our team</h2>
                        <p class="text-3xl lg:text-base text-center">Contrairement à la plupart des projets crypto/blockchain composés d'équipes jeunes, EduKarta est créé par la Direction Générale de Diderot Education dont le plus jeune des membres a rejoint le groupe il y a 15 ans !</p>
                    </div>
                    <ul role="list" class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-4 lg:max-w-5xl">
                        <li v-for="person in people" :key="person.name">
                            <div v-if="person.name=='more'" class="cursor-pointer p-2 space-y-6 rounded-lg shadow-md hover:shadow-inner border-blue-edk" onclick="window.location.href='#';">
                                <img class="mx-auto h-40 w-40 rounded-full xl:w-48 xl:h-48" src="~/assets/education-token.jpg"/>
                                <p class="text-blue-edk font-bold">
                                    Learn more about our extended team!
                                </p>
                            </div>
                            <div v-else class="space-y-6">
                                <img class="shadow-md mx-auto h-40 w-40 rounded-full xl:w-48 xl:h-48" :src="require(`~/assets/${person.imageUrl}`)"/>
                                <div class="space-y-2">
                                    <div class="text-lg leading-6 font-medium space-y-1">
                                        <h3>{{ person.name }}</h3>
                                        <p class="text-palette-violet">{{ person.role }}</p>
                                    </div>
                                    <div class="flex justify-center space-x-5">
                                        <a :href="person.linkedinUrl" class="text-blue-600 hover:text-blue-800">
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
    role: 'President',
    imageUrl:
      'team/aldrick.jpeg',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/aldrick-allal-53458191/',
  },
  {
    name: 'Ialgen',
    role: 'Chief Operating Officer',
    imageUrl:
      'team/ialgen.jpeg',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/ialgen-allal/',
  },
  {
    name: 'Istvan',
    role: 'Chief Marketing Officer',
    imageUrl:
      'team/istvan.jpeg',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/istvan-a/',
  },
  {
    name: 'Iqbal',
    role: 'Chief Data Officer',
    imageUrl:
      'team/ialgen.jpeg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Alexandra',
    role: 'Chief Educational Officer',
    imageUrl:
      'team/alexandra.png',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Sabrina',
    role: 'Chief Financial Officer',
    imageUrl:
      'team/sabrina.jpeg',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/sabrina-camelot-2243b234/',
  },
  {
    name: 'Jasmina',
    role: 'Chief Legal Officer',
    imageUrl:
      'team/ialgen.jpeg',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/jasmina-bezdrob-5b474880/',
  },
  {
    name: 'more',
  },
]
let years = [
    {
        id: 1,
        name: '2021',
        click: 'a21',
        show: true,
        quarters: {
            Q1: {id: 'Q1', content: 'Conception, benchmark et inventaires.'},
            Q2: {id: 'Q2', content: 'Recrutement, ingénierie pédagogique et tests.'},
            Q3: {id: 'Q3', content: 'Expérimentations techniques et tests de faisabilité.'},
            Q4: {id: 'Q4', content: 'Architecture et développement d’edukarta.com et edutoken.org'},
        },
    },
    {
        id: 2,
        name: '2022',
        click: 'a22',
        show: false,
        quarters: {
            Q1: {id: 'Q1', content: 'Communication et first sales'},
            Q2: {id: 'Q2', content: 'Lancement de la Crypto EduToken by EduKarta'},
            Q3: {id: 'Q3', content: 'Mise en ligne de la V1 des sites internet'},
            Q4: {id: 'Q4', content: 'MVP (Minimum Viable Product) avec inscription'},
        },
    },
    {
        id: 3,
        name: '2023',
        click: 'a23',
        show: false,
        quarters: {
            Q1: {id: 'Q1', content: 'Mise en ligne de la V2 des sites internet'},
            Q2: {id: 'Q2', content: 'Campagnes Students & Institutions'},
            Q3: {id: 'Q3', content: 'Campagnes teachers'},
            Q4: {id: 'Q4', content: 'Campagnes entreprises'},
        },
    }
]

export default {
    data() {
        return {
            people,
            years
        }
    },
    methods: {
        yClick(y_id) {
            for (let i = 0; i < years.length; i++) {
                if ((i+1) == y_id) { years[i].show = true}
                else { years[i].show = false }
            }
        },
    }
}
</script>

<style scoped>

.bg-network {

    animation: pulse 10s linear infinite;
    background-image: url("~assets/networkTF005x5.png");
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


