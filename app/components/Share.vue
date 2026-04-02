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
        <p class="text-lg my-8 text-blue-600">Nasdaq: {{ index1 }}</p>
        <p class="text-lg text-blue-600">Dow Jones: {{ index2 }}</p>
    </div>
</template>