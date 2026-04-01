<script setup>
    defineProps({title: String, article: String, source: String})
</script>

<template>
    <div class="news-card">
        <h2>{{ title }}</h2>
        <p>{{ article }}</p>
        <small>{{ source }}</small>
    </div>
</template>