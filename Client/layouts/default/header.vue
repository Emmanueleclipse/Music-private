<template>
<header class="bg-white custom__shadow">
    <nav class="container mx-auto flex items-center justify-between flex-wrap px-4 lg:px-0 py-6 ">
        <div class="flex items-center flex-shrink-0 text-dark mr-6">
            <span class="font-semibold text-xl tracking-tight uppercase">Logo</span>
        </div>

        <label class="block lg:hidden cursor-pointer flex items-center px-3 py-2 border rounded  color-secondary border-teal-400 hover:text-gray-900 hover:border-white" for="menu-toggle"><svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg></label>
        <input class="hidden" type="checkbox" id="menu-toggle" />

        <div class="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto" id="menu">
            <div class="text-sm lg:flex-grow">
                <a href="#responsive-header" class="block mt-4 font-normal lg:inline-block lg:mt-0  color-secondary hover:text-gray-900 mr-4">
                    Explore
                </a>
                <a href="#responsive-header" class="block mt-4 font-normal lg:inline-block lg:mt-0  color-secondary hover:text-gray-900 mr-4">
                    Beats
                </a>
                <a href="#responsive-header" class="block mt-4 font-normal lg:inline-block lg:mt-0  color-secondary hover:text-gray-900">
                    Top Charts
                </a>
            </div>
            <div class="block">
                <a href="#responsive-header" class="block mt-4 font-normal lg:inline-block lg:mt-0  color-secondary hover:text-gray-900 mr-4">
                    Become a seller
                </a>
                <a href="#responsive-header" class="block mt-4 font-normal lg:inline-block lg:mt-0  color-secondary hover:text-gray-900 mr-4">
                    Sign up
                </a>
                <a href="#responsive-header" class="block mt-4 font-normal lg:inline-block lg:mt-0  color-secondary hover:text-gray-900">
                    Login
                </a>
            </div>
        </div>
    </nav>
</header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#menu-toggle:checked+#menu {
    display: block;
}

.custom__shadow {
    box-shadow: 0px 3px 6px #00000029;
}
</style>
