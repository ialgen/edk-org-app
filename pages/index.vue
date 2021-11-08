<template>
    <div>
        <HeaderHome/>
        <div class="-top-20 relative flex flex-row justify-between items-center h-screen min-h-96 pr-20 pl-20 bg-palette-cyan bg-opacity-20">
            <div class="absolute bottom-0 -left-48 z-0">
                <svg class="stroke-0 fill-current text-palette-ciel opacity-20 filter blur-3xl" height="800" width="800">
                    <circle cx="400" cy="400" r="400" />
                </svg>
            </div>
            <div class="flex flex-col p-10 space-y-10 z-50">
                <h1 class="text-4xl sm:text-5xl font-semibold">
                    The token for innovation in education. <br> Think crypto.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button class="pt-3 pb-3 border-2 border-palette-violet text-palette-violet rounded-2xl hover:bg-palette-violet hover:text-white">
                    Whitepaper
                </button>
            </div>
            <div class="hidden lg:block fill-current text-palette-violet opacity-80">
                <svg height="500" width="500">
                    <circle cx="250" cy="250" r="240" stroke-width="3"/>
                </svg>
            </div>
        </div>
        <div class="flex flex-col space-y-10 sm:space-y-16 justify-around">
            <div>
                <h2 class="text-center text-3xl font-semibold">
                    Who is EduKarta for?
                </h2>
                <p class="text-center p-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div class="flex flex-col space-y-10 md:flex-row md:space-x-10 md:space-y-0 pl-32 pr-32 pb-20">
                <div class="flex flex-col items-center md:pt-3">
                    <IconsReader/>
                    <h3 class="text-center text-xl font-semibold m-5">
                        Universities
                    </h3>
                    <p class="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div class="flex flex-col items-center">
                    <IconsBook/>
                    <h3 class="text-center text-xl font-semibold m-5">
                        Student
                    </h3>
                    <p class="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div class="flex flex-col items-center md:pt-3">
                    <IconsTeacher/>
                    <h3 class="text-center text-xl font-semibold m-5">
                        Teacher
                    </h3>
                    <p class="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
        <div class="relative flex flex-col md:flex-row px-20 space-x-10 h-screen items-center">
            <div class="absolute right-0 -top-32 z-0">
                <svg class="stroke-0 fill-current text-palette-cyan opacity-20 filter blur-3xl" height="600" width="600">
                    <circle cx="300" cy="300" r="300" />
                </svg>
            </div>
            <div class="absolute -left-16 -bottom-32 z-0">
                <svg class="stroke-0 fill-current text-palette-bleu opacity-20 filter blur-3xl" height="400" width="400">
                    <circle cx="200" cy="200" r="200" />
                </svg>
            </div>
            <div class="flex flex-col space-y-10 z-50">
                <img class="" src="~assets/what_is_edukarta.png">
                <h2 class="text-3xl font-semibold">
                    What is Edukarta?
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button class="pt-3 pb-3 bg-palette-violet rounded-lg text-white w-40">
                    EduKarta
                </button>
            </div>
            <div class="flex flex-col space-y-4 z-50">
                <div class="flex flex-row bg-white rounded-2xl py-2 filter drop-shadow-3xl items-center">
                    <div class="flex items-center p-6 ml-4 text-6xl text-palette-ciel font-light">1</div>
                    <div class="flex flex-col px-4 space-y-2">
                        <h3 class="text-xl font-semibold">Governance</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div class="flex flex-row bg-white rounded-2xl py-2 filter drop-shadow-3xl items-center">
                    <div class="flex items-center p-6 ml-4 text-6xl text-palette-ciel font-light">2</div>
                    <div class="flex flex-col px-4 space-y-2">
                        <h3 class="text-xl font-semibold">Governance</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div class="flex flex-row bg-white rounded-2xl py-2 filter drop-shadow-3xl items-center">
                    <div class="flex items-center p-6 ml-4 text-6xl text-palette-ciel font-light">3</div>
                    <div class="flex flex-col px-4 space-y-2">
                        <h3 class="text-xl font-semibold">Governance</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div class="flex flex-row bg-white rounded-2xl py-2 filter drop-shadow-3xl items-center">
                    <div class="flex items-center p-6 ml-4 text-6xl text-palette-ciel font-light">4</div>
                    <div class="flex flex-col px-4 space-y-2">
                        <h3 class="text-xl font-semibold">Governance</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div class="flex flex-row bg-white rounded-2xl py-2 filter drop-shadow-3xl items-center">
                    <div class="flex items-center p-6 ml-4 text-6xl text-palette-ciel font-light">5</div>
                    <div class="flex flex-col px-4 space-y-2">
                        <h3 class="text-xl font-semibold">Governance</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>