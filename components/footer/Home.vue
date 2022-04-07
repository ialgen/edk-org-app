<template>
    <footer class="mt-20">
        <div class="flex flex-row justify-evenly">
            <div class="flex flex-col space-y-2">
                <div class="uppercase font-semibold text-sm">Token sale</div>
                <a class="text-xs" href="https://whitepaper.edutoken.org" target="_blank">Whitepaper</a>
                <a class="text-xs" href="/#">Tutorials</a>
                <a class="text-xs" href="/#">Smartcontract(s)</a>
            </div>
            <div class="flex flex-col space-y-2">
                <div class="uppercase font-semibold text-sm">Company</div>
                <a class="text-xs" href="/#">About DE</a>
                <a class="text-xs" href="https://forms.gle/YTXQtxFnbpRniWKS7" target="_blank">Careers</a>
                <a class="text-xs" href="/#">Contact</a>
            </div>
            <div class="flex flex-col space-y-2">
                <div class="uppercase font-semibold text-sm">Legal</div>
                <a class="text-xs" href="/#">Cookies policy</a>
                <a class="text-xs" href="/#">Privacy policy</a>
            </div>
            <div class="hidden sm:flex sm:flex-col sm:space-y-2 sm:text-blue-edk sm:text-sm">
                <a class="" href="/#">8 rue Hautefeuille<br/>75006, Paris<br/>France</a>
                <a class="" href="/#">official.edukarta@gmail.com</a> 
            </div>
        </div>
        <div class="flex flex-col space-y-2 text-blue-edk text-sm m-5 justify-center sm:hidden">
            <a class="text-center" href="/#">8 rue Hautefeuille<br/>75006, Paris<br/>France</a>
            <a class="text-center" href="/#">official.edukarta@gmail.com</a> 
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-y-0 sm:space-x-20 sm:my-12">
            <div class="lg:w-1/4 hidden lg:block">
                <svg height="10" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="8" x2="300" y2="8" stroke="#80AEF9"/>
                </svg>
            </div>
            <LogoFooter/>
            <div class="flex flex-row space-x-4">
                <!--<IconsSocialMedium/>-->
                <a href="https://twitter.com/EduKarta" target="_blank">
                    <IconsSocialTwitter/>
                </a>
                <a href="https://www.linkedin.com/company/edukarta" target="_blank">
                    <IconsSocialLinkedin/>
                </a>
                <!--<IconsSocialTelegram/>-->
            </div>
            <div class="lg:w-1/4 hidden lg:block">
                <svg height="10" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="8" x2="300" y2="8" stroke="#80AEF9"/>
                </svg>
            </div>
        </div>

        <div class="text-center text-xs m-4">
            © Copyright 2022 All Rights Reserved.
        </div>
    </footer>
</template>

<script>

</script>

