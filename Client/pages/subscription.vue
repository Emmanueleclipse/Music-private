<template>
<div class="w-full py-10 px-5 md:px-0 container mx-auto">
    <h3 class="color-primary text-3xl pb-12 text-center font-medium">Subscription Plans</h3>
    <div class="grid md:grid-cols-2 gap-10 md:gap-20">
        <div class="wrapper w-full px-12 py-8">
            <h3 class="text-4xl  text-gray-700 text-center">Free</h3>
            <h1 class="text-5xl  font-bold text-center text-blue-700 leading-none">$0</h1>
            <p class="text-sm text-blue-700 text-center  pt-1">Per year</p>
            <div class="flex justify-center pb-10 pt-6">
                <div class="w-48 py-2 px-5 rounded-full border border-blue-700 text-center text-sm ">15 Tracks</div>
            </div>
            <div class="flex justify-center pt-10">
                <a href="#" class="subscription__btn_one w-48 inline-block text-center py-2 px-5 text-white text-sm rounded-full ">Sign Up</a>
            </div>
        </div>
        <div class="wrapper wrapper__gradient w-full px-12 py-8">
            <h3 class="text-4xl  text-white text-center">Gold</h3>
            <h1 class="text-5xl  font-bold text-center text-white leading-none">$89.99</h1>
            <p class="text-sm text-blue-500 text-center pt-1">Per year</p>
            <div class="flex justify-center pb-10 pt-6">
                <div class="w-48 py-2 px-5 rounded-full border border-white text-white text-center text-sm ">Unlimited Tracks</div>
            </div>
            <div class="flex justify-center pt-10">
                <a href="#" class="bg-primary w-48 inline-block text-center py-2 px-5 text-white text-sm rounded-full ">Sign Up</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.wrapper {
    box-shadow: 0px 0px 49px #4285C24D;
    border-radius: 20px;
}

.wrapper__gradient {
    background: transparent linear-gradient(90deg, #0E3D67 0%, #4285C2 100%) 0% 0% no-repeat padding-box;
}

.subscription__btn_one {
    background: transparent linear-gradient(180deg, #4285C2 0%, #0E3D67 100%) 0% 0% no-repeat padding-box;
}
</style>
