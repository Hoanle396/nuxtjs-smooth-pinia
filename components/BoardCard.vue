<template>
    <div :class="props.className" :style="props.style">
        <p>{{ data }}</p>
    </div>
</template>
<script lang="ts">
export default {
    props: {
        props: {
            type: Object,
            required: true
        },
        data: {
            type: String,
            required: true
        }
    }
}
</script>
