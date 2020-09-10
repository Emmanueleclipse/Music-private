<template>
<div class="sidebar py-5 px-5 w-64 -ml-64 md:ml-0 fixed top-0 bottom-0 left-0 sidebar--click" :class="isshowing ? 'showing': ''">
    <div class="logo__area pb-3 flex items-center justify-between">
        <h1 class="text-white text-3xl uppercase font-semibold">Logo</h1>
        <div class="nav__hidebtn block sm:hidden">
            <font-awesome-icon @click="hide" class="text-xl text-gray-700 cursor-pointer bars--click" :icon="['fas', '']" />
        </div>
    </div>
    <div class="main__link">
        <ul class="list-none">
            <li>
                <nuxt-link to="/admin/dashboard" class="py-4 px-3 flex items-center  rounded">
                    <span class="dashboard"></span>
                    <span class=" text-gray-400 text-base ml-2 ">Dashboard</span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/admin/users" class="py-4 px-3 flex items-center  rounded">
                    <span class="users"></span>
                    <span class=" text-gray-400 text-base ml-2 ">Users</span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/admin/products" class="py-4 px-3 flex items-center  rounded">
                    <span class="products"></span>
                    <span class=" text-gray-400 text-base ml-2 ">Added Products</span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/admin/transactions" class="py-4 px-3 flex items-center  rounded">
                    <span class="transaction"></span>
                    <span class=" text-gray-400 text-base ml-2 ">Transaction Logs</span>
                </nuxt-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    props: ['isshowing'],
    data() {
        return {

        }
    },
    methods: {
        hide() {
            this.$emit('hidden')
        }
    },

}
</script>

<style lang="scss" scoped>
.sidebar {
    background: transparent linear-gradient(200deg, #4285C2 0%, #0E3D67 100%) 0% 0% no-repeat padding-box;
    transition: .2s all ease-in;
}

.nuxt-link-active {
    background-color: #0E3D67;
}

.sidebar--click.showing {
    margin-left: 0 !important;
    z-index: 999;
}

.dashboard {
    width: 35px;
    height: 29px;
    background: transparent url('/images/admin/sidebar-img-1.svg') 0% 0% no-repeat padding-box;
    background-size: 26px;
    background-position: center center;
}

.users {
    width: 35px;
    height: 29px;
    background: transparent url('/images/admin/sidebar-img-2.svg') 0% 0% no-repeat padding-box;
    background-size: 24px;
    background-position: center center;
}

.products {
    width: 35px;
    height: 29px;
    background: transparent url('/images/admin/sidebar-img-3.svg') 0% 0% no-repeat padding-box;
    background-size: 22px;
    background-position: center center;
}

.transaction {
    width: 35px;
    height: 29px;
    background: transparent url('/images/admin/sidebar-img-4.svg') 0% 0% no-repeat padding-box;
    background-size: 16px;
    background-position: center center;
}

@media screen and (max-width: 650px) {
    .sidebar--click {
        top: 0;
        bottom: 0;
        left: 0;

        &::after {
            content: '';
            width: 100%;
            height: 100%;
            background: red;
        }
    }
}
</style>
