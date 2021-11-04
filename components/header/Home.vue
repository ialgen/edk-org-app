<template>
    <header id="nav" class="transition bg-blue-edk bg-opacity-0 flex flex-row justify-between items-center fixed inset-x-0">
        <div class="m-4">
            <LogoMainWhite/>
        </div>
        <div class="flex flex-row items-center">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" 
                />
            </svg>
            <div class="flex flex-row justify-between border-2 rounded-lg p-1 m-4">
                <svg class="h-6 w-6 m-1" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg class="h-6 w-6 m-1" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </div>
        </div>
    </header>
</template>

<script>
/*export default {
    mounted() {
        this.$nextTick(function(){
            window.addEventListener("scroll", function(){
                var navbar = document.getElementById("nav");
                var nav_classes = navbar.classList;
                if(document.body.scrollTop > 150 || document.documentElement.scrollTop >= 150) {
                    nav_classes.toggle("bg-opacity-0");
                }
            })
        })
    },
}*/
export default {
    mounted() {
        window.onscroll = function(){
            var navbar = document.getElementById("nav");
            var nav_classes = navbar.classList;
            if(document.body.scrollTop > 300 || document.documentElement.scrollTop >= 300) {
                nav_classes.remove("bg-opacity-0");
            } else {
                nav_classes.add("bg-opacity-0")
            }
        }
    }
}
</script>