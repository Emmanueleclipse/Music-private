<template>
<header class="header-area py-6 px-4 rounded-md bg-white">
    <div class="flex justify-between items-center">
        <h1 class="text-gray-700 text-base flex items-center">
            <span class="block md:hidden p-1 bars--click">
                <font-awesome-icon @click="toggle" class="text-xl text-gray-700 cursor-pointer bars--click" :icon="['fas', 'bars']" />
            </span>
            <span class="block ml-3 leading-none">Dashboard (Admin Panel)</span>
        </h1>
        <div class="right-area w-36 flex">
            <div class="cart relative px-5">
                <img src="/images/admin/dashboard-img-7.svg" width="32" height="32" alt="cart images">
                <div class="rounded-full p-1 w-5 h-5 bg-red-600 absolute top-0 right-0 text-xs text-white leading-none -mt-2 mr-3">11</div>
            </div>
            <div class="admin-profie flex md:pl-5 items-center cursor-pointer relative" @click="menuClick" v-click-outside="hide">
                <h2 class="text-gray-700 text-base pr-2 hidden md:block">Admin</h2>
                <img src="/images/admin/dashboard-img-1.svg" width="35" height="35" alt="admin image">
                <div class="absolute top-0 left-0 mt-12  bg-white shadow rounded-lg" v-if="dropdown">
                    <a href="#" @click.prevent="signOut" class="flex items-center hover:bg-gray-200 w-32 py-4 px-5">
                        <font-awesome-icon @click="toggle" class="text-xl text-gray-700 pr-1" :icon="['fas', 'sign-out-alt']" /> <span class="text-gray-700">Logout</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</header>
</template>

<script>
export default {
    data() {
        return {
            dropdown: false
        }
    },
    methods: {
        toggle() {
            this.$emit('clicked')
        },
        menuClick() {
            this.dropdown = !this.dropdown
        },
        hide() {
            this.dropdown = false
        },
        signOut() {
            this.$auth.logout();
        }
    }
}
</script>

<style lang="scss">
.header-area {
    box-shadow: 0pt 0pt 25pt #0000001A;
}
</style>
