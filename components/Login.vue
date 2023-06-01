<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
        <div class="w-full  md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                </h1>
                <form class="space-y-4 md:space-y-6" @submit.prevent="postLogin">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                            email</label>
                        <input type="text" name="email" id="email"
                            class="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 my-5"
                            placeholder="name@company.com">
                    </div>
                    <div>
                        <label for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••"
                            class="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 my-5">
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox"
                                    class="w-4 h-4 rounded rounded-3xl border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#"
                            class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                            password?</a>
                    </div>
                    <button type="submit"
                        class="text-white bg-gradient-to-r from-teal-200 via-teal-400 to-teal-600 hover:bg-gradient-to-br border border-gray-300 text-xl font-semibold rounded-2xl block w-full p-3 mb-5 shadow-xl">Sign
                        in</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <a href="#"
                            class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script >
import { useAuth } from "~/stores/auth";

const Cookie = process.client ? require("js-cookie") : undefined;

export default {
    middleware: "notAuthenticated",
    setup() {
        const { setAuth } = useAuth()
        return {
            setAuth
        }
    },
    methods: {
        postLogin: function () {
            console.log("here");
            const auth = {
                accessToken: "someStringGotFromApiServiceWithAjax"
            };
            this.setAuth(auth)
            Cookie.set("auth", JSON.stringify(auth));
            if (this.$route.query.r) {
                this.$router.push(decodeURIComponent(this.$route.query.r));
            } else {
                this.$router.push("/");
            }
        },
    }
};
</script>