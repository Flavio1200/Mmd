<script setup>
    defineProps({
        title: String,
        value1: Number,
        value2: Number,
    });
</script>

<template>
    <div class="flex-1 flex flex-col items-center justify-center gap-2 p-4 rounded-lg shadow-md bg-white/10">
        <h5>{{ title }}</h5>
        <p>{{ value1 }}</p>
        <p>{{ value2 }}</p>
    </div>
</template>