<!-- Please remove this file from your project -->
<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
        <button @click="showToast">Show toast</button>
    </div>
</template>

<script>
export default {

    name: "NuxtAbout",
    setup: () => { },
    methods: {
        mound: () => {
            console.log("components mounted");
        },
        showToast() {
            this.$toast.error("hello");
        }
    },
    computed: {

    },
    // lifecycle
    beforeCreate: function () { },
    created: function () { },
    beforeMount: function () { },
    mounted: function () { },
    beforeUpdate: function () { },
    updated: function () { },
    activated: function () { },
    deactivated: function () { },
    beforeDestroy: function () { },
    destroyed: function () { },

}
</script>
<style scoped>
@import "vue-toastification/dist/index.css";
</style>