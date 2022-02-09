<template>
    <div>
        <HeaderHome/>
        <section class="">
            <div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
                <div class="space-y-12">
                    <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                        <h2 class="text-6xl lg:text-3xl font-semibold">Meet our team</h2>
                        <p class="text-3xl lg:text-base text-center">Contrairement à la plupart des projets crypto/blockchain composés d'équipes jeunes, EduKarta est créé par la Direction Générale de Diderot Education dont le plus jeune des membres a rejoint le groupe il y a 15 ans !</p>
                    </div>
                    <ul role="list" class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-4 lg:max-w-5xl">
                        <li v-for="person in people" :key="person.name">
                            <div v-if="person.name=='more'" class="p-2 space-y-6 rounded-lg shadow-md hover:shadow-inner border-blue-edk" onclick="window.location.href='#';">
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
    name: 'Aldrick Allal',
    role: 'President',
    imageUrl:
      'team/aldrick.jpeg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Ialgen Allal',
    role: 'Chief Operating Officer (COO)',
    imageUrl:
      'team/ialgen.jpeg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Istvan Allal',
    role: 'Chief Marketing Officer (CMO)',
    imageUrl:
      'team/istvan.jpeg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Iqbal Allal',
    role: 'Chief Data Officer',
    imageUrl:
      'team/ialgen.jpeg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Alexandra Allal',
    role: 'Chief Educational Officer',
    imageUrl:
      'team/alexandra.png',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Sabrina Camelot',
    role: 'Head of ',
    imageUrl:
      'team/sabrina.jpeg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Jasmina Bezdrob',
    role: 'Head of ',
    imageUrl:
      'team/ialgen.jpeg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
]
export default {
    data() {
        return {
            people
        }
    },
    methods: {
    }
}
</script>