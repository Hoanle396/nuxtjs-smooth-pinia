<template>
    <div class="container">
        <h1>Sign in to access the secret page</h1>
        <div>
            <label for="email">
                <input id="email" type="email" value="test">
            </label>
            <label for="password">
                <input id="password" type="password" value="test">
            </label>
            <button @click="postLogin">login</button>
            <p>The credentials are not verified for the example purpose.</p>
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