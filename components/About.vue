<!-- Please remove this file from your project -->
<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
        <NuxtLogo />
    </div>
</template>

<script>
import NuxtLogo from './NuxtLogo.vue';


export default {

    name: "NuxtAbout",
    components: { NuxtLogo },
    setup: () => { },
    methods: {
        mound: () => {
            console.log("components mounted");
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
