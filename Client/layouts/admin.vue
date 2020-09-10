<template>
<div class="bg pt-6 min-h-screen">
    <Sidebar @hidden="hidden" :isshowing="isshowing" />
    <div class="md:ml-64 px-5 main--parent" :class="isshowing ? 'showing': ''">
        <Header @clicked="onClicked" />
        <main>
            <Nuxt />
        </main>
    </div>
</div>
</template>

<script>
import Header from './admin/header';
import Sidebar from './admin/sidebar';

export default {
    components: {
        Header,
        Sidebar,
    },
    data() {
        return {
            isshowing: false
        }
    },
    methods: {
        onClicked() {
            this.isshowing = !this.isshowing;
        },
        hidden() {
            this.isshowing = false;
        }
    }
}
</script>

<style lang="scss">
.bg {
    background: #F1F1F1 0% 0% no-repeat padding-box;
}

.main--parent {
    transition: 0.2s all ease-in;
}

.main--parent.showing {
    margin-left: 250px;
}

@media screen and (max-width: 650px) {
    .main--parent.showing {
        margin-left: 0;

        &::after {
            content: "";
            position: fixed;
            width: 100%;
            height: 100%;
            background: rgba(30, 30, 30, .762);
            left: 0;
            top: 0;
            z-index: 111;
        }
    }
}
</style>
