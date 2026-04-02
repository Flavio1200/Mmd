<script setup>
    defineProps({
        title: String,
        value1: Number,
        value2: Number,
    });
</script>

<template>
    <div class="flex-1 flex flex-col items-center justify-center gap-2 p-4 rounded-lg shadow-md bg-white/10">
        <h5 class="text-xl text-slate-700 text-center">{{ title }}</h5>
        <p class="font-bold">{{ value1 }}</p>
        <p class="font-bold">{{ value2 }}</p>
    </div>
</template>