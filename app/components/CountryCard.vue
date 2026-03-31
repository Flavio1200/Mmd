<script setup>
    defineProps({flag: String, name: String, capital: String, population: Number, region: String})
</script>

<template>
    <div class="country-card glass-card rounded-xl p-4 flex flex-col items-center gap-3 flex-1 min-w-[250px] max-w-[300px]">
        <img :src="flag" alt="Flag of {{ name }}" class="w-full h-32 object-cover rounded-lg">
        <h2 class="text-xl font-bold">{{ name }}</h2>
        <p><strong>Capital:</strong> {{ capital }}</p>
        <p><strong>Population:</strong> {{ population.toLocaleString() }}</p>
        <p><strong>Region:</strong> {{ region }}</p>
    </div>
</template>