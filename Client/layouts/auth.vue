<template>
<div>
    <Sidebar />
    <div>
        <Header />
        <main>
            <Nuxt />
        </main>
    </div>
</div>
</template>

<script>
import Header from './auth/header';
import Sidebar from './auth/sidebar';
export default {
    components: {
        Header,
        Sidebar,
    }
}
</script>
