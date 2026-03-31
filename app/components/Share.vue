<script setup>
 defineProps({
    share: {
        type: Number,
    }
})

</script>

<template>
    <div class="share-cont general-card">
        <p>Valor de las acciones</p>
        <span>{{ share }}</span>
        <p>Act por última vez a las xx:xx</p>
    </div>
</template>