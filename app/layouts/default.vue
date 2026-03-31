<script setup>
import Footer from '~/components/Footer.vue';
import Navbar from '~/components/Navbar.vue';

</script>

<template>
        <Navbar />
        <div class="w-full">
            <slot />
        </div>
        <Footer />
</template>