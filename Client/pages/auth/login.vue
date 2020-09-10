<template>
<div class="w-full py-10 px-5 container mx-auto">
    <h3 class="color-primary text-3xl pb-12 text-center font-medium">Login</h3>
    <div class="login-wrapper w-full sm:w-2/3 md:w-4/6 lg:w-5/12 mx-auto p-12">
        <SocialLogin />
        <form @submit.prevent="login">
            <div class="login-wrapper__main pt-5">
                <div class="py-2 px-5 bg-red-600 text-white mb-2 shadow-sm rounded" v-if="errors.email">{{ errors.email[0] }}</div>
                <div class="login-wrapper__email pb-5">
                    <label for="email" class="block ml-3 color-primary font-bold mb-1">Email <span class="text-red-600">*</span></label>
                    <input v-model="form.email" required type="email" name="email" id="email" class="px-5 py-2 border border-gray-400 focus:outline-none text-gray-600 rounded-full w-full">
                </div>
                <div class="login-wrapper__passwod">
                    <label for="password" class="block ml-3 color-primary font-bold mb-1">Password <span class="text-red-600">*</span></label>
                    <input v-model="form.password" minlength="6" required type="password" id="password" class="px-5 py-2 border border-gray-400 focus:outline-none text-gray-600 rounded-full w-full">
                </div>
            </div>
            <div class="login-wrapper__button-area flex justify-center w-full py-10">
                <button type="submit" class="border-none w-56 rounded-full py-2 px-3 text-white">Login</button>
            </div>
        </form>
        <div class="loing-wrapper flex justify-between">
            <a href="#" class="register-link">Register</a>
            <a href="#" class="forget-link">Forget password?</a>
        </div>
    </div>
</div>
</template>

<script>
import SocialLogin from '@/components/auth/SocialLogin';
export default {
    middleware: 'guest',
    components: {
        SocialLogin
    },
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            error: this.$route.query.error
        }
    },
    methods: {
        async login() {
            try {
                await this.$auth.login({
                    data: this.form
                });
            } catch (e) {
                return;
            }
            if (this.authenticated) {
                if (this.user.is_admin === 1) {
                    this.$router.push(this.$route.query.redirect ? this.$route.query.redirect : '/admin/dashboard');
                } else {
                    this.$router.push(this.$route.query.redirect ? this.$route.query.redirect : '/');
                }

            }
        }
    },
}
</script>

<style>
.login-wrapper {
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

.login-wrapper__button-area button {
    background: transparent linear-gradient(180deg, #4285C2 0%, #0E3D67 100%) 0% 0% no-repeat padding-box;
}

.register-link {
    color: #4285C2;
    text-decoration: underline;
}

.forget-link {
    color: #4285C2;
    text-decoration: underline;
}
</style>
