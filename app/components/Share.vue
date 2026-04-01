<script setup>
 defineProps({
    status: String,
    index1: String,
    index2: String
})

</script>

<template>
    <div class="share-cont general-card">
        <p class="text-center text-xl mb-8">Mercados de Valores</p>
        <span class="text-lg">{{ status }}</span>
        <p class="text-lg my-8" :class="index1.value == 'open' ? 'text-green-500' : 'text-red-500'">Nasdaq: {{ index1 }}</p>
        <p class="text-lg" :class="index2.value == 'open' ? 'text-green-500' : 'text-red-500'">Dow Jones: {{ index2 }}</p>
    </div>
</template>