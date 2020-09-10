<template>
<div>
    <div class="py-24 bg-center bg-no-repeat bg-cover" style="background-image: linear-gradient(249deg, #4285C2 0%, #0E3D67 100%),url('/images/banner.png'); background-blend-mode: screen">
        <div class="container mx-auto">
            <div class="w-full md:w-9/12 lg:w-8/12 px-5 md:px-0 flex justify-center flex-col items-center md:items-start">
                <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-white uppercase text-center md:text-left banner__title">A Place To Buy Beats From The world's Best producers</h1>
                <h2 class="text-2xl font-semibold text-white pt-3 pb-6 text-center md:text-left">Find the perfect Beat for you project </h2>
                <div class="relative  w-2/3 lg:w-1/2 pb-10 lg:pb-20">
                    <input type="text" placeholder="Search" name="search" class="w-full py-3 pl-5 pr-10 border-none rounded-full">
                    <font-awesome-icon class="text-xl text-gray-500 absolute right-0 mr-5 mt-4" :icon="['fas', 'search']" />
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto grid md:grid-cols-3 gap-5 md:gap-10 py-10 px-5 md:px-0">
        <div class="py-6 px-3 lg:px-12 bg-blue-100 rounded-md shadow flex justify-center flex-col items-center">
            <div class="w-20 h-20 rounded-full bg-indigo-900 flex justify-center items-center">
                <font-awesome-icon class="text-3xl text-white" :icon="['fas', 'bahai']" />
            </div>
            <div class="py-3">
                <h2 class="text-xl color-primary font-bold pb-3 text-center">Buy Tracks</h2>
                <p class="text-base color-primary text-center">Buy tracks you think you like. Doing this will abtain you a license</p>
            </div>
        </div>
        <div class="py-6 px-3 lg:px-12 bg-blue-100 rounded-md shadow flex justify-center flex-col items-center">
            <div class="w-20 h-20 rounded-full bg-indigo-900 flex justify-center items-center">
                <font-awesome-icon class="text-3xl text-white" :icon="['fas', 'bomb']" />
            </div>
            <div class="py-3">
                <h2 class="text-xl color-primary font-bold pb-3 text-center">Sell Tracks</h2>
                <p class="text-base color-primary text-center"> Create and sell your. own tracks. We make it all easy for you. Try us.</p>
            </div>
        </div>
        <div class="py-6 px-3 lg:px-12 bg-blue-100 rounded-md shadow flex justify-center flex-col items-center">
            <div class="w-20 h-20 rounded-full bg-indigo-900 flex justify-center items-center">
                <font-awesome-icon class="text-3xl text-white" :icon="['fas', 'bowling-ball']" />
            </div>
            <div class="py-3">
                <h2 class="text-xl color-primary font-bold pb-3 text-center">Customise Work</h2>
                <p class="text-base color-primary text-center">Creating a tracks isn’t enough. We let you customise the album art and whatnot!</p>
            </div>
        </div>
    </div>
    <div class="py-5 px-5 md:px-0">
        <div class="container mx-auto flex justify-between">
            <h2 class="text-base md:text-2xl font-bold uppercase color-primary">Latest Tracks</h2>
            <div class="pl-1 flex items-center">
                <button type="button" @click="showPrev1" class="border-none bg-transparent px-1">
                    <font-awesome-icon class="text-3xl color-primary" :icon="['fas', 'arrow-alt-circle-left']" />
                </button>
                <button type="button" @click="showNext1" class="border-none bg-transparent px-1">
                    <font-awesome-icon class="text-3xl color-primary" :icon="['fas', 'arrow-alt-circle-right']" />
                </button>
                <a href="#" class="button__gradient text-white py-1 ml-1 md:ml-3 px-3 md:px-5 rounded-full">View All</a>
            </div>
        </div>
        <div class="container mx-auto py-8">
            <div class="-mx-5">
                <VueSlickCarousel v-bind="slickOptions" ref="carousel">
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-1.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">Dynamite</h2>
                            <p class="text-base color-muted">By BTS</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-2.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">BlAME IT ON</h2>
                            <p class="text-base color-muted">By DaBaby</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-3.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">Blinding lights</h2>
                            <p class="text-base color-muted">By the Weekend</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-4.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">Tap In</h2>
                            <p class="text-base color-muted">By Saweetie</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-5.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">Blinding lights</h2>
                            <p class="text-base color-muted">By the Weekend</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-6.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">BlAME IT ON</h2>
                            <p class="text-base color-muted">By DaBaby</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-7.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">BlAME IT ON</h2>
                            <p class="text-base color-muted">By DaBaby</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-8.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">BlAME IT ON</h2>
                            <p class="text-base color-muted">By DaBaby</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-9.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">BlAME IT ON</h2>
                            <p class="text-base color-muted">By DaBaby</p>
                        </div>
                    </div>

                </VueSlickCarousel>
            </div>
        </div>
    </div>
    <div class="py-12   px-5 md:px-0 tracks__gradient ">
        <div class="container mx-auto flex justify-between">
            <h2 class="text-base md:text-2xl  font-bold uppercase text-white">Top in Genre(s)</h2>
            <div class="pl-1 flex items-center">
                <button type="button" @click="showPrev2" class="border-none bg-transparent px-1">
                    <font-awesome-icon class="text-3xl color-primary" :icon="['fas', 'arrow-alt-circle-left']" />
                </button>
                <button type="button" @click="showNext2" class="border-none bg-transparent px-1">
                    <font-awesome-icon class="text-3xl color-primary" :icon="['fas', 'arrow-alt-circle-right']" />
                </button>
                <a href="#" class="button__normal text-white py-1 ml-1 md:ml-3 px-3 md:px-5 rounded-full">View All</a>
            </div>
        </div>
        <div class="container mx-auto py-8">
            <div class="-mx-5">
                <VueSlickCarousel v-bind="slickOptions" ref="carousel2">
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-1.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">Dynamite</h2>
                            <p class="text-base color-muted">By BTS</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-2.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">BlAME IT ON</h2>
                            <p class="text-base color-muted">By DaBaby</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-3.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">Blinding lights</h2>
                            <p class="text-base color-muted">By the Weekend</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-4.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">Tap In</h2>
                            <p class="text-base color-muted">By Saweetie</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-5.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">Blinding lights</h2>
                            <p class="text-base color-muted">By the Weekend</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-6.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">BlAME IT ON</h2>
                            <p class="text-base color-muted">By DaBaby</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-7.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">BlAME IT ON</h2>
                            <p class="text-base color-muted">By DaBaby</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-8.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">BlAME IT ON</h2>
                            <p class="text-base color-muted">By DaBaby</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-9.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">BlAME IT ON</h2>
                            <p class="text-base color-muted">By DaBaby</p>
                        </div>
                    </div>

                </VueSlickCarousel>
            </div>
        </div>
    </div>
    <div class="py-10  px-5 md:px-0">
        <div class="container mx-auto flex justify-between">
            <h2 class="text-base md:text-2xl  font-bold uppercase color-primary">Feature Beats</h2>
            <div class="pl-1 flex items-center">
                <button type="button" @click="showPrev3" class="border-none bg-transparent px-1">
                    <font-awesome-icon class="text-3xl color-primary" :icon="['fas', 'arrow-alt-circle-left']" />
                </button>
                <button type="button" @click="showNext3" class="border-none bg-transparent px-1">
                    <font-awesome-icon class="text-3xl color-primary" :icon="['fas', 'arrow-alt-circle-right']" />
                </button>
                <a href="#" class="button__gradient text-white py-1 ml-1 md:ml-3 px-3 md:px-5 rounded-full">View All</a>
            </div>
        </div>
        <div class="container mx-auto py-8">
            <div class="-mx-5">
                <VueSlickCarousel v-bind="slickOptions" ref="carousel3">
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-1.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">Dynamite</h2>
                            <p class="text-base color-muted">By BTS</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-2.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">BlAME IT ON</h2>
                            <p class="text-base color-muted">By DaBaby</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-3.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">Blinding lights</h2>
                            <p class="text-base color-muted">By the Weekend</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-4.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">Tap In</h2>
                            <p class="text-base color-muted">By Saweetie</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-5.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">Blinding lights</h2>
                            <p class="text-base color-muted">By the Weekend</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-6.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">BlAME IT ON</h2>
                            <p class="text-base color-muted">By DaBaby</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-7.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">BlAME IT ON</h2>
                            <p class="text-base color-muted">By DaBaby</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-8.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">BlAME IT ON</h2>
                            <p class="text-base color-muted">By DaBaby</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/images/img-9.png" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold color-primary">BlAME IT ON</h2>
                            <p class="text-base color-muted">By DaBaby</p>
                        </div>
                    </div>
                </VueSlickCarousel>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
export default {
    components: {
        VueSlickCarousel
    },
    data() {
        return {
            slickOptions: {
                "slidesToShow": 4,
                "slidesToScroll": 4,
                "initialSlide": 0,
                "arrows": false,
                "responsive": [{
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 3,
                        }
                    },
                    {
                        "breakpoint": 600,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,
                            "initialSlide": 2
                        }
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1
                        }
                    }
                ]
            }
        }
    },
    methods: {
        showPrev1() {
            this.$refs.carousel.prev()
        },
        showNext1() {
            this.$refs.carousel.next()
        },
        showPrev2() {
            this.$refs.carousel2.prev()
        },
        showNext2() {
            this.$refs.carousel2.next()
        },
        showPrev3() {
            this.$refs.carousel3.prev()
        },
        showNext3() {
            this.$refs.carousel3.next()
        },
    },
}
</script>

<style lang="scss">
.banner__title {
    text-shadow: 1px 2px 3px #222;
}

.tracks__gradient {
    background: transparent linear-gradient(252deg, #4285C2 0%, #0E3D67 100%) 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
}

.button__gradient {
    background: transparent linear-gradient(180deg, #4285C2 0%, #0E3D67 100%) 0% 0% no-repeat padding-box;
}

.button__normal {
    background: #0E3D67;
}
</style>
