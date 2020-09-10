<template>
<div>
    <Header />
    <main>
        <Nuxt />
    </main>
    <Footer />
</div>
</template>

<script>
import Header from './default/header';
import Footer from './default/footer';
export default {
    components: {
        Header,
        Footer,
    }
}
</script>
