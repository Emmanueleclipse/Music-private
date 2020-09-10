<template>
<div class="w-full py-10 px-5 container mx-auto">
    <h3 class="color-primary text-3xl pb-12 text-center font-medium">Register</h3>
    <div class="registration-wrapper w-full sm:w-2/3 md:w-4/6 lg:w-5/12 mx-auto p-12">
        <SocialLogin />

        <div class="registration-wrapper__main pt-5">
            <div class="registration-wrapper__input pb-5">
                <label for="email" class="block ml-3 color-primary font-bold mb-1">Email <span class="text-red-600">*</span></label>
                <input type="email" name="email" id="email" class="px-5 py-2 border border-gray-400 focus:outline-none text-gray-600 rounded-full w-full">
            </div>
            <div class="registration-wrapper__input pb-5">
                <label for="name" class="block ml-3 color-primary font-bold mb-1">Full Name <span class="text-red-600">*</span></label>
                <input type="text" id="name" class="px-5 py-2 border border-gray-400 focus:outline-none text-gray-600 rounded-full w-full">
            </div>
            <div class="registration-wrapper__input pb-5">
                <label for="producer_name" class="block ml-3 color-primary font-bold mb-1">Producer Name <span class="text-red-600">*</span></label>
                <input type="text" id="producer_name" class="px-5 py-2 border border-gray-400 focus:outline-none text-gray-600 rounded-full w-full">
            </div>
            <div class="registration-wrapper__input pb-5">
                <label for="invite_code" class="block ml-3 color-primary font-bold mb-1">Invite Code <span class="text-red-600">*</span></label>
                <input type="text" id="invite_code" class="px-5 py-2 border border-gray-400 focus:outline-none text-gray-600 rounded-full w-full">
            </div>

            <div class="registration-wrapper__input pb-5">
                <div class="flex justify-between">
                    <div class="py-2">
                        <p for="location" class="block ml-3 color-primary font-bold mb-1">Profile Image </p>
                        <label for="choose" class="block ml-3 no-underline label-link ">Choose Photo</label>
                        <input type="file" class="hidden" id="choose">
                    </div>
                    <div class="py-2">
                        <img src="/images/avater.svg" alt="profile photo" class="registration__images">
                    </div>
                </div>
            </div>

            <div class="registration-wrapper__input pb-5">
                <label for="location" class="block ml-3 color-primary font-bold mb-1">Location </label>
                <input type="text" id="location" class="px-5 py-2 border border-gray-400 focus:outline-none text-gray-600 rounded-full w-full">
            </div>
            <div class="registration-wrapper__input pb-5">
                <label for="bio" class="block ml-3 color-primary font-bold mb-1">Bio </label>
                <textarea name="bio" id="bio" cols="10" rows="4" class="px-5 py-2 border border-gray-400 focus:outline-none text-gray-600 w-full register__textarea resize-none"></textarea>
            </div>
            <div class="registration-wrapper__input pb-5">
                <label for="location" class="block ml-3 color-primary font-bold mb-1">Connect PayPal account </label>
                <input type="text" id="location" class="px-5 py-2 border border-gray-400 focus:outline-none text-gray-600 rounded-full w-full">
            </div>
        </div>
        <div class="registration-wrapper__button-area flex justify-center w-full py-10">
            <button type="button" class="border-none w-56 rounded-full py-2 px-3 text-white">Sign up</button>
        </div>
        <div class="loing-wrapper flex justify-center">
            <nuxt-link to="login" class="register-link">Already have a account? Login</nuxt-link>
        </div>
    </div>
</div>
</template>

<script>
import SocialLogin from '@/components/auth/SocialLogin';
export default {
    components: {
        SocialLogin
    },

}
</script>

<style>
.registration-wrapper {
    box-shadow: 0px 0px 49px #4285C24D;
    border-radius: 20px;
}

.custom__google__btn {
    background: transparent linear-gradient(180deg, #FFFFFF 0%, #DDDDDD 100%) 0% 0% no-repeat padding-box;
    border: 1px solid #BFBFBF;
    border-radius: 28px;
    width: 100%;
}

.custom__google__btn img {
    width: 20px;
    height: 20px;
}

.custom__facebook__btn {
    background: transparent linear-gradient(180deg, #497CEF 0%, #3A569B 100%) 0% 0% no-repeat padding-box;
    border-radius: 28px;
    width: 100%;
    display: inline-block;
}

.registration-wrapper__button-area button {
    background: transparent linear-gradient(180deg, #4285C2 0%, #0E3D67 100%) 0% 0% no-repeat padding-box;
}

.register-link {
    color: #4285C2;
    text-decoration: underline;
}

.register__textarea {
    border-radius: 23px;
}

.label-link {
    color: #4285C2;
    cursor: pointer;
}

.forget-link {
    color: #4285C2;
    text-decoration: underline;
}

.registration__images {
    width: 60px;
    height: 60px;
    border: 2px solid #ccc;
    padding: 5px;
    border-radius: 60px;
}
</style>
