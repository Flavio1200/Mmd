<script setup>
    defineProps({
        market: String,
        value: Number,
        change: Number
    });
</script>

<template>
    <div class="flex flex-col gap-2 p-4 rounded-lg shadow-md bg-white/10">
        <h5>{{ market }}</h5>
        <p>${{ value.toFixed(2) }}</p>
        <span class="text-green-500">+{{ change.toFixed(2) }}%</span>
    </div>
</template>